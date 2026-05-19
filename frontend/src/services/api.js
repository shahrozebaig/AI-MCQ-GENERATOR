const API_BASE_URL = "http://localhost:8501";
export async function uploadPDF(file) {
    const formData = new FormData();
    formData.append(
        "file",
        file
    );
    const response = await fetch(
        `${API_BASE_URL}/upload`,
        {
            method: "POST",
            body: formData
        }
    );
    return response.json();
}
export async function generateMCQs() {
    const response = await fetch(
        `${API_BASE_URL}/generate`,
        {
            method: "POST"
        }
    );
    return response.json();
}