const socket = new WebSocket('ws://localhost:5000');

console.log(socket);

socket.onopen = () => {console.log('connected')}

window.socket = socket;

export { socket }