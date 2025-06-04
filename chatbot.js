function sendMessage() {
  const input = document.getElementById("userInput");
  const chatbox = document.getElementById("chatbox");

  const userMsg = input.value.trim();
  if (userMsg === "") return;

  // Affiche le message utilisateur
  const userDiv = document.createElement("div");
  userDiv.className = "message user";
  userDiv.innerText = userMsg;
  chatbox.appendChild(userDiv);

  // Réponses simples
  const lowerMsg = userMsg.toLowerCase();
  let response = "Désolé, je ne comprends pas.";

  if (lowerMsg.includes("ouvrir un compte")) {
    response = "Pour ouvrir un compte, cliquez sur 'Connexion' puis remplissez le formulaire.";
  } else if (lowerMsg.includes("frais") || lowerMsg.includes("tarif")) {
    response = "AcessBank est sans frais pour les opérations courantes.";
  } else if (lowerMsg.includes("virement")) {
    response = "Les virements peuvent être simulés depuis votre tableau de bord.";
  }

  // Affiche la réponse
  const botDiv = document.createElement("div");
  botDiv.className = "message bot";
  botDiv.innerText = response;
  chatbox.appendChild(botDiv);

  input.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;
}
