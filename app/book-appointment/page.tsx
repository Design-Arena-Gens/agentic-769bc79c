"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Video, MapPin, FileText, Check } from "lucide-react";

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("2024-03-20");
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [appointmentType, setAppointmentType] = useState("video");
  const [reason, setReason] = useState("");

  const timeSlots = [
    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM"
  ];

  const handleConfirm = () => {
    setStep(3);
  };

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
            <h1 className="text-heading-md font-bold text-primary-green">Book Appointment</h1>
            <p className="text-caption text-text-secondary">Step {step} of 2</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-6">
        {step === 1 && (
          <>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex gap-2">
                <div className="h-1 flex-1 bg-primary-green rounded-full"></div>
                <div className="h-1 flex-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>

            {/* Doctor Info */}
            <div className="bg-white rounded-card p-5 shadow-custom mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-secondary-green/30 rounded-button flex items-center justify-center flex-shrink-0">
                  <User className="w-8 h-8 text-primary-green" />
                </div>
                <div>
                  <h3 className="text-body font-semibold text-text-primary mb-1">Dr. Emily Chen</h3>
                  <p className="text-caption text-text-secondary mb-2">General Physician</p>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-text-secondary" />
                    <span className="text-caption text-text-secondary">City General Hospital</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Type */}
            <div className="mb-6">
              <h3 className="text-body font-semibold text-text-primary mb-3">Appointment Type</h3>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setAppointmentType("video")}
                  className={`p-4 rounded-button border-2 transition-all ${
                    appointmentType === "video"
                      ? "border-primary-green bg-primary-green/5"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <Video className={`w-6 h-6 mx-auto mb-2 ${appointmentType === "video" ? "text-primary-green" : "text-text-secondary"}`} />
                  <p className="text-body font-semibold text-text-primary">Video Call</p>
                  <p className="text-caption text-text-secondary mt-1">$80</p>
                </button>
                <button
                  onClick={() => setAppointmentType("clinic")}
                  className={`p-4 rounded-button border-2 transition-all ${
                    appointmentType === "clinic"
                      ? "border-primary-green bg-primary-green/5"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <MapPin className={`w-6 h-6 mx-auto mb-2 ${appointmentType === "clinic" ? "text-primary-green" : "text-text-secondary"}`} />
                  <p className="text-body font-semibold text-text-primary">Clinic Visit</p>
                  <p className="text-caption text-text-secondary mt-1">$100</p>
                </button>
              </div>
            </div>

            {/* Select Date */}
            <div className="mb-6">
              <h3 className="text-body font-semibold text-text-primary mb-3">Select Date</h3>
              <div className="bg-white rounded-card p-5 shadow-custom">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                    <div key={day} className="text-center text-caption text-text-secondary font-medium">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {[15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28].map((date) => (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(`2024-03-${date}`)}
                      className={`aspect-square rounded-chip text-body font-medium transition-all ${
                        selectedDate === `2024-03-${date}`
                          ? "bg-primary-green text-white"
                          : date < 18
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-white hover:bg-gray-50 text-text-primary"
                      }`}
                      disabled={date < 18}
                    >
                      {date}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Select Time */}
            <div className="mb-6">
              <h3 className="text-body font-semibold text-text-primary mb-3">Select Time</h3>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`py-3 rounded-button text-body font-medium transition-all ${
                      selectedTime === time
                        ? "bg-primary-green text-white"
                        : "bg-white text-text-primary hover:bg-gray-50 shadow-custom"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Reason for Visit */}
            <div className="mb-6">
              <h3 className="text-body font-semibold text-text-primary mb-3">Reason for Visit</h3>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Describe your symptoms or reason for consultation..."
                className="w-full px-4 py-4 bg-white rounded-input border-2 border-transparent focus:border-primary-green outline-none text-body resize-none shadow-custom"
                rows={4}
              />
            </div>

            {/* Continue Button */}
            <button
              onClick={() => setStep(2)}
              className="w-full bg-primary-green text-white py-4 rounded-button text-button shadow-custom"
            >
              Continue to Review
            </button>
          </>
        )}

        {step === 2 && (
          <>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex gap-2">
                <div className="h-1 flex-1 bg-primary-green rounded-full"></div>
                <div className="h-1 flex-1 bg-primary-green rounded-full"></div>
              </div>
            </div>

            {/* Review Section */}
            <div className="bg-white rounded-card p-5 shadow-custom mb-6">
              <h3 className="text-heading-sm font-bold text-text-primary mb-4">Review Details</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <User className="w-5 h-5 text-primary-green mt-1" />
                  <div className="flex-1">
                    <p className="text-caption text-text-secondary mb-1">Doctor</p>
                    <p className="text-body font-semibold text-text-primary">Dr. Emily Chen</p>
                    <p className="text-caption text-text-secondary">General Physician</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <Video className="w-5 h-5 text-primary-green mt-1" />
                  <div className="flex-1">
                    <p className="text-caption text-text-secondary mb-1">Appointment Type</p>
                    <p className="text-body font-semibold text-text-primary">
                      {appointmentType === "video" ? "Video Consultation" : "Clinic Visit"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <Calendar className="w-5 h-5 text-primary-green mt-1" />
                  <div className="flex-1">
                    <p className="text-caption text-text-secondary mb-1">Date & Time</p>
                    <p className="text-body font-semibold text-text-primary">March 20, 2024</p>
                    <p className="text-caption text-text-secondary">{selectedTime}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                  <FileText className="w-5 h-5 text-primary-green mt-1" />
                  <div className="flex-1">
                    <p className="text-caption text-text-secondary mb-1">Reason for Visit</p>
                    <p className="text-body text-text-primary">{reason || "Not specified"}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-body text-text-secondary">Consultation Fee</p>
                  <p className="text-body font-semibold text-text-primary">
                    {appointmentType === "video" ? "$80" : "$100"}
                  </p>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-body text-text-secondary">Service Fee</p>
                  <p className="text-body font-semibold text-text-primary">$5</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <p className="text-body font-bold text-text-primary">Total</p>
                  <p className="text-heading-sm font-bold text-primary-green">
                    {appointmentType === "video" ? "$85" : "$105"}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-card p-5 shadow-custom mb-6">
              <h3 className="text-body font-semibold text-text-primary mb-3">Payment Method</h3>
              <div className="flex items-center justify-between p-4 bg-secondary-green/10 rounded-input">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-primary-green rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                  <div>
                    <p className="text-body font-semibold text-text-primary">•••• 4242</p>
                    <p className="text-caption text-text-secondary">Expires 12/25</p>
                  </div>
                </div>
                <button className="text-caption text-primary-green font-semibold">Change</button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-secondary-green/20 text-primary-green py-4 rounded-button text-button"
              >
                Back
              </button>
              <button
                onClick={handleConfirm}
                className="flex-1 bg-primary-green text-white py-4 rounded-button text-button shadow-custom"
              >
                Confirm & Pay
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <div className="w-24 h-24 bg-success rounded-full flex items-center justify-center mb-6">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-heading-lg text-text-primary text-center mb-3">Booking Confirmed!</h2>
            <p className="text-body text-text-secondary text-center mb-8 max-w-xs">
              Your appointment with Dr. Emily Chen has been successfully booked.
            </p>

            <div className="bg-white rounded-card p-6 shadow-custom mb-6 w-full">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-primary-green" />
                <div>
                  <p className="text-caption text-text-secondary">Date & Time</p>
                  <p className="text-body font-semibold text-text-primary">March 20, 2024 at {selectedTime}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-primary-green" />
                <div>
                  <p className="text-caption text-text-secondary">Appointment ID</p>
                  <p className="text-body font-semibold text-text-primary">#APT-2024-0318</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 w-full">
              <Link href="/appointments" className="flex-1">
                <button className="w-full bg-secondary-green/20 text-primary-green py-4 rounded-button text-button">
                  View Appointments
                </button>
              </Link>
              <Link href="/" className="flex-1">
                <button className="w-full bg-primary-green text-white py-4 rounded-button text-button">
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
