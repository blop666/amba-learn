import React from 'react';
import { Mail, MapPin, Phone, Twitter, Instagram, Linkedin, Rss, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" border-t max-w-7xl mx-auto border-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Kolom 1: Logo & Deskripsi */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              {/* Ganti dengan path logo Anda */}
              <span className="bg-gradient-to-r from-yellow-400 to-blue-500 bg-clip-text text-2xl font-bold text-transparent">
                CodeWave
              </span>
            </div>
            <p className="text-gray-600 max-w-sm">
              Empowering the next generation of JavaScript developers with world-class education and mentorship.
            </p>
            
            {/* Newsletter */}
            <div className="mt-4">
              <h4 className="text-lg font-semibold text-gray-800 mb-2">Join Our Newsletter</h4>
              <p className="text-sm text-gray-600 mb-4">
                Get the latest updates, tips, and exclusive content delivered to your inbox.
              </p>
              <form className="relative flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-4 pr-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 text-white hover:scale-105 transition-transform"
                >
                  <ArrowRight size={20} />
                </button>
              </form>
            </div>
            
            {/* Kontak */}
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin size={20} />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={20} />
                <span>hello@codewave.dev</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={20} />
                <span>+62 21 1234 5678</span>
              </div>
            </div>
          </div>
          
          {/* Kolom 2-5: Tautan Navigasi */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Our Story</a></li>
                <li><a href="#" className="hover:text-blue-500">Careers</a></li>
                <li><a href="#" className="hover:text-blue-500">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Products</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Courses</a></li>
                <li><a href="#" className="hover:text-blue-500">Bootcamp</a></li>
                <li><a href="#" className="hover:text-blue-500">Mentorship</a></li>
                <li><a href="#" className="hover:text-blue-500">Enterprise</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Blog</a></li>
                <li><a href="#" className="hover:text-blue-500">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-500">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Refund Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Garis pemisah */}
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © 2025 CodeWave. All rights reserved.
          </p>
          
          {/* Ikon Media Sosial */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-blue-500 transition-colors"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram" className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn" className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
            <a href="#" aria-label="RSS Feed" className="p-2 rounded-full border border-gray-300 text-gray-500 hover:text-orange-500 transition-colors"><Rss size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;