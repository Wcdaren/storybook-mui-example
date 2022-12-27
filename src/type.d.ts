// You can put this to any file that's included in your tsconfig
declare module "@mui/joy/styles" {
  interface TypographySystemOverrides {
    display1: false;
    display2: false;

    h5: false;
    h6: false;

    body3: false;
    body4: false;
    body5: false;
    
    subh1: true;
    subh2: true;
    subh3: true;
  }
}
