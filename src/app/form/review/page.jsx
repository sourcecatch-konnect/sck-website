"use client";
import { useQuestionnaireStore } from "@/lib/store/questionnaireStore";
import React, { useEffect, useState } from "react";
import websiteQuestions from "@/data/website-questions.json";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IconPencil } from "@tabler/icons-react";
import axios from "axios";

export default function ReviewComponent() {
  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);
  const {
    answers,

    getVisibleQuestions,
    formType,
    resetForm,
    setSubmitted,
    submitted,
  } = useQuestionnaireStore();

  useEffect(() => {
    if (submitted) {
      router.push("/form/success");
    }
  }, [submitted]);
  useEffect(() => setHydrated(true), []);

  if (!hydrated) return null;
  const visibleQuestions = getVisibleQuestions();

  const submitForm = async () => {
    const answers = buildFinalPayload();
    try {
      await axios.post("/api/submitForm", { formType, answers });
      router.push("/form/success");
      setSubmitted();
      resetForm();
    } catch (error) {
      console.log("Error", error);
    }
  };

  const buildFinalPayload = () => {
    const clean = (str) =>
      typeof str === "string" ? str.replace(/\n+/g, " ").trim() : str;

    const merged = visibleQuestions.map((q) => {
      const raw = answers[q.id];
      let finalAnswer = raw;

      if (q.type === "card") {
        finalAnswer = q.options?.find((o) => o.value === raw)?.label || null;
      }

      if (q.type === "multi") {
        finalAnswer = Array.isArray(raw) ? raw.join(", ") : null;
      }

      return {
        id: q.id,
        label: q.label,
        answer: clean(finalAnswer),
      };
    });

    return merged;
  };

  console.log(JSON.stringify(answers, null, 2));

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-10">
      <h1 className="text-3xl font-semibold">Review Your Answers</h1>

      <div className="space-y-6  overflow-y-auto h-[70vh]">
        {visibleQuestions.map((q, index) => (
          <div
            key={q.id}
            className="border p-4 rounded-lg flex justify-between"
          >
            <div>
              <p className="font-medium">{q.label}</p>
              {q.type === "card" ? (
                <p className="text-gray-700">
                  {q.options.find((o) => o.value === answers[q.id])?.label ??
                    "Not answered"}
                </p>
              ) : q.type === "multi" ? (
                <p className="text-gray-700">
                  {Array.isArray(answers[q.id])
                    ? answers[q.id].join(", ")
                    : answers[q.id]}
                </p>
              ) : (
                <p className="text-gray-700">
                  {answers[q.id] ?? "Not answered"}
                </p>
              )}
            </div>

            <Button
              onClick={() => router.push(`/form/${formType}?edit=${index}`)}
              variant={"outline"}
              size={"icon"}
            >
              <IconPencil />
            </Button>
          </div>
        ))}
      </div>

      <Button onClick={submitForm}>Confirm & Submit →</Button>
    </div>
  );
}

const buildFinalPayload = () => {
  const merged = visibleQuestions.map((q) => {
    const raw = answers[q.id];

    let finalAnswer = raw;

    // If it's a card → convert value → label
    if (q.type === "card") {
      finalAnswer = q.options?.find((o) => o.value === raw)?.label || null;
    }

    // If it's radio with simple strings
    if (q.type === "radio") {
      finalAnswer = raw || null;
    }

    // Multi select (array → store as comma separated or array)
    if (q.type === "multi") {
      finalAnswer = Array.isArray(raw) ? raw.join(", ") : null;
    }

    return {
      label: q.label,
      answer: finalAnswer,
    };
  });

  return JSON.stringify(merged, null, 2);
};
