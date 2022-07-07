import { useEventListener } from 'hooks/useEventListener';
import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string): boolean => {
  const [match, setMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList>();

  useEffect(() => {
    const list = window.matchMedia(query);
    setMediaQueryList(list);
    setMatch(list.matches);
  }, [query]);

  useEventListener(
    'change',
    (e: MediaQueryList) => setMatch(e.matches),
    mediaQueryList
  );

  return match;
};
