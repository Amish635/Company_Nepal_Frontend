'use client'
import React, { useEffect, useState } from 'react'
import CategorySection, { CategorySectionProps } from '../components/CategorySection'


const fetchCategories = async (): Promise<CategorySectionProps[]> => {
  // Simulate API call (replace with actual API call)
  await new Promise(resolve => setTimeout(resolve, 200))
  return [
    {
      title: 'Electronics',
      viewAllHref: '/electronics',
      image: '/pexels-anjana-c-169994-674010.jpg',
      links: [
        { href: '/', label: 'Phones' },
        { href: '/', label: 'Laptops' },
        { href: '/', label: 'Tablets' },
      ],
      cards: [
        {
          href: '/',
          title: 'Smartphone X',
          imgSrc: '/pexels-anjana-c-169994-674010.jpg',
          price: '$299',
          unit: 'per item',
          description: 'Latest smartphone with powerful features.',
        },
        // add more...
      ]
    },
    {
      title: 'Fashion',
      viewAllHref: '/fashion',
      image: '/pexels-anjana-c-169994-674010.jpg',
      links: [
        { href: '/', label: 'Refrigerators' },
        { href: '/', label: 'Washing Machines' },
        { href: '/', label: 'Microwaves' },
      ],
      cards: [
        {
          href: '/',
          title: 'Washing Machine',
          imgSrc: '/pexels-anjana-c-169994-674010.jpg',
          price: '$450',
          unit: 'per item',
          description: 'Efficient and silent washing machine.',
        },
        // add more...
      ]
    },
    {
      title: 'Home and Garden',
      viewAllHref: '/home-garden',
      image: '/pexels-anjana-c-169994-674010.jpg',
      links: [
        { href: '/', label: 'Refrigerators' },
        { href: '/', label: 'Washing Machines' },
        { href: '/', label: 'Microwaves' },
      ],
      cards: [
        {
          href: '/',
          title: 'Washing Machine',
          imgSrc: '/pexels-anjana-c-169994-674010.jpg',
          price: '$450',
          unit: 'per item',
          description: 'Efficient and silent washing machine.',
        },
        // add more...
      ]
    },
    {
      title: 'Beauty Products',
      viewAllHref: '/beauty',
      image: '/pexels-anjana-c-169994-674010.jpg',
      links: [
        { href: '/', label: 'Refrigerators' },
        { href: '/', label: 'Washing Machines' },
        { href: '/', label: 'Microwaves' },
      ],
      cards: [
        {
          href: '/',
          title: 'Washing Machine',
          imgSrc: '/pexels-anjana-c-169994-674010.jpg',
          price: '$450',
          unit: 'per item',
          description: 'Efficient and silent washing machine.',
        },
        // add more...
      ]
    }
  ]
}

const PopularCategories = () => {
  const [categories, setCategories] = useState<CategorySectionProps[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCategories()
      setCategories(data)
    }
    fetchData()
  }, [])

  return (
    <>
      {categories.map((category, index) => (
        <CategorySection
          key={index}
          title={category.title}
          image={category.image}
          links={category.links}
          cards={category.cards}
          viewAllHref={category.viewAllHref}
        />
      ))}
    </>
  )
}

export default PopularCategories