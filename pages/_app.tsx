import { AppProps } from "next/app";
import "../styles/reset.scss";
import "../styles/main.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
