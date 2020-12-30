import React from "react";
import Page from "@/components/page";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import store from "@/components/store/store";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </Provider>
  );
}

export default MyApp;
