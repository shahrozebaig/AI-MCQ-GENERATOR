import os
from dotenv import load_dotenv
from langchain_google_genai import ChatGoogleGenerativeAI
load_dotenv()
llm = ChatGoogleGenerativeAI(
    model="gemini-3-flash-preview",
    google_api_key=os.getenv("GEMINI_API_KEY"),
    temperature=1.0
)
def generate_explanations(mcqs):
    prompt = f"""
    Generate correct answers and brief,
    step-by-step explanations for the
    following MCQs.

    Instructions:

    - Mention the correct option clearly
      Example:
      Correct Answer: B

    - The explanation MUST focus only on
      the solving process

    - Provide explanations in short bullet points
      using only simple dashes '-'

    - Keep explanations short and clean

    - Use simple NCERT-level explanations

    - Maintain proper numbering

    - Do NOT use markdown

    - Do NOT use symbols like ** or ###

    - Do NOT use characters like < or >

    - Keep professional answer-sheet format

    Format:

    Q1. Correct Answer: B

    Explanation:

    - Step 1: State the formula or concept.
    - Step 2: Apply the calculation or logic.
    - Step 3: Final answer.

    Q2. Correct Answer: A

    Explanation:

    - Step 1: State the formula or concept.
    - Step 2: Apply the calculation or logic.
    - Step 3: Final answer.

    MCQs:
    {mcqs}
    """
    response = llm.invoke(prompt)
    content = response.content
    if isinstance(content, list):
        parts = []
        for part in content:
            if isinstance(part, str):
                parts.append(part)
            elif isinstance(part, dict):
                parts.append(part.get("text", "") or part.get("content", ""))
            elif hasattr(part, "text"):
                parts.append(part.text)
            elif hasattr(part, "content"):
                parts.append(part.content)
        return "".join(parts)
    return str(content)