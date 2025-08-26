const niches = {
  tech: ["Code", "Byte", "Neuro", "Quantum", "Cloud", "Net", "Core", "Mint", "Forge", "Pilot"],
  fashion: ["Chic", "Aura", "Loom", "Velour", "Mode", "Trend", "Muse", "Urban", "Mint", "Atelier"],
  food: ["Taste", "Savor", "Fresh", "Bite", "Flavor", "Nest", "Mint", "Bloom", "Kitchen", "Delight"],
  fitness: ["Iron", "Flex", "Power", "Enduro", "Zen", "Pulse", "Core", "Forge", "Motion", "Mint"],
  finance: ["Wealth", "Fund", "Capital", "Trust", "Ledger", "Safe", "Nest", "Mint", "Core", "Prime"]
};

function generateNames() {
  const niche = document.getElementById("niche").value;
  const words = niches[niche];
  let results = [];
  for (let i = 0; i < 12; i++) {
    let name;
    const style = Math.floor(Math.random() * 3); // 0 = one word, 1 = two words, 2 = three words
    if (style === 0) {
      name = words[Math.floor(Math.random() * words.length)] + (Math.random() > 0.5 ? "ly" : "io");
    } else if (style === 1) {
      name = words[Math.floor(Math.random() * words.length)] + words[Math.floor(Math.random() * words.length)];
    } else {
      name = words[Math.floor(Math.random() * words.length)] + words[Math.floor(Math.random() * words.length)] + words[Math.floor(Math.random() * words.length)];
    }
    results.push(name);
  }
  displayNames(results);
}

function displayNames(names) {
  const container = document.getElementById("nameResults");
  container.innerHTML = "";
  names.forEach(name => {
    const div = document.createElement("div");
    div.className = "name-card";
    div.innerHTML = `
      <strong>${name}</strong><br/>
      <button onclick="copyName('${name}')">Copy</button>
      <button onclick="checkDomain('${name}')">Check Domain</button>
    `;
    container.appendChild(div);
  });
}

function copyName(name) {
  navigator.clipboard.writeText(name);
  alert(`Copied: ${name}`);
}

function checkDomain(name) {
  const url = `https://www.godaddy.com/en/domainsearch/find?domainToCheck=${name.toLowerCase()}.com`;
  window.open(url, "_blank");
}

function copyAllNames() {
  const container = document.getElementById("nameResults");
  let allNames = Array.from(container.querySelectorAll("strong")).map(el => el.innerText).join(", ");
  navigator.clipboard.writeText(allNames);
  alert("All names copied!");
}

// Hamburger toggle
document.querySelector(".hamburger").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("show");
});
