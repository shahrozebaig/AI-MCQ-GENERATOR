import React, { useState, useEffect } from "react";
const pipelineSteps = [
  { title: "Reading Document" },
  { title: "Analyzing Concepts" },
  { title: "Formulating Questions" },
  { title: "Compiling Assessment PDFs" }
];
function UploadCard() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  useEffect(() => {
    let interval = null;
    if (loading) {
      setActiveStep(0);
      interval = setInterval(() => {
        setActiveStep((prev) => {
          if (prev < pipelineSteps.length - 1) {
            return prev + 1;
          }
          return prev;
        });
      }, 3500);
    } else {
      setActiveStep(0);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [loading]);
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Invalid format. Please select a valid PDF file.");
    }
  };
  const handleRemoveFile = () => {
    setFile(null);
  };
  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a PDF textbook first.");
      return;
    }
    setLoading(true);
    setGenerated(false);
    try {
      const formData = new FormData();
      formData.append("file", file);
      await fetch("http://127.0.0.1:8000/upload", {
        method: "POST",
        body: formData,
      });
      await fetch("http://127.0.0.1:8000/generate", {
        method: "POST",
      });
      setGenerated(true);
    } catch (error) {
      console.error("Compilation failure:", error);
      alert("An error occurred while compiling your assessment. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  const handleReset = () => {
    setFile(null);
    setGenerated(false);
    setLoading(false);
    setActiveStep(0);
  };
  const formatBytes = (bytes, decimals = 1) => {
    if (!bytes) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  };
  return (
    <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6">
      <div className="bg-[#0b0c10]/80 premium-border rounded-2xl p-6 sm:p-10 shadow-xl backdrop-blur-md relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-[100px] pointer-events-none border-b border-l border-white/5"></div>
        {!loading && !generated && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Create Assessment
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2 font-light font-sans">
                Upload any academic textbook, notes, or chapter PDF. The agent will read, vectorize, and compose comprehensive MCQs.
              </p>
            </div>
            {!file ? (
              <label className="group relative flex flex-col items-center justify-center border border-dashed border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-200">
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center premium-border transition-transform group-hover:scale-105 duration-200 mb-4">
                  <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors duration-150">
                  Click to select textbook PDF
                </span>
                <span className="text-xs text-zinc-500 font-light mt-1.5 font-sans">
                  PDF format only. Maximum upload size: 25MB.
                </span>
              </label>
            ) : (
              <div className="p-4 sm:p-6 rounded-xl bg-zinc-950/60 premium-border flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800 shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-sm font-semibold text-white truncate">{file.name}</h4>
                    <p className="text-xs text-zinc-500 font-mono mt-0.5">{formatBytes(file.size)}</p>
                  </div>
                </div>
                <button
                  onClick={handleRemoveFile}
                  className="w-8 h-8 rounded-full bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white flex items-center justify-center transition-colors duration-150 border border-zinc-800/40"
                  title="Remove file"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
            <button
              onClick={handleUpload}
              disabled={!file}
              className={`w-full mt-6 py-4 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${file
                  ? "bg-white hover:bg-zinc-200 text-black shadow-lg transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  : "bg-zinc-900 text-zinc-600 border border-zinc-850 cursor-not-allowed"
                }`}
            >
              Generate MCQ Question Bank
            </button>
          </div>
        )}
        {loading && (
          <div className="py-6 sm:py-10 flex flex-col">
            <div className="flex items-center gap-4 border-b border-zinc-900 pb-6 mb-8">
              <div className="w-10 h-10 rounded-full border-2 border-zinc-850 border-t-white animate-spin shrink-0"></div>
              <div>
                <h3 className="text-md font-semibold text-white">Compiling Assessment</h3>
                <p className="text-xs text-zinc-500 font-sans">Analyzing textbook materials...</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 font-mono">
              {pipelineSteps.map((step, idx) => {
                const isActive = activeStep === idx;
                const isCompleted = activeStep > idx;
                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 transition-opacity duration-300 ${isActive ? "opacity-100" : isCompleted ? "opacity-60" : "opacity-30"
                      }`}
                  >
                    <div className="shrink-0 mt-1">
                      {isCompleted ? (
                        <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center">
                          <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      ) : isActive ? (
                        <div className="w-5 h-5 rounded-full bg-white/10 border border-white flex items-center justify-center">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-zinc-950 border border-zinc-900 flex items-center justify-center text-[10px] text-zinc-700 font-bold">
                          0{idx + 1}
                        </div>
                      )}
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold ${isActive ? "text-white" : "text-zinc-300"}`}>
                        {step.title}
                      </h4>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        )}
        {generated && !loading && (
          <div className="py-4">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Generation Complete</h3>
                <p className="text-zinc-400 text-xs mt-1 font-light font-sans">
                  The RAG pipeline successfully compiled print-ready booklet assets.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-900 flex flex-col justify-between h-44 hover:border-zinc-800 transition-colors duration-150">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">Assessment PDF</span>
                  <h4 className="text-sm font-semibold text-white mt-2 leading-relaxed">Question Bank Booklet</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 font-sans font-light">Includes print-ready exam layout with header margins and clean lines.</p>
                </div>
                <a
                  href="http://127.0.0.1:8000/download/mcq"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs font-semibold rounded-lg premium-border transition-colors duration-150 text-center"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Booklet
                </a>
              </div>
              <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-900 flex flex-col justify-between h-44 hover:border-zinc-800 transition-colors duration-150">
                <div>
                  <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">Answers & Explanation PDF</span>
                  <h4 className="text-sm font-semibold text-white mt-2 leading-relaxed">Answer Key & Explanations</h4>
                  <p className="text-[11px] text-zinc-400 mt-1 font-sans font-light font-sans">Contains correct choices coupled with thorough academic justifications.</p>
                </div>
                <a
                  href="http://127.0.0.1:8000/download/answers"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs font-semibold rounded-lg premium-border transition-colors duration-150 text-center"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Download Answer Key
                </a>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="mt-8 flex items-center justify-center gap-2 mx-auto text-zinc-400 hover:text-white text-xs font-semibold font-mono tracking-wide py-2.5 px-6 rounded-full bg-zinc-950 hover:bg-zinc-900 border border-zinc-900 transition-all duration-200"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 7.89M9 11l3-3m0 0l3 3m-3-3v12" />
              </svg>
              Generate New Assessment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default UploadCard;