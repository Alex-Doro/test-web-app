import { AppProps } from "next/app";
import "normalize.css/normalize.css";
import "../styles/main.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
