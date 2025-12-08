import { useState } from "react";

const styles = {
  container: {
    padding: 20,
  },
  hello: {
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
  },
};
type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string;
};

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const fetchProducts = () => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  if (selectedProduct) {
    return (
      <div style={styles.container}>
        <button onClick={() => setSelectedProduct(null)}>Back</button>

        <h2>{selectedProduct.title}</h2>
        <img src={selectedProduct.images[0]} height={150} alt="" />
        <p>Price: {selectedProduct.price}</p>
        <p>{selectedProduct.description}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <button style={styles.hello} onClick={fetchProducts}>
        Get Products Details
      </button>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <h3>{p.title}</h3>

            <img
              src={p.images}
              height={100}
              onClick={() => setSelectedProduct(p)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
