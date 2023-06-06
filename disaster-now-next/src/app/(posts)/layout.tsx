/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Script from "next/script";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="h-screen">{children}</main>
      <Footer />
      <Script
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=f7826b3b18715f0aa657dd18239a0e5f&libraries=services,clusterer&autoload=false"
        strategy="beforeInteractive"
      />
    </>
  );
}
