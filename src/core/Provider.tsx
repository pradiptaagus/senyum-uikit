import React from 'react';

type Font = {
  fontFamily?: string;
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

type Fonts = {
  bold: Font;
  demiBold: Font;
  medium: Font;
  regular: Font;
  light: Font;
};

type Theme = {
  fonts: Fonts;
};

type ProviderProps = {
  children: React.ReactNode;
  theme?: Theme;
};

export const DefaultTheme: Theme = {
  fonts: {
    bold: {
      fontWeight: '700',
    },
    demiBold: {
      fontWeight: '600',
    },
    medium: {
      fontWeight: '500',
    },
    regular: {
      fontWeight: '400',
    },
    light: {
      fontWeight: '300',
    },
  },
};

export const ThemeContext = React.createContext(DefaultTheme);

const Provider = (props: ProviderProps) => {
  const { children, theme } = props;
  return (
    <ThemeContext.Provider value={theme || DefaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default Provider;
