document.getElementById("generateBtn").addEventListener("click", () => {
  const keywords = document.getElementById("keywords").value.split(",");
  const style = document.getElementById("style").value;
  const category = document.getElementById("category").value;
  const wordCount = parseInt(document.getElementById("wordCount").value);
  const results = document.getElementById("results");

  results.innerHTML = "";

  // Example words for styles/categories
  const styleWords = {
    trendy: ["Hive", "Pulse", "Buzz", "Vibe", "Glow"],
    professional: ["Group", "Consult", "Partners", "Solutions", "Associates"],
    creative: ["Spark", "Nest", "Flow", "Edge", "Forge"]
  };

  const categoryWords = {
    general: ["Point", "Works", "Lab", "Zone", "Cloud"],
    tech: ["Tech", "AI", "Logic", "Byte", "Soft"],
    clothing: ["Wear", "Trend", "Fit", "Mode", "Style"],
    food: ["Bites", "Kitchen", "Fresh", "Taste", "Delish"],
    creative: ["Art", "Vision", "Craft", "Idea", "Ink"],
    modern: ["Nova", "Neo", "Next", "Prime", "Shift"]
  };

  let baseWords = (keywords[0] ? keywords.map(k => k.trim()) : ["Biz"]);

  for (let i = 0; i < 10; i++) {
    let nameParts = [];

    for (let j = 0; j < wordCount; j++) {
      if (j === 0) {
        nameParts.push(baseWords[Math.floor(Math.random() * baseWords.length)]);
      } else if (j === 1) {
        nameParts.push(styleWords[style][Math.floor(Math.random() * styleWords[style].length)]);
      } else {
        nameParts.push(categoryWords[category][Math.floor(Math.random() * categoryWords[category].length)]);
      }
    }

    const finalName = nameParts.join(" ");
    const li = document.createElement("li");
    li.textContent = finalName;
    results.appendChild(li);
  }
});
