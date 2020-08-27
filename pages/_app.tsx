import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { appWithTranslation } from "../i18n";
import App from "next/app";
import { AppProps } from "next/app";

const LearnrApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

LearnrApp.getInitialProps = async (appContext: any) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(LearnrApp);
