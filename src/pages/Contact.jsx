import { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const [showModal, setShowModal] = useState(false);

  const bananSend = (e) => {
    e.preventDefault();

    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>

        <form className="contact-form" onSubmit={bananSend}>
          <input type="text" placeholder="Banana's name" />
          <input type="email" placeholder="Banana's email" />
          <textarea placeholder="Banana's message for other bananas"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {showModal && (
        <div className="contact-banana-modal">
          <div className="contact-banana-card">
            <img
              src="https://m.media-amazon.com/images/I/71Btvd6lIjS._AC_UF894,1000_QL80_.jpg"
              alt="banana card"
            />
            <div className="contact-banana-message">
              <h4>Banana Sent 🍌</h4>
              <p>Thanks bananana Namaa nammm!!</p>
              <p>Now I'm happy Bananaa!!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;