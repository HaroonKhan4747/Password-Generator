// --- Mobile menu ---
const hamburger = document.getElementById('hamburger');
hamburger?.addEventListener('click', () => {document.body.classList.toggle('nav-open');});

// --- Word banks by style and niche ---
const bank = {
  trendy: {
    left: ["Nexo","Nova","Vibe","Pixel","Echo","Flux","Aero","Axio","Lumo","Hyper","Zeno","Zygo","Kairo","Moxo","Velox","Pixo","Zappi","Quixo","Nimbus","Opty","Mint","Blitz","Spark","Pulse","Vivid","Swift","Flick","Glide","Drift","Zen"],
    right:["ly","ify","io","ster","scape","grid","core","byte","forge","wave","cloud","flow","lane","loop","verse","stack","shift","mate","nest","lab","hub","base","mark","mint","spark","pilot","craft","works","box","lift"]
  },
  professional: {
    left:["Prime","North","Blue","Ever","Crest","Summit","Sterling","Granite","Beacon","Cedar","River","Atlas","Guardian","Unity","Keystone","Legacy","Pioneer","Crown","Harbor","Iron","Silver","Noble","Anchor","Oak","Vista","Regal","First","Global","Capital","Apex"],
    right:["Ledger","Partners","Advisory","Group","Holdings","Consulting","Solutions","Associates","Analytics","Ventures","Services","Dynamics","Industries","Systems","Enterprises","Networks","Management","Collective","Labs","Works","Bridge","Point","Edge","Square","Circle","Union","Matrix","Capital","Vista","Field"]
  },
  creative: {
    left:["Fizz","Echo","Doodle","Mingle","Quirk","Hatch","Whim","Bumble","Pepper","Clever","Bright","Happy","Nimble","Rocket","Paper","Lemon","Mango","Juniper","Cotton","Maple","Indigo","Copper","Cobalt","Pep","Mirth","Fable","Orbit","Story","Snap","Aura","Nova","Pixel","Vibe"],
    right:["Foundry","Nest","Bloom","Loom","Forge","Mint","Muse","Patch","Pop","Sprout","& Co","Atelier","Lab","Studio","Works","Wagon","Basket","Barrel","Rocket","House","Harbor","Garden","Press","Pilot","Pixel","Pony","Pulse","Panda","Picnic"]
  }
};

// --- Helper functions ---
const pick = arr => arr[Math.floor(Math.random()*arr.length)];

function makeName(style, words = 2){
  const s = bank[style] || bank.trendy;
  let name = '';
  for(let i=0;i<words;i++){
    if(Math.random()<0.7){ name += `${pick(s.left)}${pick(s.right)} `; }
    else { const both = s.left.concat(s.right); name += pick(both) + ' '; }
  }
  return name.trim();
}

function batchNames(style, count, words=2){
  const set = new Set(); let guard=0;
  while(set.size<count && guard<count*10){
    set.add(makeName(style,words));
    guard++;
  }
  return Array.from(set);
}

function renderResults(names){
  const results = document.getElementById('results'); results.innerHTML='';
  names.forEach(name=>{
    const row = document.createElement('div'); row.className='name-chip';
    row.innerHTML=`<span>${name}</span>
    <button class="copy-btn" onclick="copyText('${name}')">Copy</button>
    <button class="domain-btn" onclick="checkDomain('${name}')">Check Domain</button>`;
    results.appendChild(row);
  });
}

function generateNames(){
  const count = parseInt(document.getElementById('nameCount').value,10);
  const style = document.querySelector('input[name="style"]:checked')?.value || 'trendy';
  const words = parseInt(document.getElementById('wordCount').value,10);
  const names = batchNames(style,count,words);
  renderResults(names);
  document.getElementById('results').scrollIntoView({behavior:'smooth',block:'start'});
}

function copyText(text){
  navigator.clipboard.writeText(text).then(()=>{toast(`Copied: ${text}`);}).catch(()=>alert('Copy failed'));
}

function copyAll(){
  const names=Array.from(document.querySelectorAll('#results .name-chip span')).map(s=>s.textContent);
  if(!names.length){toast('No names to copy');return;}
  navigator.clipboard.writeText(names.join('\n')).then(()=>toast('All names copied')).catch(()=>alert('Copy failed'));
}

function checkDomain(name){
  const url = `https://www.godaddy.com/domainsearch/find?checkAvail=1&tmskey=&domainToCheck=${encodeURIComponent(name)}.com`;
  window.open(url,'_blank');
}

function toast(msg){
  const t=document.createElement('div'); t.textContent=msg;
  t.style.position='fixed'; t.style.bottom='20px'; t.style.left='50%';
  t.style.transform='translateX(-50%)';
  t.style.background='#1a73e8'; t.style.color='#fff'; t.style.padding='10px 14px';
  t.style.borderRadius='10px'; t.style.boxShadow='0 6px 18px rgba(0,0,0,.2)'; t.style.zIndex='9999';
  document.body.appendChild(t); setTimeout(()=>t.remove(),1600);
}

// --- Accordion ---
document.addEventListener('click',e=>{
  if(e.target.classList.contains('accordion__header')){
    const panel=e.target.nextElementSibling;
    const open=panel.style.display==='block';
    document.querySelectorAll('.accordion__panel').forEach(p=>p.style.display='none');
    if(!open) panel.style.display='block';
  }
});

window.generateNames=generateNames; window.copyText=copyText; window.copyAll=copyAll; window.checkDomain=checkDomain;
