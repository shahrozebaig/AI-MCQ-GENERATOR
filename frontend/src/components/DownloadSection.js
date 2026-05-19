function DownloadSection() {
    return (
        <div className="max-w-4xl mx-auto py-10 flex flex-col gap-5">
            <a
                href="http://localhost:8501/outputs/mcq_question_bank.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-green-600 hover:bg-green-700 py-4 rounded-2xl text-center text-lg font-semibold"
            >
                Download MCQ PDF
            </a>
            <a
                href="http://localhost:8501/outputs/answers_explanations.pdf"
                target="_blank"
                rel="noreferrer"
                className="bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl text-center text-lg font-semibold"
            >
                Download Answers PDF
            </a>
        </div>
    );
}
export default DownloadSection;