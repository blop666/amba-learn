import React from 'react';
import Link from 'next/link';
import { Mail, Key, ArrowLeft } from 'lucide-react';

const LoginComp = () => {
  return (
    <div className='flex flex-col md:flex-row w-full h-screen bg-white'>
      <div className="hidden md:flex flex-col items-center justify-center w-full md:w-1/2 bg-gray-900 text-white p-8 relative">
        <div className="mb-8">
          <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent">
            CodeWave
          </span>
        </div>
        <h2 className="text-3xl font-bold mb-4 text-center">
          Belajar JavaScript, Bangun Karir Developer
        </h2>
        <p className="text-gray-400 text-center max-w-sm">
          Akses ke ribuan materi, mentor ahli, dan proyek-proyek nyata.
        </p>
      </div>

      <div className="flex items-center justify-center w-full md:w-1/2 p-8 md:p-12 bg-gray-50">
        <div className="w-full max-w-md bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200 relative">
          <Link href="/" className="absolute bg-white -top-4 border-1 border-gray-500/20 rounded-full -left-4 p-3 text-gray-500 hover:text-gray-800 transition-colors">
            <ArrowLeft size={18} />
          </Link>

          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">
            Selamat Datang Kembali
          </h1>
          <p className="text-gray-500 text-center text-sm mb-6">
            Silakan login untuk melanjutkan perjalanan belajar Anda.
          </p>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Masukkan email Anda"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                />
                <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Masukkan password"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                />
                <Key size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Ingat saya
                </label>
              </div>
              <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-500">
                Lupa Password?
              </a>
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Login
              </button>
            </div>
          </form>
          
          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Belum punya akun?{' '}
              <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                Daftar Sekarang
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComp;