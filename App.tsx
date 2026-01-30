import React from 'react';
import { Home, ThumbsUp, MessageCircle } from 'lucide-react';
import { MetallicButton } from './components/MetallicButton';
import { SocialLink } from './components/SocialLink';
import { SilverCurves } from './components/SilverCurves';

const App: React.FC = () => {
  // Placeholder data to match the image
  const profileData = {
    name: "MARTA LÓPEZ",
    title: "Agente Inmobiliaria",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop", // Professional woman
    houseImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop" // Luxury beach house
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col relative overflow-hidden">
      
      {/* --- Top Section: Real Estate Image --- */}
      <div className="relative h-[28vh] w-full z-10">
        <img 
          src={profileData.houseImage} 
          alt="Luxury Property" 
          className="w-full h-full object-cover"
        />
        {/* Silver bar separator */}
        <div className="absolute bottom-0 w-full h-3 bg-gradient-to-r from-gray-300 via-white to-gray-300 shadow-md" />
      </div>

      {/* --- Main Body: Gradient Background --- */}
      {/* 
         Gradient analysis: 
         Top is cyan/sky blue (#7FD6F4)
         Transitioning via white/soft pink
         Bottom is coral/salmon/red (#FF8570)
      */}
      <div className="flex-1 relative w-full bg-gradient-to-b from-[#87CEEB] via-[#b3e0f2] to-[#FF7F50] flex flex-col items-center">
        
        {/* Decorative Background Curves (SVG) */}
        <SilverCurves />

        {/* --- Profile Picture Section --- */}
        <div className="relative -mt-16 mb-2 z-20 flex justify-center w-full">
          {/* Metallic Ring Container */}
          <div className="w-36 h-36 rounded-full p-1.5 bg-gradient-to-b from-gray-200 via-white to-gray-400 shadow-xl">
            {/* Inner Ring */}
             <div className="w-full h-full rounded-full p-0.5 bg-white">
                <img 
                  src={profileData.image} 
                  alt={profileData.name} 
                  className="w-full h-full rounded-full object-cover border-2 border-gray-100"
                />
             </div>
          </div>
        </div>

        {/* --- Text Info --- */}
        <div className="text-center z-20 mb-6 w-full px-4">
          <h1 className="text-3xl font-bold tracking-wide text-gray-800 uppercase mb-1 drop-shadow-sm">
            {profileData.name}
          </h1>
          <p className="text-gray-700 text-lg font-medium tracking-wide opacity-90">
            {profileData.title}
          </p>
        </div>

        {/* --- Action Buttons --- */}
        <div className="w-full px-8 z-20 space-y-4 max-w-md flex flex-col items-center">
          <MetallicButton 
            label="WhatsApp" 
            icon={<MessageCircle size={24} strokeWidth={2.5} />} 
          />
          <MetallicButton 
            label="Ver Propiedades" 
            icon={<Home size={24} strokeWidth={2.5} />} 
          />
          <MetallicButton 
            label="Reseñas" 
            icon={<ThumbsUp size={24} strokeWidth={2.5} />} 
          />
        </div>

        {/* --- Social Icons --- */}
        <div className="flex items-center justify-center space-x-4 mt-8 mb-6 z-20 w-full">
          <SocialLink platform="facebook" url="#" />
          <SocialLink platform="instagram" url="#" />
          <SocialLink platform="twitter" url="#" />
          <SocialLink platform="tiktok" url="#" />
        </div>

        {/* --- Footer Action --- */}
        <div className="mt-auto mb-8 z-20 w-full flex justify-center">
          <button className="text-white text-lg font-medium tracking-widest uppercase hover:underline hover:text-white/90 drop-shadow-md transition-opacity">
            GUARDAR CONTACTO
          </button>
        </div>

      </div>
    </main>
  );
};

export default App;