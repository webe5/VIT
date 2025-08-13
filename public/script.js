document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const logoutBtn = document.getElementById("logoutBtn");
    const summarizeBtn = document.getElementById("summarizeBtn");
    const processImageBtn = document.getElementById("processImageBtn");

    if (loginForm) {
        loginForm.addEventListener("submit", e => {
            e.preventDefault();
            window.location.href = "home.html";
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", e => {
            e.preventDefault();
            window.location.href = "home.html";
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

    if (summarizeBtn) {
        summarizeBtn.addEventListener("click", () => {
            const text = document.getElementById("textInput").value;
            const summaryList = document.getElementById("summaryList");
            summaryList.innerHTML = "";
            if (text.trim()) {
                const points = text.split(".").filter(p => p.trim() !== "");
                points.forEach(point => {
                    const li = document.createElement("li");
                    li.textContent = point.trim();
                    summaryList.appendChild(li);
                });
            }
        });
    }

    if (processImageBtn) {
        processImageBtn.addEventListener("click", () => {
            const imageList = document.getElementById("imageSummaryList");
            imageList.innerHTML = "<li>(Extracted text from screenshot will appear here)</li>";
        });
    }
});
