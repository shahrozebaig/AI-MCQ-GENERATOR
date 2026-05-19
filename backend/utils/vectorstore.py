from langchain_community.vectorstores import FAISS
from utils.embedding_utils import load_embedding_model
def create_faiss_store(chunks):
    embeddings = load_embedding_model()
    vector_store = FAISS.from_texts(
        chunks,
        embeddings
    )
    return vector_store