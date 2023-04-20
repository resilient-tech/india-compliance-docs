# India Compliance App Documentation

Welcome to the India Compliance App documentation! This documentation includes tutorials, guides, and reference material for using the app.

## Folder Structure

The India Compliance App repository has the following folder structure:

```md
pages
│
├── .vitepress
│   └── config.js
│
├── blog
│   ├── authors
│   │   └── *.md
│   └── posts
│       └── *.md
│
└── docs
    └── topics
        |── *.md
		└── assets
			└── *.png
```

- The `pages` folder contains the source code for the documentation site.
- The `docs` folder contains the Markdown files for the documentation topics.
- The `assets` folder within `docs` folder contains images or gif used for documentation.
- The `blog` folder contains the Markdown files for blog posts.
- The `authors` folder within `blog` contains Markdown files for author information.

## Adding Documentation

To add documentation, create a new Markdown (.md) file in the appropriate directory for the topic:

```sh
pages/docs/topics/*.md
```

Then, add the file to the sidebar configuration in `.vitepress/config.js` using the Vitepress sidebar syntax. For example:

```js
module.exports = {
  themeConfig: {
    sidebar: [
      {
        text: 'Topics',
        children: [
          '/docs/topics/introduction.md',
          '/docs/topics/getting-started.md',
          // Add new topics here
        ],
      },
    ],
  },
};
```

For more help see the [Vitepress documentation](https://vitepress.dev/).

## Creating Blog Posts

To create a blog post, create a new Markdown file in the appropriate directory:

```sh
pages/blog/posts/*.md
```

Include blog information at the beginning of the file using the following format:

```
---
date: 2023-03-31
title: Blog Title
category: Tutorial
author: Author Name
description: Short Description of blog.
tags:
- Tag 1
- Tag 2
---

Start your blog here
```

The post's date, title, category, author, and description should be replaced with the appropriate values. You can also include tags to help organize and find the post.

## Creating Author for Blog Posts

To create a author post, create a new Markdown file in the appropriate directory:

```sh
pages/blog/authors/*.md
```

Include author information at the beginning of the file using the following format:

```md
---
author: {
  name: Author Name,
  avatar: https://example.com/avatar.png,
}
---

<AuthorDetail>
  
  ## Author Name
  
  Description of author and their expertise.
  
  [Github Link](https://github.com/example)
  
</AuthorDetail>

```

## License

The India Compliance Documentation is licensed under the [GNU General Public License v3.0](https://github.com/resilient-tech/india-compliance-docs/blob/main/LICENSE).