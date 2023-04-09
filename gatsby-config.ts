import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "alysia-lynn",
    siteUrl: "https://www.alysia-lynn.com",
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        enableWebVitalsTracking: true,
        head: true,
        trackingId: "G-PKP2VXCGDL",
      },
    },
    {
      resolve: "gatsby-plugin-hotjar",
      options: {
        id: "3426616",
        includeInDevelopment: true, // optional parameter to include script in development
        sv: 6,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        background_color: "#FFFFFF",
        display: "standalone",
        name: "Alysia Lynn",
        start_url: "/",
        theme_color: "#6E00FF",
        icon: `src/images/icon.png`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-next-seo",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        display: "swap",
        fonts: ["barlow:300,400,500,600,700"],
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-styled-components",
    "gatsby-transformer-sharp",
  ],
};

export default config;
