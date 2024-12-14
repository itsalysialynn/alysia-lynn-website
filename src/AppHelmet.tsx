import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import colors from './ui/atoms/colors';
import googleTagManager from './vendor/googleTagManager';

type SiteMetadata = {
  author: string;
  description: string;
  image: string;
  siteUrl: string;
  title: string;
  twitterImage: string;
};

type SiteQueryResult = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

const meta = (
  description: string,
  image: string,
  title: string,
  robotMetaContent: string,
  siteUrl: string,
  twitterImage: string,
  author: string,
) => [
  { content: colors.leaf, name: 'theme-color' },
  { content: siteUrl, name: 'twitter:url' },
  { content: '/browserconfig.xml', name: 'msapplication-config' },
  { content: title, property: 'og:site_name' },
  { content: 'summary', name: 'twitter:card' },
  { content: 'v_6Zz79WDK2YFfihNnw4GBmxrQ7hNOrrx8utRsMwb94', name: 'google-site-verification' },
  {
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no',
    name: 'viewport',
  },
  { content: description, name: 'description' },
  { content: description, name: 'twitter:description' },
  { content: description, property: 'og:description' },
  { content: twitterImage, name: 'twitter:image' },
  { content: image, property: 'og:image' },
  { content: robotMetaContent, name: 'robots' },
  { content: title, name: 'twitter:title' },
  { content: title, property: 'og:title' },
  { content: author, property: 'article:author' },

  { content: 'website', property: 'og:type' },
  { content: siteUrl, property: 'og:url' },
];

const link = [
  { href: '/icons/favicon-16x16.png', rel: 'icon', size: '16x16', type: 'image/png' },
  { href: '/icons/favicon-32x32.png', rel: 'icon', size: '32x32', type: 'image/png' },
  { href: '/icons/favicon-96x96.png', rel: 'icon', size: '96x96', type: 'image/png' },
  {
    href: '/icons/apple-touch-icon.png',
    rel: 'apple-touch-icon',
    size: '180x180',
    type: 'image/png',
  },
  {
    color: colors.galaxy,
    href: '/icons/safari-pinned-tab.png',
    rel: 'mask-icon',
  },
  { href: '/icons/favicon-16x16.png', rel: 'shortcut icon' },
  {
    as: 'font',
    crossorigin: 'anonymous',
    href: '/fonts/Inter.woff2',
    rel: 'preload',
    type: 'font/woff2',
  },
];

type AppHelmetProps = {
  description?: string | null;
  robotMetaContent?: string | null;
  schemaMarkup?: object;
  title?: string | null;
};

const AppHelmet = ({ description, robotMetaContent, schemaMarkup, title }: AppHelmetProps) => {
  const data = useStaticQuery<SiteQueryResult>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          twitterImage
          image
          author
        }
      }
    }
  `);

  const {
    author,
    description: defaultDescription,
    image,
    siteUrl,
    title: defaultTitle,
    twitterImage,
  } = data.site.siteMetadata;

  return (
    <Helmet
      bodyAttributes={{ class: 'sticky-header' }}
      htmlAttributes={{ lang: 'en' }}
      link={link}
      meta={meta(
        description ?? defaultDescription,
        image,
        title ?? defaultTitle,
        robotMetaContent ?? 'index, follow',
        siteUrl,
        twitterImage,
        author,
      )}
      title={title ?? defaultTitle}
    >
      {/* Google AdSense */}
      <script
        async
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9874368117841257"
      />
      {/* Google Tag Manager */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-4EFRB93JTC" />
      <script defer>{googleTagManager()}</script>
      {schemaMarkup && <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>}
    </Helmet>
  );
};

export default AppHelmet;
