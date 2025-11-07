"use client"

import { ILandingContentData } from "@/app/interfaces/Landing";
import data from "@/data/landing.json";
export const LandingFooter = () => {

    const landingFooter: ILandingContentData = data;

    return (
        <div className=" mt-44 ">
            <div className="p-1 bg-gray-950">
                    <h1 className="text-white text-lg font-sans font-bold flex justify-center items-center mx-2">
                        {landingFooter.landingFooter.text}
                    </h1>
            </div>
        </div>
    )
}
