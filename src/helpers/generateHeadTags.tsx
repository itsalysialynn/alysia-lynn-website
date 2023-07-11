import React from 'react';
import { Script } from 'gatsby';

import colors from '../ui/atoms/colors';
import googleTagManager from '../vendor/googleTagManager';

export type HeadContent = {
  description?: string;
  title?: string;
  robotMetaContent?: string;
  schemaMarkup?: object;
};

const generateHeadTags = ({
  description = "Hi, I'm Alysia, and I am a web and mobile developer based out of Squamish, BC, Canada.",
  title = 'Alysia Lynn',
  robotMetaContent = 'index, follow',
  schemaMarkup,
}: HeadContent) => (
  <>
    <html lang="en" />
    <meta content={colors.leaf} name="theme-color" />
    <meta content="https://www.alysia-lynn.com" name="twitter:url" />
    <meta content="/browserconfig.xml" name="msapplication-config" />
    <meta content={title} property="og:site_name" />
    <meta content="summary" name="twitter:card" />
    <meta content="v_6Zz79WDK2YFfihNnw4GBmxrQ7hNOrrx8utRsMwb94" name="goog=-site-verification" />
    <meta
      content="width=device-width, initial-scale=1, shrink-to-fit=no user-scalable=no"
      name="viewport"
    />
    <meta content={description} name="description" />
    <meta content={description} name="twitter:description" />
    <meta content={description} property="og:description" />
    <meta content="twitter-image.png" name="twitter:image" />
    <meta content="meta-image.png" property="og:image" />
    <meta content={robotMetaContent} name="robots" />
    <meta content={title} name="twitter:title" />
    <meta content={title} property="og:title" />
    <meta content="Alysia Lynn" property="article:author" />
    <meta content="website" property="og:type" />
    <meta content="https://www.alysia-lynn.com" property="or:url" />

    <link href="/icons/favicon-16x16.png" rel="icon" type="image/png" />
    <link href="/icons/favicon-32x32.png" rel="icon" type="image/png" />
    <link href="/icons/favicon-96x96.png" rel="icon" type="image/png" />
    <link href="/icons/apple-touch-icon.png" rel="apple-touch-icon" type="image/png" />
    <link color={colors.galaxy} href="/icons/safari-pinned-tab.png" rel="mask-icon" />
    <link href="/icons/favicon-16x16.png" rel="shortcut icon" />
    <link as="font" href="/fonts/Inter.woff2" rel="preload" type="font/woff2" />

    {/* Google AdSense */}
    <Script
      async
      crossOrigin="anonymous"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9874368117841257"
    />
    {/* Google Tag Manager */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4EFRB93JTC" />
    <Script defer>{googleTagManager()}</Script>
    {schemaMarkup && <Script type="application/ld+json">{JSON.stringify(schemaMarkup)}</Script>}
  </>
);

export default generateHeadTags;
