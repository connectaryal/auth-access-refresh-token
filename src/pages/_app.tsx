import "@/styles/globals.css";
import type { AppProps } from "next/app";
import ReduxProvider from "@/components/libs/redux-toolkit/reduxProvider";
import Cookies from "js-cookie";
import { http, poster } from "@/utils/helper/http.helper";

export default function App({ Component, pageProps }: AppProps) {
  const token = JSON.parse(Cookies.get('token') || '{}');
  http.defaults.headers.common['Authorization'] = token?.access_token ? `Bearer ${token.access_token}` : '';



  return (
    <ReduxProvider>
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
