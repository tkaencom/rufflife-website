//media.js

import { useState, useCallback, useEffect } from 'react';

export const sizes = {
  desktop: 1024,
  tablet: 768,
  mobile: 300 // default
}

export const device = {
  desktop: `@media only screen and (min-width: ${sizes.desktop}px)`,
  tablet: `@media only screen and (min-width: ${sizes.tablet}px) and (max-width: ${sizes.desktop -1 }px)`,
  mobile: `@media only screen and (min-width: ${sizes.mobile}px) and (max-width: ${sizes.tablet -1 }px)`,

}


export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e: any) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};