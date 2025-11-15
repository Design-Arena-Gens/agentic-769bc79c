"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Video, MapPin, Phone, MessageCircle, MoreVertical, User } from "lucide-react";

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const upcomingAppointments = [
    {
      id: 1,
      doctor: "Dr. Emily Chen",
      specialty: "General Physician",
      date: "Mar 18, 2024",
      time: "10:00 AM",
      type: "video",
      status: "confirmed"
    },
    {
      id: 2,
      doctor: "Dr. James Wilson",
      specialty: "Cardiologist",
      date: "Mar 22, 2024",
      time: "2:30 PM",
      type: "clinic",
      status: "confirmed"
    },
    {
      id: 3,
      doctor: "Dr. Sarah Miller",
      specialty: "Dermatologist",
      date: "Mar 25, 2024",
      time: "11:00 AM",
      type: "video",
      status: "pending"
    },
  ];

  const pastAppointments = [
    {
      id: 4,
      doctor: "Dr. Michael Brown",
      specialty: "Neurologist",
      date: "Mar 10, 2024",
      time: "3:00 PM",
      type: "clinic",
      status: "completed"
    },
    {
      id: 5,
      doctor: "Dr. Lisa Anderson",
      specialty: "Pediatrician",
      date: "Feb 28, 2024",
      time: "9:30 AM",
      type: "video",
      status: "completed"
    },
  ];

  const appointments = activeTab === "upcoming" ? upcomingAppointments : pastAppointments;

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
            <h1 className="text-heading-md font-bold text-primary-green">My Appointments</h1>
            <p className="text-caption text-text-secondary">{appointments.length} appointments</p>
          </div>
          <Link href="/book-appointment">
            <button className="bg-primary-green text-white px-4 py-2 rounded-button text-caption font-semibold">
              + Book
            </button>
          </Link>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-6">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 bg-white p-1 rounded-button shadow-custom">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex-1 py-3 rounded-chip text-body font-semibold transition-all ${
              activeTab === "upcoming"
                ? "bg-primary-green text-white"
                : "text-text-secondary"
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={`flex-1 py-3 rounded-chip text-body font-semibold transition-all ${
              activeTab === "past"
                ? "bg-primary-green text-white"
                : "text-text-secondary"
            }`}
          >
            Past
          </button>
        </div>

        {/* Appointments List */}
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="bg-white rounded-card p-5 shadow-custom">
              {/* Status Badge */}
              {appointment.status === "pending" && (
                <div className="inline-block px-3 py-1 bg-warning/10 text-warning rounded-chip text-caption font-semibold mb-3">
                  Pending Confirmation
                </div>
              )}
              {appointment.status === "confirmed" && (
                <div className="inline-block px-3 py-1 bg-success/10 text-success rounded-chip text-caption font-semibold mb-3">
                  Confirmed
                </div>
              )}
              {appointment.status === "completed" && (
                <div className="inline-block px-3 py-1 bg-text-secondary/10 text-text-secondary rounded-chip text-caption font-semibold mb-3">
                  Completed
                </div>
              )}

              {/* Doctor Info */}
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 bg-secondary-green/30 rounded-button flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-primary-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-text-primary mb-1">{appointment.doctor}</h3>
                  <p className="text-caption text-text-secondary mb-2">{appointment.specialty}</p>
                  <div className="flex items-center gap-4 text-caption text-text-secondary">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{appointment.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{appointment.time}</span>
                    </div>
                  </div>
                </div>
                <button className="flex-shrink-0 p-2 -mt-2 -mr-2">
                  <MoreVertical className="w-5 h-5 text-text-secondary" />
                </button>
              </div>

              {/* Appointment Type */}
              <div className="flex items-center gap-2 mb-4 p-3 bg-secondary-green/10 rounded-input">
                {appointment.type === "video" ? (
                  <>
                    <Video className="w-5 h-5 text-primary-green" />
                    <span className="text-body font-medium text-text-primary">Video Consultation</span>
                  </>
                ) : (
                  <>
                    <MapPin className="w-5 h-5 text-primary-green" />
                    <span className="text-body font-medium text-text-primary">In-Person Visit</span>
                  </>
                )}
              </div>

              {/* Action Buttons */}
              {activeTab === "upcoming" && (
                <div className="flex gap-3">
                  {appointment.type === "video" && (
                    <button className="flex-1 bg-primary-green text-white py-3 rounded-button text-button flex items-center justify-center gap-2">
                      <Video className="w-5 h-5" />
                      Join Call
                    </button>
                  )}
                  {appointment.type === "clinic" && (
                    <button className="flex-1 bg-primary-green text-white py-3 rounded-button text-button flex items-center justify-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Get Directions
                    </button>
                  )}
                  <button className="px-5 bg-secondary-green/20 text-primary-green rounded-button">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                  <button className="px-5 bg-secondary-green/20 text-primary-green rounded-button">
                    <Phone className="w-5 h-5" />
                  </button>
                </div>
              )}

              {activeTab === "past" && (
                <div className="flex gap-3">
                  <button className="flex-1 bg-secondary-green/20 text-primary-green py-3 rounded-button text-button">
                    View Details
                  </button>
                  <button className="flex-1 bg-primary-green text-white py-3 rounded-button text-button">
                    Book Again
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {appointments.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="w-24 h-24 bg-secondary-green/20 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-12 h-12 text-primary-green" />
            </div>
            <h3 className="text-heading-sm text-text-primary mb-2">No Appointments</h3>
            <p className="text-body text-text-secondary text-center mb-6">
              You don't have any {activeTab} appointments
            </p>
            <Link href="/book-appointment">
              <button className="bg-primary-green text-white px-6 py-3 rounded-button text-button">
                Book Appointment
              </button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
