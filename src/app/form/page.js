"use client";
import { Button } from "@/components/ui/button";
import { IconArrowAutofitLeft, IconArrowUpRight } from "@tabler/icons-react";
import React from "react";
import Logo from "../(client)/components/header/Logo";
import Link from "next/link";
import { toast } from "sonner";

export default function Page() {
  const underDevelop = () => {
    toast("The form is not ready yet... :/");
  };
  return (
    <div className="flex min-h-screen  w-full items-center justify-center">
      <div className="relative h-[80vh] max-w-7xl w-full border flex justify-center items-center rounded-4xl p-20 ">
        <div className="flex flex-col min-h-50 gap-4 max-w-2xl">
          {/* <p className=" text-sm text-neutral-600 border px-2 py-1 rounded-sm">
            This short questionnaire helps us understand your goals,
            requirements, and expectations so we can plan your project properly
            — without guesswork.
          </p> */}
          <h1 className="text-4xl font-bold">
            Tell Us About Your{" "}
            <span className="text-primary italic"> Project</span> 🚀
          </h1>
          <p className="text-neutral-600 ">
            It takes just 4–7 minutes to complete. <br /> Once submitted, our
            team will review your answers and get back with a tailored plan,
            timeline, and estimated pricing.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href={"/form/website"}>
              <div
                className={
                  "w-max cursor-pointer flex gap-3 border rounded-xl px-4 hover:bg-accent duration-200 transition-all py-3"
                }
              >
                Website <IconArrowUpRight />
              </div>
            </Link>
            <Link href={"/form/logo"}>
              <div
                className={
                  "w-max cursor-pointer flex gap-3 border rounded-xl px-4 hover:bg-accent duration-200 transition-all py-3"
                }
              >
                Logo Design <IconArrowUpRight />
              </div>
            </Link>
            <Link href={"/form/social"}>
              <div
                className={
                  "w-max cursor-pointer flex gap-3 border rounded-xl px-4 hover:bg-accent duration-200 transition-all py-3"
                }
              >
                Social Media Management <IconArrowUpRight />
              </div>
            </Link>
            <Link href={"/form/performance"}>
              <div
                className={
                  "w-max cursor-pointer flex gap-3 border rounded-xl px-4 hover:bg-accent duration-200 transition-all py-3"
                }
              >
                Performance Marketing <IconArrowUpRight />
              </div>
            </Link>
          </div>
        </div>

        <div className="bottom-5 right-5 absolute">
          <Logo darkText={true} />
        </div>
      </div>
    </div>
  );
}
