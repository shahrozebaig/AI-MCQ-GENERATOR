import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Landing from "./Landing";
import HeroSection from "../components/HeroSection";
import UploadCard from "../components/UploadCard";
import Footer from "../components/Footer";
function Home() {
  const [view, setView] = useState("landing");
  const [scrollTarget, setScrollTarget] = useState(null);
  const handleNavClick = (targetId) => {
    if (view !== "landing") {
      setView("landing");
      setScrollTarget(targetId);
    } else {
      if (targetId === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };
  useEffect(() => {
    if (view === "landing" && scrollTarget) {
      const timer = setTimeout(() => {
        if (scrollTarget === "hero") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          const element = document.getElementById(scrollTarget);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
        setScrollTarget(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [view, scrollTarget]);
  return (
    <div className="min-h-screen bg-[#05060a] text-slate-100 flex flex-col font-sans relative overflow-x-hidden dot-grid">
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-zinc-900/30 opacity-20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 translate-x-[20%] translate-y-[20%] w-[500px] h-[500px] rounded-full bg-zinc-900/20 opacity-15 blur-[120px] pointer-events-none"></div>
      {view === "landing" && (
        <Navbar currentView={view} onViewChange={setView} onNavClick={handleNavClick} />
      )}
      <main className="flex-grow relative z-10 flex flex-col">
        {view === "landing" ? (
          <>
            <Landing onLaunch={() => setView("generator")} />
            <Footer />
          </>
        ) : (
          <div className="py-8 sm:py-12 flex-grow flex flex-col justify-center relative w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="w-full mb-4">
              <button
                onClick={() => setView("landing")}
                className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-white transition-colors focus:outline-none group"
              >
                <svg className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Landing Page
              </button>
            </div>
            <HeroSection />
            <div className="my-8">
              <UploadCard />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
export default Home;