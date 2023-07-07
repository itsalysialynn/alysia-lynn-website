import type { GatsbyConfig } from 'gatsby';
import colors from './src/ui/atoms/colors';

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    {
      options: {
        enableWebVitalsTracking: true,
        head: true,
        trackingId: 'G-PKP2VXCGDL',
      },
      resolve: 'gatsby-plugin-google-analytics',
    },
    {
      options: {
        id: '3426616',
        includeInDevelopment: true, // optional parameter to include script in development
        sv: 6,
      },
      resolve: 'gatsby-plugin-hotjar',
    },
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
  ],
  siteMetadata: {
    siteUrl: 'https://www.alysia-lynn.com',
    title: 'alysia-lynn',
  },
};

export default config;
