import React from 'react';
import ProductCard from './components/ProductCard/ProductCard';

export default function App() {
  return (
    <div className="app">
      <h1 className="app-title">Demo ProductCard</h1>

      <ProductCard initialSoldOut={false} />

      <ProductCard initialSoldOut={true} />
    </div>
  );
}