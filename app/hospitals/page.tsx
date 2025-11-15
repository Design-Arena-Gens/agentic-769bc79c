"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, Building2, MapPin, Star, Phone, Clock, ChevronRight, Navigation, Filter, Bed, Stethoscope, Ambulance } from "lucide-react";

export default function HospitalsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const hospitals = [
    {
      id: 1,
      name: "City General Hospital",
      type: "Multi-Specialty",
      rating: 4.8,
      reviews: 512,
      distance: "2.3 km",
      address: "123 Medical Plaza, New York",
      beds: 350,
      departments: ["Emergency", "Cardiology", "Neurology"],
      emergency: true,
      open24: true
    },
    {
      id: 2,
      name: "Metro Medical Center",
      type: "Super Specialty",
      rating: 4.7,
      reviews: 389,
      distance: "3.5 km",
      address: "456 Health Avenue, New York",
      beds: 500,
      departments: ["Oncology", "Cardiology", "Orthopedics"],
      emergency: true,
      open24: true
    },
    {
      id: 3,
      name: "Children's Hospital",
      type: "Pediatric Specialty",
      rating: 4.9,
      reviews: 678,
      distance: "4.2 km",
      address: "789 Kids Care Blvd, New York",
      beds: 200,
      departments: ["Pediatrics", "NICU", "Surgery"],
      emergency: true,
      open24: true
    },
    {
      id: 4,
      name: "Vision Care Eye Hospital",
      type: "Eye Specialty",
      rating: 4.6,
      reviews: 234,
      distance: "1.8 km",
      address: "321 Eye Care St, New York",
      beds: 50,
      departments: ["Ophthalmology", "Optometry"],
      emergency: false,
      open24: false
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
            <h1 className="text-heading-md font-bold text-primary-green">Hospitals</h1>
            <p className="text-caption text-text-secondary">Find nearby hospitals</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search hospitals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-input border-2 border-transparent focus:border-primary-green outline-none text-body shadow-custom"
          />
        </div>

        {/* Filter Options */}
        <div className="flex gap-3 mb-6">
          <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-chip text-body text-text-primary shadow-custom flex-1">
            <MapPin className="w-5 h-5 text-primary-green" />
            <span>Nearby</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-3 bg-white rounded-chip text-body text-text-primary shadow-custom">
            <Filter className="w-5 h-5 text-primary-green" />
          </button>
        </div>

        {/* Emergency Banner */}
        <div className="bg-error rounded-card p-5 shadow-custom mb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <Ambulance className="w-7 h-7 text-error" />
            </div>
            <div className="flex-1">
              <h3 className="text-body font-bold text-white mb-1">Emergency Services</h3>
              <p className="text-caption text-white/90">Call 911 for immediate assistance</p>
            </div>
            <button className="bg-white text-error px-4 py-2 rounded-button text-caption font-semibold">
              Call
            </button>
          </div>
        </div>

        {/* Hospitals List */}
        <div className="space-y-4">
          {hospitals.map((hospital) => (
            <div key={hospital.id} className="bg-white rounded-card p-5 shadow-custom hover:shadow-lg transition-all">
              {/* Hospital Header */}
              <div className="flex gap-4 mb-4">
                <div className="w-16 h-16 bg-primary-green/10 rounded-button flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-8 h-8 text-primary-green" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-body font-semibold text-text-primary mb-1">{hospital.name}</h3>
                      <p className="text-caption text-primary-green font-medium mb-2">{hospital.type}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-text-secondary flex-shrink-0" />
                  </div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-warning text-warning" />
                      <span className="text-caption font-semibold text-text-primary">{hospital.rating}</span>
                      <span className="text-caption text-text-secondary">({hospital.reviews})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-text-secondary" />
                      <span className="text-caption text-text-secondary">{hospital.distance}</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-1">
                    <MapPin className="w-4 h-4 text-text-secondary mt-0.5 flex-shrink-0" />
                    <p className="text-caption text-text-secondary">{hospital.address}</p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {hospital.emergency && (
                  <span className="px-3 py-1 bg-error/10 text-error rounded-chip text-caption font-semibold flex items-center gap-1">
                    <Ambulance className="w-3 h-3" />
                    Emergency
                  </span>
                )}
                {hospital.open24 && (
                  <span className="px-3 py-1 bg-success/10 text-success rounded-chip text-caption font-semibold flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    24/7
                  </span>
                )}
                <span className="px-3 py-1 bg-secondary-green/20 text-primary-green rounded-chip text-caption font-semibold flex items-center gap-1">
                  <Bed className="w-3 h-3" />
                  {hospital.beds} Beds
                </span>
              </div>

              {/* Departments */}
              <div className="mb-4 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Stethoscope className="w-4 h-4 text-primary-green" />
                  <p className="text-caption text-text-secondary">Key Departments:</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {hospital.departments.map((dept, idx) => (
                    <span key={idx} className="px-3 py-1 bg-background text-text-primary rounded-chip text-caption">
                      {dept}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button className="flex-1 bg-primary-green text-white py-3 rounded-button text-button flex items-center justify-center gap-2">
                  <Navigation className="w-5 h-5" />
                  Directions
                </button>
                <button className="px-5 bg-secondary-green/20 text-primary-green rounded-button">
                  <Phone className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Map View Button */}
        <button className="w-full mt-6 bg-white text-primary-green py-4 rounded-button text-button shadow-custom flex items-center justify-center gap-2">
          <MapPin className="w-5 h-5" />
          View on Map
        </button>
      </main>
    </div>
  );
}
