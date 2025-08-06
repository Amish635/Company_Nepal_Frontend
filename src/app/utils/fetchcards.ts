import { CardItem } from "../components/ProductsCard";

export const fetchCardsByCategory = async (category: string): Promise<CardItem[]> => {
    const allcards: Record<string, CardItem[]> = {
        electronics: [
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
                title: 'Laptop Y',
                imgSrc: '/pexels-anjana-c-169994-674010.jpg',
                price: '$899',
                unit: 'per item',
                description: 'High-performance laptop for professionals.',
            },
        ],
        fashion: [
            {
                href: '/f',
                title: 'T-Shirt A',
                imgSrc: '/pexels-anjana-c-169994-674010.jpg',
                price: '$19.99',
                unit: 'per item',
                description: 'Comfortable cotton t-shirt available in various sizes.',
            },
            {
                href: '/',
                title: 'Jeans B',
                imgSrc: '/pexels-anjana-c-169994-674010.jpg',
                price: '$49.99',
                unit: 'per item',
                description: 'Stylish jeans with a perfect fit.',
            },
        ],
        beauty: [
            {
                href: "/",
                title: "Lipstick Set",
                imgSrc: "/pexels-anjana-c-169994-674010.jpg",
                price: "$45",
                unit: "per set",
                description: "Long-lasting, vibrant colors.",
            },
        ],
        "home-garden": [
            {
                href: "/",
                title: "Garden Chair",
                imgSrc: "/pexels-anjana-c-169994-674010.jpg",
                price: "$85",
                unit: "per item",
                description: "Comfortable outdoor furniture.",
            },
        ],
    };
    return allcards[category] || [];
}