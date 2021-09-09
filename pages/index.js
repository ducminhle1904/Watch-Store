import Head from "next/head";
import Header from "../components/Header";
import Banner from "../components/Banner";
import FeaturesBar from "../components/FeaturesBar";
import Collections from "../components/Collections";
import BestSellers from "../components/BestSellers";
import Promo from "../components/Promo";
import Design from "../components/Design";
import PrimeCollections from "../components/PrimeCollections";
import Intro from "../components/Intro";
import Articles from "../components/Articles";
import Footer from "../components/Footer";

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
        <Promo
          color="white"
          img="https://res.cloudinary.com/dppndtfp8/image/upload/v1631109902/promo-01_r1rqpg.jpg"
          title="Meet the mystery behind it all"
          p="This tale begins with our namesake’s profession: the ambassador. Like all envoys, the original ambassador’s job was to be the manifestation of his homeland on foreign soils. But, he was always different..."
          btn="READ OUR STORY"
        />
        <Design color="black" />
        <PrimeCollections />
        <Intro
          title="BE AN AMBASSADOR"
          p="It's all about reputation. That's why we've teamed up with some outstanding ambassadors from all around the globe to aid in our quest for excellence."
        />
        <Promo
          img="https://res.cloudinary.com/dppndtfp8/image/upload/v1631173683/promo-03_sm1kcq.jpg"
          color="white"
          title="Inspired by Excellence"
          p="Learn about our community of ambassadors, their stories of excellence, and explore our illustrious lookbook to discover a new world of style."
          btn="GET INSPIRED"
        />
        <Articles />
        <Footer />
      </main>
    </div>
  );
}
