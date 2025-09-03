// app/course/[courseId]/CourseClient.jsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Book,
  Clock,
  Trophy,
  PlayCircle,
  CheckCircle,
} from "lucide-react";
import { VscDebugStart } from "react-icons/vsc";

// Komponen ini menerima data kursus dari Server Component melalui props
const CourseClient = ({ course }) => {
  const allLessons = course.sections.flatMap(section => section.lessons);
  const [currentLesson, setCurrentLesson] = useState(allLessons[0]);

  const handleLessonClick = (lesson) => {
    setCurrentLesson(lesson);
  };

  return (
    <div className="min-h-screen p-8">
      {/* Header Halaman */}
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/course"
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Courses
          </Link>
          <div className="flex items-center">
            <span className="text-gray-500 mr-2">Progress</span>
            <span className="font-semibold text-blue-600">
              {course.progress}%
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Bagian Ringkasan Kursus */}
          <div className="bg-white p-8 rounded-xl shadow-md mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {course.title}
            </h1>
            <p className="text-gray-600 text-lg mb-4">{course.subtitle}</p>
            <div className="flex items-center text-yellow-500 mb-6">
              <Trophy size={20} />
            </div>

            <div className="flex flex-wrap gap-8">
              <div className="flex flex-col items-start">
                <span className="text-3xl font-bold text-gray-900">
                  {course.lessons}
                </span>
                <span className="text-gray-500">Lessons</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-3xl font-bold text-gray-900">
                  {course.completed}
                </span>
                <span className="text-gray-500">Completed</span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-3xl font-bold text-gray-900">
                  {course.duration}
                </span>
                <span className="text-gray-500">Duration</span>
              </div>
            </div>
          </div>

          {/* Bagian Daftar Pelajaran */}
          <div className="space-y-6">
            {course.sections.map((section, sectionIndex) => (
              <div
                key={sectionIndex}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mr-2">
                    {section.title}
                  </h3>
                  <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                    {section.label}
                  </span>
                </div>
                <ul className="space-y-4">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <li
                      key={lesson.id || lessonIndex}
                      onClick={() => handleLessonClick(lesson)}
                      className={`flex items-start p-4 rounded-lg cursor-pointer transition-colors ${
                        currentLesson.id === lesson.id
                          ? "bg-blue-50 border border-blue-400"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full border border-gray-400 mr-4 mt-1"></div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">
                          {lesson.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {lesson.desc}
                        </p>
                      </div>
                      <span className="text-sm text-gray-500 ml-4 whitespace-nowrap">
                        {lesson.duration}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Kanan: Panel Sisi */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Current Lesson
            </h3>
            <div className="flex items-center text-blue-600 mb-2">
              <PlayCircle size={20} className="mr-2" />
              <span className="font-semibold">{currentLesson.title}</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">{currentLesson.desc}</p>
            <div className="flex items-center text-gray-500 text-sm mb-4">
              <Clock size={16} className="mr-2" />
              <span>{currentLesson.duration}</span>
            </div>
            <Link href={`/course/${course.id}/${currentLesson.id}/literacy`}>
              <button className="w-full flex items-center justify-center py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                <VscDebugStart size={20} className="mr-2" />
                Start Lesson
              </button>
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Your Progress
            </h3>
            <p className="text-sm text-gray-600 mb-2">Overall Progress</p>
            <div className="w-full h-2 bg-gray-200 rounded-full mb-2">
              <div
                className="h-full bg-blue-600 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-600 font-semibold mb-4 block">
              {course.progress}%
            </span>
            <div className="flex justify-between">
              <div className="text-center">
                <span className="text-xl font-bold text-blue-600">
                  {course.completed}
                </span>
                <p className="text-sm text-gray-500">Completed</p>
              </div>
              <div className="text-center">
                <span className="text-xl font-bold text-gray-500">
                  {course.lessons - course.completed}
                </span>
                <p className="text-sm text-gray-500">Remaining</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              What's Next?
            </h3>
            {course.nextUp && (
              <div className="flex items-center text-green-600 mb-2">
                <span className="font-semibold">{course.nextUp.title}</span>
                <span className="ml-2 text-xs font-semibold text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                  {course.nextUp.status}
                </span>
              </div>
            )}
            {!course.nextUp && (
              <p className="text-sm text-gray-500">You've reached the end of this course!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseClient;