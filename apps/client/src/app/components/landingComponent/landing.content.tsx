"use client";
import { ILandingContentData } from "@/app/interfaces/Landing";
import { SquareArrowOutUpRight, Info } from "lucide-react";
import data from "@/data/landing.json";

export const LandingContent = () => {
  const landingContentPart: ILandingContentData = data;

  return (
    <div className="">
      <div className="mt-32 text-left">
        <div
          className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-8xl font-sans py-2 md:py-10 relative z-20 font-bold 
                tracking-tighter p-45 mt-22"
        >
          {landingContentPart.landingContent.heading}
        </div>
        <div className="max-w-2xl ml-46 text-xl tracking-tight text-neutral-700 dark:text-neutral-400 text-center">
          <p className="">{landingContentPart.landingContent.subHeading}</p>
        </div>
        <div className="flex ml-85 justify-space space-x-12 mt-14">
          <button className="text-white bg-green-900 border-transparent flex items-center font-sans font-semibold tracking-tight size-12 text-xl hover:cursor-pointer border  rounded-xl w-fit px-4 py-3">
            {landingContentPart.landingContent.button1}
            <SquareArrowOutUpRight className="ml-2" />
          </button>
          <button className="text-neutral-400 flex items-center tracking-tight font-sans font-semibold rounded-xl w-fit text-xl px-4 py-2 hover:cursor-pointer border border-neutral-400 p-1">
            {landingContentPart.landingContent.button2}
            <Info className="ml-2" />
          </button>
        </div>
        <div></div>
      </div>
    </div>
  );
};
