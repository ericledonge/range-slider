import './App.css';

import React, { useState } from 'react';

const App: React.FC = () => {
  const [price, setPrice] = useState(50);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setPrice(parseFloat(event.currentTarget.value));
  };

  const locale = document.documentElement.lang;

  const convertToCurrency = (price: number) =>
    new Intl.NumberFormat(locale, { style: 'currency', currency: 'USD' }).format(price);

  return (
    <div className="wrapper">
      <div className="amount">
        <span className="dollars">{convertToCurrency(price)}</span>
      </div>
      <input
        type="range"
        id="priceRange"
        min="0"
        max="100"
        step="0.01"
        value={price}
        onChange={(e) => handleChange(e)}
      />
      <br />
      <button>Buy Now</button>
    </div>
  );
};

export default App;
