class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
  
    handleGeneralInfo = () => {
      const message = this.createChatBotMessage(
        "Bocas del Toro está ubicado al noroeste de Panamá. Puedes llegar en avión desde la Ciudad de Panamá o en autobús y ferry desde Almirante."
      );
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleActivities = () => {
      const message = this.createChatBotMessage(
        "Te recomiendo hacer un tour de snorkeling en Cayo Zapatilla, visitar Playa Estrella para ver estrellas de mar, y disfrutar del avistamiento de delfines en Bahía de los Delfines."
      );
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleFood = () => {
      const message = this.createChatBotMessage(
        "Para probar la comida típica, visita El Último Refugio o el Restaurante Alvin. Prueba el ceviche de pescado fresco y el patacón con mariscos."
      );
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  
    handleWeather = () => {
      const message = this.createChatBotMessage(
        "El clima en Bocas del Toro suele ser cálido y húmedo. Te recomiendo llevar ropa ligera, pero también un impermeable por si llueve."
      );
      this.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
    };
  }
  
  export default ActionProvider;
  