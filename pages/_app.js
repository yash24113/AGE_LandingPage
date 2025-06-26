import "../styles/globals.css";
import AnalyticsScripts from "../component/AnalyticsScripts";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnalyticsScripts />
      <Component {...pageProps} />
    </>
  );
}
