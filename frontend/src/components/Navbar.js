import React from "react";
function Navbar({ currentView, onViewChange, onNavClick }) {
  return (
    <nav className="sticky top-0 z-50 w-full premium-glass border-b border-zinc-900/60 px-6 sm:px-10 py-4 flex items-center justify-between">
      <button
        onClick={() => onNavClick && onNavClick("hero")}
        className="flex items-center gap-2.5 text-left group focus:outline-none"
      >
        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-black font-extrabold text-sm tracking-tight shadow transition-transform group-hover:scale-105 active:scale-95">
          M
        </div>
        <div>
          <h1 className="text-base sm:text-lg font-bold text-white tracking-tight leading-none">
            MCQ Generator
          </h1>
          <span className="text-[10px] text-zinc-500 font-medium font-sans">Textbook to Exam</span>
        </div>
      </button>
      <div className="flex items-center gap-4 sm:gap-6 text-[11px] sm:text-sm font-medium text-zinc-400">
        <button
          onClick={() => onNavClick && onNavClick("hero")}
          className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2 focus:outline-none group"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </button>
        <button
          onClick={() => onNavClick && onNavClick("features")}
          className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2 focus:outline-none group"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
          Features
        </button>
        <button
          onClick={() => onNavClick && onNavClick("how-to-use")}
          className="hover:text-white transition-colors flex items-center gap-1.5 sm:gap-2 focus:outline-none group"
        >
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          How to Use
        </button>
      </div>
    </nav>
  );
}
export default Navbar;