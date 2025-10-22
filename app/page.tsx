export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100 p-6">
      {}
      <img
        src="/10c98049-6b19-46b2-bbad-29bfa84734e1.jpg"
        alt="Profile"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-purple-500 shadow-[0_0_25px_#a855f7] transform transition-transform duration-700 hover:scale-110"
      />

      {}
      <h1 className="text-3xl md:text-4xl font-bold mt-6 text-purple-400 text-center tracking-wide drop-shadow-[0_0_12px_#a855f7]">
        Pusod, Yuji
      </h1>

      {}
      <p className="text-center max-w-xl mt-4 px-4 text-gray-300 leading-relaxed">
        A passionate IT student exploring web development and design, focused on
        building clean and creative user experiences.
      </p>

      {}
      <div className="flex flex-row items-center justify-center gap-6 mt-8 text-lg">
        {}
        <a
          href="https://www.facebook.com/yuji.luengas"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#a855f7]"
        >
          Facebook
        </a>

        {}
        <div
          className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-2 rounded-full shadow-md opacity-80 transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#f43f5e] select-none"
        >
          Instagram
        </div>

        {}
        <a
          href="https://github.com/yujipusod-code"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_#a855f7]"
        >
          GitHub
        </a>
      </div>
    </div>
  );
}
