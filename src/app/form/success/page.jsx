"use client";
import React from "react";
import { CheckCircle, Calendar, MessageCircle, Home } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="backdrop-blur-xl bg-white/30 border border-white/40 shadow-2xl rounded-2xl p-10 max-w-lg w-full text-center space-y-8">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-green-500/10 rounded-full p-4">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-3xl font-semibold text-bla ">
          Your submission is complete.
        </h1>

        <p className="text-gray-700 text-[15px] leading-relaxed">
          Thanks for sharing your details. Your responses help us tailor the
          perfect strategy for your website.
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <a
            href="https://calendly.com/"
            className="bg-black text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <Calendar size={18} /> Schedule a Call
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            className="border border-green-500 text-green-700 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-50 transition"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>

          <a
            href="/"
            className="text-gray-500 hover:text-black text-sm transition mt-1 flex items-center justify-center gap-2"
          >
            <Home size={16} /> Return Home
          </a>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 pt-4">
          If you made a mistake or want to edit your responses, reply to the
          email we’ll send you.
        </p>
      </div>
    </div>
  );
}
