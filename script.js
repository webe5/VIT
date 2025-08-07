function generateSummary() {
  const originalText = document.getElementById("originalText").value;
  
  document.getElementById("originalOutput").innerText = originalText;

  // Simulated summary (replace with OpenAI API call later)
  const fakeSummary = originalText
    .split('. ')
    .slice(0, 3)
    .map(line => "• " + line)
    .join('\n');

  document.getElementById("summaryOutput").innerText = fakeSummary;
}
