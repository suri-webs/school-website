"use client";
import { counterdata } from "@/utils/data/counter";
import CountUp from "react-countup";

export default function Counter() {
    return (
        <section className="w-full h-[400px] max-xl:!h-full max-lg:py-10 flex justify-center items-center flex-col relative bg-cover bg-fixed bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 z-0"></div>
            <div className="relative z-20 flex flex-col items-center gap-2 w-[84%]">
        
                <div className="flex gap-[100px] max-lg:gap-[20px] max-xl:flex-wrap mt-10 justify-center items-center w-full">
                    {counterdata.map((stat, i) => (
                        <div key={i} className="bg-[#ffffff24] text-white rounded-[5px] w-[220px] max-sm:w-[150px] h-[160px] p-1 flex flex-col justify-center items-center text-3xl gap-1 max-sm:gap-0 max-sm:h-[140px]">
                            <span className="max-sm:text-[20px]"> {""}{" "} {typeof stat.value === "number" ? (
                                <> <CountUp end={stat.value} duration={2} /> {i < 3 && "+"}</>
                            ) : (stat.value)}
                            </span>
                            <span className="text-[22px] max-sm:text-[12px]">{stat.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
