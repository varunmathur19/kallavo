import Image from "next/image";
import Header from "../component/home/Header";
import Hero from "../component/home/Hero";
import Banner from "../component/home/Banner";
import Product  from "../component/home/Product";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Banner/>
      <Product/>
    </>
  );
}