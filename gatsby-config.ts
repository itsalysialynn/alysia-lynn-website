import type { GatsbyConfig } from 'gatsby';

import colors from './src/ui/atoms/colors';

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-image',
    {
      options: {
        background_color: '#FFFFFF',
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
    'gatsby-plugin-sharp',
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
    siteUrl: 'https://www.alysia-lynn.com',
    title: 'alysia-lynn',
  },
};

export default config;
