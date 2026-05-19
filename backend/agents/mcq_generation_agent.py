import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
load_dotenv()
llm = ChatGoogleGenerativeAI(
    model="gemini-3-flash-preview",
    google_api_key=os.getenv("GEMINI_API_KEY"),
    temperature=1.0
)
def generate_mcqs(vector_store):
    retriever = vector_store.as_retriever(
        search_kwargs={
            "k": 30
        }
    )
    docs = retriever.invoke(
        "Complete NCERT Class 10 Polynomials chapter including all concepts, graphs, exercises, examples, tables and figures"
    )
    context = ""
    for doc in docs:
        context += doc.page_content + "\n"
    prompt = f"""
    Generate a comprehensive MCQ question bank
    from the NCERT Class 10 Mathematics
    chapter Polynomials.
    Instructions:

    - Generate a COMPLETE balanced MCQ question bank
    - Cover the ENTIRE chapter uniformly
    - Cover ALL concepts
    - Cover ALL exercises
    - Cover ALL examples
    - Cover graphs, tables and figures

    - Include a balanced mix of:
      - Conceptual questions
      - Formula-based questions
      - Graph-based questions
      - Table-based questions
      - Figure-based questions
      - Exercise-based questions
      - Polynomial zeroes questions
      - Factorization questions
      - HOTS questions
      - Application-based questions

    - Do NOT focus only on graphs
    - Do NOT focus only on tables
    - Do NOT focus only on formulas

    - Maintain balanced distribution across all topics
    
    - Generate a massive, comprehensive, and high-quality MCQ question bank covering the entire chapter thoroughly.
    
    - Generate as many unique, non-repetitive questions as possible (aiming for maximum coverage) so that no topic, exercise, example, graph, figure, or formula is left out.
    
    - Ensure a balanced distribution across all concepts:
      - Conceptual/theory-based MCQs
      - Calculation/formula/exercise-based MCQs
      - Graph, figure, or table interpretation MCQs
    
    - Number every question consecutively starting from Q1.
    - Match NCERT standard and rigour.

    IMPORTANT RULES FOR GRAPH QUESTIONS:

    - NEVER reference NCERT figure names like
      Fig 2.9 or Fig 2.10

    - NEVER write:
      "Assume a graph"

    - NEVER depend on textbook images

    - Every graph-based question MUST be
      completely self-contained

    - Every graph question must include the
      complete polynomial equation explicitly
      inside the question

    - Generate equations dynamically based on
      chapter concepts

    Example style only:

    "Observe the graph of
    y = x^2 - 5x + 6
    and identify the zeroes."

    Formatting Rules:

    - Do NOT use markdown
    - Do NOT use symbols like ### or **
    - Do NOT use headings
    - Do NOT provide explanations
    - Do NOT provide answers
    - Keep clean professional formatting

    Format:

    Q1. Question

    A. Option
    B. Option
    C. Option
    D. Option

    Q2. Question

    A. Option
    B. Option
    C. Option
    D. Option

    Chapter Content:

    {context}
    """
    response = llm.invoke(prompt)
    content = response.content
    if isinstance(content, list):
        parts = []
        for part in content:
            if isinstance(part, str):
                parts.append(part)
            elif isinstance(part, dict):
                parts.append(
                    part.get("text", "")
                    or part.get("content", "")
                )
            elif hasattr(part, "text"):
                parts.append(part.text)
            elif hasattr(part, "content"):
                parts.append(part.content)
        return "".join(parts)
    return str(content)