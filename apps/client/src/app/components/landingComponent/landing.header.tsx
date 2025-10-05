"use client"
import data from '@/data/landing.json';
import { IData } from "@/app/interfaces/Landing";
import { FaFilePdf } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";

export const LandingHeader = () => {

    const landingData: IData = data;

    return (
        <div className="h-18 w-full border-b rounded-b-md flex justify-between border-neutral-400">
            <div className="p-2 ml-1 flex">
                <FaFilePdf className="text-gray-400 size-14"/>
                <h2 className="text-neutral-300 p-3 font-bold text-3xl">{landingData.landing.title}</h2>
            </div>

            <div className='text-white' >
                <ul className='flex p-3'>
                    <li className='text-neutral-300 p-3 font-bold text-xl'>
                        {landingData.landing.des1}
                    </li>
                    <li className='text-neutral-300 p-3 font-bold text-xl'>
                        {landingData.landing.des2}
                    </li>
                    <li>
                        <MdDarkMode />
                    </li>
                </ul>   
            </div>
            
        </div>
    )
}
