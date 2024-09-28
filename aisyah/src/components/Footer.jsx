export default function Footer() {
    return (
      <footer className="bg-gray-800 py-8 px-4 text-center text-white">
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-3xl font-bold">
            © 2024 CinemaX. All rights reserved.
          </h1>
        </div>
        <div className="flex justify-center mb-4 space-x-4">
          <a href="#" className="inline-block text-gray-400 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#" className="inline-block text-gray-400 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </a>
          <a href="#" className="inline-block text-gray-400 hover:text-white transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
        <div className="flex justify-center">
          <a href="#" className="inline-block mr-4 text-teal-500 hover:text-teal-700 transition duration-400">Facebook</a>
          <a href="#" className="inline-block mr-4 text-pink-600 hover:text-pink-700 transition duration-400">Twitter</a>
          <a href="#" className="inline-block text-orange-500 hover:text-orange-700 transition duration-400">Instagram</a>
        </div>
      </footer>
    );
  }
  