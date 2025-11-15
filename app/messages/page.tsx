"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, User, Clock, Check, CheckCheck, Phone, Video } from "lucide-react";

export default function MessagesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Dr. Emily Chen",
      specialty: "General Physician",
      lastMessage: "Your test results are ready. Everything looks normal!",
      time: "2m ago",
      unread: 2,
      online: true,
      read: false
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "Cardiologist",
      lastMessage: "Please make sure to take your medication as prescribed.",
      time: "1h ago",
      unread: 0,
      online: false,
      read: true
    },
    {
      id: 3,
      name: "Dr. Sarah Miller",
      specialty: "Dermatologist",
      lastMessage: "You: Thank you for the consultation!",
      time: "3h ago",
      unread: 0,
      online: true,
      read: true
    },
    {
      id: 4,
      name: "Metro Medical Center",
      specialty: "Hospital",
      lastMessage: "Your appointment for tomorrow has been confirmed.",
      time: "1d ago",
      unread: 0,
      online: false,
      read: true
    },
    {
      id: 5,
      name: "Dr. Michael Brown",
      specialty: "Neurologist",
      lastMessage: "I've updated your prescription. You can collect it from the pharmacy.",
      time: "2d ago",
      unread: 1,
      online: false,
      read: false
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="bg-white shadow-custom px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <Link href="/">
            <button className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6 text-text-primary" />
            </button>
          </Link>
          <div className="flex-1">
            <h1 className="text-heading-md font-bold text-primary-green">Messages</h1>
            <p className="text-caption text-text-secondary">{conversations.filter(c => c.unread > 0).length} unread</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-input border-2 border-transparent focus:border-primary-green outline-none text-body shadow-custom"
          />
        </div>

        {/* Conversations List */}
        <div className="space-y-3">
          {conversations.map((conversation) => (
            <Link key={conversation.id} href={`/messages/${conversation.id}`}>
              <div className={`bg-white rounded-card p-4 shadow-custom hover:shadow-lg transition-all ${
                conversation.unread > 0 ? "border-l-4 border-primary-green" : ""
              }`}>
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-14 h-14 bg-secondary-green/30 rounded-full flex items-center justify-center">
                      <User className="w-7 h-7 text-primary-green" />
                    </div>
                    {conversation.online && (
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-success border-2 border-white rounded-full"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <div>
                        <h3 className={`text-body font-semibold ${
                          conversation.unread > 0 ? "text-text-primary" : "text-text-primary"
                        }`}>
                          {conversation.name}
                        </h3>
                        <p className="text-caption text-text-secondary">{conversation.specialty}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-caption ${
                          conversation.unread > 0 ? "text-primary-green font-semibold" : "text-text-secondary"
                        }`}>
                          {conversation.time}
                        </span>
                        {conversation.unread > 0 && (
                          <div className="w-5 h-5 bg-primary-green text-white text-xs font-bold rounded-full flex items-center justify-center">
                            {conversation.unread}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {conversation.read && conversation.lastMessage.startsWith("You:") && (
                        <CheckCheck className="w-4 h-4 text-primary-green flex-shrink-0" />
                      )}
                      <p className={`text-caption truncate ${
                        conversation.unread > 0 ? "text-text-primary font-medium" : "text-text-secondary"
                      }`}>
                        {conversation.lastMessage}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {conversations.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 bg-secondary-green/20 rounded-full flex items-center justify-center mb-6">
              <Search className="w-12 h-12 text-primary-green" />
            </div>
            <h3 className="text-heading-sm text-text-primary mb-2">No Messages Found</h3>
            <p className="text-body text-text-secondary text-center">
              Try adjusting your search
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
