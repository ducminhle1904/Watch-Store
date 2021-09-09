import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeaturesBar from "../components/FeaturesBar";
import Collections from "../components/Collections";
import BestSellers from "../components/BestSellers";
import Intro from "../components/Intro";
import Promo from "../components/Promo";

export default function Home() {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Prime Ambassador - Superior Timepieces</title>
      </Head>
      <Header />
      <main style={{ backgroundColor: "#ececec" }}>
        <Banner />
        <FeaturesBar />
        <Collections />
        <BestSellers />
        <Intro />
        <Promo />
      </main>
    </div>
  );
}
