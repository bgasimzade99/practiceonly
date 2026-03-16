import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="nav">
      <div className="hero2"> 
        <h1> Banana</h1>
        <p>Blog</p>
        <h4>Page</h4>
      </div>
      <ul className="nav-list">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;