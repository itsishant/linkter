"use client";
import data from "@/data/landing.json";
import { IData } from "@/app/interfaces/Landing";
import { FaFilePdf } from "react-icons/fa";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useState } from "react";
import { animate, AnimatePresence, motion } from "motion/react";

export const LandingHeader = () => {
  const landingData: IData = data;
  const [night, setNight] = useState(false);

  return (
    <div className="h-18 w-full border-b rounded-b-md flex justify-between border-neutral-400">
      <div className="p-2 ml-1 flex">
        <FaFilePdf className="text-gray-400 size-14" />
        <h2 className="text-neutral-300 p-3 font-bold text-3xl">
          {landingData.landing.title}
        </h2>
      </div>

      <div className="text-white">
        <ul className="flex p-3">
          <li className="text-neutral-300 p-3 font-bold text-xl">
            {landingData.landing.des1}
          </li>
          <li className="text-neutral-300 p-3 font-bold text-xl">
            {landingData.landing.des2}
          </li>
          <motion.button
            className="p-3 hover: cursor-pointer"
            onClick={() => {
              setNight(!night);
            }}
          >
            <AnimatePresence mode="wait">
              {night == true ? (
                <motion.div
                  key="dark"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <MdDarkMode className="size-7" />
                </motion.div>
              ) : (
                <motion.div
                  key="light"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <MdLightMode className="size-7" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </ul>
      </div>
    </div>
  );
};
