import { useState } from "react";

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = () => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);   
      });
  };

  return (
    <div>
      <button onClick={fetchProducts}>Get Product Details</button>

      <ul>
        {products.map((p) => (
          <li>
            <h3>{p.title}</h3>
            <p>Price: {p.price}</p>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

