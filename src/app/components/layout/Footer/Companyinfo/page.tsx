import Link from 'next/link'

export default function Companyinfo() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Company Info</h3>
      <ul className="space-y-2">
        <li>
          <Link 
            href="/company/about-us" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link 
            href="/company/careers" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Careers
          </Link>
        </li>
        <li>
          <Link 
            href="/company/press" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Press
          </Link>
        </li>
        <li>
          <Link 
            href="/company/blog" 
            className="text-gray-300 hover:text-white transition-colors duration-200"
          >
            Blog
          </Link>
        </li>
      </ul>
    </div>
  )
}