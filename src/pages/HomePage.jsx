import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-200 via-white to-purple-300 px-4">
     
      <div className="absolute top-4 right-4">
         <Link
      to="/login"
      className="inline-flex items-center gap-2 border border-gray-400 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-100 transition"
    >
      Login
      <ArrowRight size={18} />
    </Link>
      </div>

     
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold mb-4">HEY DEVELOPER</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the home page! This is where you can find all the latest updates and information.
        </p>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline w-full max-w-xs"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
