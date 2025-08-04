import Link from 'next/link'
import Image from 'next/image'

export default function Companyinfo() {
  return (
    <div className="space-y-12 max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Company Info</h2>

      {/* Section Component */}
      {[
        {
          title: "About Us",
          image: "/abt-img.png",
          description:
            "We are a passionate team committed to making a difference. From our humble beginnings to becoming a leader in the industry, our journey is driven by innovation, integrity, and a customer-first mindset. We believe in creating long-lasting value through transparency, creativity, and collaboration.",
          link: "/company/about-us",
          linkText: "Read More →",
          imagePosition: "left",
          bg: "bg-gray-100",
        },
        {
          title: "Careers",
          image: "/career.jpeg",
          description:
            "Join a workplace where growth, inclusion, and purpose come together. We offer exciting career paths across multiple departments. Whether you're starting out or looking for your next challenge, explore a culture where your ideas matter and you can make a true impact.",
          link: "/company/careers",
          linkText: "Explore Careers →",
          imagePosition: "right",
          bg: "bg-gray-50",
        },
        {
          title: "Press",
          image: "/images/press.jpg",
          description:
            "We’re proud to be featured in some of the world's leading publications. Discover our latest press releases, media mentions, and news coverage to stay informed about how we're shaping the industry and inspiring change.",
          link: "/company/press",
          linkText: "View Press →",
          imagePosition: "left",
          bg: "bg-gray-100",
        },
        {
          title: "Blog",
          image: "/blog.jpeg",
          description:
            "Explore our blog for insights on trends, company updates, and behind-the-scenes stories. From expert opinions to team highlights, our blog offers a deeper look into what drives our mission and connects us with our community.",
          link: "/company/blog",
          linkText: "Read Our Blog →",
          imagePosition: "right",
          bg: "bg-gray-50",
        },
      ].map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            section.imagePosition === 'right' ? 'md:flex-row-reverse' : ''
          } items-center gap-8 p-8 rounded-2xl shadow-md ${section.bg}`}
        >
          <div className="w-full md:w-1/2">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">{section.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed">{section.description}</p>
            <Link
              href={section.link}
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
              {section.linkText}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

