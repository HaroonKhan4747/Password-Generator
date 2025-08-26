const prefixes = {
  general: ["Next", "Prime", "Elite", "Nova", "True", "Bright", "Blue", "Vision", "Urban", "Quantum", "Epic", "Super", "Meta", "Alpha", "Global", "Future"],
  tech: ["Cyber", "Pixel", "Data", "Cloud", "Code", "AI", "Neuro", "Net", "Robo", "Soft", "Techno"],
  fashion: ["Vogue", "Style", "Chic", "Mode", "Trend", "Elite", "Wear", "Cloth", "Luxe", "Glam"],
  food: ["Tasty", "Yum", "Fresh", "Chef", "Bite", "Snack", "Sweet", "Grill", "Kitchen", "Feast"],
  fitness: ["Fit", "Flex", "Strong", "Power", "Core", "Pulse", "Iron", "Beast", "Muscle", "Active"],
  finance: ["Capital", "Wealth", "Trust", "Coin", "Fund", "Pay", "Invest", "Value", "Bank"],
  health: ["Medi", "Care", "Life", "Pure", "Well", "Bio", "Cure", "Green", "Heal"],
  travel: ["Trip", "Globe", "Air", "Fly", "Wander", "Roam", "Nomad", "Explore", "Go"],
  education: ["Learn", "Edu", "Skill", "Smart", "Think", "Bright", "Mind", "Tutor", "Class"],
  gaming: ["Play", "Game", "XP", "Quest", "Level", "Boss", "Arena", "Pixel", "Control"]
};

const suffixes = {
  general: ["Labs", "Works", "Hub", "Point", "Solutions", "Zone", "Edge", "World", "Base", "Studio", "Nation"],
  tech: ["Systems", "Logic", "Soft", "Tech", "Cloud", "Ware", "Dynamics"],
  fashion: ["Wear", "Couture", "Apparel", "Line", "Looks", "House", "Threads"],
  food: ["Foods", "Bites", "Grill", "Kitchen", "Eats", "Cafe", "Dine"],
  fitness: ["Gym", "Force", "Athletics", "Club", "Zone", "Squad", "Nation"],
  finance: ["Group", "Funds", "Holdings", "Pay", "Wallet", "Trust", "Capital"],
  health: ["Clinic", "Care", "Health", "Labs", "Pharma", "Wellness", "Therapy"],
  travel: ["Travels", "Airways", "Tours", "Trips", "Journey", "World", "Getaway"],
  education: ["Academy", "School", "College", "Institute", "Center", "Labs"],
  gaming: ["Zone", "Arena", "Guild", "Squad", "Legends", "Empire", "Nation"]
};

document.getElementById("generateBtn").addEventListener("click", generateNames);
document.getElementById("copyAllBtn").addEventListener("click", copyAll);

function generateNames() {
  const wordCount = parseInt(document.getElementById("wordCount").value);
  const niche = document.getElementById("niche").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  let names = new Set();

  while (names.size < 20) {
    let nameParts = [];

    if (wordCount === 1) {
      nameParts.push(randomFrom(prefixes[niche]));
    } else if (wordCount === 2) {
      nameParts.push(randomFrom(prefixes[niche]));
      nameParts.push(randomFrom(suffixes[niche]));
    } else if (wordCount === 3) {
      nameParts.push(randomFrom(prefixes[niche]));
      nameParts.push(randomFrom(prefixes.general));
      nameParts.push(randomFrom(suffixes[niche]));
    }

    const name = nameParts.join("");
    names.add(name);
  }

  names.forEach(n => {
    const card = document.createElement("div");
    card.classList.add("name-card");
    card.innerHTML = `
      <h3>${n}</h3>
      <button class="copy-btn" onclick="copyName('${n}')">Copy</button>
      <button class="domain-btn" onclick="checkDomain('${n}')">Check Domain</button>
    `;
    resultsDiv.appendChild(card);
  });
}

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function copyName(name) {
  navigator.clipboard.writeText(name);
  alert(`Copied: ${name}`);
}

function copyAll() {
  const names = Array.from(document.querySelectorAll(".name-card h3")).map(e => e.innerText);
  navigator.clipboard.writeText(names.join(", "));
  alert("All names copied!");
}

function checkDomain(name) {
  const url = `https://www.godaddy.com/en/domainsearch/find?checkAvail=1&tmskey=&domainToCheck=${name}.com`;
  window.open(url, "_blank");
}
