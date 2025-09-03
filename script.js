// ================== Hamburger Menu ==================
const hamburger = document.getElementById("hamburger");
const drawer = document.getElementById("drawer");
const drawerClose = document.getElementById("drawerClose");
const drawerOverlay = document.getElementById("drawerOverlay");

hamburger.addEventListener("click", () => {
    drawer.classList.remove("-translate-x-full");
    drawer.classList.add("translate-x-0");
    drawerOverlay.classList.add("active");
});

drawerClose.addEventListener("click", () => {
    drawer.classList.remove("translate-x-0");
    drawer.classList.add("-translate-x-full");
    drawerOverlay.classList.remove("active");
});

drawerOverlay.addEventListener("click", () => {
    drawer.classList.remove("translate-x-0");
    drawer.classList.add("-translate-x-full");
    drawerOverlay.classList.remove("active");
});


// ================== FAQ Section ==================
const faqToggles = document.querySelectorAll(".faq-toggle");
faqToggles.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
        const panel = btn.nextElementSibling;
        panel.style.display = panel.style.display === "block" ? "none" : "block";
    });
});

// ================== Word Bank (prefixes & suffixes) ==================
const wordBank = {
    general: {
        prefixes: ["Nova", "Pulse", "Prime", "Vision", "Next"],
        suffixes: ["Works", "Lab", "Edge", "World", "Nation"],
    },
    fashion: {
        prefixes: ["Vogue", "Chic", "Mode", "Haute", "Luxe"],
        suffixes: ["Wear", "Line", "Threads", "Runway", "Style"],
    },
    tech: {
        prefixes: ["Cyber", "Neuro", "Quantum", "Byte", "Pixel"],
        suffixes: ["Ware", "Systems", "Logic", "Tech", "Dynamics"],
    },
    fitness: {
        prefixes: ["Power", "Flex", "Iron", "Core", "Peak"],
        suffixes: ["Fit", "Strength", "Zone", "Training", "Nation"],
    },
    food: {
        prefixes: ["Taste", "Fresh", "Flavor", "Yum", "Chef"],
        suffixes: ["Bite", "Kitchen", "Feast", "Plates", "Corner"],
    }
};

// ================== Helper Functions ==================
function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function applyStyle(name, style) {
    switch (style) {
        case "professional":
            return name;
        case "trendy":
            return name.toLowerCase();
        case "creative":
            return name.split("")
                .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
                .join("");
        default:
            return name;
    }
}

// ================== Generator Logic ==================
function generateAndRender() {
    const niche = document.getElementById("nicheSelect").value;
    const style = document.querySelector('input[name="style"]:checked').value;
    const wordCount = parseInt(document.getElementById("wordCountSelect").value);
    const count = parseInt(document.getElementById("countSelect").value);

    const bank = wordBank[niche];
    if (!bank) return;

    let results = [];
    for (let i = 0; i < count; i++) {
        let parts = [];
        if (wordCount === 1) {
            parts.push(randomChoice(bank.prefixes.concat(bank.suffixes)));
        } else if (wordCount === 2) {
            parts.push(randomChoice(bank.prefixes));
            parts.push(randomChoice(bank.suffixes));
        } else {
            parts.push(randomChoice(bank.prefixes));
            parts.push(randomChoice(bank.suffixes));
            parts.push(randomChoice(bank.suffixes));
        }
        let name = applyStyle(parts.join(" "), style);
        results.push(name);
    }

    // Render results
    const resultsEl = document.getElementById("results");
    const resultsMeta = document.getElementById("resultsMeta");
    resultsEl.innerHTML = "";
    resultsMeta.textContent = `Generated ${results.length} names`;
    results.forEach(n => {
        const div = document.createElement("div");
        div.className = "result-item";
        div.textContent = n;
        resultsEl.appendChild(div);
    });
}

// Hook up Generate button
document.getElementById("generateBtn").addEventListener("click", (e) => {
    e.preventDefault();
    generateAndRender();
});
