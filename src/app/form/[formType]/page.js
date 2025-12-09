"use client";
import QuestionRenderer from "@/components/form/QuestionRenderer";
import React, { useEffect, useState } from "react";
import websiteQuestions from "@/data/website-questions.json";
import { useQuestionnaireStore } from "@/lib/store/questionnaireStore";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { IconCircle, IconEye } from "@tabler/icons-react";

import clsx from "clsx";

export default function Questions() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const { formType } = useParams();
  const editStep = searchParams.get("edit");

  const {
    step,
    answers,
    setAnswer,
    nextStep,
    setQuestions,
    questions,
    prevStep,
    isAllAnswered,
    getVisibleQuestions,
    setformType,
    resetForm,
  } = useQuestionnaireStore();

  useEffect(() => {
    async function loadData() {
      resetForm();
      try {
        const data = await import(`@/data/${formType}-questions.json`);
        setformType(formType);

        setQuestions(data.default.steps);
        setLoading(false);

        console.log("loading set to false");
      } catch (err) {
        console.error("Form type not found:", formType);
        router.push("/404");
      }
    }

    if (questions.length === 0) {
      loadData();
    } else {
      setLoading(false);
    }
  }, [formType, loading]);

  useEffect(() => window.scrollTo(0, 0), [step]);

  //Edit Question after review
  useEffect(() => {
    if (editStep !== null) {
      useQuestionnaireStore.setState({ step: Number(editStep) });
      setLoading(false);
    }
  }, [editStep]);

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center animate-spin ">
        <IconCircle className="h-8 w-8 text-gray-600" />
      </div>
    );

  if (questions.length === 0) return <p>Loading...</p>;

  const visibleQuestions = getVisibleQuestions();
  const currentQuestion = visibleQuestions[step];

  const handleNext = () => {
    const isDone = nextStep();
    if (isDone) {
      router.push("/form/review");
    }
  };

  //To show/hide review button
  const isAllAnswer = isAllAnswered();

  return (
    <div className="max-w-xl mx-auto p-5 py-20 flex flex-col gap-10">
      {/* Header */}
      <div className="flex gap-3 items-center">
        <Button onClick={prevStep} size={"icon"} className={"rounded-full"}>
          <ArrowLeft />
        </Button>
        <p className="text-sm text-gray-500">
          Step {step + 1} of {visibleQuestions.length}
        </p>
      </div>

      {/* Animated Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <QuestionRenderer
            question={currentQuestion}
            value={answers[currentQuestion.id]}
            onChange={(val) => setAnswer(currentQuestion.id, val)}
          />
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-3 w-full p-2">
        {isAllAnswer && (
          <Button
            className={
              "w-1/2 cursor-pointer active:scale-[0.9] hover:scale-[1.1]"
            }
            variant={"secondary"}
            onClick={() => {
              router.push("/form/review");
            }}
          >
            Review
            <IconEye />
          </Button>
        )}
        <Button
          className={clsx(
            isAllAnswer ? "w-1/2" : "w-full",
            "cursor-pointer active:scale-[0.9] hover:scale-[1.1]"
          )}
          onClick={handleNext}
        >
          Next <ArrowRight />
        </Button>
      </div>
    </div>
  );
}
