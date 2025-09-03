import React from 'react';
import { Users, Target, Briefcase, Heart } from 'lucide-react';

const AboutUs = () => {
  // Data untuk daftar keunggulan
  const highlights = [
    {
      icon: <Users size={20} />,
      title: 'Community-Driven',
      description: 'Belajar bersama komunitas developer yang saling mendukung.'
    },
    {
      icon: <Target size={20} />,
      title: 'Goal-Oriented',
      description: 'Fokus pada hasil nyata dan pencapaian karir yang terukur.'
    },
    {
      icon: <Briefcase size={20} />,
      title: 'Industry-Standard',
      description: 'Kurikulum yang disesuaikan dengan kebutuhan industri terkini.'
    },
    {
      icon: <Heart size={20} />,
      title: 'Passionate',
      description: 'Tim pengajar yang berpengalaman dan passionate dalam mengajar.'
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mx-auto max-w-7xl px-4 py-20 lg:py-18 gap-18">
      {/* Bagian Kiri: Teks dan Keunggulan */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6">
          Tentang <span className="bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent">CodeWave</span>
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
          CodeWave didirikan dengan visi untuk mendemokratisasi pendidikan programming dan memberikan akses pembelajaran JavaScript berkualitas tinggi kepada semua orang, di mana pun mereka berada.
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto lg:mx-0">
          Kami percaya bahwa setiap orang memiliki potensi untuk menjadi developer yang hebat. Dengan pendekatan pembelajaran yang interaktif, praktis, dan community-driven, kami telah membantu ribuan siswa mencapai impian mereka di dunia teknologi.
        </p>

        {/* Daftar Keunggulan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-50 text-blue-600">{item.icon}</div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>

      {/* Bagian Kanan: Gambar */}
      <div className="flex-1 w-full h-140 flex justify-center mt-12 lg:mt-0">
        <img
          src="http://googleusercontent.com/file_content/0"
          alt="Developer wearing t-shirt with code text"
          className="rounded-3xl shadow-xl w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;