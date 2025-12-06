import { Button } from "@/components/ui/button";
import { IconArrowAutofitLeft, IconArrowUpRight } from "@tabler/icons-react";
import React from "react";
import Logo from "../(client)/components/header/Logo";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen  w-full items-center justify-center">
      <div className="relative h-[80vh] max-w-screen-xl w-full border flex justify-center items-center rounded-4xl p-20 ">
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
          <Link href={"/form/website-type"}>
            <Button className={"w-max"}>
              Get Started <IconArrowUpRight />
            </Button>
          </Link>
        </div>

        <div className="bottom-5 right-5 absolute">
          <Logo darkText={true} />
        </div>
      </div>
    </div>
  );
}
