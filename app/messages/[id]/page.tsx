"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, Paperclip, Mic, MoreVertical, User, Phone, Video } from "lucide-react";

export default function ChatPage() {
  const [message, setMessage] = useState("");

  const messages = [
    {
      id: 1,
      sender: "doctor",
      text: "Hello! How are you feeling today?",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "user",
      text: "Hi Dr. Chen, I've been feeling much better after taking the medication.",
      time: "10:32 AM",
    },
    {
      id: 3,
      sender: "doctor",
      text: "That's great to hear! Have you experienced any side effects?",
      time: "10:33 AM",
    },
    {
      id: 4,
      sender: "user",
      text: "No side effects at all. The headaches have reduced significantly.",
      time: "10:35 AM",
    },
    {
      id: 5,
      sender: "doctor",
      text: "Excellent! Your test results came back and everything looks normal.",
      time: "10:36 AM",
    },
    {
      id: 6,
      sender: "doctor",
      text: "I'll send you a copy of the results. Continue the medication for another week.",
      time: "10:37 AM",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-custom px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <Link href="/messages">
            <button className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6 text-text-primary" />
            </button>
          </Link>
          <div className="flex items-center gap-3 flex-1">
            <div className="relative">
              <div className="w-12 h-12 bg-secondary-green/30 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-primary-green" />
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-success border-2 border-white rounded-full"></div>
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-body font-semibold text-text-primary">Dr. Emily Chen</h2>
              <p className="text-caption text-success">Online</p>
            </div>
          </div>
          <button className="p-2">
            <Phone className="w-6 h-6 text-text-primary" />
          </button>
          <button className="p-2">
            <Video className="w-6 h-6 text-text-primary" />
          </button>
          <button className="p-2">
            <MoreVertical className="w-6 h-6 text-text-primary" />
          </button>
        </div>
      </header>

      {/* Messages Area */}
      <main className="flex-1 max-w-md mx-auto w-full px-6 py-6 overflow-y-auto">
        <div className="space-y-4">
          {/* Date Separator */}
          <div className="flex items-center justify-center">
            <div className="bg-white px-4 py-2 rounded-chip shadow-custom">
              <p className="text-caption text-text-secondary">Today</p>
            </div>
          </div>

          {/* Messages */}
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-primary-green text-white rounded-card rounded-br-none"
                    : "bg-white text-text-primary rounded-card rounded-bl-none shadow-custom"
                } px-4 py-3`}
              >
                <p className="text-body">{msg.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    msg.sender === "user" ? "text-white/70" : "text-text-secondary"
                  }`}
                >
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 px-6 py-4 sticky bottom-0">
        <div className="max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <button className="p-2 text-text-secondary hover:text-primary-green transition-colors">
              <Paperclip className="w-6 h-6" />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-background rounded-input border-2 border-transparent focus:border-primary-green outline-none text-body"
              />
            </div>
            {message.trim() ? (
              <button className="p-3 bg-primary-green rounded-full text-white shadow-custom">
                <Send className="w-5 h-5" />
              </button>
            ) : (
              <button className="p-3 bg-secondary-green/30 rounded-full text-primary-green">
                <Mic className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
