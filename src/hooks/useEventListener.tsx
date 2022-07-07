import { useEffect, useRef } from 'react';

export const useEventListener = (
  type: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  callback: (e: any) => void,
  element: MediaQueryList | Window | undefined = window
): void => {
  const callbackRef = useRef<(e: Event) => void>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: Event) => callbackRef.current(e);
    element.addEventListener(type, handler);

    return () => element.removeEventListener(type, handler);
  }, [element, type]);
};
