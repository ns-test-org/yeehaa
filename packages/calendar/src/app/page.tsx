'use client';

import { useState } from 'react';
import Calendar from './components/Calendar';

export default function Home() {
  const [currentDate, setCurrentDate] = useState(new Date());

  return (
    <div className="min-h-screen animated-bg p-4 sm:p-8 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-full blur-xl float-animation"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-pink-500/30 rounded-full blur-xl float-animation" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl float-animation" style={{ animationDelay: '4s' }}></div>
      <div className="absolute bottom-32 right-1/3 w-18 h-18 bg-purple-500/30 rounded-full blur-xl float-animation" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <div className="inline-block">
            <h1 className="text-5xl sm:text-7xl font-black text-white mb-6 drop-shadow-2xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              ✨ COOL CALENDAR ✨
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 rounded-full mx-auto mb-4 animate-pulse"></div>
          </div>
          <p className="text-2xl text-white font-bold drop-shadow-lg mb-4">
            🌈 Your beautiful calendar experience 🌈
          </p>
          <div className="flex justify-center space-x-4 text-3xl">
            <span className="animate-bounce">🎨</span>
            <span className="animate-bounce" style={{ animationDelay: '0.1s' }}>🌟</span>
            <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>💫</span>
            <span className="animate-bounce" style={{ animationDelay: '0.3s' }}>🎉</span>
          </div>
        </header>
        
        <div className="bg-white/15 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-white/30 glow-effect">
          <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
        </div>
        
        {/* Bottom decorative section */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-lg rounded-full px-8 py-4 border border-white/20">
            <span className="text-white font-bold text-lg">Made with</span>
            <span className="text-2xl animate-pulse">💖</span>
            <span className="text-white font-bold text-lg">and lots of</span>
            <span className="text-2xl animate-bounce">✨</span>
          </div>
        </div>
      </div>
    </div>
  );
}



