"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function ViewSubmission({ params }) {
  const { id } = React.use(params);
  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSubmission = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`/api/admin/submissions/${id}`);
        setSubmission(res.data.submission);
      } catch (err) {
        console.error(err);
        setError("Failed to load submission.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchSubmission();
  }, [id]);

  if (loading) {
    return <p className="p-10 text-sm text-neutral-500">Loading...</p>;
  }

  if (error || !submission) {
    return (
      <div className="p-10 space-y-4">
        <p className="text-sm text-red-500">
          {error || "Submission not found."}
        </p>
        <Link
          href="/admin"
          className="inline-flex text-sm text-neutral-600 underline underline-offset-4"
        >
          ← Back to dashboard
        </Link>
      </div>
    );
  }

  const answers = submission.answers || [];

  const getAnswer = (fieldId) =>
    answers.find((a) => a.id === fieldId)?.answer || "-";

  const businessName = getAnswer("business_name");
  const email = getAnswer("contact_email");
  const phone = getAnswer("contact_phone");

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 space-y-8">
      {/* Top bar */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Submission Details
          </h1>
          <p className="text-sm text-neutral-500 mt-1">
            Form type:{" "}
            <span className="font-medium">{submission.form_type}</span>
          </p>
        </div>

        <Link
          href="/admin"
          className="text-xs md:text-sm text-neutral-600 underline underline-offset-4"
        >
          ← Back to dashboard
        </Link>
      </div>

      {/* Summary card */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 space-y-3 shadow-sm">
        <div className="flex flex-wrap justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              Business / Brand
            </p>
            <p className="text-base font-medium text-neutral-900">
              {businessName}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              Submitted on
            </p>
            <p className="text-sm font-medium text-neutral-900">
              {submission.created_at
                ? new Date(submission.created_at).toLocaleString()
                : "-"}
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-wrap gap-4 pt-4 border-t border-dashed border-neutral-200">
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              Email
            </p>
            <p className="text-sm text-neutral-900 break-all">{email}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-neutral-500">
              Phone
            </p>
            <p className="text-sm text-neutral-900">{phone}</p>
          </div>
        </div>
      </div>

      {/* Answers list */}
      <div className="rounded-2xl border border-neutral-200 bg-white p-5 md:p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-neutral-900">
          Form Responses
        </h2>

        <div className="space-y-3">
          {answers.map((field) => (
            <div
              key={field.id}
              className="rounded-xl border border-neutral-100 bg-neutral-50/60 px-4 py-3"
            >
              <p className="text-xs font-medium text-neutral-500">
                {field.label}
              </p>
              <p className="text-sm text-neutral-900 mt-1 whitespace-pre-wrap">
                {field.answer}
              </p>
            </div>
          ))}

          {answers.length === 0 && (
            <p className="text-sm text-neutral-500">
              No answers recorded for this submission.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
