from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import HuggingFaceEmbeddings
def create_vector_store(chunks):
    embeddings = HuggingFaceEmbeddings(
        model_name="BAAI/bge-large-en-v1.5"
    )
    vector_store = FAISS.from_texts(
        chunks,
        embeddings
    )
    return vector_store