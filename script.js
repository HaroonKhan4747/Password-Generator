// --- Mobile menu ---
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

// --- Word banks by style and category ---
const bank = {
  trendy: {
    general: {
      left: ["Nexo","Nova","Vibe","Pixel","Echo","Flux","Aero","Axio","Lumo","Hyper","Zeno","Zygo","Kairo","Moxo","Velox","Pixo","Zappi","Quixo","Nimbus","Opty"],
      right: ["ly","ify","io","ster","scape","grid","core","byte","forge","wave","cloud","flow","lane","loop","verse","stack","shift","mate","nest"]
    },
    tech: {
      left: ["Cyber","Quantum","Nano","Byte","Data","Cloud","Pixel","Code","Techno","Neo"],
      right: ["Labs","Works","Systems","Core","Stack","Soft","Forge","Logic","Grid","Net"]
    },
    clothing: {
      left: ["Urban","Velvet","Style","Mode","Trend","Thread","Chic","Fashion","Aura","Luxe"],
      right: ["Wear","Co","Line","Hub","Nest","Studio","Forge","Loom","House","Vault"]
    }
    // Add other categories as needed
  },
  professional: {
    general: {
      left: ["Prime","North","Blue","Ever","Crest","Summit","Sterling","Granite","Beacon","Cedar"],
      right: ["Ledger","Partners","Advisory","Group","Holdings","Consulting","Solutions","Associates","Analytics","Ventures"]
    }
    // Add categories like tech, clothing, etc., similar structure
  },
  creative: {
    general: {
      left: ["Fizz","Echo","Doodle","Mingle","Quirk","Hatch","Whim","Bumble","Pepper","Clever"],
      right: ["Foundry","Nest","Bloom","Loom","Forge","Mint","Muse","Patch","Pop","Sprout"]
    }
  }
};

// Helper to pick random
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Compose a single name per style and category
function makeName(style, category) {
  const s = bank[style][category] || bank[style].general;
  if (Math.random() < 0.7) {
    return `${pick(s.left)}${pick(s.right)}`.trim().replace(/\s+/g,' ');
  } else {
    const both = s.left.concat(s.right);
    return pick(both);
  }
}

// Ensure uniqueness in a batch
function batchNames(style, category, count) {
  const set = new Set();
  let guard = 0;
  while(set.size < count && guard < count * 10){
    set.add(makeName(style, category));
    guard++;
  }
  return Array.from(set);
}

// Render results
function renderResults(names){
  const results = document.getElementById('results');
  results.innerHTML = '';
  names.forEach((name) => {
    const row = document.createElement('div');
    row.className = 'name-chip';
    row.innerHTML = `
      <span>${name}</span>
      <button class="copy-btn" aria-label="Copy ${name}">Copy</button>
    `;
    row.querySelector('button').addEventListener('click', () => copyText(name));
    results.appendChild(row);
  });
}

// Public API
function generateNames(){
  const count = parseInt(document.getElementById('nameCount').value, 10);
  const style = document.querySelector('input[name="style"]:checked')?.value || 'trendy';
  const category = document.getElementById('category').value || 'general';
  const names = batchNames(style, category, count);
  renderResults(names);
  document.getElementById('results').scrollIntoView({behavior:'smooth', block:'start'});
}
window.generateNames = generateNames;

// Copy helpers
function copyText(text){
  navigator.clipboard.writeText(text).then(()=> {
    toast(`Copied: ${text}`);
  }).catch(()=> alert('Copy failed'));
}
window.copyText = copyText;

function copyAll(){
  const names = Array.from(document.querySelectorAll('#results .name-chip span')).map(s=>s.textContent);
  if(!names.length){ toast('No names to copy'); return; }
  const blob = names.join('\n');
  navigator.clipboard.writeText(blob).then(()=> {
    toast('All names copied');
  }).catch(()=> alert('Copy failed'));
}
window.copyAll = copyAll;

// Simple toast
function toast(msg){
  let t = document.createElement('div');
  t.textContent = msg;
  t.style.position = 'fixed';
  t.style.bottom = '20px';
  t.style.left = '50%';
  t.style.transform = 'translateX(-50%)';
  t.style.background = '#1a73e8';
  t.style.color = '#fff';
  t.style.padding = '10px 14px';
  t.style.borderRadius = '10px';
  t.style.boxShadow = '0 6px 18px rgba(0,0,0,.2)';
  t.style.zIndex = '9999';
  document.body.appendChild(t);
  setTimeout(()=> t.remove(), 1600);
}

// Accordion
document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('accordion__header')){
    const panel = e.target.nextElementSibling;
    const open = panel.style.display === 'block';
    document.querySelectorAll('.accordion__panel').forEach(p=> p.style.display='none');
    panel.style.display = open ? 'none' : 'block';
  }
});
