function Loader() {
    return (
        <div className="flex flex-col items-center justify-center py-10">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="mt-5 text-slate-400 text-lg">
                Generating MCQs...
            </p>
        </div>
    );
}
export default Loader;