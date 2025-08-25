// --- Mobile menu ---
const hamburger = document.getElementById('hamburger');
hamburger?.addEventListener('click',()=>{document.body.classList.toggle('nav-open');});

// --- Word banks by style & niche ---
const bank={
  trendy:{
    general:{left:["Nexo","Nova","Vibe"],right:["ly","ify","io"]},
    tech:{left:["Tech","Pixel","Code"],right:["hub","byte","stack"]},
    fashion:{left:["Lumo","Vogue","Chic"],right:["lane","loom","style"]},
    food:{left:["Tasty","Bite","Snack"],right:["delight","kitchen","box"]},
    startup:{left:["Spark","Lift","Flow"],right:["works","loop","verse"]}
  },
  professional:{
    general:{left:["Prime","North","Blue"],right:["Partners","Group","Holdings"]},
    tech:{left:["Atlas","Crest","Iron"],right:["Systems","Solutions","Analytics"]},
    fashion:{left:["Cedar","Harbor","Oak"],right:["Ventures","Networks","Labs"]},
    food:{left:["River","Summit","Beacon"],right:["Enterprises","Services","Management"]},
    startup:{left:["Keystone","Legacy","Pioneer"],right:["Capital","Bridge","Works"]}
  },
  creative:{
    general:{left:["Fizz","Echo","Doodle"],right:["Foundry","Nest","Bloom"]},
    tech:{left:["Orbit","Pixel","Rocket"],right:["Labs","Works","Patch"]},
    fashion:{left:["Cotton","Maple","Indigo"],right:["Studio","House","Pixel"]},
    food:{left:["Pepper","Mango","Lemon"],right:["Basket","Harbor","Garden"]},
    startup:{left:["Whim","Bumble","Snap"],right:["Rocket","Pulse","Pony"]}
  }
};

// --- Helper ---
const pick=(arr)=>arr[Math.floor(Math.random()*arr.length)];

// --- Compose name ---
function makeName(style, niche, words=2){
  const s = bank[style][niche] || bank[style]["general"];
  let name='';
  for(let i=0;i<words;i++){
    if(Math.random()<0.7){
      name+=`${pick(s.left)}${pick(s.right)} `;
    }else{
      const both=s.left.concat(s.right);
      name+=pick(both)+' ';
    }
  }
  return name.trim();
}

// --- Batch names ---
function batchNames(style,niche,count,words=2){
  const set=new Set();
  let guard=0;
  while(set.size<count && guard<count*10){
    set.add(makeName(style,niche,words));
    guard++;
  }
  return Array.from(set);
}

// --- Render results ---
function renderResults(names){
  const results=document.getElementById('results');
  results.innerHTML='';
  names.forEach(name=>{
    const row=document.createElement('div');
    row.className='name-chip';
    row.innerHTML=`
      <span>${name}</span>
      <button class="copy-btn" aria-label="Copy ${name}">Copy</button>
      <button class="domain-btn" onclick="checkDomain('${name}')">Check Domain</button>
    `;
    row.querySelector('.copy-btn').addEventListener('click',()=>copyText(name));
    results.appendChild(row);
  });
}

// --- Public API ---
function generateNames(){
  const count=parseInt(document.getElementById('nameCount').value,10);
  const style=document.querySelector('input[name="style"]:checked')?.value||'trendy';
  const niche=document.getElementById('niche').value || "general";
  const wordCount=parseInt(document.getElementById('wordCount').value,10);
  const names=batchNames(style,niche,count,wordCount);
  renderResults(names);
  document.getElementById('results').scrollIntoView({behavior:'smooth',block:'start'});
}
window.generateNames=generateNames;

// --- Copy ---
function copyText(text){navigator.clipboard.writeText(text).then(()=>{toast(`Copied: ${text}`);}).catch(()=>alert('Copy failed'))}
window.copyText=copyText;
function copyAll(){
  const names=Array.from(document.querySelectorAll('#results .name-chip span')).map(s=>s.textContent);
  if(!names.length){toast('No names to copy');return;}
  navigator.clipboard.writeText(names.join('\n')).then(()=>{toast('All names copied');}).catch(()=>alert('Copy failed'));
}
window.copyAll=copyAll;

// --- Toast ---
function toast(msg){
  let t=document.createElement('div');
  t.textContent=msg;
  t.style.position='fixed';
  t.style.bottom='20px';
  t.style.left='50%';
  t.style.transform='translateX(-50%)';
  t.style.background='#1a73e8';
  t.style.color='#fff';
  t.style.padding='10px 14px';
  t.style.borderRadius='10px';
  t.style.boxShadow='0 6px 18px rgba(0,0,0,.2)';
  t.style.zIndex='9999';
  document.body.appendChild(t);
  setTimeout(()=>t.remove(),1600);
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

// --- Domain Check ---
function checkDomain(name){
  const url=`https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=${encodeURIComponent(name)}`;
  window.open(url,'_blank');
}
