import Header from "@/components/header";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps,mySession }) {
  return (
    <>
    <SessionProvider session={mySession}>
      <Header />
      <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
