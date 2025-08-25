function generateNames() {
  const keywords = document.getElementById("keywords").value.split(",");
  const numNames = document.getElementById("numNames").value;
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  if (keywords.length === 0 || keywords[0] === "") {
    resultsDiv.innerHTML = "<p>Please enter at least one keyword.</p>";
    return;
  }

  let names = [];
  for (let i = 0; i < numNames; i++) {
    let randomKeyword = keywords[Math.floor(Math.random() * keywords.length)].trim();
    let suffixes = ["ify", "sy", "ly", "scape", "verse", "hub", "line", "point", "works", "genics"];
    let randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    let name = randomKeyword.charAt(0).toUpperCase() + randomKeyword.slice(1) + randomSuffix;
    names.push(name);
  }

  let list = "<ul>";
  names.forEach(n => list += `<li>${n}</li>`);
  list += "</ul>";

  resultsDiv.innerHTML = list;
}
