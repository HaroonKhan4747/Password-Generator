document.addEventListener("DOMContentLoaded", function () {
  const niches = {
    general: {
      prefixes: ["Nova","Pulse","Core","Lumen","Metro","Echo","Orbit","Forge","Nexus","Apex","Horizon","Summit","Aurora","Crest","Beacon","Vista","Harbor","Sage","Pioneer","Haven","Bridge","Foundry","Studio","Collective","Union","Canvas","Pilot","Craft","Mint","Works","Lab","Loop","Edge","Shift","Flux","Drift","Spark","Field","Point","Frame","Nest","Mode","Origin","Prime","Bright","Merge","Scale","Flow","Rise","Peak","Cliff","Tide"],
      suffixes: ["Labs","Works","Co","Hub","Flow","Sync","Dynamics","Solutions","Group","Systems","Corp","Global","Nation","Point","Logic","Ops","World","Partners","Zone","Edge","Network","Collective","Alliance","Industries","House","Garage","Deck","Bay","Studio","Grid","Nest","Hive","Space","Circle","Square","Club","Union","Nation","Station","Sphere","Bridge","Port","Field","Rise","Shift"]
    },
    tech: {
      prefixes: ["Quantum","Neuro","Byte","Cloud","Data","Code","Circuit","Vector","Pixel","Nano","AI","Bot","Kernel","Matrix","Logic","Signal","Node","Synapse","Fusion","Axon","Cipher","Grid","Cache","Stream","Pulse","Stack","Bridge","Frame","Protocol","Cluster","Forge","Synth","Optic","Quanta","Volt","Mesh","API","SDK","Runtime","Compile","Binary","Compute","Orion","Vertex","Helix","Bit","Loop"],
      suffixes: ["Tech","Systems","Soft","Ware","Logic","Net","Works","Dynamics","Flow","Base","Ops","Edge","Labs","Core","Data","Cloud","AI","Hub","Solutions","World","Global","Network","Stack","Bit","Grid","Circuit","Link","Connect","Bot","Nation","Verse","Stream","Zone","Dynamics","Shift","Dynamics","Compute"]
    },
    fashion: {
      prefixes: ["Velour","Silk","Chic","Mode","Vogue","Luxe","Glam","Trend","Couture","Elite","Fleur","Drape","Aura","Paris","Runway","Style","Wardrobe","Urban","Thread","Closet","Fabric","Label","Muse","Edge","Icon","Tailor","Sleek","Bold","Fit","Form","Grace","Curve","Weave","Crest","Classic","Royal","Ensemble"],
      suffixes: ["Wear","Fits","Look","Works","Designs","Co","House","Collective","World","Edge","Nation","Union","Line","Circle","Wave","Rise","Closet","Nation","Mode","Style","Club","Grid","Verse","Lab","Tribe","Wardrobe","Flow"]
    }
    // TODO: Add the rest of your niches here, split into prefixes + suffixes like above
  };

  const generateBtn = document.getElementById("generate-btn");
  const resultsContainer = document.getElementById("results");
  const copyAllBtn = document.getElementById("copy-all-btn");
  const downloadBtn = document.getElementById("download-btn");

  function generateName(niche, wordsPerName) {
    const data = niches[niche];
    if (!data) return "";

    let name = "";
    if (wordsPerName === 1) {
      // pick either prefix or suffix randomly
      if (Math.random() > 0.5 && data.prefixes.length > 0) {
        name = data.prefixes[Math.floor(Math.random() * data.prefixes.length)];
      } else {
        name = data.suffixes[Math.floor(Math.random() * data.suffixes.length)];
      }
    } else {
      const prefix = data.prefixes[Math.floor(Math.random() * data.prefixes.length)];
      const suffix = data.suffixes[Math.floor(Math.random() * data.suffixes.length)];
      name = prefix + " " + suffix;

      if (wordsPerName === 3) {
        const extra = Math.random() > 0.5
          ? data.prefixes[Math.floor(Math.random() * data.prefixes.length)]
          : data.suffixes[Math.floor(Math.random() * data.suffixes.length)];
        name += " " + extra;
      }
    }
    return name;
  }

  generateBtn.addEventListener("click", function () {
    const niche = document.getElementById("niche").value;
    const count = parseInt(document.getElementById("count").value);
    const wordsPerName = parseInt(document.getElementById("words").value);

    resultsContainer.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const name = generateName(niche, wordsPerName);
      if (name) {
        const div = document.createElement("div");
        div.className = "result-item flex justify-between items-center bg-gray-100 p-2 rounded";
        div.innerHTML = `<span>${name}</span>
          <button class="copy-btn bg-blue-500 text-white px-2 py-1 rounded">Copy</button>`;
        resultsContainer.appendChild(div);
      }
    }
  });

  copyAllBtn.addEventListener("click", function () {
    const names = Array.from(document.querySelectorAll(".result-item span")).map(el => el.textContent);
    if (names.length === 0) return;

    navigator.clipboard.writeText(names.join("\n")).then(() => {
      alert("All names copied!");
    });
  });

  downloadBtn.addEventListener("click", function () {
    const names = Array.from(document.querySelectorAll(".result-item span")).map(el => el.textContent);
    if (names.length === 0) return;

    const blob = new Blob([names.join("\n")], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "names.txt";
    a.click();
    URL.revokeObjectURL(url);
  });

  document.addEventListener("click", function (e) {
    if (e.target.classList.contains("copy-btn")) {
      const name = e.target.previousElementSibling.textContent;
      navigator.clipboard.writeText(name).then(() => {
        alert(`Copied: ${name}`);
      });
    }
  });
});
