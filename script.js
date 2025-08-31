// ---------- Helpers (unchanged) ----------
function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function sanitizeToken(t){ return (t||'').toString().replace(/[^\w]/g,'').trim(); }
function cap(t){ if(!t) return ''; return t.charAt(0).toUpperCase()+t.slice(1); }

// ---------- Style-aware one-word generator ----------
function makeOneWord(niche, style='trendy'){
  const bank = BANK[niche] && BANK[niche].length ? BANK[niche] : BANK.general;
  let word = cap(sanitizeToken(pick(bank)));

  if(style === 'creative' && Math.random() < 0.3){
    word = pick(['Neo','Eco','Tech','X','i','Smart','Ultra','Meta','Pro','Omni']) + word;
  }
  return word;
}

// ---------- Style-aware multi-word generator ----------
function makeMultiWord(niche, count, style='trendy'){
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

  // Style adjustments
  if(style === 'creative'){
    for(let i=0;i<selected.length;i++){
      if(Math.random()<0.3) selected[i] += pick(['ly','io','sy','ster','hub','verse']);
      else if(Math.random()<0.2) selected[i] = pick(['Neo','Eco','Tech','X','i','Smart','Ultra','Meta','Pro','Omni']) + selected[i];
    }
  }
  // professional style: clean, no hyphens, strong
  // trendy style: leave as is

  while(selected.length < count){
    selected.push(cap(sanitizeToken(pick(BANK.general))));
  }

  return selected.join(' ');
}

// ---------- Batch generate with style ----------
function batchGenerate(niche, count, wordsPerName){
  const style = document.querySelector('input[name="style"]:checked')?.value || 'trendy';
  const set = new Set();
  let guard = 0;
  const maxAttempts = Math.max(1500, count * 50);

  while(set.size < count && guard < maxAttempts){
    guard++;
    let name = '';
    if(wordsPerName === 1) name = makeOneWord(niche, style);
    else name = makeMultiWord(niche, wordsPerName, style);

    if(!name || name.length < 2) continue;
    if(!Array.from(set).some(n => n.toLowerCase() === name.toLowerCase())) set.add(name);
  }
  return Array.from(set);
}
