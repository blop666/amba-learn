import React from 'react';
import { Rocket, Bolt, Trophy } from 'lucide-react'; // Menggunakan ikon dari lucide-react

const LearningPath = () => {
  const pathSteps = [
    {
      level: 'Basic',
      description: 'Learn syntax, variables, functions, and control structures',
      icon: <Rocket size={28} />,
      bgColor: 'bg-yellow-100', // Warna latar belakang ikon
      iconColor: 'text-yellow-600', // Warna ikon
    },
    {
      level: 'Intermediate',
      description: 'Master objects, arrays, DOM manipulation, and async programming',
      icon: <Bolt size={28} />,
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-600',
    },
    {
      level: 'Advanced',
      description: 'Explore frameworks, testing, and modern JavaScript patterns',
      icon: <Trophy size={28} />,
      bgColor: 'bg-purple-100',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <section className="flex flex-col items-center py-20 lg:py-32 px-4 bg-white">
      {/* Judul dan Deskripsi Bagian */}
      <div className="text-center max-w-3xl mb-16">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-4">
          Your Learning Path
        </h2>
        <p className="text-md text-gray-600">
          Follow our structured curriculum to become a JavaScript expert
        </p>
      </div>

      {/* Kartu Jalur Pembelajaran */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-6xl">
        {pathSteps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            {/* Area Icon */}
            <div className={`flex items-center justify-center w-20 h-20 rounded-full ${step.bgColor} mb-6`}>
              <div className={step.iconColor}>
                {step.icon}
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2">{step.level}</h3>
            <p className="text-gray-600 text-base">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningPath;