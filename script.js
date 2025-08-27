/* Smartbiznames — generator + UI behavior */

/* --------------------------
   Mobile drawer (side menu)
   -------------------------- */
const side = document.getElementById('sideDrawer');
const overlay = document.getElementById('drawerOverlay');
const hamburger = document.getElementById('hamburger');
const closeDrawerBtn = document.getElementById('closeDrawer');

function openDrawer(){
  side.classList.add('active');
  overlay.classList.add('active');
  side.setAttribute('aria-hidden','false');
}
function closeDrawer(){
  side.classList.remove('active');
  overlay.classList.remove('active');
  side.setAttribute('aria-hidden','true');
}
hamburger?.addEventListener('click', openDrawer);
closeDrawerBtn?.addEventListener('click', closeDrawer);
overlay?.addEventListener('click', closeDrawer);

/* close drawer when clicking any drawer link (delegation) */
document.querySelectorAll('.drawer-link').forEach(link=>{
  link.addEventListener('click', closeDrawer);
});

/* --------------------------
   Word banks (expanded)
   - Large lists, niche-aware, style-neutral words included
   -------------------------- */
const BANK = {
  general: [
    "Nova","Pulse","Core","Lumen","Metro","Echo","Orbit","Forge","Nexus","Apex","Horizon","Summit","Aurora","Crest","Beacon","Vista","Harbor","Sage","Pioneer","Haven",
    "Bridge","Foundry","Studio","Collective","Union","Canvas","Pilot","Craft","Mint","Works","Lab","Loop","Edge","Shift","Flux","Drift","Spark","Pilot","Field","Point"
  ],

  tech: [
    "Quantum","Neuro","Byte","Cloud","Data","Code","Circuit","Vector","Pixel","Nano","AI","Bot","Kernel","Matrix","Logic","Signal","Node","Synapse","Fusion","Axon",
    "Cipher","Grid","Cache","Stream","Kernel","Pulse","Loop","Stack","Bridge","Frame","Protocol","Vector","Cluster","Cluster","Byte","Forge","Synth","Optic","Quanta","Core",
    "Kernel","Beacon","Orbit","Volt","Signal","Mesh","Node","Cache","API","SDK","Patch","Runtime","Compile","Binary","Logic","Compute","Matrix","Pulse","Flux"
  ],

  fashion: [
    "Velour","Silk","Chic","Mode","Vogue","Couture","Loom","Thread","Stitch","Urban","Style","Glam","Aura","Luxe","Fable","Haute","Wear","Trend","Muse","Drape",
    "Velvet","Canvas","Label","Tailor","Runway","Gloss","Satin","Lace","Frame","Edit","Stripe","Boutique","Ward","Craft","Cove","Nest","Curve","Shift","Polish","Haven"
  ],

  food: [
    "Savor","Taste","Bite","Feast","Fresh","Crave","Fork","Spoon","Pantry","Harvest","Grill","Oven","Brew","Blend","Kitchen","Dine","Snack","Nosh","Munch","Platter",
    "Supper","Spoon","Table","Recipe","Bistro","Cafe","Crust","Slice","Sizzle","Smoky","Herb","Spice","Flavor","Zest","Steam","Roast","Bite","Sip","Juice","Sauce",
    "Root","Field","Garden","Seed","Chop","Toast","Bake","Crumb","Blend","Cedar","Farm","Market","Taste","Feast","Grove","Plate","Belly","Yum"
  ],

  beauty: [
    "Glow","Pure","Blush","Luxe","Aura","Silk","Glam","Luster","Charm","Velvet","Petal","Bloom","Serum","Polish","Sheen","Gloss","Radiant","Muse","Beaute","Boutique",
    "Refine","Tonic","Dew","Elixir","Essence","Velour","Opal","Pearl","Satin","Silque","Lume","Sheer","Nectar","Halo","Rose","Petal"
  ],

  fitness: [
    "Iron","Pulse","Core","Flex","Lift","Forge","Power","Peak","Enduro","Sprint","Motion","Athlet","Drive","Stamina","Train","Forge","Rep","PR","Fuel","Motion",
    "Balance","Zen","Flow","Climb","Stride","Beat","Push","Roar","Strong","Condition","Edge","Peak","Grip","Stride","Lift","Sprint","Torque","Rally","Grit","Forge"
  ],

  finance: [
    "Capital","Ledger","Trust","Wealth","Fund","Vault","Prime","Asset","Equity","Bridge","Reserve","Anchor","Secure","Mint","Ledger","Prosper","Crest","Summit","Holdings","Partners",
    "Advisory","Metric","Balance","Reserve","Index","Yield","Growth","Beacon","Harbor","Fund","Core","Venture","Collective","Capital","Bridge"
  ],

  realestate: [
    "Nest","Home","Haven","Dwell","Key","Estate","Urban","Metro","Domain","Prime","Hearth","Plot","Vista","Roof","Brick","Bungalow","Harbor","Hills","Gardens","Lands",
    "Corner","Lot","Cove","Terrace","Haven","Manor","Residence","Abode","Dwell","Terrace","Holdings","Homes","Place","Point"
  ],

  education: [
    "Learn","Bright","Mind","Skill","Academy","Lab","Tutor","Study","Path","Grow","Future","Next","Scholars","Insight","Think","Launch","Guide","Forge","Mentor","Campus",
    "Coach","Class","Stream","Prep","Edge","Advance","Core","Bridge","Institute","Center"
  ],

  travel: [
    "Globe","Trek","Wander","Nomad","Voyage","Vista","Roam","Path","Trail","Journey","Map","Atlas","Jet","Trip","Quest","Harbor","Routes","Orbit","Escape","Expedition",
    "Cruise","Wander","Transit","Gate","Voyage","Harbor","Sky","Roamer"
  ],

  gaming: [
    "Quest","Pixel","Arc","Arena","Guild","Hero","Boss","XP","Level","Loot","Rune","Mana","Arcade","Clan","Forge","Blade","Pulse","Play","Zone","Arc",
    "Dash","Core","Strike","Legend","Nexus","Arena","Craft"
  ],

  pets: [
    "Paw","Tail","Whisk","Bark","Fur","Nest","Pet","Paws","Luxe","Treat","Tails","Fetch","Den","Purr","Biscuit","Groom","Bowl","Leash","Cuddle","Buddy",
    "Sprout","Petal","Furrow"
  ],

  home: [
    "Cozy","Nest","Hearth","Loom","Den","Harvest","Frame","Bloom","Craft","Dwelling","Furnish","Kindle","Shelter","Studio","Orchard","Garden","Aura","Haven","Casa","Homely"
  ],

  consulting: [
    "Advisory","Partners","Consult","Insight","Strategy","Bridge","Beacon","Point","Consult","Collective","Group","Metric","Edge","Summit","Guide","Crest","Prime","Harbor"
  ],

  marketing: [
    "Spark","Viral","Pulse","Brand","Buzz","Signal","Reach","Lift","Studio","Craft","Narrative","Tone","Echo","Fuse","Canvas","Campaign","Shift","Beacon","Motion"
  ],

  creative: [
    "Muse","Fable","Craft","Sketch","Pixel","Canvas","Story","Bloom","Whim","Spark","Ink","Studio","Foundry","Nest","Patch","Play","Mirth","Whimsy","Novel","Frame"
  ],

  saas: [
    "Cloud","Flow","Stack","Scale","Loop","Sync","Platform","Engine","Ops","Dash","Signal","Nexus","Scale","Metric","Bridge","Orchestrate","Flow","Pilot","Edge","Core"
  ]
};

/* ------------------------------------------------------
   Utility helpers to generate strict 1/2/3-word names
   - OneWord: single token or prefix+suffix concatenation (no spaces)
   - TwoWords: two distinct tokens (no repeated token)
   - ThreeWords: three distinct tokens
   - All tokens sanitized & capitalized
   ------------------------------------------------------ */

function pickRandom(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function cap(s){ if(!s) return ""; return s.charAt(0).toUpperCase()+s.slice(1); }
function sanitizeToken(t){ return t.replace(/[^\w-]/g,''); }

function makeOneWord(niche, style){
  // prefer niche-specific terms, fallback to general
  const bankN = BANK[niche] && BANK[niche].length ? BANK[niche] : BANK.general;
  // occasionally return combined token to create brandy single words
  if(Math.random() < 0.45){
    const a = sanitizeToken(pickRandom(bankN));
    const b = sanitizeToken(pickRandom(BANK.general));
    const combined = (a + b).replace(/\s+/g,'');
    return cap(combined);
  } else {
    return cap(sanitizeToken(pickRandom(bankN)));
  }
}

function makeMultiWord(niche, count){
  const bankN = BANK[niche] && BANK[niche].length ? BANK[niche] : BANK.general;
  const parts = [];
  let attempts=0;
  while(parts.length < count && attempts < 500){
    attempts++;
    let token = sanitizeToken(pickRandom(bankN));
    // avoid immediate duplicates
    if(!token) continue;
    const tokenCap = cap(token);
    if(!parts.includes(tokenCap)){
      parts.push(tokenCap);
    }
  }
  // If we don't have enough unique tokens (rare), fill from general
  while(parts.length < count){
    parts.push(cap(sanitizeToken(pickRandom(BANK.general))));
  }
  return parts.join(' ');
}

// Ensure uniqueness within a batch
function batchGenerate(niche, style, count, wordsPerName){
  const set = new Set();
  let guard = 0;
  const maxAttempts = Math.max(2000, count*50);
  while(set.size < count && guard < maxAttempts){
    guard++;
    let name = "";
    if(wordsPerName === 1) name = makeOneWord(niche, style);
    else name = makeMultiWord(niche, wordsPerName);
    // simple cleanliness checks: no immediate repeated tokens like PixelPixel
    const tokens = name.toLowerCase().split(/\s+/).filter(Boolean);
    const unique = new Set(tokens);
    if(tokens.length !== unique.size) continue;
    if(name.length < 2) continue;
    set.add(name);
  }
  return Array.from(set);
}

/* -------------------------
   Render / UI handlers
   ------------------------- */
const resultsEl = document.getElementById('results');
const generateBtn = document.getElementById('generateBtn');

function clearResults(){ resultsEl.innerHTML = ''; }

function renderNames(list){
  clearResults();
  if(!list.length){
    resultsEl.innerHTML = '<div class="ad">No names found — try different options.</div>';
    return;
  }

  list.forEach(name=>{
    const card = document.createElement('div');
    card.className = 'name-card';
    card.innerHTML = `
      <div class="brand">${escapeHtml(name)}</div>
      <div class="card-buttons">
        <button class="copy-btn" type="button">Copy</button>
        <button class="domain-btn" type="button">Check Domain</button>
      </div>
    `;
    // copy action
    card.querySelector('.copy-btn').addEventListener('click', ()=> {
      copyToClipboard(name);
    });
    // domain check
    card.querySelector('.domain-btn').addEventListener('click', ()=> {
      openGoDaddy(name);
    });

    resultsEl.appendChild(card);
  });
  // focus results
  resultsEl.scrollIntoView({behavior:'smooth', block:'start'});
}

/* -------------------------
   Generate callback
   ------------------------- */
function onGenerate(){
  const niche = document.getElementById('nicheSelect').value || 'general';
  const words = parseInt(document.getElementById('wordCountSelect').value || '2',10);
  const count = parseInt(document.getElementById('countSelect').value || '10',10);
  // style currently unused for bank selection but kept for future extension
  const style = document.querySelector('input[name="style"]:checked')?.value || 'trendy';

  const names = batchGenerate(niche, style, count, words);
  renderNames(names);
}

/* -------------------------
   Copy / domain / download utilities
   ------------------------- */
function copyToClipboard(text){
  navigator.clipboard.writeText(text).then(()=> {
    showToast(`Copied: ${text}`);
  }).catch(()=> {
    alert('Copy failed — please allow clipboard access.');
  });
}

function copyAll(){
  const names = Array.from(document.querySelectorAll('.name-card .brand')).map(el=>el.textContent.trim());
  if(!names.length){ showToast('No names to copy'); return; }
  navigator.clipboard.writeText(names.join('\n')).then(()=> showToast('All names copied')).catch(()=> alert('Copy failed'));
}

function openGoDaddy(name){
  const domain = encodeURIComponent(name.replace(/\s+/g,'') + '.com');
  const url = `https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=${domain}`;
  window.open(url,'_blank');
}

function downloadTxt(){
  const names = Array.from(document.querySelectorAll('.name-card .brand')).map(el=>el.textContent.trim());
  if(!names.length){ showToast('No names to download'); return; }
  const blob = new Blob([names.join('\n')], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'smartbiznames-names.txt';
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

/* -------------------------
   Small helpers
   ------------------------- */
function escapeHtml(s){ return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function showToast(msg){
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=> t.remove(), 1600);
}

/* -------------------------
   FAQ toggles
   ------------------------- */
document.querySelectorAll('.faq-toggle').forEach(btn=>{
  btn.addEventListener('click', ()=> {
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});

/* -------------------------
   Init (generate a sample set on load)
   ------------------------- */
window.addEventListener('DOMContentLoaded', ()=>{
  // ensure hamburger works if present
  document.getElementById('hamburger')?.addEventListener('click', openDrawer);
  // preset sample generation
  onGenerate();
});
