document.getElementById("generateBtn").addEventListener("click", () => {
  const text = document.getElementById("inputText").value.trim();

  if (!text) {
    alert("Please enter a paragraph first!");
    return;
  }

  fetch("http://localhost:5000/bulletpoints", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      const bulletList = document.getElementById("bulletList");
      bulletList.innerHTML = "";
      data.bullets.forEach(point => {
        const li = document.createElement("li");
        li.textContent = point;
        bulletList.appendChild(li);
      });
    })
    .catch(err => {
      console.error("Error:", err);
      alert("Something went wrong! Check console.");
    });
});
