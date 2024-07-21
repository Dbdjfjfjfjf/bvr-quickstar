import { Title } from "solid-start";
import Counter from "~/components/Counter";
import React from 'react';
import './App.css';

const products = [
  { id: 1, name: 'Bolo de Chocolate', price: 29.99, image: 'chocolate-cake.jpg' },
  { id: 2, name: 'Bolo de Morango', price: 34.99, image: 'strawberry-cake.jpg' },
  { id: 3, name: 'Bolo de Cenoura', price: 24.99, image: 'carrot-cake.jpg' },
  // Adicione mais produtos conforme necessário
];

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Loja de Bolos</h1>
        <SearchBar />
      </header>
      <main>
        <ProductList />
      </main>
      <footer className="App-footer">
        <p>&copy; 2024 Loja de Bolos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

const SearchBar: React.FC = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Pesquisar bolos..." />
    </div>
  );
};

const ProductList: React.FC = () => {
  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

type ProductCardProps = {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>R${product.price.toFixed(2)}</p>
      <button>Adicionar ao Carrinho</button>
    </div>
  );
};

export default App;
