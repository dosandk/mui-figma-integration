import type { Preview, ReactRenderer } from '@storybook/react'

import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { eleksTheme } from './eleks-theme';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider<ReactRenderer>({
      themes: {
        light: {},
        dark: {},
        green: {},
        eleks: eleksTheme,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: CssBaseline,
    }),
  ],
};

export default preview;
