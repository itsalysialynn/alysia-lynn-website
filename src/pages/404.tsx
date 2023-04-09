import React from 'react';
import { HeadFC, Link, PageProps } from 'gatsby';

const NotFoundPage: React.FC<PageProps> = () => (
  <main>
    <h1>Page not found</h1>
    <p>
      Sorry 😔, we couldn’t find what you were looking for.
      <Link to="/">Go home</Link>.
    </p>
  </main>
);

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
