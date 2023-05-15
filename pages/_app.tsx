import { AppProps } from "next/app";
import "../styles/reset.scss";
import "../styles/main.scss";
import { wrapper } from "@/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { store } = wrapper.useWrappedStore(pageProps);
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
};

export default MyApp;
