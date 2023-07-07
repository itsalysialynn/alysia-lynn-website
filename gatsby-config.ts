import type { GatsbyConfig } from 'gatsby';

import colors from './src/ui/atoms/colors';

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-image',
    {
      options: {
        background_color: colors.white,
        display: 'standalone',
        icon: 'src/images/favicon.ico',
        name: 'Alysia Lynn',
        start_url: '/',
        theme_color: colors.grape,
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-plugin-mdx',
    'gatsby-plugin-react-helmet',
    {
      options: {
        defaults: {
          placeholder: 'none',
        },
      },
      resolve: 'gatsby-plugin-sharp',
    },
    'gatsby-plugin-sitemap',
    {
      __key: 'images',
      options: {
        name: 'images',
        path: './src/images/',
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      __key: 'pages',

      options: {
        name: 'pages',
        path: './src/pages/',
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-plugin-styled-components',
    {
      options: {
        plugins: ['gatsby-remark-emoji'],
      },
      resolve: 'gatsby-transformer-remark',
    },
    'gatsby-transformer-sharp',
    {
      options: {
        offset: -75,
      },
      resolve: 'gatsby-plugin-anchor-links',
    },
    {
      options: {
        devMode: true,
      },
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
    },
  ],
  siteMetadata: {
    author: 'Alysia Lynn',
    description:
      "Hi, I'm Alysia, and I am a web and mobile developer based out of Squamish, BC, Canada.",
    image: 'meta-image.png',
    siteUrl: 'https://www.alysia-lynn.com',
    title: 'Alysia Lynn',
    twitterImage: 'twitter-image.png',
  },
};

export default config;
