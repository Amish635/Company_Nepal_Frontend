import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CardItem = {
  href: string;
  title: string;
  imgSrc: string;
  price: string;
  unit: string;
  description: string;
};

interface ProductsCardProps {
  cards: CardItem[];
}

const ProductsCard: React.FC<ProductsCardProps> = ({ cards }) => {
  return (
    <div className="w-full mx-auto p-4 h-auto bg-white shadow-md rounded-lg mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {cards.map(({ href, title, imgSrc, price, unit, description }) => (
          <Link
            key={href}
            href={href}
            className="grid grid-rows-[auto_1fr] gap-2 p-2 border rounded shadow hover:shadow-md transition"
          >
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
  );
};

export default ProductsCard;
export type {CardItem};