import React from "react";
import { IoBook } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { VscDebugStart } from "react-icons/vsc";
import Link from "next/link";
import courseComp from "../../data/courseComp";

const CourseComp = () => {
  

  return (
    <div className="flex flex-col w-full mt-12">
      <div className="flex max-w-5xl mx-auto text-center pt-4 flex-col">
        <span className="text-4xl font-bold text-blue-400">
          Your Learning Journey
        </span>
        <span className="max-w-3xl pt-3 mx-auto text-md text-black/40">
          Master JavaScript from basics to advanced concepts with our
          comprehensive course
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-12">
        {courseComp.map((item) => (
          <div
            key={item.path}
            className="w-70 mt-12 border-1 hover:scale-105 hover:border-blue-400 ease-in-out duration-300 hover:shadow-2xl items-center flex flex-col border-gray-400/30 rounded-md p-4 py-6"
          >
            <img
              src={item.imgSrc}
              alt={`${item.title} Logo`}
              className="border-1 rounded-lg"
              width={80}
              height={80}
            />
            <span className="text-lg font-bold text-black pt-6">
              {item.title}
            </span>
            <span className="text-center font-normal max-w-50 pt-2 text-black/40 mx-auto text-sm">
              {item.desc}
            </span>
            <div className="flex flex-row justify-around w-full items-stretch mt-6">
              <div className="flex items-center text-center flex-col">
                <IoBook width={5} height={5} className="text-blue-400" />
                <span className="text-sm font-normal text-black/60 pt-2">
                  {item.lesson}
                </span>
                <span className="text-sm font-light text-black/60">Lesson</span>
              </div>
              <div className="flex items-center text-center flex-col">
                <FaRegClock width={5} height={5} className="text-blue-400" />
                <span className="text-sm font-normal text-black/60 pt-2">
                  {item.hours}
                </span>
                <span className="text-sm font-light text-black/60">Hours</span>
              </div>
            </div>

            <Link
              href={`/course/${item.path}`}
              className="flex flex-row items-center w-full hover:scale-95 ease-in-out duration-150 hover:shadow-2xl mx-4 px-6 pl-14 py-2 mt-6 bg-blue-500 rounded-full"
            >
              <VscDebugStart width={12} height={12} className="text-white" />
              <span className="pl-2 text-md font-semibold text-white">
                Start Learning
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseComp;