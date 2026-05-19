import re
def split_questions(mcqs_text):
    questions = re.split(
        r"\nQ\d+\.",
        mcqs_text
    )
    cleaned_questions = []
    for question in questions:
        question = question.strip()
        if question:
            cleaned_questions.append(question)
    return cleaned_questions
def is_graph_question(question):
    graph_keywords = [
        "graph",
        "parabola",
        "intersects",
        "x-axis",
        "zeroes",
        "polynomial graph",
        "curve"
    ]
    question_lower = question.lower()
    for keyword in graph_keywords:
        if keyword in question_lower:
            return True
    return False