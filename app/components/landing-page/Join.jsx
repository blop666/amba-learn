import React from 'react'

const Join = () => {
  return (
    <div className='max-w-4xl text-center items-center mt-24 rounded-lg p-8 mx-auto flex flex-col bg-gradient-to-r from-blue-400/30 to-yellow-400/30'>
        <span className='text-lg font-semibold text-black'>Tertarik Dengan Course Kami?</span>
        <span className='text-sm pt-2 font-normal text-black/60'>Join Sekarang, Hubungi Kami melalui Whatsapp Di bawah !</span>

        <div className="flex justify-center gap-3 mt-6">
            <div className="bg-white/80 border-1 border-blue-300 px-4 text-sm py-2 rounded-lg hover:bg-gray-300/40 cursor-pointer ease-in-out duration-200 mt">
                Gabung Sekarang
            </div>
        </div>
    </div>
  )
}

export default Join;