import CollateralSection from "@/components/CollateralSection";
import ConnectWalletButton from "@/components/ConnectWalletButton";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <title>Empower Finance</title>
      <meta
        name="description"
        content="A decentralized DeFi protocol for lending and borrowing"
      />
      <link rel="icon" href="/favicon.ico" />

      <Navbar />
      {/* <ConnectWalletButton /> */}
      <CollateralSection />
      <Component {...pageProps} />
    </>
  );
}
