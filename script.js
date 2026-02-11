// Load entries when page opens
document.addEventListener("DOMContentLoaded", loadEntries);

function addEntry() {
  const input = document.getElementById("learningInput");
  const entryText = input.value.trim();

  if (entryText !== "") {
    const entries = getStoredEntries();
    entries.push(entryText);
    localStorage.setItem("learningEntries", JSON.stringify(entries));
    renderEntry(entryText);
    input.value = "";
  } else {
    alert("Please enter something you learned.");
  }
}

function getStoredEntries() {
  const stored = localStorage.getItem("learningEntries");
  return stored ? JSON.parse(stored) : [];
}

function loadEntries() {
  const entries = getStoredEntries();
  entries.forEach(entry => renderEntry(entry));
}

function renderEntry(text) {
  const entryList = document.getElementById("entryList");
  const newEntry = document.createElement("li");
  newEntry.textContent = text;
  entryList.appendChild(newEntry);
}

