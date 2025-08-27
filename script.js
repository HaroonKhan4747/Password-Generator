// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Word banks
const wordBanks = {
  general: ["Nexa","Craftr","Muso","Doodly","Whimsy","Orbit","Vertex","Fluxo","Lumina","Pivora","Zentro","Loomsy","Novatra","Vanta","Clario","Bravio"],
  tech: ["Cybera","Techify","Innova","Quantum","Neura","Aivara","Nexora","Gridex","Byteon","Cloudra","Stratos","Voltix","Codexa","Optivus","Zyber"],
  fashion: ["Vogueo","Trendora","Chicara","Modeza","Loomis","Atelier","Stylista","Runvia","Couturex","Fabria","Weavora","Draper","Modera","Glamex"],
  food: ["Nibble","Tastera","Savora","Brewsy","Feasto","Delisho","Cravory","Sizzle","Forksy","Tastina","Grillix","Munchly","Zesty"],
  fitness: ["Flexora","Musclio","Energex","Fitara","Corely","Pulseo","Liftora","Gymora","StaminaX","Trainex","Vigoro"],
  finance: ["Wealthra","Fundora","Capitalex","Payora","Coinex","Bankora","Investro","Equita","Cashora","Valora","Mintsy"],
  creative: ["DoodleX","Pixora","Artivus","Musera","Imagera","Visionix","Draftsy","Inspira","Narrato","Quillio","Sketchra"],
  eco: ["Greenera","Ecofy","Leafora","Solara","Planterra","Sustaina","Verdea","Bloomsy","Earthora","Bioflux"],
  luxury: ["Aurora","Veloria","Opulenx","Prestixo","Lustra","Exquira","Nobela","RoyaleX","Elitea","Gildora"],
  education: ["Learnix","Eduvia","Tutorra","Mindora","Skillen","Knowora","Studium","Academix","Scholarra","Lectra"],
  gaming: ["Gamora","Playrix","Joypadz","Questly","Lootra","ArenaX","Pixelio","Levelio","Epicra","Bossra"],
  travel: ["Voyora","Triplex","Jetora","Globetra","Roamara","ExploraX","Journeo","Trekora","Nomadra","Adventra"]
};

// Generate button
document.getElementById("generateBtn").addEventListener("click", () => {
  const niche = document.getElementById("niche").value;
  const wordCount = parseInt(document.getElementById("wordCount").value);
  const numNames = parseInt(document.getElementById("numNames").value);

  const results = document.getElementById("results");
  results.innerHTML = "";

  const bank = wordBanks[niche] || wordBanks.general;

  for (let i = 0; i < numNames; i++) {
    let name = "";
    if (wordCount === 1) {
      name = bank[Math.floor(Math.random() * bank.length)];
    } else {
      let parts = [];
      for (let j = 0; j < wordCount; j++) {
        parts.push(bank[Math.floor(Math.random() * bank.length)]);
      }
      name = parts.join("");
    }

    const li = document.createElement("li");
    li.textContent = name;

    const actions = document.createElement("div");
    actions.classList.add("result-actions");

    const copyBtn = document.createElement("button");
    copyBtn.textContent = "Copy";
    copyBtn.className = "btn";
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(name);
      copyBtn.textContent = "Copied!";
      setTimeout(() => (copyBtn.textContent = "Copy"), 1500);
    };

    const domainBtn = document.createElement("button");
    domainBtn.textContent = "Check Domain";
    domainBtn.className = "btn";
    domainBtn.onclick = () => {
      window.open(`https://www.godaddy.com/en/domainsearch/find?checkAvail=1&tmskey=&domainToCheck=${name}.com`, "_blank");
    };

    actions.appendChild(copyBtn);
    actions.appendChild(domainBtn);
    li.appendChild(actions);
    results.appendChild(li);
  }
});
