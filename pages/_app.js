import "@/styles/globals.css";

import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
