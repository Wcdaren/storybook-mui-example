import { useMemo } from "react";
// import { CssBaseline, ThemeProvider } from "@mui/material";

import { CssVarsProvider, extendTheme, ThemeProvider } from "@mui/joy/styles";

import { themes } from "../src/themes";
import { CssBaseline } from "@mui/joy";


const fluentTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          solidBg: '#0078D4',
          solidHoverBg: '#106EBE',
          solidActiveBg: '#005A9E',
          solidDisabledBg: '#F3F2F1',
          solidDisabledColor: '#A19F9D',
        },
        neutral: {
          outlinedBg: '#fff',
          outlinedColor: '#201F1E',
          outlinedDisabledBg: '#F3F2F1',
          outlinedDisabledColor: '#A19F9D',
          outlinedDisabledBorder: '#C8C6C4',
          outlinedBorder: '#8A8886',
          outlinedHoverBg: '#F3F2F1',
          outlinedHoverBorder: undefined,
          outlinedActiveBg: '#EDEBE9',
        },
        focusVisible: '#323130',
      },
    },
  },
  focus: {
    default: {
      outlineOffset: -1,
      outlineWidth: '1px',
    },
  },
  fontFamily: {
    body: '"Segoe UI Variable", var(--fluent-fontFamily-fallback)',
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          '--Button-iconOffsetStep': 0,
          ...(ownerState.variant === 'solid' && {
            '&.Mui-focusVisible, &:focus-visible': {
              outlineOffset: '-3px',
              outlineColor: '#fff',
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            '&.Mui-focusVisible, &:focus-visible': {
              outlineOffset: '-3px',
            },
          }),
          ...(ownerState.size === 'md' && {
            '--Icon-fontSize': '20px',
            fontSize: '14px',
            fontWeight: 600,
            minHeight: '32px',
            borderRadius: '2px',
            paddingLeft: 20,
            paddingRight: 20,
          }),
        }),
      },
    },
  },
});


export const withMuiTheme = (Story, context) => {
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => themes[themeKey] || themes["light"], [themeKey]);

  return (
    <CssVarsProvider
    theme={fluentTheme}
    >
      <CssBaseline />
      <Story />
    </CssVarsProvider>
  );
};
