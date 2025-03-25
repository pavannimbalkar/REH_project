document.addEventListener("DOMContentLoaded", loadMessages);

function sendMessage() {
    let username = document.getElementById("username").value.trim();
    let message = document.getElementById("message").value.trim();

    if (username === "" || message === "") {
        alert("Please enter your name and message.");
        return;
    }

    let chatBox = document.getElementById("chat-box");
    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];

    let messageData = { username, message, time: new Date().toLocaleTimeString() };
    messages.push(messageData);
    localStorage.setItem("chatMessages", JSON.stringify(messages));

    document.getElementById("message").value = "";
    loadMessages();
}

function loadMessages() {
    let chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = "";

    let messages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    messages.forEach(msg => {
        let messageElement = document.createElement("div");
        messageElement.classList.add("message");
        messageElement.innerHTML = `<strong>${msg.username}</strong>: ${msg.message} <small>(${msg.time})</small>`;
        chatBox.appendChild(messageElement);
    });

    chatBox.scrollTop = chatBox.scrollHeight;
}
