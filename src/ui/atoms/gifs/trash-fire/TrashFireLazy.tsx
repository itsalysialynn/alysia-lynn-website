import { lazy, Suspense, useEffect, useState } from 'react';

const TrashFire = lazy(() => import('./TrashFire'));

// Because this is a gif, Gatsby advises against using gatsby-plugin-image which is how we
// typically lazy load images in Gatsby. This component is a workaround that allows us to
// lazy load the gif for improved performance while still using an `img` tag.
// https://www.gatsbyjs.com/blog/performance-optimization-for-three-js-web-animations/
const TrashFireLazy = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <Suspense>
        <TrashFire />
      </Suspense>
    )
  );
};

export default TrashFireLazy;
