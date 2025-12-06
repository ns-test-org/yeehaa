export default function Landing() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-400 to-purple-600">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-0 -left-4"></div>
        <div className="absolute w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 -right-4"></div>
        <div className="absolute w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-0 left-20"></div>
      </div>
      
      {/* Content */}
      <div className="relative text-center px-6 z-10">
        <h1 className="text-7xl font-bold text-white mb-6 drop-shadow-2xl animate-fade-in">
          Hello World
        </h1>
        <p className="text-2xl text-white/90 drop-shadow-lg animate-fade-in-delay">
          Welcome to your new landing page
        </p>
      </div>
    </div>
  );
}



