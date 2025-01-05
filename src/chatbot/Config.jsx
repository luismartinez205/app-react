import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const config = {
  botName: "Luis",
  initialMessages: [createChatBotMessage("¡Hola! Soy Luis tu guía virtual de Bocas del Toro. ¿En qué puedo ayudarte?")],
  actionProvider: ActionProvider,
  messageParser: MessageParser,

  customComponents: {
    header: () => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          backgroundColor: "#bfc506",
          color: "white",
          fontSize: "15px",
        }}
      >
        <img
          src="https://st4.depositphotos.com/7662228/21160/v/450/depositphotos_211606730-stock-illustration-chat-bot-icon-background-virtual.jpg" 
          style={{ width: "40px", height: "40px", marginRight: "10px", borderRadius: "50%" }}
        />
        Conversación con Guia Virtual
      </div>
      
      
  ),

  botAvatar: (props) => (
    <img
      src="https://st4.depositphotos.com/7662228/21160/v/450/depositphotos_211606730-stock-illustration-chat-bot-icon-background-virtual.jpg" // Reemplaza con la URL de tu imagen
      alt="Bot Avatar"
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%", // Hace el avatar circular
      }}
    />
  ),
},


};



export default config;
