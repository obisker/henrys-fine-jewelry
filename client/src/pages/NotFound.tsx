import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  const handleGoHome = () => {
    setLocation("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0a0a]">
      <div className="w-full max-w-lg mx-4 bg-[#1a1a1a] border border-white/10 rounded-sm p-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-red-900/20 rounded-full animate-pulse" />
              <AlertCircle className="relative h-16 w-16 text-red-500" />
            </div>
          </div>

          <h1 className="text-4xl font-light text-white mb-2">404</h1>

          <h2 className="text-xl font-light text-gray-300 mb-4">
            Page Not Found
          </h2>

          <p className="text-gray-400 mb-8 leading-relaxed">
            Sorry, the page you are looking for doesn't exist.
            <br />
            It may have been moved or deleted.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleGoHome}
              className="bg-[#2a2a2a] hover:bg-[#3a3a3a] text-white px-6 py-3 border border-white/10 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Home className="w-4 h-4" />
              Go Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
