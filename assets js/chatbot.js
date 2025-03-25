document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const userInput = document.getElementById("user-input");

    function sendMessage() {
        let input = userInput.value.trim();
        if (input === "") return;

        appendMessage(input, "user");
        userInput.value = "";

        setTimeout(() => {
            let response = getResponse(input.toLowerCase());
            appendMessage(response, "bot");
        }, 500);
    }

    function appendMessage(message, sender) {
        let messageElement = document.createElement("div");
        messageElement.classList.add("chat-message", sender);
        messageElement.textContent = message;
        chatBox.appendChild(messageElement);
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    function getResponse(input) {
        const responses = {
            "hello": "Hi there! How can I assist you?",
            "hi": "Hello! What do you need help with?",
            "how to apply for a job?": "You can apply for jobs via the 'Job Listings' section.",
            "how to apply for a government scheme?": "Visit the 'Gov Schemes' page for detailed steps.",
            "thank you": "You're welcome! 😊",
            "bye": "Goodbye! Have a great day!",
        };

        return responses[input] || "I'm not sure, please try rephrasing your question.";
    }

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });

    window.sendMessage = sendMessage;
});
