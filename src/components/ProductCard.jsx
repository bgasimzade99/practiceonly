import "../css/Product.css";

function ProductCard({ title, price, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>${price}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;