import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type LinkItem = { href: string, label: string }
type CardItem = {
  href: string,
  title: string,
  imgSrc: string,
  price: string,
  unit: string,
  description: string
}

interface CategorySectionProps {
  title: string
  image: string
  links: LinkItem[]
  cards: CardItem[]
  viewAllHref: string
}

const CategorySection: React.FC<CategorySectionProps> = ({ title, image, links, cards, viewAllHref }) => {
  return (
  <section className="w-full mx-auto p-4 h-auto bg-white shadow-md rounded-lg mb-4">
    <div className="w-full h-1 bg-blue-800 mb-4" />
    <Link href={viewAllHref}>
      <h1 className="text-2xl font-bold text-black hover:text-blue-800 hover:underline">{title}</h1>
    </Link>
    <div className="grid gap-8 mt-4 h-auto md:grid-cols-[325px_1fr]">
      <div className="relative w-full h-[32rem] md:h-[36rem] md:w-full rounded-lg overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className='flex flex-col absolute bottom-4 left-4 md:bottom-2 md:left-6 text-white'>
          {links.map(link => (
            <Link key={link.href} href={link.href} className="font-semibold hover:underline">
              {link.label}
            </Link>
          ))}
          <Link href={viewAllHref}>
            <h1 className="text-sm font-semibold ml-6 inline-block bg-cyan-800 px-6 py-2 rounded text-white hover:underline mt-4 mb-4">View All</h1>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map(({ href, title, imgSrc, price, unit, description }) => (
          <Link
            key={href} href={href} className="grid grid-rows-[auto_1fr] gap-2 p-2 border rounded shadow hover:shadow-md transition">
            <div className="w-full aspect-[4/1.5] relative">
              <Image src={imgSrc} alt={title} fill className="object-cover rounded" />
            </div>
            <div>
              <h2 className="font-semibold text-black hover:text-blue-800">{title}</h2>
              <p>Price: {price}</p>
              <p>Unit: {unit}</p>
              <p className="break-words">Description: {description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </section>
  );
};

export default CategorySection
export type { LinkItem, CardItem, CategorySectionProps }