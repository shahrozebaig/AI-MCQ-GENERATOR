from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Image,
    Table,
    TableStyle
)
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib import colors
from utils.question_parser import (
    split_questions,
    is_graph_question
)
from utils.graph_generator import generate_graph
def create_table_from_question(question):
    lines = question.split("\n")
    table_data = []
    for line in lines:
        if "|" in line:
            row = [
                item.strip()
                for item in line.split("|")
            ]
            table_data.append(row)
    if len(table_data) == 0:
        return None
    table = Table(table_data)
    table.setStyle(
        TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), colors.lightgrey),
            ("GRID", (0, 0), (-1, -1), 1, colors.black),
            ("ALIGN", (0, 0), (-1, -1), "CENTER"),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("BOTTOMPADDING", (0, 0), (-1, 0), 10),
        ])
    )
    return table
def generate_question_pdf(content, filename):
    doc = SimpleDocTemplate(filename)
    styles = getSampleStyleSheet()
    elements = []
    elements.append(
        Paragraph(
            "MCQ Question Bank",
            styles["Title"]
        )
    )
    elements.append(
        Spacer(1, 12)
    )
    if isinstance(content, list):
        cleaned_items = []
        for item in content:
            if isinstance(item, str):
                cleaned_items.append(item)
            elif isinstance(item, dict):
                cleaned_items.append(item.get("text", "") or item.get("content", "") or str(item))
            else:
                cleaned_items.append(str(item))
        content = "\n".join(cleaned_items)
    questions = split_questions(content)
    for index, question in enumerate(questions):
        full_question = f"Q{index + 1}. {question}"
        elements.append(
            Paragraph(
                full_question.replace("\n", "<br/>"),
                styles["BodyText"]
            )
        )
        elements.append(
            Spacer(1, 12)
        )
        table = create_table_from_question(
            full_question
        )
        if table:
            elements.append(table)
            elements.append(
                Spacer(1, 20)
            )
        if is_graph_question(full_question):
            graph_path = generate_graph(
                full_question,
                index
            )
            if graph_path:
                graph_image = Image(
                    graph_path,
                    width=320,
                    height=240
                )
                elements.append(graph_image)
                elements.append(
                    Spacer(1, 20)
                )
    doc.build(elements)
def generate_answer_pdf(content, filename):
    doc = SimpleDocTemplate(filename)
    styles = getSampleStyleSheet()
    elements = []
    elements.append(
        Paragraph(
            "Answers and Explanations",
            styles["Title"]
        )
    )
    elements.append(
        Spacer(1, 12)
    )
    if isinstance(content, list):
        cleaned_items = []
        for item in content:
            if isinstance(item, str):
                cleaned_items.append(item)
            elif isinstance(item, dict):
                cleaned_items.append(item.get("text", "") or item.get("content", "") or str(item))
            else:
                cleaned_items.append(str(item))
        content = "\n".join(cleaned_items)
    elements.append(
        Paragraph(
            content.replace("\n", "<br/>"),
            styles["BodyText"]
        )
    )
    doc.build(elements)