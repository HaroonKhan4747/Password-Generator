/* script.js — Smartbiznames
   Handles:
   - Mobile drawer
   - Generator (strict 1/2/3-word logic)
   - Copy / Copy All / Download
   - Check domain (GoDaddy)
   - FAQ toggles
*/

// ---------- Drawer (mobile) ----------
const hamburger = document.getElementById('hamburger');
const drawer = document.getElementById('drawer');
const drawerOverlay = document.getElementById('drawerOverlay');
const drawerClose = document.getElementById('drawerClose');

function openDrawer(){ drawer.classList.add('active'); drawerOverlay.classList.add('active'); drawer.setAttribute('aria-hidden','false'); }
function closeDrawer(){ drawer.classList.remove('active'); drawerOverlay.classList.remove('active'); drawer.setAttribute('aria-hidden','true'); }

hamburger?.addEventListener('click', openDrawer);
drawerClose?.addEventListener('click', closeDrawer);
drawerOverlay?.addEventListener('click', closeDrawer);
document.querySelectorAll('.drawer-link').forEach(a => a.addEventListener('click', closeDrawer));

// ---------- Word Banks (expanded, per niche) ----------
const BANK = {
  general: ["Nova","Pulse","Core","Lumen","Metro","Echo","Orbit","Forge","Nexus","Apex","Horizon","Summit","Aurora","Crest","Beacon","Vista","Harbor","Sage","Pioneer","Haven","Bridge","Foundry","Studio","Collective","Union","Canvas","Pilot","Craft","Mint","Works","Lab","Loop","Edge","Shift","Flux","Drift","Spark","Field","Point","Frame","Nest","Mode","Origin","Vista","Prime","Bright","Merge","Scale","Flow","Rise","Peak","Cliff","Tide"],
  tech: ["Quantum","Neuro","Byte","Cloud","Data","Code","Circuit","Vector","Pixel","Nano","AI","Bot","Kernel","Matrix","Logic","Signal","Node","Synapse","Fusion","Axon","Cipher","Grid","Cache","Stream","Pulse","Stack","Bridge","Frame","Protocol","Cluster","Forge","Synth","Optic","Quanta","Volt","Mesh","API","SDK","Runtime","Compile","Binary","Compute","Orion","Vertex","Helix","Bit","Cache","Loop"],
  fashion: ["Velour","Silk","Chic","Mode","Vogue","Couture","Loom","Thread","Stitch","Urban","Style","Glam","Aura","Luxe","Fable","Haute","Wear","Trend","Muse","Drape","Velvet","Canvas","Label","Tailor","Runway","Gloss","Satin","Lace","Boutique","Ward","Craft","Cove","Nest","Curve","Polish","Haven","Moda","Twill","Sew","Tux","Denim","Bias","Chroma","Velia","Fiora","Astra","Gossamer"],
  food: ["Savor","Taste","Bite","Feast","Fresh","Crave","Fork","Pantry","Harvest","Grill","Oven","Brew","Blend","Kitchen","Dine","Snack","Nosh","Munch","Platter","Bistro","Cafe","Crust","Slice","Sizzle","Herb","Spice","Flavor","Zest","Roast","Sip","Juice","Sauce","Root","Market","Plate","Grove","Seed","Sweet","Spoon","Table","Toast","Delish","Crave","Spoonful"],
  beauty: ["Glow","Pure","Blush","Luxe","Aura","Silk","Glam","Luster","Charm","Velvet","Petal","Bloom","Serum","Polish","Sheen","Gloss","Radiant","Elixir","Essence","Nectar","Opal","Pearl","Satin","Lume","Sheer","Halo","Rose","Petal","Mira","Bell","Velvetia"],
  fitness: ["Iron","Pulse","Core","Flex","Lift","Forge","Power","Peak","Enduro","Sprint","Motion","Drive","Stamina","Train","Rep","Fuel","Balance","Zen","Flow","Climb","Stride","Beat","Push","Strong","Condition","Edge","Grip","Torque","Rally","Grit","Vigor","Thrive"],
  finance: ["Capital","Ledger","Trust","Wealth","Fund","Vault","Prime","Asset","Equity","Bridge","Reserve","Anchor","Secure","Mint","Prosper","Crest","Summit","Holdings","Partners","Advisory","Metric","Balance","Index","Yield","Growth","Beacon","Harbor","Valora","Fundra","Invest"],
  realestate: ["Nest","Home","Haven","Dwell","Key","Estate","Urban","Prime","Hearth","Plot","Vista","Roof","Brick","Manor","Residence","Abode","Terrace","Lot","Hills","Lands","Corner","Cove","Harbor","Domain","Casa","Villa","Point","Metro","Dwellio"],
  education: ["Learn","Bright","Mind","Skill","Academy","Lab","Tutor","Study","Path","Grow","Future","Scholars","Insight","Think","Coach","Class","Stream","Prep","Guide","Center","Mentor","Lectura","Quest","Edify"],
  travel: ["Globe","Trek","Wander","Nomad","Voyage","Vista","Roam","Path","Trail","Journey","Atlas","Jet","Trip","Quest","Cruise","Route","Harbor","Sky","Roamer","Expedition","Port","Voyago"],
  gaming: ["Quest","Pixel","Arc","Arena","Guild","Hero","Boss","XP","Level","Loot","Rune","Mana","Arcade","Clan","Forge","Blade","Pulse","Play","Zone","Dash","Strike","Legend","Respawn","Crit"],
  pets: ["Paw","Tail","Whisk","Bark","Fur","Nest","Paws","Treat","Fetch","Den","Purr","Biscuit","Groom","Bowl","Leash","Buddy","Snout","Kibble"],
  home: ["Cozy","Nest","Hearth","Loom","Den","Frame","Bloom","Craft","Studio","Furnish","Shelter","Orchard","Garden","Casa","Abode","Cove","Haven","Hearth"],
  saas: ["Cloud","Flow","Stack","Scale","Loop","Sync","Platform","Engine","Ops","Dash","Signal","Nexus","Metric","Bridge","Pilot","Core","Scaleo","Insight","Console"],
  marketing: ["Spark","Viral","Pulse","Brand","Buzz","Signal","Reach","Lift","Studio","Craft","Narrative","Tone","Echo","Fuse","Canvas","Campaign","Pitch"],
  creative: ["Muse","Fable","Craft","Sketch","Pixel","Canvas","Story","Bloom","Whim","Spark","Ink","Studio","Foundry","Nest","Patch","Play","Mirth","Novel","Draft","Vision"],
  eco: ["Green","Leaf","Root","Sol","Terra","Bloom","Eco","Sustain","Pure","Sprout","Forest","Harvest","Seed","Grove","Verde","Reclaim","Cycle"],
  luxury: ["Aurora","Velora","Opal","Prestige","Noble","Regal","Elite","Gild","Exquis","Luxe","Royale","Aurelia","Sovereign","Silvara","Grand"],
  fashion_streetwear: ["Thread","Hype","Urban","Skate","Patch","Drop","Crew","Edge","Drift","Street","Vibe","Retro","Graff","Sneak","Fresh"],
  dropshipping: ["Ship","Drop","Fulfill","Supply","Cart","Store","Direct","Swift","Procure","Source"]
};

// ---------- Helpers ----------
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function sanitizeToken(t){ return (t||'').toString().replace(/[^\w-]/g,'').trim(); }
function cap(t){ if(!t) return ''; return t.charAt(0).toUpperCase()+t.slice(1); }

// Strict one-word generator: return exactly one token (no concatenation)
function makeOneWord(niche){
  const bank = BANK[niche] && BANK[niche].length ? BANK[niche] : BANK.general;
  return cap(sanitizeToken(pick(bank)));
}

// Strict multi-word generator: pick distinct tokens and join with space
function makeMultiWord(niche, count){
  const bank = (BANK[niche] && BANK[niche].length) ? BANK[niche].slice() : BANK.general.slice();
  const selected = [];
  let attempts = 0;
  while(selected.length < count && attempts < 500){
    attempts++;
    const t = sanitizeToken(pick(bank));
    if(!t) continue;
    const c = cap(t);
    if(!selected.includes(c)) selected.push(c);
  }
  while(selected.length < count){
    selected.push(cap(sanitizeToken(pick(BANK.general))));
  }
  return selected.join(' ');
}

// Batch generate unique names
function batchGenerate(niche, count, wordsPerName){
  const set = new Set();
  let guard = 0;
  const maxAttempts = Math.max(1500, count * 50);
  while(set.size < count && guard < maxAttempts){
    guard++;
    let name = '';
    if(wordsPerName === 1){
      name = makeOneWord(niche);
    } else {
      name = makeMultiWord(niche, wordsPerName);
    }
    if(!name || name.length < 2) continue;
    // de-duplicate case-insensitive
    if(!Array.from(set).some(n => n.toLowerCase() === name.toLowerCase())){
      set.add(name);
    }
  }
  return Array.from(set);
}

// ---------- Render / UI ----------
const resultsEl = document.getElementById('results');
const resultsMeta = document.getElementById('resultsMeta');
const generateBtn = document.getElementById('generateBtn');
const copyAllBtn = document.getElementById('copyAllBtn');
const downloadBtn = document.getElementById('downloadBtn');

function clearResults(){
  resultsEl.innerHTML = '';
  resultsMeta.textContent = '';
}

function renderResults(list){
  clearResults();
  if(!list || !list.length){
    resultsEl.innerHTML = '<div class="ad">No results — try different options.</div>';
    return;
  }
  resultsMeta.textContent = `${list.length} name${list.length>1 ? 's' : ''} generated — copy or check domain.`;
  list.forEach(name => {
    const card = document.createElement('div');
    card.className = 'name-card';
    const title = document.createElement('div');
    title.className = 'name-title';
    title.textContent = name;

    const btns = document.createElement('div');
    btns.className = 'card-buttons';

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.type = 'button';
    copyBtn.textContent = 'Copy';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(name).then(()=> showToast(`Copied: ${name}`)).catch(()=> alert('Copy failed'));
    });

    const domainBtn = document.createElement('button');
    domainBtn.className = 'domain-btn';
    domainBtn.type = 'button';
    domainBtn.textContent = 'Check Domain';
    domainBtn.addEventListener('click', () => {
      const domain = encodeURIComponent(name.replace(/\s+/g,'') + '.com');
      const url = `https://www.godaddy.com/domainsearch/find?domainToCheck=${domain}`;
      window.open(url, '_blank');
    });

    btns.appendChild(copyBtn);
    btns.appendChild(domainBtn);

    card.appendChild(title);
    card.appendChild(btns);
    resultsEl.appendChild(card);
  });

  resultsEl.scrollIntoView({behavior:'smooth', block:'start'});
}

// ---------- User actions ----------
function generateAndRender(){
  const niche = document.getElementById('nicheSelect').value || 'general';
  const wordsPerName = parseInt(document.getElementById('wordCountSelect').value,10) || 2;
  const count = parseInt(document.getElementById('countSelect').value,10) || 10;
  const list = batchGenerate(niche, count, wordsPerName);
  renderResults(list);
}

copyAllBtn?.addEventListener('click', () => {
  const names = Array.from(document.querySelectorAll('.name-title')).map(el => el.textContent.trim());
  if(!names.length){ showToast('No names to copy'); return; }
  navigator.clipboard.writeText(names.join('\n')).then(()=> showToast('All names copied')).catch(()=> alert('Copy failed'));
});

downloadBtn?.addEventListener('click', () => {
  const names = Array.from(document.querySelectorAll('.name-title')).map(el => el.textContent.trim());
  if(!names.length){ showToast('No names to download'); return; }
  const blob = new Blob([names.join('\n')],{type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = 'smartbiznames-names.txt';
  document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
});

// ---------- Toast ----------
function showToast(msg){
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(()=> t.remove(), 1600);
}

// ---------- FAQ toggles ----------
document.querySelectorAll('.faq-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const isOpen = panel.style.display === 'block';
    document.querySelectorAll('.faq-panel').forEach(p => p.style.display = 'none');
    panel.style.display = isOpen ? 'none' : 'block';
  });
});

// ---------- init ----------
document.addEventListener('DOMContentLoaded', ()=> {
  document.getElementById('generateBtn')?.addEventListener('click', generateAndRender);
  document.getElementById('hamburger')?.addEventListener('click', openDrawer);
  document.getElementById('drawerClose')?.addEventListener('click', closeDrawer);
});
