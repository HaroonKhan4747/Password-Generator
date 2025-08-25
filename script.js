const wordBank = [
  "Nova", "Peak", "Vision", "Spark", "Core", "Cloud", "Next", "Hive", "Flow", "Boost",
  "Prime", "Edge", "Scale", "Lift", "Zen", "Quantum", "Fusion", "Logic", "Matrix", "Shift",
  "Urban", "Trend", "Forge", "Mode", "Luxe", "Thread", "Pulse", "Vibe", "Bold", "Elite"
];

function generateNames() {
  const prefix = document.getElementById("prefix").value.trim();
  const suffix = document.getElementById("suffix").value.trim();
  const count = parseInt(document.getElementById("nameCount").value);

  let results = "";
  for (let i = 0; i < count; i++) {
    const randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    const name = `${prefix}${randomWord}${suffix}`;
    results += `<div class="name-item">${name} <button onclick="copyText('${name}')">Copy</button></div>`;
  }
  document.getElementById("results").innerHTML = results;
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied: " + text);
  });
}

function copyAll() {
  const allNames = [...document.querySelectorAll(".name-item")].map(el => el.innerText.replace(" Copy", "")).join("\n");
  navigator.clipboard.writeText(allNames).then(() => {
    alert("All names copied!");
  });
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}
