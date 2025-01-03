export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    category: string;  
  }

  
export const products: Product[] = [
    {
      id: "1",
      name: "Luxurious Noir Rouge",
      price: 1500.00,
      image: "/p1.png",
      description: "A luxurious and powerful perfume with a unique aroma.",
      category: "Fragrance",
    },
    {
      id: "2",
      name: "The Golden Legacy",
      price: 1600.00,
      image: "/p2.png",
      description: "A delicate and elegant perfume with a subtle hint of gold.",
      category: "Fragrance",
    },
    {
      id: "3",
      name: "The Royal Collection",
      price: 1700.00,
      image: "/p3.png",
      description: "A regal and majestic perfume with a hint of royalty.",
      category: "Fragrance",
    },
    {
      id: "4",
      name: "The Platinum Elixir",
      price: 1800.00,
      image: "/p4.png",
      description: "An opulent and luxurious perfume with a touch of platinum.",
      category: "Fragrance",
    },
    {
      id: "5",
      name: "The Diamond Symphony",
      price: 1900.00,
      image: "/p5.png",
      description: "A dazzling and radiant perfume with a symphony of diamonds.",
      category: "Fragrance",
    },
    {
      id: "6",
      name: "The Silver Elegance",
      price: 2000.00,
      image: "/p6.png",
      description: "A refined and sophisticated perfume with a touch of silver.",
      category: "Fragrance",
    },
    {
      id: "7",
      name: "The Sapphire Dream",
      price: 2100.00,
      image: "/p7.png",
      description: "A dreamy and enchanting perfume with a hint of sapphire.",
      category: "Fragrance",
    },
    {
      id: "8",
      name: "The Emerald Fantasy",
      price: 2200.00,
      image: "/p8.png",
      description: "A magical and mystical perfume with a touch of emerald.",
      category: "Fragrance",
    },
    {
      id: "9",
      name: "The Ruby Romance",
      price: 2300.00,
      image: "/p9.png",
      description: "A romantic and passionate perfume",
      category: "Fragrance",
    }
]