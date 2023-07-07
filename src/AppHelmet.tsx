import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Script, useStaticQuery } from 'gatsby';

export const normalizePath = (path) => {
  let normalizedPath = path;

  // Add leading slash if not present
  if (!/^\//.test(normalizedPath)) {
    normalizedPath = `/${normalizedPath}`;
  }

  // Add trailing slash if not present
  if (!/\/$/.test(normalizedPath)) {
    normalizedPath = `${normalizedPath}/`;
  }

  return normalizedPath;
};

const meta = (
  description: string,
  image: string,
  title: string,
  robotMetaContent: string,
  author: string,
) => [
  { content: '#000000', name: 'theme-color' },
  { content: '', name: 'msapplication-config' },
  { content: '//alysia-lynn.com/', name: 'twitter:url' },
  { content: '/browserconfig.xml', name: 'msapplication-config' },
  { content: 'Plant Co.', property: 'og:site_name' },
  { content: 'lmkytwedo0gtph86853ussgdc8rae2', name: 'facebook-domain-verification' },
  { content: 'summary_large_image', name: 'twitter:card' },
  { content: 'v_6Zz79WDK2YFfihNnw4GBmxrQ7hNOrrx8utRsMwb94', name: 'google-site-verification' },
  {
    content: 'width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no',
    name: 'viewport',
  },
  { content: description, name: 'description' },
  { content: description, name: 'twitter:description' },
  { content: description, property: 'og:description' },
  { content: image, name: 'twitter:image' },
  { content: image, property: 'og:image' },
  { content: robotMetaContent, name: 'robots' },
  { content: title, name: 'twitter:title' },
  { content: title, property: 'og:title' },
  { content: author, property: 'article:author' },
];

// DO THESE NEXT
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
    color: '#098b8c',
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
  description?: string | undefined | null;
  title?: string | undefined | null;
  robotMetaContent?: string | undefined | null;
  schemaMarkup?: object;
  author?: string | undefined | null;
};

const AppHelmet = ({
  description,
  title,
  robotMetaContent,
  schemaMarkup,
  author,
}: AppHelmetProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
        }
      }
    }
  `);

  const { title: defaultTitle, description: defaultDescription, image } = data.site.siteMetadata;

  return (
    <Helmet
      bodyAttributes={{ class: 'sticky-header' }}
      htmlAttributes={{ lang: 'en' }}
      link={link}
      meta={meta(
        description || defaultDescription,
        image,
        title || defaultTitle,
        robotMetaContent || 'index, follow',
        author || 'Alysia Lynn',
      )}
      title={title || 'Alysia Lynn'}
    >
      {/* Google AdSense */}
      <Script
        async
        crossOrigin="anonymous"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9874368117841257"
      />
      {/* Google Tag Manager */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4EFRB93JTC" />
      {schemaMarkup && <Script type="application/ld+json">{JSON.stringify(schemaMarkup)}</Script>}
    </Helmet>
  );
};

AppHelmet.defaultProps = {
  author: undefined,
  description: undefined,
  robotMetaContent: undefined,
  schemaMarkup: undefined,
  title: undefined,
};

export default AppHelmet;
