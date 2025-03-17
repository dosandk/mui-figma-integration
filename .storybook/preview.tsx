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
    backgrounds: {
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#333' },
      ],
    },
    docs: {
      toc: {
        title: 'Table of Contents',
      }
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
    // TODO: temp commented
    // (Story) => {
    //   return (<div className="riba"><Story /></div>);
    // }
  ],
};

export default preview;
