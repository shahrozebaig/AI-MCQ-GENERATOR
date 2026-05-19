# Step-by-Step Approach

## Step 1 — PDF Upload

The user uploads the NCERT Class 10 Polynomials PDF through the Streamlit frontend.

The uploaded PDF is stored inside the project directory for further processing.

---

## Step 2 — PDF Text Extraction

The Parser Agent extracts text from the uploaded PDF using PyMuPDF.

The extracted text includes:

* Chapter content
* Definitions
* Formulae
* Examples
* Exercises
* Topic headings

This converts the PDF into machine-readable educational text.

---

## Step 3 — Text Chunking

The extracted chapter text is divided into smaller semantic chunks using Recursive Character Text Splitter.

Chunking is necessary because:

* LLMs have token limits
* Smaller chunks improve retrieval quality
* Context becomes more relevant
* Reduces hallucinations

Chunk overlap is also used to preserve continuity between topics.

---

## Step 4 — Embedding Generation

Each chunk is converted into numerical vector embeddings using Sentence Transformers.

Embedding converts educational text into mathematical vector representations.

This enables:

* Semantic search
* Similarity matching
* Context-aware retrieval
* Intelligent topic understanding

---

## Step 5 — FAISS Vector Store Creation

The embeddings are stored inside a FAISS vector database.

FAISS enables:

* Fast semantic retrieval
* Efficient similarity search
* Lightweight local vector storage
* High-speed context retrieval

This acts as the memory layer of the RAG system.

---

## Step 6 — Retrieval-Augmented Generation (RAG)

When MCQ generation starts:

* Relevant chunks are retrieved from FAISS
* Only contextually important content is sent to the LLM
* The LLM generates questions using retrieved context

This reduces hallucinations and improves syllabus accuracy.

---

## Step 7 — MCQ Generation Agent

The MCQ Generation Agent uses the Gemini 2.5 Flash model via LangChain to generate topic-wise MCQs.

The agent:

* Detects topics automatically
* Generates NCERT-level questions
* Creates 4 options
* Avoids duplicate questions
* Organizes questions topic-wise
* Covers full chapter concepts

---

## Step 8 — Explanation Agent

The Explanation Agent generates:

* Correct answers
* Detailed explanations
* Step-by-step reasoning
* Concept clarifications

This content is exported separately as an answer PDF.

---

## Step 9 — Validation Agent

The Validation Agent verifies:

* Full syllabus coverage
* Missing topics
* Duplicate MCQs
* Incorrect mathematics
* Weak questions
* NCERT alignment

This improves the reliability of generated educational content.

---

## Step 10 — PDF Generation

The generated MCQs and explanations are exported into professional PDFs using ReportLab.

Generated outputs:

* MCQ Question Bank PDF
* Answers & Explanations PDF
* Validation Report

---

# Agentic AI Workflow

The project follows a multi-agent workflow.

## Agents Used

| Agent                | Responsibility                     |
| -------------------- | ---------------------------------- |
| Parser Agent         | Extracts text from PDF             |
| Chunking Agent       | Splits text into chunks            |
| Retrieval Agent      | Retrieves semantic context         |
| MCQ Generation Agent | Generates MCQs                     |
| Explanation Agent    | Generates answers and explanations |
| Validation Agent     | Validates generated questions      |
| PDF Export Agent     | Creates PDFs                       |

---

# Tools and Technologies Used

| Tool / Technology     | Purpose              | Why Used                            |
| --------------------- | -------------------- | ----------------------------------- |
| Python                | Backend development  | Simple and powerful AI ecosystem    |
| Streamlit             | Frontend UI          | Fast AI app development             |
| LangChain             | AI orchestration     | Manages RAG pipeline and agents     |
| Google Gemini API     | LLM inference        | High-speed smart inference capacity |
| Gemini 2.5 Flash      | Large Language Model | Premium-quality educational answers  |
| Sentence Transformers | Embeddings           | Semantic vector generation          |
| FAISS                 | Vector database      | Fast local similarity search        |
| PyMuPDF               | PDF extraction       | Accurate PDF text parsing           |
| ReportLab             | PDF export           | Professional PDF generation         |
| dotenv                | API key management   | Secure environment handling         |

---

# Models Used

| Model                   | Type            | Size  | Purpose                                                        |
| ----------------------- | --------------- | ----- | -------------------------------------------------------------- |
| gemini-2.5-flash        | LLM             | -     | MCQ generation and explanations                                |
| BAAI/bge-large-en-v1.5  | Embedding Model | Large | High-quality semantic embeddings and better retrieval accuracy |

---