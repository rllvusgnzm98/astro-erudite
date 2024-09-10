# Astro-Micro-Academics

[![Badge with Logo](https://img.shields.io/badge/Astro-Page-blue)
](https://astro.build/themes/details/astro-micro-academics)
[![Badge with Logo](https://img.shields.io/badge/Live-Demo-cyan)](https://astro-micro-academic.vercel.app/)

Astro Micro Academic is an academic version of [Astro-Micro](https://github.com/trevortylerlee/astro-micro) and [Nano](https://astro-nano-demo.vercel.app/).
It is tailored for researchers.

Micro Academics adds features like tags, and blog math support and also inherits [Pagefind](https://pagefind.app/) for search, [Giscus](https://giscus.app/) for comments, from Astro Micro.

Micro Academics still comes with everything great about Micro and Nano — full type safety, a sitemap, an RSS feed, and Markdown + MDX support. Styled with TailwindCSS and preconfigured with system, light, and dark themes.

## News

✨ I've got a detailed blog about building and deploying your website using this template! Check it out [here](https://jingwu2121.github.io/blog/01-build-deploy-website/)

## Install Astro-Micro-Academics

Clone the [repository](https://github.com/jingwu2121/astro-micro-academic).

```sh
git clone https://github.com/jingwu2121/astro-micro-academic.git
```

```sh
cd astro-micro-academic
```

```sh
npm i
```

Run local server

```sh
npm run dev
```

## Update the Homepage

Update your home page in `src/pages/index.astro`.

## CV & About

Update your CV and About page in `src/pages/cv.astro` and `src/pages/about.astro`.

```ts
const works = [
  {
    company: 'Company A',
    time: '2022-Present',
    job_title: 'Research Scientist',
    location: 'London, UK',
    description: 'Your Notes about the job',
  },
  {
    company: 'Company A',
    time: '2022-Present',
    job_title: 'Research Scientist',
    location: 'London, UK',
    description: 'Your Notes about the job',
  },
]
const educations = [
  {
    school: 'University 1',
    time: '2022-Present',
    job_title: 'BEng in Electronic Information Engineering',
    location: 'London, UK',
    description: 'Your Notes about the study',
  },
]
```

## Social Links

Update the social links in `src/components/SocialIcons.astro`, simply replace the `URL`.

## Publications metadata

Metadata is required for each post. Add a new `publication.md` to automartically add a publication on the website. Publications are sorted by date.

```astro
---
title: 'Diffusion Models Beat GANs on Image Synthesis'
description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias earum quod quo repellat blanditiis est iste eos dolorem! Voluptatibus corporis totam sed unde est iusto neque iure natus adipisci omnis.'
date: '2024-07-26'
authors: 'John B*, Jon A*, Frank C, John B, Jon A, Frank C'
paperURL: 'Paper: https://astro-sphere-demo.vercel.app'
codeURL: 'Code: '
webURL: 'Web: https://github.com/markhorn-dev/astro-sphere'
dataURL: 'Data: https://github.com/markhorn-dev/astro-sphere'
img: '/rupert-cat.gif'
imgAlt: 'Paper Teaser'
pub: 'ECCV2024'
---
```

| Field                              | Req | Type   | Remarks                                                                                                          |
| :--------------------------------- | :-- | :----- | :--------------------------------------------------------------------------------------------------------------- |
| title                              | Yes | string | Title of the content. Used in SEO and RSS.                                                                       |
| description                        | Yes | string | Description of the content. Used in SEO and RSS.                                                                 |
| date                               | Yes | string | Must be a valid date string (able to be parsed).                                                                 |
| authors                            | Yes | string | A string seperated by comma.                                                                                     |
| paperURL, codeURL, webURL, dataURL | Yes | string | A string seperated by ": ". If you don't have a link to add, leave the link part blank, e.g. `codeURL: "Code: "` |
| img                                | Yes | string | Path to teaser image.                                                                                            |
| imgAlt                             | Yes | string | Description of the image.                                                                                        |
| pub                                | Yes | string | The conference or journal                                                                                        |

## Blog metadata

Metadata is required for each post.

```astro
---
title: 'Blog Collection'
description: 'How to add posts to the blog.'
date: '2024-03-21'
tags: ['guide', 'tutorial']
draft: false
---
```

| Field       | Req | Type    | Remarks                                          |
| :---------- | :-- | :------ | :----------------------------------------------- |
| title       | Yes | string  | Title of the content. Used in SEO and RSS.       |
| description | Yes | string  | Description of the content. Used in SEO and RSS. |
| date        | Yes | string  | Must be a valid date string (able to be parsed). |
| tags        | Yes | list    | A list of strings                                |
| draft       | No  | boolean | If draft: true, content will not be published.   |

## Customize the website metadata and set up RSS

To change the website metadata, edit `src/consts.ts`.

```ts
// src/consts.ts

export const SITE: Site = {
  TITLE: 'Astro Micro Academics',
  DESCRIPTION: 'Astro Micro Academics is for academic user.',
  EMAIL: 'youremial@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 2,
  NUM_PUBLICATIONS_ON_HOMEPAGE: 3,
  SITEURL: 'https://astro-micro-academic.vercel.app', // Update here to link the RSS icon to your website RSS
}
```

| Field            | Req | Description                                          |
| :--------------- | :-- | :--------------------------------------------------- |
| TITLE            | Yes | Displayed in header and footer. Used in SEO and RSS. |
| DESCRIPTION      | Yes | Used in SEO and RSS.                                 |
| EMAIL            | Yes | Displayed in contact section.                        |
| NUM_POSTS        | Yes | Limit number of posts on home page.                  |
| NUM_PUBLICATIONS | Yes | Limit number of research on home page.               |
| SITEURL          | Yes | Your website URL                                     |

### RSS Post

Please tag the post of RSS feed with tag `"rss-feed"`, other posts are not included in the RSS.

---

## Custom metadata for highlighted author in your paper

```ts
// src/consts.ts

export const HIGHLIGHTAUTHOR = 'John B'
```

## Customize metadata for individual pages

```ts
// src/consts.ts

export const HOME: Metadata = {
  TITLE: 'Home',
  DESCRIPTION: 'Astro Micro is an accessible theme for Astro.',
}

export const BLOG: Metadata = {
  TITLE: 'Blog',
  DESCRIPTION: 'A collection of articles on topics I am passionate about.',
}

export const RESEARCH: Metadata = {
  TITLE: 'Publications',
  DESCRIPTION:
    'A collection of my publications with links to paper, repositories and live demos.',
}

export const CV: Metadata = {
  TITLE: 'CV',
  DESCRIPTION: 'your cv',
}

export const TAGS: Metadata = {
  TITLE: 'TAGS',
  DESCRIPTION: 'blog tag filter',
}

export const ABOUT: Metadata = {
  TITLE: 'ABOUT',
  DESCRIPTION: 'A self-intro',
}
```

| Field       | Req | Description                                    |
| :---------- | :-- | :--------------------------------------------- |
| TITLE       | Yes | Displayed in browser tab. Used in SEO and RSS. |
| DESCRIPTION | Yes | Used in SEO and RSS.                           |
