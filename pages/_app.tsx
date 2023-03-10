import React from "react";
import { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import Head from "next/head";
import { wrapper, store } from "../store/store";
import { Provider } from "react-redux";
import "tailwindcss/tailwind.css";
import "/styles/Main.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ConfigProvider >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
