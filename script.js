const generateBtn = document.getElementById("generateBtn");
const resultsDiv = document.getElementById("results");

const nameIdeas = {
  tech: ["Cloudify", "CodeNest", "PixelForge", "SoftSpark", "ByteLabs"],
  clothing: ["UrbanThread", "StyleNest", "TrendHive", "ModeCraft", "ChicWard"],
  food: ["TastyBite", "Freshly", "FlavorNest", "BellyGood", "Savorly"],
  creative: ["Dreamloom", "Visionary", "SparkFlow", "MuseLab", "Artify"],
  modern: ["Nexa", "Zentro", "Fluxa", "Modiva", "Uporia"],
};

function generateNames() {
  resultsDiv.innerHTML = "";

  const category = document.getElementById("category").value;
  const wordLength = document.getElementById("wordLength").value;

  let ideas = [];

  if (category === "all") {
    Object.values(nameIdeas).forEach(arr => ideas.push(...arr));
  } else {
    ideas = nameIdeas[category];
  }

  // Filter by word length
  if (wordLength !== "any") {
    ideas = ideas.filter(name => name.split(/(?=[A-Z])/).length == wordLength);
  }

  ideas.forEach(name => {
    const div = document.createElement("div");
    div.className = "result-item";
    div.innerHTML = `
      <span>${name}</span>
      <a href="https://www.godaddy.com/en/domainsearch/find?checkAvail=1&tmskey=&domainToCheck=${name.toLowerCase()}.com" target="_blank">Check Domain</a>
    `;
    resultsDiv.appendChild(div);
  });
}

generateBtn.addEventListener("click", generateNames);
