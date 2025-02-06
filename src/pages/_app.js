import "@/styles/globals.css";
import "leaflet/dist/leaflet.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights />
      <Component {...pageProps} />
    </>
  );
}
