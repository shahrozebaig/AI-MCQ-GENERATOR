import os
from fastapi import FastAPI
from fastapi import UploadFile
from fastapi import File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from agents.parser_agent import extract_text_from_pdf
from agents.chunking_agent import chunk_text
from agents.retrieval_agent import create_vector_store
from agents.mcq_generation_agent import generate_mcqs
from agents.explanation_agent import generate_explanations
from agents.pdf_export_agent import generate_question_pdf
from agents.pdf_export_agent import generate_answer_pdf
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
os.makedirs(
    "data/raw",
    exist_ok=True
)
os.makedirs(
    "outputs",
    exist_ok=True
)
@app.get("/")
def home():
    return {
        "message": "AI MCQ Generator Backend Running"
    }
@app.post("/upload")
async def upload_pdf(
    file: UploadFile = File(...)
):
    file_path = "data/raw/polynomials_ncert.pdf"
    with open(
        file_path,
        "wb"
    ) as f:
        f.write(
            await file.read()
        )
    return {
        "message": "PDF Uploaded Successfully"
    }
@app.post("/generate")
async def generate():
    text = extract_text_from_pdf(
        "data/raw/polynomials_ncert.pdf"
    )
    chunks = chunk_text(text)
    vector_store = create_vector_store(chunks)
    mcqs = generate_mcqs(vector_store)
    answers = generate_explanations(mcqs)
    generate_question_pdf(
        mcqs,
        "outputs/mcq_question_bank.pdf"
    )
    generate_answer_pdf(
        answers,
        "outputs/answers_explanations.pdf"
    )
    return {
        "message": "PDFs Generated Successfully"
    }
@app.get("/download/mcq")
async def download_mcq():
    return FileResponse(
        "outputs/mcq_question_bank.pdf",
        media_type="application/pdf",
        filename="mcq_question_bank.pdf"
    )
@app.get("/download/answers")
async def download_answers():
    return FileResponse(
        "outputs/answers_explanations.pdf",
        media_type="application/pdf",
        filename="answers_explanations.pdf"
    )