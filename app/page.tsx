"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Calendar, MessageCircle, User, Heart, Activity, Clock, MapPin, Star, Search, Bell, ChevronRight, Plus, Video, FileText, Stethoscope, TestTube, Building2, Pill, Phone, Mail } from "lucide-react";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen bg-background pb-80">
      {/* Header */}
      <header className="bg-white shadow-custom px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div>
            <h1 className="text-heading-md font-bold text-primary-green">Avicure</h1>
            <p className="text-caption text-text-secondary">AI-Powered Healthcare</p>
          </div>
          <div className="flex gap-4">
            <button className="relative">
              <Bell className="w-6 h-6 text-text-primary" />
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-error text-white text-[10px] font-semibold rounded-full flex items-center justify-center">3</span>
            </button>
            <button>
              <Search className="w-6 h-6 text-text-primary" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-6 py-6">
        {/* Greeting Section */}
        <div className="mb-6">
          <h2 className="text-heading-lg text-text-primary mb-2">Good Morning, Sarah!</h2>
          <p className="text-body text-text-secondary">How can we help you today?</p>
        </div>

        {/* Quick Stats Card */}
        <div className="bg-gradient-to-br from-primary-green to-secondary-green rounded-card p-6 mb-6 shadow-custom">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-sm text-white">Health Overview</h3>
            <Activity className="w-6 h-6 text-white" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <Heart className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">72</p>
              <p className="text-caption text-white/80">BPM</p>
            </div>
            <div className="text-center">
              <Activity className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">8.5k</p>
              <p className="text-caption text-white/80">Steps</p>
            </div>
            <div className="text-center">
              <Pill className="w-6 h-6 text-white mx-auto mb-2" />
              <p className="text-2xl font-bold text-white">2/3</p>
              <p className="text-caption text-white/80">Meds</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-4">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link href="/book-appointment">
              <div className="bg-white rounded-button p-5 shadow-custom hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-green/10 rounded-chip flex items-center justify-center mb-3">
                  <Calendar className="w-6 h-6 text-primary-green" />
                </div>
                <p className="text-button text-text-primary">Book Appointment</p>
              </div>
            </Link>
            <Link href="/find-doctor">
              <div className="bg-white rounded-button p-5 shadow-custom hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-secondary-green/30 rounded-chip flex items-center justify-center mb-3">
                  <Stethoscope className="w-6 h-6 text-primary-green" />
                </div>
                <p className="text-button text-text-primary">Find Doctor</p>
              </div>
            </Link>
            <Link href="/lab-tests">
              <div className="bg-white rounded-button p-5 shadow-custom hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-primary-green/10 rounded-chip flex items-center justify-center mb-3">
                  <TestTube className="w-6 h-6 text-primary-green" />
                </div>
                <p className="text-button text-text-primary">Lab Tests</p>
              </div>
            </Link>
            <Link href="/hospitals">
              <div className="bg-white rounded-button p-5 shadow-custom hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-secondary-green/30 rounded-chip flex items-center justify-center mb-3">
                  <Building2 className="w-6 h-6 text-primary-green" />
                </div>
                <p className="text-button text-text-primary">Hospitals</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-sm text-text-primary">Upcoming Appointments</h3>
            <Link href="/appointments" className="text-caption text-primary-green font-semibold">View All</Link>
          </div>
          <div className="bg-white rounded-card p-5 shadow-custom mb-3">
            <div className="flex gap-4">
              <div className="w-16 h-16 bg-secondary-green/30 rounded-button flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-8 h-8 text-primary-green" />
              </div>
              <div className="flex-1">
                <h4 className="text-body font-semibold text-text-primary mb-1">Dr. Emily Chen</h4>
                <p className="text-caption text-text-secondary mb-2">General Physician</p>
                <div className="flex items-center gap-4 text-caption text-text-secondary">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Mar 18, 2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>10:00 AM</span>
                  </div>
                </div>
              </div>
              <button className="flex-shrink-0">
                <ChevronRight className="w-6 h-6 text-text-secondary" />
              </button>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="flex-1 bg-primary-green text-white py-3 rounded-button text-button flex items-center justify-center gap-2">
                <Video className="w-5 h-5" />
                Join Video
              </button>
              <button className="px-6 bg-secondary-green/20 text-primary-green py-3 rounded-button text-button">
                Reschedule
              </button>
            </div>
          </div>
        </div>

        {/* Featured Doctors */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-sm text-text-primary">Top Rated Doctors</h3>
            <Link href="/doctors" className="text-caption text-primary-green font-semibold">See All</Link>
          </div>
          <div className="flex gap-4 overflow-x-auto hide-scrollbar pb-2">
            {[
              { name: "Dr. James Wilson", specialty: "Cardiologist", rating: 4.9, reviews: 234 },
              { name: "Dr. Sarah Miller", specialty: "Dermatologist", rating: 4.8, reviews: 189 },
              { name: "Dr. Michael Brown", specialty: "Neurologist", rating: 4.9, reviews: 312 }
            ].map((doctor, idx) => (
              <div key={idx} className="bg-white rounded-card p-4 shadow-custom min-w-[160px]">
                <div className="w-16 h-16 bg-secondary-green/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <User className="w-8 h-8 text-primary-green" />
                </div>
                <h4 className="text-body font-semibold text-text-primary text-center mb-1">{doctor.name}</h4>
                <p className="text-caption text-text-secondary text-center mb-2">{doctor.specialty}</p>
                <div className="flex items-center justify-center gap-1 mb-3">
                  <Star className="w-4 h-4 fill-warning text-warning" />
                  <span className="text-caption font-semibold text-text-primary">{doctor.rating}</span>
                  <span className="text-caption text-text-secondary">({doctor.reviews})</span>
                </div>
                <button className="w-full bg-primary-green text-white py-2 rounded-button text-caption font-semibold">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Health Tips */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-4">Health Tips</h3>
          <div className="bg-white rounded-card p-5 shadow-custom">
            <div className="flex gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-success to-success/60 rounded-button flex-shrink-0"></div>
              <div>
                <h4 className="text-body font-semibold text-text-primary mb-2">Stay Hydrated</h4>
                <p className="text-caption text-text-secondary mb-3">Drink at least 8 glasses of water daily to maintain optimal health and energy levels.</p>
                <button className="text-caption text-primary-green font-semibold">Read More →</button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Lab Results */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-sm text-text-primary">Recent Lab Results</h3>
            <Link href="/lab-results" className="text-caption text-primary-green font-semibold">View All</Link>
          </div>
          <div className="bg-white rounded-card p-5 shadow-custom">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-success/10 rounded-chip flex items-center justify-center">
                  <FileText className="w-6 h-6 text-success" />
                </div>
                <div>
                  <h4 className="text-body font-semibold text-text-primary">Blood Test - Complete</h4>
                  <p className="text-caption text-text-secondary">Mar 15, 2024</p>
                </div>
              </div>
              <span className="text-caption font-semibold text-success bg-success/10 px-3 py-1 rounded-chip">Normal</span>
            </div>
            <button className="w-full bg-secondary-green/20 text-primary-green py-3 rounded-button text-button">
              View Details
            </button>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-custom border-t border-gray-200 z-50" style={{ height: '80px' }}>
        <div className="max-w-md mx-auto h-full px-6">
          <div className="flex items-center justify-around h-full">
            <button
              onClick={() => setActiveTab("home")}
              className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                activeTab === "home" ? "text-accent-brown" : "text-text-secondary"
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-caption">Home</span>
            </button>
            <Link href="/appointments">
              <button
                onClick={() => setActiveTab("appointments")}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  activeTab === "appointments" ? "text-accent-brown" : "text-text-secondary"
                }`}
              >
                <Calendar className="w-6 h-6" />
                <span className="text-caption">Appointments</span>
              </button>
            </Link>
            <Link href="/messages">
              <button
                onClick={() => setActiveTab("messages")}
                className={`flex flex-col items-center justify-center gap-1 transition-colors relative ${
                  activeTab === "messages" ? "text-accent-brown" : "text-text-secondary"
                }`}
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-caption">Messages</span>
                <span className="absolute top-0 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
            </Link>
            <Link href="/profile">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  activeTab === "profile" ? "text-accent-brown" : "text-text-secondary"
                }`}
              >
                <User className="w-6 h-6" />
                <span className="text-caption">Profile</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
