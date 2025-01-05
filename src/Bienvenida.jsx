import './Bienvenida.css';
import Header from './Header';
import './App.css';
import React from "react";
import "react-chatbot-kit/build/main.css";
import config from "./chatbot/Config";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";


function Bienvenida() {  
  return (
    <>
    <Header/>
    <div className='chatbot'>
    <h2 className="article_title">Bienvenido(a) a Bocas!</h2>
    <img src="https://st4.depositphotos.com/7662228/21160/v/450/depositphotos_211606730-stock-illustration-chat-bot-icon-background-virtual.jpg" alt="" className="chat-img" />
    <btn className='chat-btn'>Ayuda Guia Virtual</btn>
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
            <p className='parafo'><strong>¿Buscas aventura, relajación y cultura en un solo destino?</strong> Bocas del Toro es el lugar perfecto. Sus aguas cristalinas, playas de arena blanca y vibrante vida marina te esperan.</p>
            <p className='parafo'>Bocas del Toro es un archipiélago en la costa caribeña de Panamá. La isla principal, Isla Colón, es el centro de la región y el lugar perfecto para comenzar tu aventura. Aquí encontrarás una mezcla de culturas, desde los indígenas Ngöbe-Buglé hasta los colonos afrocaribeños.</p>
          </div>
         
          <Chatbot config={config} 
           messageParser={MessageParser}
           actionProvider={ActionProvider}
           placeholderText="Escribe tu mensaje aquí" // Aquí cambia el texto del placeholder
           
          />        
          </div>          
          </>
        
      );
    }
    
    export default Bienvenida;
    
 