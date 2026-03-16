import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "../css/Product.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="products-page">
      <div className="container">
        <h1>Products</h1>

        <div className="grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;