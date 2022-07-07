import { useMediaQuery } from 'hooks/useMediaQuery';
import React, { createContext, ReactNode, useContext } from 'react';
import { breakpoints } from 'theme';
export type MediaContextType = {
  // lg: boolean;
  // md: boolean;
  sm: boolean;
  // xs: boolean;
};

export const MediaContext = createContext<MediaContextType>({
  // lg: false,
  // md: false,
  sm: false,
  // xs: false,
});

export default function MediaProvider({ children }: { children: ReactNode }) {
  // const lg = useMediaQuery(`(min-width: ${Breakpoints.lg}px)`);
  // const md = useMediaQuery(`(min-width: ${Breakpoints.md}px)`);
  const sm = useMediaQuery(`(min-width: ${breakpoints.sm}px)`);
  // const xs = useMediaQuery(`(min-width: ${Breakpoints.xs}px)`);

  return (
    <MediaContext.Provider
      value={{
        // lg,
        // md,
        sm,
        // xs,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
}

export const useMedia = (): MediaContextType => useContext(MediaContext);
