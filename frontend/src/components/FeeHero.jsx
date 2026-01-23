import React from 'react'

function FeeHero() {
  return (
    <div className="relative w-full h-[50vh] bg-center bg-cover bg-no-repeat flex justify-center items-center overflow-hidden max-[992px]:h-[40vh] max-[576px]:h-[35vh]" style={{ backgroundImage: "url('/images/sihsbuilding.jpg')" }}>
      <div className="absolute inset-0 bg-[rgba(139,0,0,0.7)] flex justify-center items-center animate-fadeIn duration-[1200ms]">
        <h1 className="relative text-white text-[clamp(28px,6vw,64px)] text-center font-bold tracking-[1px] animate-fadeInUp max-[576px]:text-[clamp(22px,6vw,32px)] max-[576px]:px-2.5 max-[576px]:top-[-5px] max-[992px]:top-[-10px]">Fee Structure</h1>
      </div>
    </div>
  )
}

export default FeeHero
