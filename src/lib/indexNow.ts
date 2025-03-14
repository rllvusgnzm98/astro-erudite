import fs from 'fs';
import path from 'path';
import type { AstroIntegration } from 'astro';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

export default function indexNow(): AstroIntegration {
  const apiKey = process.env.INDEXNOW_API_KEY;
  
  if (!apiKey) {
    console.warn('未找到INDEXNOW_API_KEY环境变量，IndexNow集成将不会启用');
    return {
      name: 'indexnow-integration',
      hooks: {},
    };
  }

  return {
    name: 'indexnow-integration',
    hooks: {
      'astro:build:done': async ({ dir, pages }) => {
        try {
          // 增加更多调试信息
          console.log('构建输出目录对象:', dir);
          console.log('构建输出目录字符串:', dir.toString());
          
          // 直接使用dist目录
          const outputDir = path.resolve(process.cwd(), 'dist');
          console.log('使用的输出目录路径:', outputDir);
          
          // 创建与API密钥同名的txt文件
          const keyFilePath = path.join(outputDir, `${apiKey}.txt`);
          
          // 确保目录存在
          if (!fs.existsSync(outputDir)) {
            console.log('创建输出目录:', outputDir);
            fs.mkdirSync(outputDir, { recursive: true });
          }
          
          // 写入文件
          fs.writeFileSync(keyFilePath, apiKey);
          console.log(`已创建IndexNow验证文件: ${keyFilePath}`);
          
          // 收集所有博客页面URL
          const siteUrl = 'https://blog.0xd00.com';
          const blogUrls = pages
            .filter(page => page.pathname.startsWith('blog/') || page.pathname.includes('/blog/'))
            .map(page => `${siteUrl}/${page.pathname}`);

          if (blogUrls.length > 0) {
            try {
              // 提交URL到IndexNow
              const response = await fetch(`https://api.indexnow.org/indexnow`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  host: new URL(siteUrl).hostname,
                  key: apiKey,
                  urlList: blogUrls,
                }),
              });

              if (response.ok) {
                console.log(`成功提交${blogUrls.length}个URL到IndexNow`);
              } else {
                console.error(`提交到IndexNow失败: ${response.statusText}`);
              }
            } catch (error) {
              console.error('提交到IndexNow时出错:', error);
            }
          } else {
            console.log('未找到博客页面URL，跳过IndexNow提交');
          }
        } catch (error) {
          console.error('IndexNow集成错误:', error);
        }
      },
    },
  };
} 