'use client';

import React, { useState, useEffect } from 'react';
import ProductsCard, { CardItem } from '../components/ProductsCard';

const fetchCards = async (): Promise<CardItem[]> => {
  // Simulate delay (or replace with real API)
  await new Promise((resolve) => setTimeout(resolve, 200));
  return [
    {
      href: '/',
      title: 'Smartphone X',
      imgSrc: '/pexels-anjana-c-169994-674010.jpg',
      price: '$299',
      unit: 'per item',
      description: 'Latest smartphone with powerful features.',
    },
    {
      href: '/',
      title: 'Smartphone X',
      imgSrc: '/pexels-anjana-c-169994-674010.jpg',
      price: '$299',
      unit: 'per item',
      description: 'Latest smartphone with powerful features.',
    },
    {
      href: '/',
      title: 'Smartphone X',
      imgSrc: '/pexels-anjana-c-169994-674010.jpg',
      price: '$299',
      unit: 'per item',
      description: 'Latest smartphone with powerful features.',
    },
    {
      href: '/',
      title: 'Smartphone X',
      imgSrc: '/pexels-anjana-c-169994-674010.jpg',
      price: '$299',
      unit: 'per item',
      description: 'Latest smartphone with powerful features.',
    },
  ];
};

const ElectronicsPage = () => {
  const [cards, setCards] = useState<CardItem[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCards();
      setCards(data);
    };
    fetchData();
  }, []);
  return (
    <div>
    <h1 className="text-2xl font-bold text-black mb-2">Electronics</h1>
    <div className="w-full h-1 bg-black mb-4" />
    <ProductsCard cards={cards} />
  </div>
  );
};

export default ElectronicsPage;
