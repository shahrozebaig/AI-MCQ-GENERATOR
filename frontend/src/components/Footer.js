import React from "react";
function Footer() {
  return (
    <footer className="w-full border-t border-zinc-900 bg-[#05060a]/40 py-8 px-6 sm:px-10 text-center relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-left">
          <div className="w-6 h-6 rounded-md bg-zinc-900 flex items-center justify-center text-white font-extrabold text-[11px] tracking-tight border border-zinc-800">
            M
          </div>
          <span className="text-xs text-zinc-500 font-medium">
            MCQ Generator
          </span>
        </div>
        <p className="text-[11px] font-sans text-zinc-500 font-light sm:text-right">
          &copy; {new Date().getFullYear()} MCQ Generator. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
export default Footer;