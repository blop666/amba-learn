import React from 'react';
import { ArrowRight } from 'lucide-react'; // Import ikon panah dari Lucide React

const Banner = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-7xl mx-auto px-4  lg:py-30 gap-4'>
      {/* Konten Kiri (Teks & Tombol) */}
      <div className='flex flex-col gap-6 lg:w-1/2 text-center lg:text-left'>
        <h1 className='text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900'>
          Bangun Masa Depan Anda sebagai <br />
          <span className='bg-gradient-to-r from-yellow-500 to-blue-600 bg-clip-text text-transparent'>
            Developer dengan JavaScript
          </span>
        </h1>
        <p className='text-lg text-gray-600 max-w-lg mx-auto lg:mx-0'>
          Kurikulum interaktif, proyek nyata, dan komunitas yang suportif siap mengantarkan Anda dari nol hingga ahli.
        </p>

        {/* Tombol Aksi */}
        <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-6'>
          <button className='flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform duration-300'>
            Start Free Trial <ArrowRight size={18} />
          </button>
          <button className='flex items-center gap-2 px-7 py-3 rounded-full border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition-colors duration-300'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
            </svg>
            Lihat Demo
          </button>
        </div>

        {/* Statistik */}
       
      </div>

      {/* Konten Kanan (Gambar Ilustrasi) */}
      <div className='relative lg:w-1/2 mt-12 lg:mt-0 border-1 border-black/20 h-100 rounded-xl '>
        <img
          src="http://googleusercontent.com/file_content/0"
          alt="banner Img"
          className='relative z-10 w-full h-auto rounded-3xl shadow-2xl'
        />
        {/* Efek gradasi di belakang gambar untuk kesan futuristik */}
        <div className='absolute -top-8 -right-8 w-48 h-48 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob'></div>
        <div className='absolute -bottom-8 -left-8 w-48 h-48 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000'></div>
      </div>
    </div>
  );
};

export default Banner;