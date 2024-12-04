import React from 'react';
import { motion } from 'framer-motion';
import { ThemeProvider } from './contexts/ThemeContext';
import { Header } from './components/Header';
import { ProductCard } from './components/ProductCard';

const products = [
  {
    id: 1,
    name: "Eco-Friendly Water Bottle",
    price: 29.99,
    description: "Sustainable stainless steel water bottle with temperature control technology.",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 2,
    name: "Organic Cotton Backpack",
    price: 89.99,
    description: "Handcrafted backpack made from 100% organic cotton with leather details.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 3,
    name: "Bamboo Sunglasses",
    price: 59.99,
    description: "Stylish sunglasses made from sustainable bamboo with polarized lenses.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    name: "Recycled Denim Jacket",
    price: 129.99,
    description: "Classic denim jacket made from recycled materials with modern fit.",
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=800"
  }
];

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        
        <main className="container mx-auto px-4 pt-24 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Eco-Friendly Products
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our collection of sustainable and environmentally conscious products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;