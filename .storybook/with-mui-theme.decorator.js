import { useMemo } from "react";
// import { CssBaseline, ThemeProvider } from "@mui/material";

import { CssVarsProvider, extendTheme, ThemeProvider } from "@mui/joy/styles";

import { themes } from "../src/themes";
import { CssBaseline } from "@mui/joy";

const CastleryTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          // mainChannel: {},

          plainColor: "#4A4A4A",
          // plainBg: undefined,
          // plainBorder: "",

          // hover state
          plainHoverColor: "rgba(0, 146, 204, 1)",
          plainHoverBorder: "",
          plainHoverBg: "",
          // active state
          plainActiveColor: "",
          plainActiveBorder: "",
          plainActiveBg: "",
          // // disabled state
          plainDisabledColor: "rgba(146, 146, 146, 1)",
          plainDisabledBorder: "rgba(146, 146, 146, 1)",
          plainDisabledBg: "",

          outlinedColor: "rgba(193, 175, 134, 1)",
          outlinedBorder: "rgba(193, 175, 134, 1)",
          // outlinedBg: "",

          // hover state
          outlinedHoverColor: "rgba(179, 157, 107, 1)",
          outlinedHoverBorder: "rgba(179, 157, 107, 1)",
          outlinedHoverBg: "#F9F7F3",
          // active state
          outlinedActiveColor: "#B39D6B",
          outlinedActiveBorder: "#B39D6B",
          outlinedActiveBg: "rgba(230, 223, 207, 1)",
          // disabled state
          outlinedDisabledColor: "rgba(146, 146, 146, 1)",
          outlinedDisabledBorder: "rgba(146, 146, 146, 1)",
          outlinedDisabledBg: "rgba(233, 233, 233, 1)",

          // softColor: "",
          // softBorder: "",
          // softBg: "",
          // hover state
          // softHoverColor: "",
          // softHoverBorder: "",
          // softHoverBg: "",
          // active state
          // softActiveColor: "",
          // softActiveBorder: "",
          // softActiveBg: "",
          // disabled state
          // softDisabledColor: "",
          // softDisabledBorder: "",
          // softDisabledBg: "",

          // solidColor: "",
          solidBg: "#A45B37",
          // solidBorder: "",
          // hover state
          // solidHoverColor: "",
          solidHoverBg: "#C36A3E",
          // solidHoverBorder: "",
          // active state
          // solidActiveColor: "",
          solidActiveBg: "#8A4C2E",
          // solidActiveBorder: "",

          // disabled state
          solidDisabledColor: "rgba(146, 146, 146, 1)",
          // solidDisabledBorder: "rgba(146, 146, 146, 1)",
          solidDisabledBg: "rgba(233, 233, 233, 1)",
        },
        neutral: {
          outlinedBg: "#fff",
          outlinedColor: "#201F1E",
          outlinedDisabledBg: "#F3F2F1",
          outlinedDisabledColor: "#A19F9D",
          outlinedDisabledBorder: "#C8C6C4",
          outlinedBorder: "#8A8886",
          outlinedHoverBg: "#F3F2F1",
          outlinedHoverBorder: undefined,
          outlinedActiveBg: "#EDEBE9",

          // plainColor: "",
          // plainBg: "",
          // plainBorder: "",
          // // hover state
          // plainHoverColor: "",
          // plainHoverBorder: "",
          // plainHoverBg: "",
          // // active state
          // plainActiveColor: "",
          // plainActiveBorder: "",
          // plainActiveBg: "",
          // // disabled state
          // plainDisabledColor: "",
          // plainDisabledBorder: "",
          // plainDisabledBg: "",

          // outlinedColor: "",
          // outlinedBorder: "",
          // outlinedBg: "",
          // // hover state
          // outlinedHoverColor: "",
          // outlinedHoverBorder: "",
          // outlinedHoverBg: "",
          // // active state
          // outlinedActiveColor: "",
          // outlinedActiveBorder: "",
          // outlinedActiveBg: "",
          // // disabled state
          // outlinedDisabledColor: "",
          // outlinedDisabledBorder: "",
          // outlinedDisabledBg: "",

          // softColor: "",
          // softBorder: "",
          // softBg: "",
          // // hover state
          // softHoverColor: "",
          // softHoverBorder: "",
          // softHoverBg: "",
          // // active state
          // softActiveColor: "",
          // softActiveBorder: "",
          // softActiveBg: "",
          // // disabled state
          // softDisabledColor: "",
          // softDisabledBorder: "",
          // softDisabledBg: "",

          // solidColor: "",
          // solidBg: "",
          // solidBorder: "",
          // // hover state
          // solidHoverColor: "",
          // solidHoverBg: "",
          // solidHoverBorder: "",
          // // active state
          // solidActiveColor: "",
          // solidActiveBg: "",
          // solidActiveBorder: "",
          // // disabled state
          // solidDisabledColor: "",
          // solidDisabledBg: "",
          // solidDisabledBorder: "",
        },
        common: {},
        // focusVisible: {},
      },
    },
    dark: {},
  },
  focus: {
    default: {
      outlineOffset: "4px",
      outlineColor: "rgba(0, 175, 245, 1)",
      outlineBorder: "2px",
    },
  },
  fontFamily: {
    body: '"Segoe UI Variable", var(--fluent-fontFamily-fallback)',
  },
  fontWeight: {
    xs: 200,
    sm: 300,
    md: 500,
    lg: 700,
    xl: 800,
  },
  typography: {
    // display1: undefined,
    // display2: undefined,

    h1: { fontSize: "41px", fontFamily: "Minerva Modern" }, // 28px
    h2: { fontSize: "32px", fontFamily: "MinervaModern" }, // 24px
    h3: "28px", // 18px
    h4: "14px", // 12px
    h5: undefined,
    h6: undefined,

    subh1: {
      fontSize: "18px",
      fontWeight: "var(--joy-fontWeight-md)",
      // CSS selector is also supported!
      "& + p": {
        marginTop: "4px",
      },
    },
    subh2: {
      fontSize: "16px",
    },
    subh3: {
      fontSize: "14px",
    },

    body1: "18px",
    body2: "16px",
    body3: undefined,
    body4: undefined,
    body5: undefined,

    caption1: {
      fontSize: "12px",
      lineHeight: "16px",
    },
    caption2: {
      fontSize: "11px",
      lineHeight: "13px",
    },
  },
  radius: {
    md: "0",
    lg: "0",
    sm: "0",
    xl: "0",
    xs: "0",
  },
  variants: {
    solid: {
      primary: {
        "&:focus": {
          outlinedBorder: "red",
        },
      },
    },
    solidActive: {
      primary: {
        "&:hover": {
          boxShadow: "0 2px 8px 0 rgba(0,0,0,0.4)",
        },
      },
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          // "--Button-iconOffsetStep": 0,
          "&.Mui-focusVisible, &:focus-visible": {
            // outlineOffset: "4px",
            // outlineColor: "rgba(0, 175, 245, 1)",
            // outlineBorder: "2px",
          },
          ...(ownerState.variant === "plain" && {
            "&.Mui-focusVisible, &:focus-visible": {
              outlineOffset: "-3px",
              outlineColor: "#fff",
            },
            // }),
            // ...(ownerState.variant === "outlined" && {
            //   "&.Mui-focusVisible, &:focus-visible": {
            //     outlineOffset: "-3px",
            //   },
            // }),
            // ...(ownerState.size === "md" && {
            //   "--Icon-fontSize": "20px",
            //   fontSize: "14px",
            //   // fontWeight: 600,
            // minHeight: "48px",
            //   // borderRadius: "0",
            //   paddingLeft: 20,
            //   paddingRight: 20,
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
    <CssVarsProvider theme={CastleryTheme}>
      <CssBaseline />
      <Story />
    </CssVarsProvider>
  );
};
