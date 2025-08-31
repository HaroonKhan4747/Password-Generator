// ================== Hamburger Menu ==================
const menuBtn = document.getElementById("menu-btn");
const sideDrawer = document.getElementById("side-drawer");
const closeDrawer = document.getElementById("close-drawer");

menuBtn.addEventListener("click", () => {
    sideDrawer.classList.toggle("open");
});

closeDrawer.addEventListener("click", () => {
    sideDrawer.classList.remove("open");
});

// ================== FAQ Section ==================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
        item.classList.toggle("open");
    });
});

// ================== Word Bank with Prefixes & Suffixes ==================
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
    // 👉 You can add more niches here later
};

// ================== Helper Functions ==================
function randomChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function applyStyle(name, style) {
    switch (style) {
        case "professional":
            return name; // Plain, clean
        case "trendy":
            return name.toLowerCase(); // Modern lowercase
        case "creative":
            return name
                .split("")
                .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
                .join(""); // Alternating case
        default:
            return name;
    }
}

// ================== Generator Logic ==================
function generateName() {
    const niche = document.getElementById("niche").value;
    const style = document.getElementById("style").value;
    const wordCount = document.getElementById("wordCount").value;

    const bank = wordBank[niche];
    if (!bank) return "⚠️ Invalid niche selected";

    let name = "";

    if (wordCount === "1") {
        name = randomChoice(bank.prefixes.concat(bank.suffixes));
    } else if (wordCount === "2") {
        name = randomChoice(bank.prefixes) + " " + randomChoice(bank.suffixes);
    } else {
        name = randomChoice(bank.prefixes) + " " + randomChoice(bank.suffixes) + " " + randomChoice(bank.suffixes);
    }

    return applyStyle(name, style);
}

// ================== Hooking into Button ==================
document.getElementById("generateBtn").addEventListener("click", () => {
    const result = generateName();
    document.getElementById("result").textContent = result;
});
