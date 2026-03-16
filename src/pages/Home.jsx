import "../css/Home.css";
import { useState } from "react";

function Home() {
  const [showModal, setShowModal] = useState(false);

  const bananGive = () => {
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <div className="hero">
      <div className="overlay">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              <span className="hero-title-line">This is Babak</span>
              <span className="hero-title-accent">Gasimzade</span>
            </h1>
            <p className="hero-subtitle">Your trusted Web developer.</p>
            <p className="hero-welcome">Welcome my dears</p>
            <button className="btn-banan" onClick={bananGive}>
              Give me Banana
            </button>
          </div>

          <div className="hero-image">
            <div className="hero-image-frame">
              <img
                src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/w_1920,c_limit/Monkey-Selfie.jpg"
                alt="Babak"
              />
            </div>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="banana-modal">
          <div className="banana-card">
            <img
              src="https://thumbs.dreamstime.com/b/monkey-holds-banana-looks-smile-393524643.jpg?w=992"
              alt="banana card"
            />

            <div className="banana-message">
              <h4>Banana sent</h4>
              <p>Thanks bananana Namaa nammm!!</p>
              <p>Now I'm happy Bananaa!!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;