"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, User, ChevronRight, Heart, FileText, CreditCard, Bell, Shield, HelpCircle, LogOut, Camera, Calendar, MapPin, Phone, Mail } from "lucide-react";

export default function ProfilePage() {
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
          <h1 className="text-heading-md font-bold text-primary-green">Profile</h1>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 py-6">
        {/* Profile Header */}
        <div className="bg-gradient-to-br from-primary-green to-secondary-green rounded-card p-6 shadow-custom mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <User className="w-10 h-10 text-primary-green" />
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-custom">
                <Camera className="w-4 h-4 text-primary-green" />
              </button>
            </div>
            <div className="flex-1">
              <h2 className="text-heading-sm text-white mb-1">Sarah Johnson</h2>
              <p className="text-body text-white/80">sarah.johnson@email.com</p>
            </div>
          </div>
          <button className="w-full bg-white text-primary-green py-3 rounded-button text-button shadow-custom">
            Edit Profile
          </button>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-card p-5 shadow-custom mb-4">
          <h3 className="text-body font-semibold text-text-primary mb-4">Personal Information</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <Calendar className="w-5 h-5 text-primary-green" />
              <div className="flex-1">
                <p className="text-caption text-text-secondary">Date of Birth</p>
                <p className="text-body text-text-primary">March 15, 1990</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <User className="w-5 h-5 text-primary-green" />
              <div className="flex-1">
                <p className="text-caption text-text-secondary">Gender</p>
                <p className="text-body text-text-primary">Female</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
              <Phone className="w-5 h-5 text-primary-green" />
              <div className="flex-1">
                <p className="text-caption text-text-secondary">Phone Number</p>
                <p className="text-body text-text-primary">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary-green" />
              <div className="flex-1">
                <p className="text-caption text-text-secondary">Address</p>
                <p className="text-body text-text-primary">123 Main St, New York, NY 10001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Options */}
        <div className="space-y-3">
          {/* Health Records */}
          <Link href="/health-records">
            <div className="bg-white rounded-card p-4 shadow-custom hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-green/10 rounded-button flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-text-primary">Health Records</h3>
                  <p className="text-caption text-text-secondary">View your medical history</p>
                </div>
                <ChevronRight className="w-6 h-6 text-text-secondary" />
              </div>
            </div>
          </Link>

          {/* Documents */}
          <Link href="/documents">
            <div className="bg-white rounded-card p-4 shadow-custom hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary-green/30 rounded-button flex items-center justify-center">
                  <FileText className="w-6 h-6 text-primary-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-text-primary">Documents</h3>
                  <p className="text-caption text-text-secondary">Prescriptions & reports</p>
                </div>
                <ChevronRight className="w-6 h-6 text-text-secondary" />
              </div>
            </div>
          </Link>

          {/* Payment Methods */}
          <Link href="/payment-methods">
            <div className="bg-white rounded-card p-4 shadow-custom hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-green/10 rounded-button flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-primary-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-text-primary">Payment Methods</h3>
                  <p className="text-caption text-text-secondary">Manage your cards</p>
                </div>
                <ChevronRight className="w-6 h-6 text-text-secondary" />
              </div>
            </div>
          </Link>

          {/* Notifications */}
          <Link href="/notifications">
            <div className="bg-white rounded-card p-4 shadow-custom hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary-green/30 rounded-button flex items-center justify-center">
                  <Bell className="w-6 h-6 text-primary-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-text-primary">Notifications</h3>
                  <p className="text-caption text-text-secondary">Manage preferences</p>
                </div>
                <ChevronRight className="w-6 h-6 text-text-secondary" />
              </div>
            </div>
          </Link>

          {/* Privacy & Security */}
          <Link href="/privacy">
            <div className="bg-white rounded-card p-4 shadow-custom hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-green/10 rounded-button flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-text-primary">Privacy & Security</h3>
                  <p className="text-caption text-text-secondary">Your data protection</p>
                </div>
                <ChevronRight className="w-6 h-6 text-text-secondary" />
              </div>
            </div>
          </Link>

          {/* Help & Support */}
          <Link href="/support">
            <div className="bg-white rounded-card p-4 shadow-custom hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary-green/30 rounded-button flex items-center justify-center">
                  <HelpCircle className="w-6 h-6 text-primary-green" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body font-semibold text-text-primary">Help & Support</h3>
                  <p className="text-caption text-text-secondary">Get assistance</p>
                </div>
                <ChevronRight className="w-6 h-6 text-text-secondary" />
              </div>
            </div>
          </Link>

          {/* Logout */}
          <button className="w-full bg-white rounded-card p-4 shadow-custom hover:shadow-lg transition-all">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-error/10 rounded-button flex items-center justify-center">
                <LogOut className="w-6 h-6 text-error" />
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-body font-semibold text-error">Logout</h3>
                <p className="text-caption text-text-secondary">Sign out of your account</p>
              </div>
            </div>
          </button>
        </div>

        {/* App Version */}
        <div className="mt-8 text-center">
          <p className="text-caption text-text-secondary">Version 1.0.0</p>
        </div>
      </main>
    </div>
  );
}
