// app/course/[courseId]/page.jsx
import { courseData } from "../../data/courseData";
import CourseClient from "./CourseClient"; 

const DynamicCoursePage = ({ params }) => {
  // Langsung ambil properti dari params karena ini adalah Server Component
  const { courseId } = params;

  // Cari data kursus yang sesuai
  const course = courseData.find(c => c.id === courseId);

  // Jika kursus tidak ditemukan, tampilkan halaman error
  if (!course) {
    return (
      <div className="min-h-screen p-8 text-center text-red-500">
        Kursus tidak ditemukan!
      </div>
    );
  }

  // Render Client Component dan serahkan data kursus sebagai props
  return <CourseClient course={course} />;
};

export default DynamicCoursePage;