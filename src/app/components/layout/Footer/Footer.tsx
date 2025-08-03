import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-10 pb-5 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <Link href="/Companyinfo" className="hover:underline hover:text-blue-400 transition-colors">
            <h3 className="font-semibold text-lg mb-3">Company Info</h3>
          </Link>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline hover:text-blue-400">About Us</Link></li>
            <li><Link href="/careers" className="hover:underline hover:text-blue-400">Careers</Link></li>
            <li><Link href="/press" className="hover:underline hover:text-blue-400">Press</Link></li>
            <li><Link href="/blog" className="hover:underline hover:text-blue-400">Blog</Link></li>
          </ul>
        </div>

        {/* Buyer Resources */}
        <div>
          <Link href="/buyer-resources" className="hover:underline hover:text-blue-400 transition-colors">
            <h3 className="font-semibold text-lg mb-3">Buyer Resources</h3>
          </Link>
          <ul className="space-y-2 text-sm">
            <li><Link href="/how-to-buy" className="hover:underline hover:text-blue-400">How to Buy</Link></li>
            <li><Link href="/buyer-protection" className="hover:underline hover:text-blue-400">Buyer Protection</Link></li>
            <li><Link href="/shipping-info" className="hover:underline hover:text-blue-400">Shipping Info</Link></li>
          </ul>
        </div>

        {/* Seller Resources */}
        <div>
          <Link href="/seller-resources" className="hover:underline hover:text-blue-400 transition-colors">
            <h3 className="font-semibold text-lg mb-3">Seller Resources</h3>
          </Link>
          <ul className="space-y-2 text-sm">
            <li><Link href="/sell" className="hover:underline hover:text-blue-400">Start Selling</Link></li>
            <li><Link href="/seller-center" className="hover:underline hover:text-blue-400">Seller Center</Link></li>
            <li><Link href="/policies" className="hover:underline hover:text-blue-400">Selling Policies</Link></li>
          </ul>
        </div>

        {/* Popular Categories */}
        <div>
          <Link href="/popular-categories" className="hover:underline hover:text-blue-400 transition-colors">
            <h3 className="font-semibold text-lg mb-3">Popular Categories</h3>
          </Link>
          <ul className="space-y-2 text-sm">
            <li><Link href="/electronics" className="hover:underline hover:text-blue-400">Electronics</Link></li>
            <li><Link href="/fashion" className="hover:underline hover:text-blue-400">Fashion</Link></li>
            <li><Link href="/home-garden" className="hover:underline hover:text-blue-400">Home & Garden</Link></li>
            <li><Link href="/beauty" className="hover:underline hover:text-blue-400">Beauty</Link></li>
          </ul>
        </div>

        {/* More */}
        <div className="md:col-span-2 lg:col-span-1">
          <Link href="/more" className="hover:underline hover:text-blue-400 transition-colors">
            <h3 className="font-semibold text-lg mb-3">More</h3>
          </Link>
          <ul className="space-y-2 text-sm">
            <li><Link href="/terms" className="hover:underline hover:text-blue-400">Policies & Legal</Link></li>
            <li><Link href="/support" className="hover:underline hover:text-blue-400">Customer Support</Link></li>
            <li><Link href="/trust" className="hover:underline hover:text-blue-400">Certification & Trust</Link></li>
            <li><Link href="/language" className="hover:underline hover:text-blue-400">Language & Region</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider Section */}
      <div className="border-t border-gray-700 mt-10 pt-5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Social Icons */}
          <div className="flex space-x-4 justify-center md:justify-start text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              <FaLinkedin />
            </a>
          </div>

          

          {/* Copyright */}
          <div className="text-center md:text-right text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} YourCompany. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
