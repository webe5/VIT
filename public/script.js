// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyA6qBmDUseQCjX6uYtiMxP74f3ok6RBZCI",
  authDomain: "ai-note-maker.firebaseapp.com",
  projectId: "ai-note-maker",
  storageBucket: "ai-note-maker.firebasestorage.app",
  messagingSenderId: "157693415543",
  appId: "1:157693415543:web:3db722cdc71b4ebdaa3672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Bullet Point Generator
document.getElementById('generateNote').addEventListener('click', async () => {
  const input = document.getElementById('noteInput').value.trim();
  const output = document.getElementById('noteOutput');

  output.innerHTML = '';

  if (input === "") {
    output.innerHTML = `<li>Please enter valid input!</li>`;
    return;
  }

  // Simulate AI Bullet Point Conversion
  const sentences = input.match(/[^.!?]+[.!?]*/g) || [input];
  const bulletPoints = sentences.slice(0, 6).map(s => s.trim());

  // Display bullets
  bulletPoints.forEach(point => {
    const li = document.createElement('li');
    li.textContent = point;
    output.appendChild(li);
  });

  // Save to Firestore
  try {
    await addDoc(collection(db, "notes"), {
      inputText: input,
      aiNote: bulletPoints,
      createdAt: new Date().toISOString()
    });
    console.log("Note saved to Firestore.");
  } catch (e) {
    console.error("Error saving note:", e);
  }
});
