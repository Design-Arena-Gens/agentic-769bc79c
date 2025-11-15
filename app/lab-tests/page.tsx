"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search, TestTube, MapPin, Clock, Star, ChevronRight, Filter, Calendar } from "lucide-react";

export default function LabTestsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Blood Tests", "Imaging", "Pathology", "Diagnostic"];

  const labTests = [
    {
      id: 1,
      name: "Complete Blood Count (CBC)",
      category: "Blood Tests",
      price: 25,
      duration: "2-4 hours",
      description: "Measures blood cells and overall health",
      popular: true
    },
    {
      id: 2,
      name: "Lipid Profile",
      category: "Blood Tests",
      price: 35,
      duration: "4-6 hours",
      description: "Cholesterol and triglycerides levels",
      popular: true
    },
    {
      id: 3,
      name: "X-Ray Chest",
      category: "Imaging",
      price: 50,
      duration: "30 minutes",
      description: "Chest X-ray imaging",
      popular: false
    },
    {
      id: 4,
      name: "Thyroid Function Test",
      category: "Blood Tests",
      price: 40,
      duration: "4-6 hours",
      description: "TSH, T3, T4 hormone levels",
      popular: true
    },
    {
      id: 5,
      name: "Diabetes Screening (HbA1c)",
      category: "Blood Tests",
      price: 30,
      duration: "2-4 hours",
      description: "Blood sugar control over 3 months",
      popular: false
    },
    {
      id: 6,
      name: "Ultrasound Abdomen",
      category: "Imaging",
      price: 80,
      duration: "30 minutes",
      description: "Abdominal organ imaging",
      popular: false
    },
  ];

  const labCenters = [
    {
      id: 1,
      name: "City Diagnostics Center",
      rating: 4.8,
      reviews: 234,
      distance: "1.2 km",
      timeSlots: ["9:00 AM", "11:00 AM", "2:00 PM"]
    },
    {
      id: 2,
      name: "Metro Lab Services",
      rating: 4.7,
      reviews: 189,
      distance: "2.5 km",
      timeSlots: ["8:00 AM", "10:00 AM", "3:00 PM"]
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
            <h1 className="text-heading-md font-bold text-primary-green">Lab Tests</h1>
            <p className="text-caption text-text-secondary">Book tests & get results</p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-6">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-secondary" />
          <input
            type="text"
            placeholder="Search lab tests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-input border-2 border-transparent focus:border-primary-green outline-none text-body shadow-custom"
          />
        </div>

        {/* Categories */}
        <div className="mb-6">
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-3 rounded-chip text-body font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-primary-green text-white shadow-custom"
                    : "bg-white text-text-primary shadow-custom"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Popular Tests */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-4">Popular Tests</h3>
          <div className="space-y-3">
            {labTests.filter(test => test.popular).map((test) => (
              <div key={test.id} className="bg-white rounded-card p-5 shadow-custom hover:shadow-lg transition-all">
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-primary-green/10 rounded-button flex items-center justify-center flex-shrink-0">
                    <TestTube className="w-7 h-7 text-primary-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-body font-semibold text-text-primary mb-1">{test.name}</h4>
                        <p className="text-caption text-text-secondary mb-2">{test.description}</p>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-text-secondary" />
                            <span className="text-caption text-text-secondary">{test.duration}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-heading-sm font-bold text-primary-green">${test.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="w-full mt-4 bg-primary-green text-white py-3 rounded-button text-button">
                  Book Test
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* All Tests */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-heading-sm text-text-primary">All Tests</h3>
            <button className="text-caption text-primary-green font-semibold">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {labTests.map((test) => (
              <div key={test.id} className="bg-white rounded-card p-4 shadow-custom hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-secondary-green/30 rounded-button flex items-center justify-center mb-3">
                  <TestTube className="w-6 h-6 text-primary-green" />
                </div>
                <h4 className="text-body font-semibold text-text-primary mb-2 line-clamp-2">{test.name}</h4>
                <p className="text-caption text-text-secondary mb-3">{test.duration}</p>
                <div className="flex items-center justify-between">
                  <p className="text-body font-bold text-primary-green">${test.price}</p>
                  <button className="text-caption text-primary-green font-semibold">Book</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lab Centers Near You */}
        <div className="mb-6">
          <h3 className="text-heading-sm text-text-primary mb-4">Lab Centers Near You</h3>
          <div className="space-y-3">
            {labCenters.map((center) => (
              <div key={center.id} className="bg-white rounded-card p-5 shadow-custom hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="text-body font-semibold text-text-primary mb-1">{center.name}</h4>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-warning text-warning" />
                        <span className="text-caption font-semibold text-text-primary">{center.rating}</span>
                        <span className="text-caption text-text-secondary">({center.reviews})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-text-secondary" />
                        <span className="text-caption text-text-secondary">{center.distance}</span>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-text-secondary" />
                </div>
                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <Calendar className="w-5 h-5 text-primary-green" />
                  <div className="flex gap-2 overflow-x-auto hide-scrollbar">
                    {center.timeSlots.map((slot, idx) => (
                      <span key={idx} className="text-caption text-text-secondary whitespace-nowrap">
                        {slot}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Home Sample Collection Banner */}
        <div className="bg-gradient-to-br from-primary-green to-secondary-green rounded-card p-6 shadow-custom">
          <h3 className="text-heading-sm text-white mb-2">Home Sample Collection</h3>
          <p className="text-body text-white/80 mb-4">Get your samples collected at home with certified professionals</p>
          <button className="bg-white text-primary-green px-6 py-3 rounded-button text-button font-semibold">
            Book Home Collection
          </button>
        </div>
      </main>
    </div>
  );
}
