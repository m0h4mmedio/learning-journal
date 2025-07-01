function addEntry() {
  const input = document.getElementById("learningInput");
  const entryText = input.value.trim();

  if (entryText !== "") {
    const entryList = document.getElementById("entryList");
    const newEntry = document.createElement("li");
    newEntry.textContent = entryText;
    entryList.appendChild(newEntry);
    input.value = "";
  } else {
    alert("Please enter something you learned.");
  }
}