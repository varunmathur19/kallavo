import Image from "next/image";
import Header from "../component/home/Header";
import Hero from "../component/home/Hero";
import Banner from "../component/home/Banner";
import Product  from "../component/home/Product";
import BannerImage from "../component/home/Bannerimage";
import Gallery from "../component/home/Gallery";
import Footer from "../component/home/Footer";
import Testimonial from "../component/home/Testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Banner/>
      <Product/>
      <BannerImage/>
      <Gallery/>
      <Testimonial/>
      <Footer/>
    </>
  );
}