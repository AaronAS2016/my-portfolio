import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from 'styled-components'
import { themes } from '@as/styles'
import { Layout } from "./layout";
import Home from "./pages/Home";

export const Main = () => {
  return (
    <>
      <ThemeProvider theme={themes}>
        <Layout>
          <Router>
            <Home path="/" />
          </Router>
        </Layout>
      </ThemeProvider>
    </>
  );
};
