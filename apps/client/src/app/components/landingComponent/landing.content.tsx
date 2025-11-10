"use client";

import { ILandingContentData } from "@/app/interfaces/Landing";
import { Info } from "lucide-react";
import data from "@/data/landing.json";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa";

export const LandingContent = () => {
  const landingContentPart: ILandingContentData = data;
  const landingWorksPart: ILandingContentData = data;


  return (
    <div className="min-h-screen">
      <div className="mt-32 text-left">
        <div
          className="bg-clip-text  text-neutral-400 bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-8xl font-sans py-2 md:py-10 relative z-20 font-bold 
                tracking-tighter p-45 mt-22"
        >
          {landingContentPart.landingContent.heading}
        </div>
        <div className="max-w-2xl ml-46 text-xl tracking-tight text-neutral-600 dark:text-neutral-400 text-center">
          <p className="">{landingContentPart.landingContent.subHeading}</p>
        </div>
        <div className="flex ml-85 justify-space space-x-12 mt-14">
         <Link href="/signup">
          <button className="text-white bg-green-900 border-transparent flex items-center font-sans font-semibold tracking-tight size-12 text-xl hover:cursor-pointer border  rounded-xl w-fit px-4 py-3">
            {landingContentPart.landingContent.button1}
          </button>
          </Link>
          <button className="text-neutral-400 flex items-center tracking-tight font-sans font-semibold rounded-xl w-fit text-xl px-4 py-2 hover:cursor-pointer border border-neutral-400 p-1">
            {landingContentPart.landingContent.button2}
            <Info className="ml-2" />
          </button>
                   
        </div>        

      </div>
      
      
        <div className="mt-50 flex justify-center items-center flex-col">
          <div className="bg-clip-text text-neutral-400 text-6xl bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white font-sans py-2 md:py-10 relative z-20 font-bold 
                tracking-tight">
            {landingWorksPart.landingWorks.title}            
          </div>
          <div className="flex flex-col items-start space-y-6">
            <p className="text-neutral-500 dark:text-neutral-400 font-sans text-xl font-semibold max-w-3xl text-center mt-8">{landingWorksPart.landingWorks.p1}</p>
            <p className="text-neutral-500 dark:text-neutral-400 text-xl font-sans max-w-3xl font-semibold text-center mt-4">{landingWorksPart.landingWorks.p2}</p>
            <p className="text-neutral-500 dark:text-neutral-400 text-xl font-sans max-w-3xl font-semibold text-center mt-4">{landingWorksPart.landingWorks.p3}</p>
            <p className="text-neutral-500 dark:text-neutral-400 text-xl font-sans max-w-3xl font-semibold text-center mt-4">{landingWorksPart.landingWorks.p4}</p>
          </div>
        </div>
    </div>
  );
};
