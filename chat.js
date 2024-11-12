const main = document.querySelector("main")
const input = document.querySelector("input")
const button = document.querySelector("button")

function mostrarMensagem(owner, message, timestamp, nick) {
  main.innerHTML += `
  <div class="message owner" ${owner ? "owner" : ""}">
    <div class="content">${message}</div>
    <div class="nick">${nick}</div>
    <div class="time">${timestamp}</div>
  `
}

const ws = new WebSocket("ws://192.168.120.53:4000")

ws.addEventListener("open", () => console.log("Conectado"))
ws.addEventListener("close", () => console.log("Desconectado"))

ws.addEventListener("message", (event) => {
  const data = JSON.parse(event.data)
  mostrarMensagem(false, data.message, data.timestamp, data.nick)
})

ws.addEventListener("close", () => {
  console.log("Desconectado")
})

button.addEventListener("click", () => {
  const message = input.value
  ws.send(message)
  input.value = ""
})
