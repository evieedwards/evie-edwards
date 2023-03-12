import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="p-4 text-2xl font-medium">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
