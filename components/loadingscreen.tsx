import React from 'react'
import Image from 'next/image'

const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      <div className="text-center">
        <Image
          src="/pokeball.svg"
          alt="Pokeball"
          width={100}
          height={100}
          className="animate-spin mb-4"
        />
        <h2 className="text-2xl font-bold text-gray-800">Loading Pokédex...</h2>
      </div>
    </div>
  )
}

export default LoadingScreen