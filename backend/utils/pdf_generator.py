from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.lib.pagesizes import letter
def generate_pdf(
    title,
    content,
    filename
):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter
    )
    doc.title = title
    styles = getSampleStyleSheet()
    elements = []
    title_style = styles["Title"]
    body_style = styles["BodyText"]
    elements.append(
        Paragraph(
            title,
            title_style
        )
    )
    elements.append(
        Spacer(1, 20)
    )
    formatted_content = content.replace(
        "\n",
        "<br/>"
    )
    elements.append(
        Paragraph(
            formatted_content,
            body_style
        )
    )
    doc.build(elements)