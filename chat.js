// Adicionar o evento de clique ao botão "Enviar"
document.getElementById('sendBtn').addEventListener('click', function() {
  const input = document.getElementById('chatInput'); // Corrigir para 'chatInput'
  const messageText = input.value.trim();

  // Verifica se a mensagem não está vazia
  if (messageText === "") {
    alert("Por favor, digite uma mensagem.");
    return;
  }

  // Criar a nova mensagem
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', 'owner'); // Classe para a mensagem do dono

  const messageContent = document.createElement('div');
  messageContent.classList.add('content');
  messageContent.textContent = messageText;

  const messageTime = document.createElement('div');
  messageTime.classList.add('time');
  const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  messageTime.textContent = currentTime;

  // Adicionar a mensagem e a hora à mensagem container
  messageContainer.appendChild(messageContent);
  messageContainer.appendChild(messageTime);

  // Adicionar a nova mensagem ao main
  const chatMain = document.querySelector('main');
  chatMain.appendChild(messageContainer);

  // Limpar o campo de entrada e focar nele
  input.value = '';
  input.focus();

  // Rolagem automática para a última mensagem
  chatMain.scrollTop = chatMain.scrollHeight;
});
