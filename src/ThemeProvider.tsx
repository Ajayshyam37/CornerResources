// ThemeProvider.tsx

import React, { createContext, useContext } from 'react';
import { theme } from './theme';

interface ThemeContextType {
  theme: typeof theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context.theme;
};

export const ThemeProvider: React.FC = ({ children }) => {
  return <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>;
};
