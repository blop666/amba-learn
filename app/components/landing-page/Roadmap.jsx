import React from 'react';
import { Book, Terminal, Rocket, ArrowRight } from 'lucide-react';

const Roadmap = () => {
  const cards = [
    {
      id: 1,
      title: 'Pelajari Dasar',
      desc: 'Materi modular yang mudah dipahami, dimulai dari konsep fundamental JavaScript hingga ES6+ syntax modern.',
      icon: <Book size={32} />,
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Latihan Interaktif',
      desc: 'Langsung praktik dengan tantangan coding interaktif dan feedback real-time untuk mengasah kemampuan.',
      icon: <Terminal size={32} />,
      iconBgColor: 'bg-white',
    },
    {
      id: 3,
      title: 'Latihan Quiz',
      desc: 'Tes Skill mu dengan quiz untuk membantu kamu mengingat sebuah sintaks yang sudah dipelajari',
      icon: <Rocket size={32} />,
      iconBgColor: 'bg-yellow-400',
    },
  ];

  return (
    <div className='flex flex-col items-center mx-auto px-4 py-20 lg:py-40'>
      {/* Bagian Atas: Judul dan Deskripsi */}
      <div className="flex flex-col text-center max-w-4xl mb-16">
        <h2 className='text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4'>
          Jalur Pembelajaran yang{' '}
          <span className='bg-gradient-to-r from-blue-500 to-yellow-400 bg-clip-text text-transparent'>
            Terstruktur
          </span>
        </h2>
        <p className='text-md text-gray-600 font-medium max-w-2xl mx-auto'>
          Kami telah merancang metode pembelajaran step-by-step yang terbukti efektif mengantarkan ribuan siswa mencapai tujuan mereka.
        </p>
      </div>

      {/* Bagian Tengah: Kartu Roadmap */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 mt-12  w-full max-w-5xl">
        {cards.map((item, index) => (
          <div key={item.id} className="relative flex flex-col items-center text-center hover:border-1 border-blue-500/0 border-1 hover:border-blue-500 hover:scale-105 duration-300 ease-in-out p-4 rounded-lg">
            {/* Indikator Angka */}
            <div className='absolute -top-6 md:-top-6 -right-4 bg-gradient-to-r from-blue-400 to-yellow-400 rounded-full text-lg font-bold text-white px-4 py-2'>{item.id}</div>
            
            {/* Kartu Icon */}
            <div className='relative flex items-center justify-center p-4 w-24 h-24 rounded-2xl shadow-lg'>
              <div className={`absolute inset-0 rounded-2xl ${index === 1 ? 'bg-gray-100' : 'bg-gradient-to-br from-white to-gray-50'}`}></div>
              <div className={`relative z-10 p-4 rounded-xl text-white ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-yellow-400 text-gray-800' : 'bg-yellow-400'}`}>
                {item.icon}
              </div>
            </div>

            {/* Panah (Hanya di antara kartu) */}
            {index < cards.length - 1 && (
              <div className="hidden md:flex absolute top-10 transform -translate-x-1/2 left-[calc(100%+24px)] text-gray-300">
                <ArrowRight size={48} />
              </div>
            )}
            
            {/* Teks Kartu */}
            <h3 className="text-xl font-semibold mt-8 mb-2 text-gray-900">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Bagian Bawah: Tombol CTA */}
      <div className="mt-20">
        <button className="flex items-center gap-2 px-8 py-3 rounded-full border-2 border-blue-500 text-blue-600 font-semibold hover:bg-blue-50 transition-colors duration-300">
          Mulai perjalanan Anda hari ini
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Roadmap;