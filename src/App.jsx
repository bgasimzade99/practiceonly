import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"; /// main seife bu da import
import Contact from "./pages/Contact"; // contact pages actiq ona da import 
import Products from "./pages/Product"; //product pages actig onu import
import Navbar from "./components/Navbar"; //navbari burdan import
import "./App.css"; //bu da esas her sikime olan css di
function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="app-main">
        <div className="app-routes">
          <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;