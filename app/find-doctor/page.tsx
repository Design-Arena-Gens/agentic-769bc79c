"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, MapPin, Star, Filter, ChevronRight, Stethoscope, Heart, Brain, Eye, Bone, Baby, User } from "lucide-react";

export default function FindDoctorPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");

  const specialties = [
    { id: "All", name: "All", icon: Stethoscope },
    { id: "Cardiology", name: "Cardiology", icon: Heart },
    { id: "Neurology", name: "Neurology", icon: Brain },
    { id: "Ophthalmology", name: "Ophthalmology", icon: Eye },
    { id: "Orthopedics", name: "Orthopedics", icon: Bone },
    { id: "Pediatrics", name: "Pediatrics", icon: Baby },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Emily Chen",
      specialty: "Cardiology",
      rating: 4.9,
      reviews: 234,
      experience: "15 years",
      hospital: "City General Hospital",
      distance: "2.3 km",
      available: "Today at 3:00 PM",
      fee: "$80"
    },
    {
      id: 2,
      name: "Dr. James Wilson",
      specialty: "Neurology",
      rating: 4.8,
      reviews: 189,
      experience: "12 years",
      hospital: "Metro Medical Center",
      distance: "3.5 km",
      available: "Tomorrow at 10:00 AM",
      fee: "$90"
    },
    {
      id: 3,
      name: "Dr. Sarah Miller",
      specialty: "Ophthalmology",
      rating: 4.9,
      reviews: 312,
      experience: "18 years",
      hospital: "Vision Care Clinic",
      distance: "1.8 km",
      available: "Today at 5:00 PM",
      fee: "$75"
    },
    {
      id: 4,
      name: "Dr. Michael Brown",
      specialty: "Orthopedics",
      rating: 4.7,
      reviews: 156,
      experience: "10 years",
      hospital: "Bone & Joint Institute",
      distance: "4.2 km",
      available: "Mar 20 at 2:00 PM",
      fee: "$85"
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      specialty: "Pediatrics",
      rating: 4.9,
      reviews: 267,
      experience: "14 years",
      hospital: "Children's Hospital",
      distance: "2.7 km",
      available: "Today at 4:30 PM",
      fee: "$70"
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
          <div>
            <h1 className="text-heading-md font-bold text-primary-green">Find a Doctor</h1>
            <p className="text-caption text-text-secondary">Search by name or specialty</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search doctors, specialties..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-input border-2 border-transparent focus:border-primary-green outline-none text-body shadow-custom"
          />
        </div>

        {/* Location & Filter */}
        <div className="flex gap-3 mb-6">
          <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-chip text-body text-text-primary shadow-custom flex-1">
            <MapPin className="w-5 h-5 text-primary-green" />
            <span>New York, NY</span>
          </button>
          <button className="px-5 py-3 bg-primary-green rounded-chip shadow-custom">
            <Filter className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Specialty Chips */}
        <div className="mb-6">
          <h3 className="text-body font-semibold text-text-primary mb-3">Specialties</h3>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {specialties.map((specialty) => {
              const Icon = specialty.icon;
              return (
                <button
                  key={specialty.id}
                  onClick={() => setSelectedSpecialty(specialty.id)}
                  className={`flex flex-col items-center gap-2 px-4 py-3 rounded-button min-w-[90px] transition-all ${
                    selectedSpecialty === specialty.id
                      ? "bg-primary-green text-white shadow-custom"
                      : "bg-white text-text-primary shadow-custom"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-caption font-medium whitespace-nowrap">{specialty.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-body text-text-secondary">{doctors.length} doctors found</p>
          <button className="text-caption text-primary-green font-semibold">Sort by</button>
        </div>

        {/* Doctor List */}
        <div className="space-y-4">
          {doctors.map((doctor) => (
            <Link key={doctor.id} href={`/doctor/${doctor.id}`}>
              <div className="bg-white rounded-card p-5 shadow-custom hover:shadow-lg transition-all">
                <div className="flex gap-4 mb-4">
                  <div className="w-20 h-20 bg-secondary-green/30 rounded-button flex items-center justify-center flex-shrink-0">
                    <User className="w-10 h-10 text-primary-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-body font-semibold text-text-primary">{doctor.name}</h3>
                      <ChevronRight className="w-5 h-5 text-text-secondary flex-shrink-0" />
                    </div>
                    <p className="text-caption text-primary-green font-medium mb-1">{doctor.specialty}</p>
                    <p className="text-caption text-text-secondary mb-2">{doctor.hospital}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span className="text-caption font-semibold text-text-primary">{doctor.rating}</span>
                        <span className="text-caption text-text-secondary">({doctor.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-text-secondary" />
                        <span className="text-caption text-text-secondary">{doctor.distance}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-caption text-text-secondary mb-1">Next available</p>
                    <p className="text-body font-semibold text-text-primary">{doctor.available}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-caption text-text-secondary mb-1">Consultation</p>
                    <p className="text-heading-sm font-bold text-primary-green">{doctor.fee}</p>
                  </div>
                </div>

                <button className="w-full mt-4 bg-primary-green text-white py-3 rounded-button text-button">
                  Book Appointment
                </button>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
