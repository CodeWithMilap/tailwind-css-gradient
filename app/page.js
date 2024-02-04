"use client"; // this is a client component

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from 'next/navigation'

const App = () => {
    const [gradientClass, setGradientClass] = useState("");
    const [direction, setDirection] = useState("bg-gradient-to-tr");
    const [fromColor, setFromColor] = useState("from-lime-100");
    const [viaColor, setViaColor] = useState("via-orange-500");
    const [toColor, setToColor] = useState("to-red-800");
    const [copySuccess, setCopySuccess] = useState('Copy Tailwind class names');
    const gradientRef = useRef();
    const router = useRouter();


    useEffect(()=>{
        handleGenerate()
    },[]);

    useEffect(()=>{
        handleGenerate()
    },[direction, fromColor, viaColor, toColor]);


    const handleGenerate = () => {
        const classArray = [];

        if (direction !== "") {
            classArray.push(direction);
        }

        if (fromColor !== "") {
            classArray.push(fromColor);
        }

        if (viaColor !== "") {
            classArray.push(viaColor);
        }

        if (toColor !== "") {
            classArray.push(toColor);
        }

        setGradientClass(classArray.join(" "));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(gradientClass);
        setCopySuccess('Copied!');
        setTimeout(() => {
          setCopySuccess('Copy Tailwind class names');
        }, 3000);
    };

  return (
    <main className={`min-h-screen h-full md:p-20 p-4 md:flex flex-col md:overflow-hidden overflow-x-hidden bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black`}>

      <div className={`flex flex-grow  flex-col rounded-2xl gap-6`}>
      
       

        <div className="grid grid-cols-12 gap-5 p-4 bg-opacity-25 rounded-2xl  backdrop-blur-3xl bg-slate-600 text-white border border-slate-700 ">
            <div className="md:col-span-1 col-span-12">
                <button type="button" onClick={() => router.back()} className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Back</button>
            </div>
            <div className="grid md:grid-cols-4 grid-cols-12  md:col-span-9 col-span-12 gap-5">
                <div className="md:col-span-1 col-span-6">
                    <select
                    value={direction}
                    onChange={(e) => setDirection(e.target.value)}
                    className="w-full p-2 px-4 fbg-opacity-5 rounded-md  backdrop-blur-3xl bg-slate-600 text-white border border-slate-700  outline-none ring-0"
                    >
                    <option value="bg-gradient-to-t">To Top</option>
                    <option value="bg-gradient-to-tr">To Top Right</option>
                    <option value="bg-gradient-to-r">To Right</option>
                    <option value="bg-gradient-to-br">To Bottom Right</option>
                    <option value="bg-gradient-to-b">To Bottom</option>
                    <option value="bg-gradient-to-bl">To Bottom Left</option>
                    <option value="bg-gradient-to-l">To Left</option>
                    <option value="bg-gradient-to-tl">To Top Left</option>
                    <option value="bg-[conic-gradient(var(--tw-gradient-stops))]">
                        Conic Center
                    </option>
                    <option value="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))]">
                        Conic Top
                    </option>
                    <option value="bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]">
                        Conic Top Right
                    </option>
                    <option value="bg-[conic-gradient(at_right,_var(--tw-gradient-stops))]">
                        Conic Right
                    </option>
                    <option value="bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))]">
                        Conic Bottom Right
                    </option>
                    <option value="bg-[conic-gradient(at_bottom,_var(--tw-gradient-stops))]">
                        Conic Bottom
                    </option>
                    <option value="bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))]">
                        Conic Bottom Left
                    </option>
                    <option value="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]">
                        Conic Left
                    </option>
                    <option value="bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))]">
                        Conic Top Left
                    </option>
                    <option value="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]">
                        Radial Center
                    </option>
                    <option value="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]">
                        Radial Top
                    </option>
                    <option value="bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))]">
                        Radial Top Right
                    </option>
                    <option value="bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]">
                        Radial Right
                    </option>
                    <option value="bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))]">
                        Radial Bottom Right
                    </option>
                    <option value="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))]">
                        Radial Bottom
                    </option>
                    <option value="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]">
                        Radial Bottom Left
                    </option>
                    <option value="bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))]">
                        Radial Left
                    </option>
                    <option value="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]">
                        Radial Top Left
                    </option>
                    </select>
                </div>
                <div className="md:col-span-1 col-span-6">
                    <select
                    value={fromColor}
                    onChange={(e) => setFromColor(e.target.value)}
                    className="w-full p-2 px-4 fbg-opacity-5 rounded-md  backdrop-blur-3xl bg-slate-600 text-white border border-slate-700  outline-none ring-0"
                    >
                    <option value="from-slate-100">from-slate-100</option>
                    <option value="from-slate-200">from-slate-200</option>
                    <option value="from-slate-300">from-slate-300</option>
                    <option value="from-slate-400">from-slate-400</option>
                    <option value="from-slate-500">from-slate-500</option>
                    <option value="from-slate-600">from-slate-600</option>
                    <option value="from-slate-700">from-slate-700</option>
                    <option value="from-slate-800">from-slate-800</option>
                    <option value="from-slate-900">from-slate-900</option>
                  
                    <option value="from-black">from-black</option>
                    <option value="from-white">from-white</option>
                    </select>
                </div>
                <div className="md:col-span-1 col-span-6">
                    <select
                    value={viaColor}
                    onChange={(e) => setViaColor(e.target.value)}
                    className="w-full p-2 px-4 fbg-opacity-5 rounded-md  backdrop-blur-3xl bg-slate-600 text-white border border-slate-700  outline-none ring-0"
                    >
                    <option value="via-slate-100">via-slate-100</option>
                   
                    <option value="via-rose-800">via-rose-800</option>
                    <option value="via-rose-900">via-rose-900</option>
                    <option value="via-black">via-black</option>
                    <option value="via-white">via-white</option>
                    </select>
                </div>
                <div className="md:col-span-1 col-span-6">
                    <select
                    value={toColor}
                    onChange={(e) => setToColor(e.target.value)}
                    className="w-full p-2 px-4 fbg-opacity-5 rounded-md  backdrop-blur-3xl bg-slate-600 text-white border border-slate-700  outline-none ring-0"
                    >
                   
                    <option value="to-black">to-black</option>
                    <option value="to-white">to-white</option>
                    </select>
                </div>
            </div>
            <div className="md:col-span-2 col-span-12">
                <button type="button" onClick={handleCopy} className="w-full text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center">{copySuccess}</button>
            </div>
        </div>


        <div className={`w-full h-60 sm:h-auto flex  flex-grow items-center justify-center  rounded-2xl border border-slate-700 ${gradientClass}`}>
        </div>


      </div>
    </main>
)};
          
export default App;