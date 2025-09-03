"use client";

import React, { useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

const Question = () => {
  // Ganti `useState(false)` menjadi `useState(null)`
  const [openItemId, setOpenItemId] = useState(null);

  // Ubah fungsi handleClick agar menerima ID
  const handleClick = (id) => {
    
    setOpenItemId(openItemId === id ? null : id);
  };

  const data = [
    {
      id: 1,
      title: "Apakah Cocok untuk Pemula yang tidak ada Background Programming?",
      desc: "Absolut! Course kami dirancang khusus untuk pemula. Kami mulai dari konsep dasar programming dan JavaScript, jadi tidak perlu khawatir jika Anda belum pernah coding sebelumnya. Tim mentor kami juga sangat berpengalaman dalam membimbing student dari nol.",
    },
    {
      id: 2,
      title: "Apakah Cocok untuk Pemula yang tidak ada Background Programming?",
      desc: "Absolut! Course kami dirancang khusus untuk pemula. Kami mulai dari konsep dasar programming dan JavaScript, jadi tidak perlu khawatir jika Anda belum pernah coding sebelumnya. Tim mentor kami juga sangat berpengalaman dalam membimbing student dari nol.",
    },
    {
      id: 3,
      title: "Apakah Cocok untuk Pemula yang tidak ada Background Programming?",
      desc: "Absolut! Course kami dirancang khusus untuk pemula. Kami mulai dari konsep dasar programming dan JavaScript, jadi tidak perlu khawatir jika Anda belum pernah coding sebelumnya. Tim mentor kami juga sangat berpengalaman dalam membimbing student dari nol.",
    },
    {
      id: 4,
      title: "Apakah Cocok untuk Pemula yang tidak ada Background Programming?",
      desc: "Absolut! Course kami dirancang khusus untuk pemula. Kami mulai dari konsep dasar programming dan JavaScript, jadi tidak perlu khawatir jika Anda belum pernah coding sebelumnya. Tim mentor kami juga sangat berpengalaman dalam membimbing student dari nol.",
    },
    {
      id: 5,
      title: "Apakah Cocok untuk Pemula yang tidak ada Background Programming?",
      desc: "Absolut! Course kami dirancang khusus untuk pemula. Kami mulai dari konsep dasar programming dan JavaScript, jadi tidak perlu khawatir jika Anda belum pernah coding sebelumnya. Tim mentor kami juga sangat berpengalaman dalam membimbing student dari nol.",
    },
  ];

  return (
    <div className="flex flex-col max-w-4xl items-center mx-auto mt-12">
      <div className="flex flex-col text-center gap-3">
        <span className="text-3xl font-bold">
          Pertanyaan Yang{" "}
          <span className="bg-gradient-to-r from-blue-400 to-yellow-400 text-transparent bg-clip-text">
            sering Diajukan
          </span>
        </span>
        <span className="text-lg font-normal text-black/55">
          Masih ada pertanyaan? Berikut adalah jawaban untuk pertanyaan yang
          paling sering ditanyakan oleh calon student.
        </span>
      </div>

      <div className="mt-7 w-full">
        {data.map((item) => {
          // Cek apakah item saat ini sedang terbuka
          const isOpen = openItemId === item.id;
          return (
            <div
              onClick={() => handleClick(item.id)}
              className="border border-gray-400/40 mt-5 w-full rounded-xl p-5 flex flex-col cursor-pointer transition-colors hover:bg-blue-50"
              key={item.id}
            >
              <div className="flex justify-between items-center">
                <span className="text-md font-semibold text-black/75">
                  {item.title}
                </span>
                <div
                  className={`ease-in-out duration-300 ${
                    isOpen ? `rotate-180` : `rotate-0`
                  }`}
                >
                  <IoIosArrowUp />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 pt-4" : "max-h-0"
                }`}
              >
                <span className="text-justify text-sm font-normal text-gray-600">
                  {item.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;