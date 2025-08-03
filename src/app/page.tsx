import Image from "next/image";
import Link from "next/link";


import Navbar from "@/app/components/layout/Header/Navbar";
import Footer from "@/app/components/layout/Footer/Footer";

export default function Home() {
  const featuredCategories = [
    { name: 'Electronics', count: '12,000+', href: '/categories/electronics' },
    { name: 'Fashion', count: '8,500+', href: '/categories/fashion' },
    { name: 'Home & Garden', count: '6,200+', href: '/categories/home-garden' },
    { name: 'Beauty', count: '4,800+', href: '/categories/beauty' },]

  return (
    <>
    <Navbar/>

    
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome to NepTrade
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Nepal's premier B2B marketplace connecting suppliers and buyers worldwide
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
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-500">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="card hover:shadow-md transition-shadow text-center group"
            >
              <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                <span className="text-gray-500"><img src="./elect.jpeg" alt="" /></span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-500">{category.name}</h3>
              <p className="text-gray-600">{category.count} products</p>
            </Link>
          ))}
        </div>
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
  


    <Footer/>
    

      </> 
  );
}   
  

