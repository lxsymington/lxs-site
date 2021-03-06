const autoprefixer = require(`autoprefixer`)
const cssnano = require(`cssnano`)

module.exports = {
  siteMetadata: {
    title: `Luke Xavier Symington`,
    description: `A Front-end Engineer's personal blog made up of posts about what I am working on or learning about. At the moment mostly CSS, TypeScript, Rust and Web Assembly with some basic WebGL thrown in.`,
    author: `@lxsymington`,
  },
  plugins: [
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve(`./src/components/layout/index.ts`),
        },
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-katex`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              tracedSVG: true,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /[.]inline[.]svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Luke Xavier Symington's Personal Site`,
        short_name: `LXS Site`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#EC7E09`,
        display: `minimal-ui`,
        icon: `src/assets/initials.inline.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-scss-typescript`,
      options: {
        postCssLoaderOptions: {
          plugins: [autoprefixer({ grid: `no-autoplace` }), cssnano({})],
        },
        sassLoaderOptions: {
          sourceMap: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
