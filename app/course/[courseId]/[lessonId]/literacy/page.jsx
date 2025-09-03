// app/course/[courseId]/[lessonId]/literacy/page.jsx

import Link from 'next/link';
import { ArrowLeft, PlayCircle } from 'lucide-react';
import { courseData } from '../../../../data/courseData';
const LiterasiPage = async ({ params }) => {
  // Gunakan await untuk mengambil properti dari params
  const { courseId, lessonId } = await params;

  // Cari data kursus yang sesuai dengan courseId
  const course = courseData.find(c => c.id === courseId);
  if (!course) {
    return (
      <div className="min-h-screen p-8 text-center text-red-500">
        Kursus tidak ditemukan!
      </div>
    );
  }

  // Cari pelajaran dari array lessons
  const allLessons = course.sections.flatMap(section => section.lessons);
  const lesson = allLessons.find(item => item.id === lessonId);

  // Jika pelajaran tidak ditemukan
  if (!lesson) {
    return (
      <div className="min-h-screen p-8 text-center text-red-500">
        Pelajaran tidak ditemukan!
      </div>
    );
  }

  return (
    <div className="min-h-screen  p-8">
      {/* Page Header */}
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <Link href={`/course/${course.id}`} className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft size={20} className="mr-2" />
            Back to {course.title}
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-4xl bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{lesson.title}</h1>
        <p className="text-gray-600 mb-6">{lesson.desc}</p>

        {/* Video Tutorial */}
        {lesson.videoUrl && (
          <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden mb-6">
            <iframe 
              className="w-full h-full"
              src={lesson.videoUrl}
              title={lesson.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        )}

        {/* Literacy Content */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">{lesson.content}</p>

        {/* Button to Proceed to Exercise */}
        <div className="mt-8 flex justify-end">
          <Link href={`/course/${course.id}/${lessonId}/exercise`}>
            <button className="flex items-center justify-center py-3 px-6 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              <PlayCircle size={20} className="mr-2" />
              Lanjut ke Latihan
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LiterasiPage;