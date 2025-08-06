'use client';
import Image from "next/image";
import Link from "next/link";
import ProductsCard, { CardItem } from "./components/ProductsCard";
import { fetchCardsByCategory } from "./utils/fetchcards";
import { useState, useEffect } from "react";

import Navbar from "@/app/components/layout/Header/Navbar";
import Footer from "@/app/components/layout/Footer/Footer";

export default function Home() {

  const [electronicsCards, setElectronicsCards] = useState<CardItem[]>([]);
  const [fashionCards, setFashionCards] = useState<CardItem[]>([]);
  const [homeGardenCards, setHomeGardenCards] = useState<CardItem[]>([]);
  const [beautyCards, setBeautyCards] = useState<CardItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const electronics = await fetchCardsByCategory('electronics');
      const fashion = await fetchCardsByCategory('fashion');
      const homeGarden = await fetchCardsByCategory('home-garden');
      const beauty = await fetchCardsByCategory('beauty');

      setElectronicsCards(electronics);
      setFashionCards(fashion);
      setHomeGardenCards(homeGarden);
      setBeautyCards(beauty);
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />


      <div className="space-y-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to NepTrade
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Nepal's premier B2B marketplace conn
              \ecting suppliers and buyers worldwide
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/seller/start-selling" className="btn-primary text-lg px-8 py-3">
                Start Selling
              </Link>
              <Link href="/buyer/how-to-buy" className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Start Buying
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Categories */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">Electronics</h2>
          <ProductsCard cards={electronicsCards.slice(0, 4)} />
          <Link
            href="/categories/electronics"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View All Electronics
          </Link>

        </section>
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">Fashion</h2>
          <ProductsCard cards={fashionCards.slice(0, 4)} />
          <Link
            href="/categories/fashion"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View All Fashion
          </Link>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">Home & Garden</h2>
          <ProductsCard cards={homeGardenCards.slice(0, 4)} />
          <Link
            href="/categories/home-garden"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View All Home & Garden
          </Link>
        </section>
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">Beauty</h2>
          <ProductsCard cards={beautyCards.slice(0, 4)} />
          <Link
            href="/categories/beauty"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View All Beauty
          </Link>
        </section>

        {/* Stats Section */}
        <section className="bg-blue-50 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-500">Why Choose NepTrade?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">10,000+</div>
                <div className="text-gray-600">Verified Suppliers</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
                <div className="text-gray-600">Product Listings</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">25+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-gray-600">Successful Transactions</div>
              </div>
            </div>
          </div>
        </section>

      </div>



      <Footer />


    </>
  );
}


