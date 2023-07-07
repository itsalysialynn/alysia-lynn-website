export const onRouteUpdate = () => {
  if (typeof window !== `undefined`) {
    window.scrollTo(0, 0);
  }
};

export const shouldUpdateScroll = () => false;
