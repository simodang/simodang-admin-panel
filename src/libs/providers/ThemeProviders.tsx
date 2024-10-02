"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

const ThemeProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
      enableColorScheme
    >
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviders;
