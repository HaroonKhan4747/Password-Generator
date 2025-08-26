// Mobile menu toggle
document.getElementById('hamburger')?.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// ------------------- Large word banks per niche/style -------------------
// Structure: banks[style][niche] = { prefixes:[], suffixes:[], singles:[] }
const banks = {
  trendy: {
    general: {
      prefixes: ["Nexo","Nova","Vibe","Pulse","Spark","Flux","Lumo","Neo","Aero","Drift","Zen","Vivid","Metro","Orbit","Prime","Bright","Edge","Core","Shift","Glide","Fuse","Wave","Mint","Pivot","Halo","Echo","Pixel","Quanta","Nimbus","Forge","Vista"],
      suffixes: ["ly","ify","io","ster","scape","grid","core","byte","forge","wave","cloud","flow","lane","loop","verse","stack","mate","nest","lab","hub","works","base","mark","pilot","craft","box","lift","spark","shift","nova"],
      singles: ["Nexor","Novia","Vibra","Pulso","Fluxo","Lumio","Aeron","Drify","Zenya","Vividy","Quix","Clouda","Minty","Forza","Vecta"]
    },
    tech: {
      prefixes: ["Cloud","Data","Cyber","Quantum","Byte","Code","Neuro","Net","Sync","Logic","Axon","Grid","Circuit","Kernel","Vector","Signal","Matrix","Pixel","Nano","Robo","AI","Tech","Infra","Hyper","Core","Node","Cloud","Circuit"],
      suffixes: ["Labs","Systems","Works","Logic","Soft","Stack","Net","Dynamics","Tech","Ware","Core","Bridge","Matrix","Axis","Forge","Flow","Engine","Solutions","Grid","Labs"],
      singles: ["Datify","Cloudix","Codexa","Quantix","AICore","Neurox","Byteon","Nanica"]
    },
    fashion: {
      prefixes:["Mode","Vogue","Chic","Urban","Style","Velvet","Silk","Luxe","Thread","Couture","Glam","Trend","Aura","Mode","Fable","Hexa","Moda","Stitch","Fabric","Gloss"],
      suffixes:["Haus","Loom","Wear","Lane","Boutique","House","Studio","Thread","Line","Label","Ward","Fashion","Works","Gallery","Collective"],
      singles:["Vogeo","Chica","Lustro","Modex","Glamra"]
    },
    food: {
      prefixes:["Fresh","Bite","Tasty","Oven","Chef","Grill","Pantry","Harvest","Savor","Spoon","Fork","Kitchen","Farm","Snack","Feast","Urban"],
      suffixes:["Kitchen","Foods","Bites","Eats","Cafe","Co","Table","House","Kitchen","Market","Chef","Bakery"],
      singles:["Yumly","Tastio","Savoro","Bitero"]
    },
    // add other niche entries below — for brevity some reuse general arrays
    health: { prefixes:["Pure","Heal","Well","Life","Bio","Medi","Care","Vital","Thera","Nutri","Cure","Pulse","Root"], suffixes:["Care","Health","Well","Labs","Clinic","Life","Works","Therapy","Wellness"], singles:["Pureo","Healix","Wellio"] },
    finance: { prefixes:["Capital","Wealth","Trust","Prime","Value","Fund","Secure","Mint","Ledger","Blue","Crest","Metric","Anchor"], suffixes:["Capital","Partners","Group","Holdings","Trust","Finance","Advisors","Ventures","Funds"], singles:["Coinly","Fundra","Payza"] },
    travel: { prefixes:["Cloud","Globe","Trip","Roam","Wander","Nomad","Jet","Air","Voyage","Go","Roamer"], suffixes:["Travels","Tours","Trips","Getaway","Journeys","Routes"], singles:["Nomado","Wandero","Triply"] },
    education: { prefixes:["Learn","Bright","Skill","Edu","Mind","Study","Tutor","Class","Academy","Think"], suffixes:["Academy","School","Labs","Center","Institute","Works"], singles:["Learnify","SkillUp","Tutorly"] },
    gaming: { prefixes:["Play","Quest","Level","Pixel","Arena","Guild","Game","XP","Boss","Arcade"], suffixes:["Zone","Arena","Studios","Labs","Guild","Play"], singles:["Gamerz","Playon","Questly"] }
  },

  professional: {
    // professional banks favor strong corporate words
    general: {
      prefixes:["Prime","North","Blue","Ever","Crest","Summit","Sterling","Granite","Beacon","Cedar","River","Atlas","Guardian","Unity","Keystone","Legacy","Pioneer","Crown","Harbor","Iron","Silver","Noble","Anchor","Oak","Vista","Regal","First","Global","Capital","Apex"],
      suffixes:["Group","Partners","Holdings","Advisory","Consulting","Solutions","Associates","Enterprises","Management","Trust","Ventures","Analytics","Capital","Industries","Systems","Collective","Dynamics"],
      singles:["Primeon","Evera","Cresta","Nobile"]
    },
    tech: {
      prefixes:["Atlas","Crest","Iron","Beacon","Summit","Keystone","Pioneer","Vector","Apex","Bridge","Catalyst","Foundation","Atlas"], 
      suffixes:["Systems","Solutions","Dynamics","Analytics","Consulting","Technologies","Networks","Enterprises","Partners"],
      singles:["AtlaSys","Apexon","Vectora"]
    },
    fashion: {
      prefixes:["Regal","Crown","Heritage","Sterling","Noble","Classic","Majesty","Prestige"],
      suffixes:["Group","Holdings","Studios","Collective","Ventures","Brands"],
      singles:["Regalia","Steron"]
    },
    food: {
      prefixes:["Harvest","Granary","Cornerstone","Cedar","Beacon","Summit"],
      suffixes:["Foods","Enterprises","Holdings","Group","Kitchen"],
      singles:["Harvesta","Granito"]
    },
    health: {
      prefixes:["Cedar","Beacon","Guard","Harbor","Pioneer","Unity","Legacy"],
      suffixes:["Health","Clinic","Medical","Care","Wellness","Therapeutics"],
      singles:["Cedarix","Harbora"]
    },
    finance: {
      prefixes:["Capital","Ledger","Trust","Anchor","Summit","Harbor","Crown"],
      suffixes:["Capital","Partners","Group","Holdings","Advisors","Wealth"],
      singles:["Trusta","Ledgero"]
    },
    travel: { prefixes:["Harbor","Gateway","Summit","Atlas"], suffixes:["Travel","Holdings","Adventures","Journeys"], singles:["Gateway"] },
    education: { prefixes:["Foundation","Institute","Academy","Summit"], suffixes:["Institute","Academy","Center","Institute"], singles:["Instructa"] },
    gaming: { prefixes:["Legion","Valor","Summit"], suffixes:["Studios","Enterprises","Networks"], singles:["LegionX"] }
  },

  creative: {
    general: { prefixes:["Fizz","Echo","Doodle","Mingle","Quirk","Hatch","Whim","Bumble","Pepper","Clever","Bright","Happy","Nimble","Rocket","Paper","Lemon","Mango","Juniper","Cotton","Maple","Indigo","Copper","Cobalt","Pep","Mirth","Fable","Orbit","Story","Snap","Aura","Lyric","Muse","Pixel","Vivid"], suffixes:["Foundry","Nest","Bloom","Loom","Forge","Mint","Muse","Patch","Pop","Sprout","Atelier","Lab","Studio","Works","House","Garden","Press","Pilot","Pixel","Pony","Pulse","Picnic"], singles:["Fableo","Muso","Doodly","Whimsy","Craftr"] },
    tech: { prefixes:["Orbit","Pixel","Rocket","Nova","Atom","Spark"], suffixes:["Labs","Studio","Works","Patch","Forge","Hub"], singles:["Orbiton","Pixela"] },
    fashion: { prefixes:["Cotton","Maple","Indigo","Velvet","Silk","Velour","Loom"], suffixes:["Studio","House","Atelier","Loom","Gallery"], singles:["Velora","Silka"] },
    food: { prefixes:["Pepper","Mango","Lemon","Basil","Citrus","Spice"], suffixes:["Kitchen","Pantry","Bites","Nook","Garden"], singles:["Peppero","Mangio"] },
    health: { prefixes:["Mirth","Bloom","Pure","Root","Leaf"], suffixes:["Well","Nest","Bloom","House","Studio"], singles:["Mirtha","Purely"] },
    finance: { prefixes:["Mint","Ledger","Penny","Copper"], suffixes:["Works","Studio","House","Labs"], singles:["Minty","Pennix"] },
    travel: { prefixes:["Wander","Roam","Nomad","Trail"], suffixes:["House","Studio","Journeys","Ways"], singles:["Roama","Nomada"] },
    education: { prefixes:["Story","Craft","Maker","Bright"], suffixes:["Lab","Studio","School","Center"], singles:["Storyo","Craftly"] },
    gaming: { prefixes:["Pixel","Quest","Play","Arc"], suffixes:["Studio","Arena","Works","Lab"], singles:["Questy","Arco"] }
  }
};

// Helper - safe pick without undefined
const pick = arr => arr && arr.length ? arr[Math.floor(Math.random()*arr.length)] : "";

// ------------------- Name generation logic (strict word counts) -------------------
function makeWord(style, niche, role = "any") {
  // role: "first" prefers prefixes, "last" prefers suffixes, "any" mixes singles
  const bankStyle = banks[style] || banks.trendy;
  const nicheBank = bankStyle[niche] || bankStyle['general'];
  const generalBank = bankStyle['general'];

  if(role === "first") {
    return pick(nicheBank.prefixes) || pick(generalBank.prefixes) || pick(nicheBank.singles) || pick(generalBank.singles);
  } else if(role === "last") {
    return pick(nicheBank.suffixes) || pick(generalBank.suffixes) || pick(nicheBank.singles) || pick(generalBank.singles);
  } else {
    // mix single or prefix+suffix concatenation
    if(Math.random() < 0.5) {
      return pick(nicheBank.singles) || pick(generalBank.singles) || (pick(nicheBank.prefixes) + pick(nicheBank.suffixes));
    } else {
      return pick(nicheBank.prefixes) + (Math.random()<0.5 ? "" : pick(nicheBank.suffixes));
    }
  }
}

// returns a single word (may be joined prefix+suffix) that looks brandy
function makeSingle(style, niche) {
  const bankStyle = banks[style] || banks.trendy;
  const nicheBank = bankStyle[niche] || bankStyle['general'];
  // 50% single token, 50% concat prefix+suffix
  if(Math.random() < 0.5) {
    return pick(nicheBank.singles) || (pick(nicheBank.prefixes) + pick(nicheBank.suffixes));
  } else {
    return (pick(nicheBank.prefixes) + pick(nicheBank.suffixes));
  }
}

// Compose name with exact words count
function makeName(style, niche, words = 2) {
  let parts = [];
  if(words === 1) {
    // single brand word
    parts.push(capitalize(makeSingle(style, niche)));
  } else if(words === 2) {
    // first = prefix (or single), second = suffix (or single)
    let first = makeWord(style, niche, "first");
    let second = makeWord(style, niche, "last");
    // ensure not identical
    if(first === second) second = makeWord(style, niche, "last");
    parts.push(capitalize(first));
    parts.push(capitalize(second));
  } else if(words === 3) {
    // first: prefix, middle: single/connector, last: suffix
    let first = makeWord(style, niche, "first");
    let middle = makeSingle(style, niche);
    let last = makeWord(style, niche, "last");
    // avoid duplicates
    if(first === middle) middle = makeSingle(style, niche);
    if(last === middle || last === first) last = makeWord(style, niche, "last");
    parts.push(capitalize(first));
    parts.push(capitalize(middle));
    parts.push(capitalize(last));
  }
  // sanitize spaces and duplicates, join with spaces
  return parts.filter(Boolean).join(' ').replace(/\s+/g,' ').trim();
}

// Capitalize helper
function capitalize(s) { if(!s) return ""; return s.charAt(0).toUpperCase() + s.slice(1); }

// Batch unique names
function batchNames(style, niche, count, words=2, maxAttempts=1000) {
  const set = new Set();
  let attempts = 0;
  while(set.size < count && attempts < maxAttempts) {
    const name = makeName(style, niche, words);
    // filter obviously ugly / duplicates with simple rules:
    // - no same token repeated
    // - no > 3 tokens repeated across words
    if(!name || set.has(name)) { attempts++; continue; }
    // simple filter: avoid names that contain repeated base tokens (like PixelPixel)
    const tokens = name.toLowerCase().split(/\s+/);
    const uniqueTokens = new Set(tokens);
    if(tokens.length !== uniqueTokens.size) { attempts++; continue; }
    set.add(name);
    attempts++;
  }
  return Array.from(set);
}

// ------------------- Rendering & UI -------------------
const resultsEl = document.getElementById('results');

function renderResults(names) {
  resultsEl.innerHTML = '';
  if(!names.length) {
    resultsEl.innerHTML = `<div class="adsense-incontent__box">No names generated — try different options.</div>`;
    return;
  }

  names.forEach(name => {
    const card = document.createElement('div');
    card.className = 'name-chip';
    card.innerHTML = `
      <div class="name">${escapeHtml(name)}</div>
      <div class="card-buttons">
        <button class="copy-btn">Copy</button>
        <button class="domain-btn">Check Domain</button>
      </div>
    `;
    // attach copy
    card.querySelector('.copy-btn').addEventListener('click', () => {
      copyText(name);
    });
    // attach domain check (opens GoDaddy, .com)
    card.querySelector('.domain-btn').addEventListener('click', () => {
      checkDomain(name);
    });

    resultsEl.appendChild(card);
  });
}

// get options & generate
function generateNames() {
  const style = document.querySelector('input[name="style"]:checked')?.value || 'trendy';
  const niche = document.getElementById('nicheSelect').value || 'general';
  const words = parseInt(document.getElementById('wordCount').value || "2", 10);
  const count = parseInt(document.getElementById('nameCount').value || "10", 10);

  // produce batch
  const names = batchNames(style, niche, count, words);
  renderResults(names);
  resultsEl.scrollIntoView({behavior:'smooth', block:'start'});
}
window.generateNames = generateNames;

// ------------------- Utilities -------------------
function copyText(text) {
  navigator.clipboard.writeText(text).then(()=> {
    showToast(`Copied: ${text}`);
  }).catch(()=> {
    alert('Copy failed — your browser blocked the clipboard action.');
  });
}

function copyAll() {
  const names = Array.from(document.querySelectorAll('.name-chip .name')).map(n => n.textContent.trim());
  if(!names.length) { showToast('No names to copy'); return; }
  navigator.clipboard.writeText(names.join('\n')).then(()=> {
    showToast('All names copied');
  }).catch(()=> alert('Copy failed'));
}

function checkDomain(name) {
  // open GoDaddy search with .com by default
  const domain = `${name.replace(/\s+/g,'')}.com`;
  const url = `https://www.godaddy.com/domainsearch/find?domainToCheck=${encodeURIComponent(domain)}`;
  window.open(url, '_blank');
}

// Escape simple HTML to avoid injection (names are from internal banks but safe)
function escapeHtml(s){ return s.replace(/[&<>"']/g, function(m){ return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]; }); }

// Simple toast
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=> t.remove(), 1700);
}

// Accordion
document.querySelectorAll('.accordion__header').forEach(header=>{
  header.addEventListener('click', ()=> {
    const panel = header.nextElementSibling;
    panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
  });
});

// Expose for console testing
window.checkDomain = checkDomain;
window.copyAll = copyAll;
