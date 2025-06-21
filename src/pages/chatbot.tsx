// pages/chatbot.tsx
import React, { useState } from "react";
import type { NextPage } from "next";

const Chatbot: NextPage = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [userMessage, setUserMessage] = useState<string>("");

  const handleSendMessage = () => {
    if (userMessage.trim()) {
      // Add the user message to the message list
      setMessages((prevMessages) => [...prevMessages, `You: ${userMessage}`]);

      // Placeholder: This is where you would integrate the actual Gemini AI API
      // Example response
      const botReply = "Gemini AI: This is a sample reply.";

      setMessages((prevMessages) => [...prevMessages, botReply]);
      setUserMessage("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Lernify Assistant</h1>

      <div className="w-full max-w-xl h-96 border rounded-lg p-4 mb-4 overflow-y-auto bg-gray-100">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            {msg}
          </div>
        ))}
      </div>

      <div className="w-full max-w-xl flex gap-2">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={handleSendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
