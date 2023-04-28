import React from "react";
import { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import Head from "next/head";
import { Provider } from "react-redux";
import { wrapper } from '../store/store'
import "tailwindcss/tailwind.css";
import "/styles/Main.scss";
function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ConfigProvider >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
        </Head>
        <Component {...props.pageProps} />
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
