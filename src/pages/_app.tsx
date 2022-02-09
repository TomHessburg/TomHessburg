import type { AppProps } from "next/app";
import "../../styles/foreground.css";
import "../../styles/noscroll.css";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
