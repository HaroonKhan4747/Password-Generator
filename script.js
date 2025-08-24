/* ==========
  Data: industries with parts per style
  Each industry has arrays for prefixes, roots, and suffixes per style
  (Short lists here but structured to expand easily)
========== */

const INDUSTRY_PARTS = {
  "Technology": {
    fun: {
      prefixes:["Pixel","Nerd","Giga","Turbo","Zap","Quark","Robo","Hyper","Bit","Byte","Code","Nova","Neo","Spark"],
      roots:["Logic","Rocket","Widget","Ninja","Buddy","Monkey","Gizmo","Wizard","Pilot","Pulse","Jolt","Zap"],
      suffixes:["ify","ster","verse","lab","hub","pad","box","nest","dojo","wave","spark","loop","zone"]
    },
    professional: {
      prefixes:["Tech","Data","Cloud","Core","Prime","Apex","Vector","Quantum","Vertex","Solid","Secure","Fusion","Atlas","Blue"],
      roots:["Systems","Analytics","Networks","Solutions","Consulting","Dynamics","Software","Digital","Compute","Insight","Grid"],
      suffixes:["Labs","Works","Group","Partners","Global","Logic","Stack","Source","Bridge","Point","One"]
    },
    trendy: {
      prefixes:["Neo","Meta","Omni","Flux","Velo","Echo","Lyra","Kilo","Zeno","Wave","Cipher","Pixel","Nimbus"],
      roots:["Chain","Verse","Shift","Forge","Ops","Node","Sphere","Bloom","Flow","Stack","Pulse","Spark"],
      suffixes:["DAO","X","OS","HQ","HQ","Sync","Hub","Wave","Cloud","Link","Kit","Deck","Mint"]
    },
    elegant: {
      prefixes:["Luxe","Aure","Silk","Ivory","Opal","Cobalt","Onyx","Velvet","Royal","Sable","Verity","Prism","Aria"],
      roots:["Technologies","Ventures","Capital","Studios","Holdings","Design","Collective","Atelier","Maison","Bureau"],
      suffixes:["& Co."," Group"," Studio"," Collective"," Maison"," Atelier"," Works"," House"," Capital"," Partners"]
    }
  },

  "Clothing / Fashion": {
    fun:{
      prefixes:["Chill","Happy","Urban","Sunny","Retro","Funky","Cosmo","Lucky","Buzzy","Vibe","Street"],
      roots:["Bear","Fox","Wave","Flare","Beat","Bloom","Thread","Stitch","Hype","Drip","Vogue","Denim"],
      suffixes:[" Club"," Crew"," Lab"," House"," Hive"," Spot"," Squad"," Hub"," Co."," Works"]
    },
    professional:{
      prefixes:["Urban","Prime","Royal","Classic","Modern","Nord","Crown","Ivory","Velour","Silhouette","Atelier"],
      roots:["Apparel","Outfitters","Tailors","Collective","Thread","Couture","Wardrobe","Label","Design"],
      suffixes:[" Co."," Studio"," Group"," Atelier"," Maison"," Works"," House"]
    },
    trendy:{
      prefixes:["Neo","Aero","Nova","Vanta","Mono","Kith","Aether","Void","Kulture","Hype","Drip","Wave"],
      roots:["Street","Supply","Collective","Archive","Lab","Unit","Threads","Club","Edition","Project"],
      suffixes:[" Co"," Lab"," Works"," HQ"," Studio"," Supply"," Core"]
    },
    elegant:{
      prefixes:["Luxe","Serene","Opal","Silk","Sable","Maison","Ciel","Noir","Aria","Velvet","Fleur","Ivory"],
      roots:["Couture","Atelier","Maison","Label","Silhouette","Tailoring","Bespoke","Wardrobe"],
      suffixes:[" & Co."," Atelier"," Maison"," Studio"," House"," London"," Paris"," Milano"]
    }
  },

  "Food & Beverage": {
    fun:{
      prefixes:["Snack","Chow","Yum","Spice","Zesty","Munch","Noodle","Bubble","Juicy","Toasty","Chewy"],
      roots:["Box","Bowl","Bites","Delight","Crave","Crush"," Feast","Grill","Kitchen","Cafe","Scoops"],
      suffixes:[" Hub"," Club"," Cart"," Spot"," Shack"," Works"," Lab"," House"]
    },
    professional:{
      prefixes:["Prime","Harvest","Golden","Oak","River","Summit","Cedar","Blue","Crown","Atlas"],
      roots:["Provisions","Kitchen","Catering","Gourmet","Bakery","Roastery","Beverage","Foods","Dining"],
      suffixes:[" Co."," Group"," House"," Kitchen"," Works"," Collective"," Market"]
    },
    trendy:{
      prefixes:["Urban","Artisan","Craft","Modern","Wild","Ferment","Keto","Vegan","Plant","Stone","Flame"],
      roots:["Eatery","Deli","Lab","Bar","Micro","Press","Ferments","Grains","Grind","Crumb","Sip"],
      suffixes:[" Lab"," Bar"," Works"," Room"," Collective"," Co"," Project"]
    },
    elegant:{
      prefixes:["Maison","Ciel","Fleur","Savoy","Verde","Luna","Aurea","Noir","Velour","Gilded"],
      roots:["Dining","Brasserie","Patisserie","Gastronomy","Cellar","Kitchen","Table","Cuisine"],
      suffixes:[" & Co."," Maison"," Atelier"," Cellar"," Table"," House"]
    }
  },

  "Health & Fitness": {
    fun:{
      prefixes:["Fit","Flex","Bounce","Happy","Go","Vibe","Zen","Pulse","Power","Vital","Joy"],
      roots:["Squad","Lab","Crew","Camp","Boost","Fuel","Forge","Motion","Zone","Tribe"],
      suffixes:[" Hub"," Club"," Works"," Studio"," House"," Dojo"," Lab"]
    },
    professional:{
      prefixes:["Prime","Core","Total","Elite","Peak","Summit","Pure","Vital","Atlas","Unity"],
      roots:["Wellness","Fitness","Therapy","Clinic","Performance","Rehab","Nutrition","Care"],
      suffixes:[" Center"," Group"," Partners"," Health"," Clinic"," Studio"]
    },
    trendy:{
      prefixes:["Ath","Hypr","Meta","Velo","Strive","Aero","Voy","Forma","Kinetic","Motive"],
      roots:["Lab","Works","Collective","Athletica","Method","Project","Club","Unit"],
      suffixes:[" Lab"," Co"," Club"," Method"," Studio"," Works"]
    },
    elegant:{
      prefixes:["Serene","Ivory","Opal","Aurum","Verdant","Haven","Eden","Aegis","Nova"],
      roots:["Wellness","Therapy","Athletics","Pilates","Yoga","Retreat","Clinic"],
      suffixes:[" & Co."," Studio"," House"," Collective"," Center"]
    }
  },

  "Beauty & Personal Care": {
    fun:{
      prefixes:["Glow","Blush","Lush","Pep","Glam","Pop","Shine","Zest","Fresh","Happy"],
      roots:["Box","Lab","Bar","Room","Nest","Bloom","Studio","Mix","Nook"],
      suffixes:[" Hub"," Club"," Works"," Co"," Lab"," Lounge"]
    },
    professional:{
      prefixes:["Pure","Prime","Derm","Aesthetic","Signature","Ivory","Velvet","Silk","Elite"],
      roots:["Skincare","Cosmetics","Salon","Clinic","Aesthetics","Beauty","Cosmetica"],
      suffixes:[" Studio"," Clinic"," Center"," Group"," House"," Collective"]
    },
    trendy:{
      prefixes:["Nova","Vanta","Lumi","Aether","Monochrome","Aura","Klar","Nude","Opal"],
      roots:["Beauty","Skin","Glow","Cosmetix","Lab","Atelier","Collective","Parlor"],
      suffixes:[" Lab"," Co"," Studio"," House"," Club"," Edit"]
    },
    elegant:{
      prefixes:["Maison","Fleur","Sable","Noir","Velour","Ciel","Luna","Seraph","Aurelia"],
      roots:["Beauté","Atelier","Maison","Parfum","Salon","Esthétique"],
      suffixes:[" Paris"," Atelier"," Maison"," & Co."," Studio"]
    }
  },

  "Finance & Business Services": {
    fun:{
      prefixes:["Mint","Cash","Coin","Penny","Sprout","Nest","Bee","Happy","Sunny"],
      roots:["Jar","Box","Hive","Vault","Buddy","Boost","Flow","Fund"],
      suffixes:[" Hub"," Club"," Co"," Lab"," Works"]
    },
    professional:{
      prefixes:["Prime","Summit","Sterling","BlueRock","Crest","Atlas","Oak","Bridge","Harbor","Pinnacle"],
      roots:["Capital","Advisors","Partners","Consulting","Accountancy","Wealth","Finance","Holdings"],
      suffixes:[" Group"," Partners"," Capital"," Advisory"," LLP"," Associates"]
    },
    trendy:{
      prefixes:["Quantum","Crypto","Alpha","Beta","Lambda","Venture","Echo","Pilot","Zeno"],
      roots:["Ledger","Vault","Stack","Flow","Labs","Fund","Yield","Chain"],
      suffixes:[" Labs"," DAO"," X"," Hub"," OS"," One"]
    },
    elegant:{
      prefixes:["Aureus","Sable","Ivory","Regal","Crown","Veritas","Horizon","Monarch"],
      roots:["Capital","Private","Partners","Wealth","Advisory","Holdings","Estates"],
      suffixes:[" Group"," Partners"," Capital"," & Co."," Trust"]
    }
  },

  "Real Estate": {
    fun:{
      prefixes:["Happy","Nest","Sunny","Blue","Cosy","Urban","Pine","Maple"],
      roots:["Homes","Haven","Dwell","Pad","Porch","Keys","Corner","Nook"],
      suffixes:[" Hub"," Co"," Works"," Club"," Place"," Point"]
    },
    professional:{
      prefixes:["Prime","Summit","Harbor","Sterling","North","Cedar","Pinnacle","Crest"],
      roots:["Realty","Estates","Properties","Group","Holdings","Advisors","Capital"],
      suffixes:[" Group"," Partners"," Realty"," Estates"," Capital"," Advisors"]
    },
    trendy:{
      prefixes:["Urban","Metro","Loft","Axis","Nova","Vertex","Mono","Vista"],
      roots:["Collective","Spaces","Studio","Atlas","Grid","Block","Core"],
      suffixes:[" Lab"," Works"," Co"," HQ"," Hub"," Studio"]
    },
    elegant:{
      prefixes:["Regency","Ivory","Opal","Sable","Verity","Aurora","Maison"],
      roots:["Estates","Manor","Residences","Maison","Atelier","Bespoke"],
      suffixes:[" & Co."," Group"," Maison"," Atelier"," House"]
    }
  },

  "Ecommerce / Dropshipping": {
    fun:{ prefixes:["Shop","Click","Happy","Buzz","Zippy","Box","Swift"], roots:["Cart","Hub","Hive","Crate","Bay","Nest","Spot"], suffixes:[" Shop"," Hub"," Co"," Zone"," Bay"," Lab"] },
    professional:{ prefixes:["Global","Prime","Atlas","Summit","Pioneer","Blue"], roots:["Commerce","Supply","Fulfillment","Retail","Logistics","Outlet"], suffixes:[" Group"," Global"," Partners"," Co"," Works"] },
    trendy:{ prefixes:["Drop","Nova","Flux","Mono","Omni","Quick","Hyper"], roots:["Supply","Lane","Loop","Dash","Flow","Market","Core"], suffixes:[" Lab"," X"," Hub"," HQ"," OS"," One"] },
    elegant:{ prefixes:["Velour","Ivory","Noir","Opal","Sable"], roots:["Boutique","Maison","Atelier","Collective","Curations"], suffixes:[" & Co."," Atelier"," Maison"," Studio"," House"] }
  },

  "Pets & Animals": {
    fun:{ prefixes:["Paw","Purr","Woof","Fuzzy","Happy","Lucky","Sunny"], roots:["Box","Barn","Buddy","Den","Nook","Nest","Coop"], suffixes:[" Hub"," Club"," Co"," Works"," House"] },
    professional:{ prefixes:["Prime","Unity","Care","Healthy","Blue"], roots:["Veterinary","Grooming","PetCare","Wellness","Clinic","Rescue"], suffixes:[" Center"," Clinic"," Group"," Partners"] },
    trendy:{ prefixes:["Urban","Neo","Aero","Mono","Vibe"], roots:["Pet","Pack","Collective","Lab","Unit"], suffixes:[" Lab"," Club"," Co"," Works"] },
    elegant:{ prefixes:["Regal","Noble","Ivory","Velvet"], roots:["Kennels","Cattery","Estates","Atelier"], suffixes:[" & Co."," House"," Manor"," Studio"] }
  },

  "Education": {
    fun:{ prefixes:["Learn","Brainy","Happy","Smarty","Bright"], roots:["Box","Lab","Club","Camp","Hive","Spot"], suffixes:[" Hub"," Club"," Lab"," Works"," House"] },
    professional:{ prefixes:["Prime","Core","Summit","Schola","Academia"], roots:["Academy","Institute","Tutors","Learning","Scholars","Prep"], suffixes:[" Academy"," Institute"," Group"," Center"] },
    trendy:{ prefixes:["Neo","Meta","Aero","Kinetic","Velo"], roots:["Learn","Labs","Collective","Unit","Stack"], suffixes:[" Lab"," Co"," Studio"," Works"] },
    elegant:{ prefixes:["Aureus","Veritas","Regent","Ivory"], roots:["Academy","Scholarium","Lyceum","Schola"], suffixes:[" & Co."," Institute"," House"," Collegium"] }
  }
};

// Flat list for the selector
const INDUSTRY_LIST = Object.keys(INDUSTRY_PARTS);

// DOM
const industrySearch = document.getElementById('industrySearch');
const industrySelect = document.getElementById('industrySelect');
const styleSelect = document.getElementById('styleSelect');
const wordCountSelect = document.getElementById('wordCountSelect');
const quantitySelect = document.getElementById('quantitySelect');
const generateBtn = document.getElementById('generateBtn');
const resultsEl = document.getElementById('results');
const copyAllBtn = document.getElementById('copyAllBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Populate industry select
function populateIndustrySelect(filter = "") {
  industrySelect.innerHTML = "";
  const normalized = filter.trim().toLowerCase();
  INDUSTRY_LIST
    .filter(name => name.toLowerCase().includes(normalized))
    .forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      industrySelect.appendChild(opt);
    });
}
populateIndustrySelect();

// Search typing filters the list
industrySearch.addEventListener('input', (e) => {
  populateIndustrySelect(e.target.value);
});

// If user clicks an option, mirror into search box (for clarity)
industrySelect.addEventListener('change', () => {
  const val = industrySelect.value || "";
  if (val) industrySearch.value = val;
});

// Utility
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
function toTitleCase(str){ return str.replace(/\b\w/g, c => c.toUpperCase()); }
function joinCompact(parts){ return parts.filter(Boolean).join(" "); }
function coinSingleWord(p,r,s){
  // For one-word, sometimes glue without space; sometimes camel-case
  const styles = [
    () => (p + r),
    () => (r + s),
    () => (p + s),
    () => (p + r + s),
    () => (p + "-" + r),
  ];
  return styles[Math.floor(Math.random()*styles.length)]()
    .replace(/\s+/g,"")
    .replace(/[-]{2,}/g,"-");
}

// Build a name with style rules
function buildName(industry, style, words){
  const pack = INDUSTRY_PARTS[industry]?.[style];
  if (!pack) return "BrandName";
  const {prefixes, roots, suffixes} = pack;

  if (words === 1){
    const p = rand(prefixes);
    const r = rand(roots);
    const s = rand(suffixes);
    return toTitleCase(coinSingleWord(p, r, s));
  }

  if (words === 2){
    // Prefer Prefix + Root, or Root + Suffix (worded)
    const form = Math.random() < 0.5
      ? [rand(prefixes), rand(roots)]
      : [rand(roots), rand(suffixes)];
    return toTitleCase(joinCompact(form));
  }

  // words === 3
  const form = [rand(prefixes), rand(roots), rand(suffixes)];
  return toTitleCase(joinCompact(form));
}

// Render results
function renderResults(list){
  resultsEl.innerHTML = "";
  list.forEach(name => {
    const row = document.createElement('div');
    row.className = "result";
    const strong = document.createElement('strong');
    strong.textContent = name;

    const btn = document.createElement('button');
    btn.className = "copy-btn";
    btn.textContent = "Copy";
    btn.addEventListener('click', async () => {
      try{
        await navigator.clipboard.writeText(name);
        btn.textContent = "Copied!";
        setTimeout(()=> btn.textContent = "Copy", 900);
      }catch(e){
        alert("Copy failed. Select and copy manually.");
      }
    });

    row.appendChild(strong);
    row.appendChild(btn);
    resultsEl.appendChild(row);
  });
}

// Generate handler
generateBtn.addEventListener('click', () => {
  const chosenIndustry = (industrySelect.value || industrySearch.value || INDUSTRY_LIST[0]).trim();
  const style = styleSelect.value;
  const words = parseInt(wordCountSelect.value, 10);
  const qty = parseInt(quantitySelect.value, 10);

  // Guard: If user typed a custom not-in-list industry, fallback to Technology
  const industry = INDUSTRY_PARTS[chosenIndustry] ? chosenIndustry : "Technology";

  const set = new Set();
  let safety = 0;
  while(set.size < qty && safety < qty * 20){
    const candidate = buildName(industry, style, words);
    set.add(candidate);
    safety++;
  }
  renderResults([...set]);
});

// Copy all
copyAllBtn.addEventListener('click', async () => {
  const names = [...resultsEl.querySelectorAll('.result strong')].map(el => el.textContent);
  if (!names.length) return;
  const text = names.join('\n');
  try{
    await navigator.clipboard.writeText(text);
    copyAllBtn.textContent = "All Copied!";
    setTimeout(()=> copyAllBtn.textContent = "Copy All", 1000);
  }catch(e){
    alert("Copy failed. Download .txt instead.");
  }
});

// Download .txt
downloadBtn.addEventListener('click', () => {
  const names = [...resultsEl.querySelectorAll('.result strong')].map(el => el.textContent);
  if (!names.length) return;
  const blob = new Blob([names.join('\n')], {type:"text/plain;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'business-names.txt';
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
});

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    panel.style.display = panel.style.display === 'block' ? 'none' : 'block';
  });
});

// Initial state: pick Technology by default
industrySelect.value = "Technology";
industrySearch.value = "Technology";
