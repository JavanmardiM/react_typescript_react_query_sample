import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

type MaterialThemeProviderProps = {
  children: ReactNode;
};

const theme = createTheme();

const MaterialThemeProvider: React.FC<MaterialThemeProviderProps> = (props) => {
  const { children } = props;

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default MaterialThemeProvider;
