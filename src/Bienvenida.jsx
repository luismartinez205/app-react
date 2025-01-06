import './Bienvenida.css';
import Header from './Header';
import './App.css';
import "react-chatbot-kit/build/main.css";
import config from "./chatbot/Config";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import React, { useState } from "react";

function Bienvenida() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };
  return (
    <>
      <Header />
      <div className='chatbot'>
        <h2 className="article_title">Bienvenido(a) a Bocas!</h2>
        <img src="https://st4.depositphotos.com/7662228/21160/v/450/depositphotos_211606730-stock-illustration-chat-bot-icon-background-virtual.jpg" alt="" className="chat-img" />
        <btn className='chat-btn' onClick={toggleChatbot}>Guia Virtual</btn>
      </div>
      <div className="contenedor">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/VgnnPDIpNhI?si=bTpf2aibau6_MAsR"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className='contenedor-parafo'>
          <h1 className='article_title text'>Descubre Bocas del Toro: Paraíso Tropical en el Caribe Panameño</h1>
          <p className='parafo'><strong>¿Buscas aventura, relajación y cultura en un solo destino?</strong></p>
          <p className='parafo'> Bocas del Toro es el lugar perfecto. Sus aguas cristalinas, playas de arena blanca y vibrante vida marina te esperan.</p>
          <p className='parafo'>Bocas del Toro es un archipiélago en la costa caribeña de Panamá. La isla principal, Isla Colón, es el centro de la región y el lugar perfecto para comenzar tu aventura. Aquí encontrarás una mezcla de culturas, desde los indígenas Ngöbe-Buglé hasta los colonos afrocaribeños.</p>
          {showChatbot && <Chatbot config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            placeholderText="Escribe tu mensaje aquí"
          />}
        </div>

      </div>
      <h2 className="article_title">¿Qué hacer en Bocas del Toro?</h2>
      <div class="card-container">
        <div class="card card1">
          <img src=" https://www.swanscayhotel.com/wp-content/uploads/2022/05/Isla-Colon-Bocas-del-Toro-3.jpg" alt="" srcset="" />
          <h2 class="card-title">Card 1</h2>
          <p class="card-description">Descripción de la primera tarjeta.</p>
        </div>

        <div class="card card2">
        <img src=" https://www.swanscayhotel.com/wp-content/uploads/2022/05/Isla-Colon-Bocas-del-Toro-3.jpg" alt="" srcset="" />
          <h2 class="card-title">Card 2</h2>
          <p class="card-description">Descripción de la segunda tarjeta.</p>
        </div>

        <div class="card card3">
          <h2 class="card-title">Card 3</h2>
          <p class="card-description">Descripción de la tercera tarjeta.</p>
        </div>

        <div class="card card4">
          <h2 class="card-title">Card 4</h2>
          <p class="card-description">Descripción de la cuarta tarjeta.</p>
        </div>
      </div>

    </>

  );
}

export default Bienvenida;

