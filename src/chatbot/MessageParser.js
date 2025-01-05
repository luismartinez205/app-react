class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("dónde está") || lowerCaseMessage.includes("cómo llegar")) {
        this.actionProvider.handleGeneralInfo();
      } else if (lowerCaseMessage.includes("actividades") || lowerCaseMessage.includes("tours")) {
        this.actionProvider.handleActivities();
      } else if (lowerCaseMessage.includes("comida") || lowerCaseMessage.includes("restaurantes")) {
        this.actionProvider.handleFood();
      } else if (lowerCaseMessage.includes("clima") || lowerCaseMessage.includes("ropa")) {
        this.actionProvider.handleWeather();
      } else {
        const message = this.actionProvider.createChatBotMessage(
          "Lo siento, no entendí tu pregunta. ¿Podrías reformularla?"
        );
        this.actionProvider.setState((prev) => ({ ...prev, messages: [...prev.messages, message] }));
      }
    }
  }
  
  export default MessageParser;
  