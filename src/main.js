import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, mainTheme } from '@as/styles'
import { Layout } from "./layout";
import Home from "./pages/Home";
import { useDarkMode } from "./utils/useDarkMode";


export const Main = () => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
    <>
      <ThemeProvider theme={{...themeMode, ...mainTheme }}>
        <Layout toggleTheme={toggleTheme}>
          <Router>
            <Home path="/" />
          </Router>
        </Layout>
      </ThemeProvider>
    </>
  );
};
