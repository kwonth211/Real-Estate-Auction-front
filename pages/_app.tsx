import React from "react";
import Page from "@/components/page";
import "antd/dist/antd.css";
function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

export default MyApp;
