import React from 'react';
import {MessageCircle, MapPin} from "lucide-react"

import './styles.css';



const Header = () => {

  const handleClick = (url) => {
    window.open(url)
  }

  return (
    <nav>
      <h1 >Mercadótica</h1>

      <div class="infos">
        <button className="button" onClick={() => handleClick("https://web.whatsapp.com/")}>
        <MessageCircle />
        Contato
        </button>
        <button className="button" onClick={() => handleClick("https://goo.gl/maps/9Rnu54DBFfmq7t3P8")}>
          <MapPin />
          Endereço
        </button>
      </div>
    </nav>
  );
};

export default Header;
