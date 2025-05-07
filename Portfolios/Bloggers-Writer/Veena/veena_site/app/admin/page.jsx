"use client";
import { useEffect, useState } from "react";

export default function AdminMessages() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch("/api/messages")
      .then(res => res.json())
      .then(data => setMessages(data));
  }, []);

  const deleteMessage = async (id) => {
    const res = await fetch(`/api/messages/${id}`, { method: "DELETE" });

    if (res.ok) {
      setMessages(prev => prev.filter(msg => msg._id !== id));
    } else {
      alert("Failed to delete");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      <ul className="space-y-4">
        {messages.map(msg => (
          <li key={msg._id} className="border p-4 rounded-md">
            <p><strong>Name:</strong> {msg.name}</p>
            <p><strong>Email:</strong> {msg.email}</p>
            <p><strong>Message:</strong> {msg.message}</p>
            <button
              onClick={() => deleteMessage(msg._id)}
              className="mt-2 text-red-600 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
