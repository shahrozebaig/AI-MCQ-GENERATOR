import React from "react";
function Landing({ onLaunch }) {
  return (
    <div className="relative w-full text-slate-200">
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div id="hero" className="flex flex-col items-center justify-center text-center max-w-5xl mx-auto min-h-[calc(100vh-80px)] py-12 scroll-mt-24">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Create professional <br />
            assessments <span className="text-zinc-500">in seconds.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-zinc-400 font-light max-w-3xl leading-relaxed font-sans">
            Transform textbook chapters, notes, and study guides into structured multiple-choice exams.
            Beautifully formatted, print-ready, and academically structured.
          </p>
          <div className="mt-8 flex justify-center items-center w-full">
            <button
              onClick={onLaunch}
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black font-semibold rounded-full shadow hover:bg-zinc-200 transition-all duration-200 transform hover:scale-[1.01] active:scale-[0.99] text-sm tracking-wide flex items-center justify-center gap-1.5"
            >
              Start Generating
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>
        </div>
        <div id="features" className="mt-12 sm:mt-16 border-t border-zinc-900 pt-20 pb-20 scroll-mt-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
              <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              Academic Features
            </h2>
            <p className="text-zinc-400 mt-3 text-sm sm:text-base font-light font-sans">
              Create tests that reflect the exact contents of your study materials, without typos or logical gaps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-zinc-950/40 border border-zinc-900 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 002-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Curriculum Aligned</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mt-2 font-sans">
                  Examines textbook chapters and notes, aligning each generated question directly with key syllabus concepts and sub-topics.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-zinc-950/40 border border-zinc-900 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Detailed Explanations</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mt-2 font-sans">
                  Accompanies every generated question with clear, step-by-step academic explanations and textbook-level justifications.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-zinc-950/40 border border-zinc-900 flex flex-col gap-4">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Print-Ready PDF Exports</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mt-2 font-sans">
                  Downloads high-fidelity test booklets for students alongside a structured grading key sheet for instructors in one click.
                </p>
              </div>
            </div>

          </div>
        </div>
        <div id="how-to-use" className="mt-12 sm:mt-16 border-t border-zinc-900 pt-20 pb-12 scroll-mt-24">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center justify-center gap-2">
              <svg className="w-6 h-6 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              How to Use
            </h2>
            <p className="text-zinc-400 mt-3 text-sm sm:text-base font-light font-sans">
              Get printable multiple-choice examinations in three simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-zinc-950/20 border border-zinc-900 flex flex-col gap-4 relative">
              <div className="absolute -top-3.5 -left-3.5 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-white font-sans shadow-md">
                1
              </div>
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center mt-2">
                <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Upload Textbook</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mt-1 font-sans">
                  Drop your school notes, chapter PDFs, or curriculum files directly into the clean dashboard file upload zone.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-zinc-950/20 border border-zinc-900 flex flex-col gap-4 relative">
              <div className="absolute -top-3.5 -left-3.5 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-white font-sans shadow-md">
                2
              </div>
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center mt-2">
                <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Process Context</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mt-1 font-sans">
                  Our custom parsing pipeline extracts topics, analyzes syllabus goals, and generates 30 professional exam questions.
                </p>
              </div>
            </div>
            <div className="p-6 rounded-xl bg-zinc-950/20 border border-zinc-900 flex flex-col gap-4 relative">
              <div className="absolute -top-3.5 -left-3.5 w-7 h-7 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-xs font-bold text-white font-sans shadow-md">
                3
              </div>
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-850 flex items-center justify-center mt-2">
                <svg className="w-5 h-5 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Print Booklet</h3>
                <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mt-1 font-sans">
                  Download the structured student test booklet and the accompanying answers guide as high-quality PDF files.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;