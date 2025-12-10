"use client";
import React, { useEffect } from "react";
import { CheckCircle, Calendar, MessageCircle, Home } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SuccessPage() {
  const router = useRouter();
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "lets-konnect-and-grow" });
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          light: { "cal-brand": "#e85102" },
          dark: { "cal-brand": "#e85102" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
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
          <Button
            data-cal-namespace="lets-konnect-and-grow"
            data-cal-link="sckonnect/lets-konnect-and-grow"
            data-cal-config='{"layout":"month_view"}'
            variant={"outline"}
            className="bg-black h-13 cursor-pointer text-white py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:opacity-90 transition"
          >
            <Calendar size={18} /> Schedule a Call
          </Button>

          <Link
            href="https://wa.me/918263919255"
            className="border border-green-500 text-green-700 py-3 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-green-50 transition"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </Link>

          <Link
            href="/form"
            className="text-gray-500 hover:text-black text-sm transition mt-1 flex items-center justify-center gap-2"
          >
            <Home size={16} /> Fill Another Form
          </Link>
        </div>

        {/* Footer Note */}
        <p className="text-xs text-gray-500 pt-4">
          If you made a mistake or want to edit your responses, please contact
          us on WhatsApp
        </p>
      </div>
    </div>
  );
}
