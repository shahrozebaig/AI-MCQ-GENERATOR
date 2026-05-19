function ProgressSection({ progress }) {
    return (
        <div className="max-w-4xl mx-auto mt-8">
            <div className="w-full bg-slate-800 rounded-full h-5 overflow-hidden">
                <div
                    className="bg-blue-600 h-5 transition-all duration-500"
                    style={{
                        width: `${progress}%`
                    }}
                ></div>
            </div>
            <p className="text-center mt-3 text-slate-400">
                {progress}% Completed
            </p>
        </div>
    );
}
export default ProgressSection;