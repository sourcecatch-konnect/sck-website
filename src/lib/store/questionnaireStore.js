import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useQuestionnaireStore = create(
  persist(
    (set, get) => ({
      selectedService: null,
      formType: null,
      step: 0,
      questions: [],
      answers: {},
      submitted: false,

      // LOAD QUESTIONS
      setQuestions: (data) => set({ questions: data }),

      // SET SERVICE (reset flow)
      setService: (service) =>
        set({
          selectedService: service,
          formType: null,
          step: 0,
          answers: {},
          questions: [],
        }),

      setformType: (type) => set({ formType: type }),

      // SET ANSWER
      setAnswer: (id, val) =>
        set((state) => ({
          answers: { ...state.answers, [id]: val },
        })),

      // VISIBILITY LOGIC
      isQuestionVisible: (questionId) => {
        const { questions, answers } = get();

        // find parent question that owns this conditional child
        const parent = questions.find((q) =>
          Object.values(q.conditional || {})
            .flat()
            .includes(questionId)
        );

        if (!parent) return true; // normal question

        const selected = answers[parent.id];
        if (!selected) return false;

        const allowed = parent.conditional?.[selected] || [];

        return allowed.includes(questionId);
      },

      getVisibleQuestions: () => {
        const state = get();
        return state.questions.filter((q) => state.isQuestionVisible(q.id));
      },

      // STEP SYSTEM BASED ON VISIBLE QUESTIONS
      nextStep: () => {
        const { step, getVisibleQuestions, answers } = get();
        const visible = getVisibleQuestions();

        const current = visible[step];

        if (current.required) {
          const ans = answers[current.id];
          if (!ans || ans === "") {
            return false; // block next step
          }
        }

        if (step < visible.length - 1) {
          set({ step: step + 1 });
          return false;
        }

        return true; // completed
      },

      prevStep: () => {
        const { step } = get();
        if (step > 0) set({ step: step - 1 });
      },

      goToStep: (i) => {
        const visible = get().getVisibleQuestions();
        if (i >= 0 && i < visible.length) set({ step: i });
      },

      // CHECK IF ALL VISIBLE QUESTIONS ARE ANSWERED
      isAllAnswered: () => {
        const state = get();
        const rawVisible = state.getVisibleQuestions();
        const requiredQuestions = rawVisible.filter((q) => q.required);
        return requiredQuestions.every((q) => {
          const val = state.answers[q.id];
          return val !== undefined && val !== null && val !== "";
        });
      },

      resetForm: () =>
        set({
          selectedService: null,
          formType: null,
          step: 0,
          answers: {},
          submitted: false,
        }),

      setSubmitted: () => set(() => ({ submitted: true })),
    }),
    { name: "questionnaire-storage" }
  )
);
