"use client";
import { useQuestionnaireStore } from "@/lib/store/questionnaireStore";
import React from "react";
import websiteQuestions from "@/data/website-questions.json";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { IconPencil } from "@tabler/icons-react";

export default function ReviewComponent() {
  const router = useRouter();
  const { answers, goToStep, questions } = useQuestionnaireStore();

  return (
    <div className="max-w-2xl mx-auto py-16 space-y-10">
      <h1 className="text-3xl font-semibold">Review Your Answers</h1>

      <div className="space-y-6">
        {questions.map((q, index) => (
          <div
            key={q.id}
            className="border p-4 rounded-lg flex justify-between"
          >
            <div>
              <p className="font-medium">{q.label}</p>
              <p className="text-gray-700">{answers[q.id] ?? "Not answered"}</p>
            </div>

            <Button
              onClick={() => router.push(`/form/questions?edit=${index}`)}
              variant={"outline"}
              size={"icon"}
            >
              <IconPencil />
            </Button>
          </div>
        ))}
      </div>

      <Button onClick={() => router.push("/form/success")}>
        Confirm & Submit →
      </Button>
    </div>
  );
}
