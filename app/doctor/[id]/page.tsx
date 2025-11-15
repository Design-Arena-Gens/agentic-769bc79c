"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Star, MapPin, Briefcase, GraduationCap, Award, Clock, DollarSign, Calendar, Heart, MessageCircle, Share2, User, Video, Building2 } from "lucide-react";

export default function DoctorDetailPage() {
  const [selectedTab, setSelectedTab] = useState("about");

  const doctor = {
    name: "Dr. Emily Chen",
    specialty: "Cardiologist",
    rating: 4.9,
    reviews: 234,
    experience: 15,
    patients: "2,500+",
    hospital: "City General Hospital",
    address: "123 Medical Plaza, New York",
    fee: 80,
    education: [
      { degree: "MD - Cardiology", institution: "Harvard Medical School", year: "2008" },
      { degree: "MBBS", institution: "Johns Hopkins University", year: "2004" }
    ],
    specializations: ["Heart Disease", "Hypertension", "Arrhythmia", "Heart Failure"],
    languages: ["English", "Spanish", "Mandarin"],
    awards: [
      "Best Cardiologist Award 2023",
      "Excellence in Patient Care 2022"
    ],
    about: "Dr. Emily Chen is a highly experienced cardiologist with over 15 years of practice. She specializes in the diagnosis and treatment of heart conditions, with a focus on preventive cardiology and patient education.",
  };

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      date: "Mar 10, 2024",
      comment: "Excellent doctor! Very thorough and took time to explain everything. Highly recommend."
    },
    {
      id: 2,
      name: "Maria Garcia",
      rating: 5,
      date: "Mar 8, 2024",
      comment: "Dr. Chen is amazing. She really cares about her patients and provides great care."
    },
    {
      id: 3,
      name: "David Lee",
      rating: 4,
      date: "Mar 5, 2024",
      comment: "Very professional and knowledgeable. Wait time was a bit long but worth it."
    },
  ];

  const availableSlots = [
    { date: "Mar 18", day: "Mon", slots: ["10:00 AM", "2:00 PM", "4:30 PM"] },
    { date: "Mar 19", day: "Tue", slots: ["9:00 AM", "11:00 AM", "3:00 PM"] },
    { date: "Mar 20", day: "Wed", slots: ["10:30 AM", "2:30 PM", "5:00 PM"] },
  ];

  return (
    <div className="min-h-screen bg-background pb-8">
      {/* Header */}
      <header className="bg-white shadow-custom px-6 py-4 sticky top-0 z-50">
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <Link href="/find-doctor">
            <button className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6 text-text-primary" />
            </button>
          </Link>
          <h1 className="text-heading-md font-bold text-primary-green flex-1">Doctor Profile</h1>
          <button className="p-2">
            <Heart className="w-6 h-6 text-text-secondary" />
          </button>
          <button className="p-2">
            <Share2 className="w-6 h-6 text-text-secondary" />
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        {/* Doctor Info Card */}
        <div className="bg-gradient-to-br from-primary-green to-secondary-green px-6 py-8">
          <div className="flex gap-4 mb-6">
            <div className="w-24 h-24 bg-white rounded-card flex items-center justify-center flex-shrink-0 shadow-custom">
              <User className="w-12 h-12 text-primary-green" />
            </div>
            <div className="flex-1 text-white">
              <h2 className="text-heading-md font-bold mb-1">{doctor.name}</h2>
              <p className="text-body mb-3">{doctor.specialty}</p>
              <div className="flex items-center gap-2 mb-2">
                <Star className="w-5 h-5 fill-white text-white" />
                <span className="text-body font-semibold">{doctor.rating}</span>
                <span className="text-body opacity-80">({doctor.reviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-button p-3 text-center">
              <Briefcase className="w-5 h-5 text-white mx-auto mb-1" />
              <p className="text-body font-bold text-white">{doctor.experience}+</p>
              <p className="text-caption text-white/80">Years</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-button p-3 text-center">
              <User className="w-5 h-5 text-white mx-auto mb-1" />
              <p className="text-body font-bold text-white">{doctor.patients}</p>
              <p className="text-caption text-white/80">Patients</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-button p-3 text-center">
              <Star className="w-5 h-5 text-white mx-auto mb-1" />
              <p className="text-body font-bold text-white">{doctor.rating}</p>
              <p className="text-caption text-white/80">Rating</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 py-4 bg-white shadow-custom">
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTab("about")}
              className={`flex-1 py-3 rounded-chip text-body font-semibold transition-all ${
                selectedTab === "about"
                  ? "bg-primary-green text-white"
                  : "text-text-secondary"
              }`}
            >
              About
            </button>
            <button
              onClick={() => setSelectedTab("reviews")}
              className={`flex-1 py-3 rounded-chip text-body font-semibold transition-all ${
                selectedTab === "reviews"
                  ? "bg-primary-green text-white"
                  : "text-text-secondary"
              }`}
            >
              Reviews
            </button>
            <button
              onClick={() => setSelectedTab("availability")}
              className={`flex-1 py-3 rounded-chip text-body font-semibold transition-all ${
                selectedTab === "availability"
                  ? "bg-primary-green text-white"
                  : "text-text-secondary"
              }`}
            >
              Availability
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="px-6 py-6">
          {selectedTab === "about" && (
            <div className="space-y-6">
              {/* About */}
              <div className="bg-white rounded-card p-5 shadow-custom">
                <h3 className="text-body font-semibold text-text-primary mb-3">About</h3>
                <p className="text-body text-text-secondary leading-relaxed">{doctor.about}</p>
              </div>

              {/* Location */}
              <div className="bg-white rounded-card p-5 shadow-custom">
                <h3 className="text-body font-semibold text-text-primary mb-3">Location</h3>
                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary-green mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-body font-medium text-text-primary mb-1">{doctor.hospital}</p>
                    <p className="text-caption text-text-secondary">{doctor.address}</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white rounded-card p-5 shadow-custom">
                <h3 className="text-body font-semibold text-text-primary mb-3">Education</h3>
                <div className="space-y-3">
                  {doctor.education.map((edu, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary-green mt-0.5" />
                      <div>
                        <p className="text-body font-medium text-text-primary">{edu.degree}</p>
                        <p className="text-caption text-text-secondary">{edu.institution} • {edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specializations */}
              <div className="bg-white rounded-card p-5 shadow-custom">
                <h3 className="text-body font-semibold text-text-primary mb-3">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.specializations.map((spec, idx) => (
                    <span key={idx} className="px-4 py-2 bg-secondary-green/20 text-primary-green rounded-chip text-caption font-medium">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="bg-white rounded-card p-5 shadow-custom">
                <h3 className="text-body font-semibold text-text-primary mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {doctor.languages.map((lang, idx) => (
                    <span key={idx} className="px-4 py-2 bg-background text-text-primary rounded-chip text-caption">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Awards */}
              <div className="bg-white rounded-card p-5 shadow-custom">
                <h3 className="text-body font-semibold text-text-primary mb-3">Awards & Recognition</h3>
                <div className="space-y-2">
                  {doctor.awards.map((award, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-warning mt-0.5" />
                      <p className="text-body text-text-primary">{award}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === "reviews" && (
            <div className="space-y-4">
              {/* Rating Summary */}
              <div className="bg-white rounded-card p-5 shadow-custom">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-primary-green mb-1">{doctor.rating}</p>
                    <div className="flex gap-1 mb-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                      ))}
                    </div>
                    <p className="text-caption text-text-secondary">{doctor.reviews} reviews</p>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-caption text-text-secondary w-2">{rating}</span>
                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-warning rounded-full"
                            style={{ width: rating === 5 ? "90%" : rating === 4 ? "8%" : "2%" }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews List */}
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-card p-5 shadow-custom">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-body font-semibold text-text-primary mb-1">{review.name}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? "fill-warning text-warning" : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-caption text-text-secondary">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-body text-text-secondary">{review.comment}</p>
                </div>
              ))}
            </div>
          )}

          {selectedTab === "availability" && (
            <div className="space-y-4">
              {/* Consultation Fee */}
              <div className="bg-white rounded-card p-5 shadow-custom">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-6 h-6 text-primary-green" />
                    <div>
                      <p className="text-caption text-text-secondary">Consultation Fee</p>
                      <p className="text-heading-sm font-bold text-text-primary">${doctor.fee}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Available Slots */}
              <div className="bg-white rounded-card p-5 shadow-custom">
                <h3 className="text-body font-semibold text-text-primary mb-4">Available Slots</h3>
                <div className="space-y-4">
                  {availableSlots.map((day, idx) => (
                    <div key={idx}>
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5 text-primary-green" />
                        <p className="text-body font-semibold text-text-primary">
                          {day.date} • {day.day}
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {day.slots.map((slot, slotIdx) => (
                          <button
                            key={slotIdx}
                            className="py-3 rounded-button text-body font-medium bg-secondary-green/10 text-primary-green hover:bg-primary-green hover:text-white transition-all"
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-custom border-t border-gray-200 px-6 py-4 z-50">
          <div className="max-w-md mx-auto flex gap-3">
            <button className="px-5 py-4 bg-secondary-green/20 text-primary-green rounded-button">
              <MessageCircle className="w-6 h-6" />
            </button>
            <Link href="/book-appointment" className="flex-1">
              <button className="w-full bg-primary-green text-white py-4 rounded-button text-button shadow-custom">
                Book Appointment
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
