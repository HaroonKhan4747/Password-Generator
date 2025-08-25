/* ===========================
   Industry Word Banks (Expanded)
   Each industry has 4 styles with richer prefix/root/suffix lists
   You can extend freely — generator scales automatically
=========================== */

const INDUSTRY_PARTS = {
  "Technology": {
    fun: {
      prefixes:["Pixel","Nerd","Giga","Turbo","Zap","Quark","Robo","Hyper","Bit","Byte","Code","Nova","Neo","Spark","Proto","Glitch","Widget","Atom","Nano","Cloudy","Rocket"],
      roots:["Logic","Rocket","Widget","Ninja","Buddy","Monkey","Gizmo","Wizard","Pilot","Pulse","Jolt","Switch","Kernel","Stack","Circuit","Beacon","Node","Engine","Matrix"],
      suffixes:["ify","ster","verse","lab","hub","pad","box","nest","dojo","wave","spark","loop","zone","dock","craft","forge","shift","pilot","deck","grid"]
    },
    professional: {
      prefixes:["Tech","Data","Cloud","Core","Prime","Apex","Vector","Quantum","Vertex","Solid","Secure","Fusion","Atlas","Blue","Integral","Nimbus","Cobalt","Signal","Infini","Northern"],
      roots:["Systems","Analytics","Networks","Solutions","Consulting","Dynamics","Software","Digital","Compute","Insight","Grid","Intelligence","Security","Platform","Ops","Infrastructure","Automation"],
      suffixes:["Labs","Works","Group","Partners","Global","Logic","Stack","Source","Bridge","Point","One","Network","Holdings","Corporation","Associates","Technologies"]
    },
    trendy: {
      prefixes:["Neo","Meta","Omni","Flux","Velo","Echo","Lyra","Kilo","Zeno","Wave","Cipher","Nimbus","Aero","Vanta","Mono","Aether","Kinetic","Helio","Kairo","Volt"],
      roots:["Chain","Verse","Shift","Forge","Ops","Node","Sphere","Bloom","Flow","Stack","Pulse","Spark","Grid","Core","Deck","Hub","Mint","Frame","Sync"],
      suffixes:["DAO","X","OS","HQ","Sync","Hub","Wave","Cloud","Link","Kit","Deck","Mint","One","Lab","Core"]
    },
    elegant: {
      prefixes:["Luxe","Aure","Silk","Ivory","Opal","Cobalt","Onyx","Velvet","Royal","Sable","Verity","Prism","Aria","Aurora","Solace","Noble","Sable","Regency"],
      roots:["Technologies","Ventures","Capital","Studios","Holdings","Design","Collective","Atelier","Maison","Bureau","Consulting","Partners"],
      suffixes:[" & Co."," Group"," Studio"," Collective"," Maison"," Atelier"," Works"," House"," Capital"," Partners"," Holdings"]
    }
  },

  "Clothing / Fashion": {
    fun:{
      prefixes:["Chill","Happy","Urban","Sunny","Retro","Funky","Cosmo","Lucky","Buzzy","Vibe","Street","Fresh","Hype","Groove","Crisp"],
      roots:["Bear","Fox","Wave","Flare","Beat","Bloom","Thread","Stitch","Hype","Drip","Vogue","Denim","Weave","Label","Knit"],
      suffixes:[" Club"," Crew"," Lab"," House"," Hive"," Spot"," Squad"," Hub"," Co."," Works"," Studio"," Shop"]
    },
    professional:{
      prefixes:["Urban","Prime","Royal","Classic","Modern","Nord","Crown","Ivory","Velour","Silhouette","Atelier","Heritage","Maison","Regal"],
      roots:["Apparel","Outfitters","Tailors","Collective","Thread","Couture","Wardrobe","Label","Design","Atelier"],
      suffixes:[" Co."," Studio"," Group"," Atelier"," Maison"," Works"," House"," London"," Milano"]
    },
    trendy:{
      prefixes:["Neo","Aero","Nova","Vanta","Mono","Kith","Aether","Void","Kulture","Drip","Wave","Archive","Studio","Civil","Karma"],
      roots:["Street","Supply","Collective","Archive","Lab","Unit","Threads","Club","Edition","Project","Division"],
      suffixes:[" Co"," Lab"," Works"," HQ"," Studio"," Supply"," Core"," Dept."]
    },
    elegant:{
      prefixes:["Luxe","Serene","Opal","Silk","Sable","Maison","Ciel","Noir","Aria","Velvet","Fleur","Ivory","Étoile","Belle"],
      roots:["Couture","Atelier","Maison","Label","Silhouette","Tailoring","Bespoke","Wardrobe","Haute"],
      suffixes:[" & Co."," Atelier"," Maison"," Studio"," House"," Paris"," Milano"]
    }
  },

  "Food & Beverage": {
    fun:{
      prefixes:["Snack","Chow","Yum","Spice","Zesty","Munch","Noodle","Bubble","Juicy","Toasty","Chewy","Tasty","Crunch","Sizzle"],
      roots:["Box","Bowl","Bites","Delight","Crave","Crush","Feast","Grill","Kitchen","Cafe","Scoops","Pantry","Fork"],
      suffixes:[" Hub"," Club"," Cart"," Spot"," Shack"," Works"," Lab"," House"," Bar"," Deli"]
    },
    professional:{
      prefixes:["Prime","Harvest","Golden","Oak","River","Summit","Cedar","Blue","Crown","Atlas","Stone","Hearth","Valley"],
      roots:["Provisions","Kitchen","Catering","Gourmet","Bakery","Roastery","Beverage","Foods","Dining","Cellar"],
      suffixes:[" Co."," Group"," House"," Kitchen"," Works"," Collective"," Market"," Table"]
    },
    trendy:{
      prefixes:["Urban","Artisan","Craft","Modern","Wild","Ferment","Keto","Vegan","Plant","Stone","Flame","Noble","Street"],
      roots:["Eatery","Deli","Lab","Bar","Micro","Press","Ferments","Grains","Grind","Crumb","Sip","Brew","Smoke"],
      suffixes:[" Lab"," Bar"," Works"," Room"," Collective"," Co"," Project"," House"]
    },
    elegant:{
      prefixes:["Maison","Ciel","Fleur","Savoy","Verde","Luna","Aurea","Noir","Velour","Gilded","Alba","Rosé"],
      roots:["Dining","Brasserie","Patisserie","Gastronomy","Cellar","Kitchen","Table","Cuisine","Bistro"],
      suffixes:[" & Co."," Maison"," Atelier"," Cellar"," Table"," House"," Salon"]
    }
  },

  "Health & Fitness": {
    fun:{
      prefixes:["Fit","Flex","Bounce","Happy","Go","Vibe","Zen","Pulse","Power","Vital","Joy","Glow","Move"],
      roots:["Squad","Lab","Crew","Camp","Boost","Fuel","Forge","Motion","Zone","Tribe","Flow"],
      suffixes:[" Hub"," Club"," Works"," Studio"," House"," Dojo"," Lab"," Room"]
    },
    professional:{
      prefixes:["Prime","Core","Total","Elite","Peak","Summit","Pure","Vital","Atlas","Unity","Integral","True"],
      roots:["Wellness","Fitness","Therapy","Clinic","Performance","Rehab","Nutrition","Care","Health"],
      suffixes:[" Center"," Group"," Partners"," Health"," Clinic"," Studio"," Institute"]
    },
    trendy:{
      prefixes:["Ath","Hypr","Meta","Velo","Strive","Aero","Voy","Forma","Kinetic","Motive","Volt","Pulse"],
      roots:["Lab","Works","Collective","Athletica","Method","Project","Club","Unit","Program"],
      suffixes:[" Lab"," Co"," Club"," Method"," Studio"," Works"," System"]
    },
    elegant:{
      prefixes:["Serene","Ivory","Opal","Aurum","Verdant","Haven","Eden","Aegis","Nova","Solace"],
      roots:["Wellness","Therapy","Athletics","Pilates","Yoga","Retreat","Clinic","Health"],
      suffixes:[" & Co."," Studio"," House"," Collective"," Center"," Atelier"]
    }
  },

  "Beauty & Personal Care": {
    fun:{
      prefixes:["Glow","Blush","Lush","Pep","Glam","Pop","Shine","Zest","Fresh","Happy","Sugar","Dew"],
      roots:["Box","Lab","Bar","Room","Nest","Bloom","Studio","Mix","Nook","Glow","Fix"],
      suffixes:[" Hub"," Club"," Works"," Co"," Lab"," Lounge"," Studio"]
    },
    professional:{
      prefixes:["Pure","Prime","Derm","Aesthetic","Signature","Ivory","Velvet","Silk","Elite","Heritage"],
      roots:["Skincare","Cosmetics","Salon","Clinic","Aesthetics","Beauty","Cosmetica","Derm"],
      suffixes:[" Studio"," Clinic"," Center"," Group"," House"," Collective"," Lab"]
    },
    trendy:{
      prefixes:["Nova","Vanta","Lumi","Aether","Aura","Klar","Nude","Opal","Chroma","Halo","Vivid"],
      roots:["Beauty","Skin","Glow","Cosmetix","Lab","Atelier","Collective","Parlor","Edit","Care"],
      suffixes:[" Lab"," Co"," Studio"," House"," Club"," Edit"," Works"]
    },
    elegant:{
      prefixes:["Maison","Fleur","Sable","Noir","Velour","Ciel","Luna","Seraph","Aurelia","Éclat"],
      roots:["Beauté","Atelier","Maison","Parfum","Salon","Esthétique","Cosmétiques"],
      suffixes:[" Paris"," Atelier"," Maison"," & Co."," Studio"," Maison"]
    }
  },

  "Finance & Business Services": {
    fun:{
      prefixes:["Mint","Cash","Coin","Penny","Sprout","Nest","Happy","Sunny","Ledger"],
      roots:["Jar","Box","Hive","Vault","Buddy","Boost","Flow","Fund","Stack"],
      suffixes:[" Hub"," Club"," Co"," Lab"," Works"," Box"]
    },
    professional:{
      prefixes:["Prime","Summit","Sterling","BlueRock","Crest","Atlas","Oak","Bridge","Harbor","Pinnacle","Cedar","Crown"],
      roots:["Capital","Advisors","Partners","Consulting","Accountancy","Wealth","Finance","Holdings","Group"],
      suffixes:[" Group"," Partners"," Capital"," Advisory"," LLP"," Associates"," Management"]
    },
    trendy:{
      prefixes:["Quantum","Crypto","Alpha","Beta","Lambda","Venture","Echo","Pilot","Zeno","Vector","Flux"],
      roots:["Ledger","Vault","Stack","Flow","Labs","Fund","Yield","Chain","Index","Desk"],
      suffixes:[" Labs"," DAO"," X"," Hub"," OS"," One"," Co"]
    },
    elegant:{
      prefixes:["Aureus","Sable","Ivory","Regal","Crown","Veritas","Horizon","Monarch","Solace","Providence"],
      roots:["Capital","Private","Partners","Wealth","Advisory","Holdings","Estates","Trust"],
      suffixes:[" Group"," Partners"," Capital"," & Co."," Trust"," Associates"]
    }
  },

  "Real Estate": {
    fun:{
      prefixes:["Happy","Nest","Sunny","Blue","Cosy","Urban","Pine","Maple","Bright"],
      roots:["Homes","Haven","Dwell","Pad","Porch","Keys","Corner","Nook","Nest"],
      suffixes:[" Hub"," Co"," Works"," Club"," Place"," Point"," Spot"]
    },
    professional:{
      prefixes:["Prime","Summit","Harbor","Sterling","North","Cedar","Pinnacle","Crest","Anchor","Granite"],
      roots:["Realty","Estates","Properties","Group","Holdings","Advisors","Capital","Partners"],
      suffixes:[" Group"," Partners"," Realty"," Estates"," Capital"," Advisors"," Collective"]
    },
    trendy:{
      prefixes:["Urban","Metro","Loft","Axis","Nova","Vertex","Mono","Vista","Core","Grid"],
      roots:["Collective","Spaces","Studio","Atlas","Grid","Block","Core","Works","Unit"],
      suffixes:[" Lab"," Works"," Co"," HQ"," Hub"," Studio"," House"]
    },
    elegant:{
      prefixes:["Regency","Ivory","Opal","Sable","Verity","Aurora","Maison","Crown","Noble"],
      roots:["Estates","Manor","Residences","Maison","Atelier","Bespoke","Properties"],
      suffixes:[" & Co."," Group"," Maison"," Atelier"," House"," Realty"]
    }
  },

  "Ecommerce / Dropshipping": {
    fun:{ prefixes:["Shop","Click","Happy","Buzz","Zippy","Box","Swift","Easy","Swiftly"], roots:["Cart","Hub","Hive","Crate","Bay","Nest","Spot","Mart"], suffixes:[" Shop"," Hub"," Co"," Zone"," Bay"," Lab"," Market"] },
    professional:{ prefixes:["Global","Prime","Atlas","Summit","Pioneer","Blue","Cedar","Anchor"], roots:["Commerce","Supply","Fulfillment","Retail","Logistics","Outlet","Trading"], suffixes:[" Group"," Global"," Partners"," Co"," Works"," Network"] },
    trendy:{ prefixes:["Drop","Nova","Flux","Mono","Omni","Quick","Hyper","Dash","Loop"], roots:["Supply","Lane","Loop","Dash","Flow","Market","Core","Deck"], suffixes:[" Lab"," X"," Hub"," HQ"," OS"," One"," Cloud"] },
    elegant:{ prefixes:["Velour","Ivory","Noir","Opal","Sable","Maison"], roots:["Boutique","Maison","Atelier","Collective","Curations","Emporium"], suffixes:[" & Co."," Atelier"," Maison"," Studio"," House"," Collective"] }
  },

  "Pets & Animals": {
    fun:{ prefixes:["Paw","Purr","Woof","Fuzzy","Happy","Lucky","Sunny","Bark"], roots:["Box","Barn","Buddy","Den","Nook","Nest","Coop","Corner"], suffixes:[" Hub"," Club"," Co"," Works"," House"," Spot"] },
    professional:{ prefixes:["Prime","Unity","Care","Healthy","Blue","Gentle"], roots:["Veterinary","Grooming","PetCare","Wellness","Clinic","Rescue","Hospital"], suffixes:[" Center"," Clinic"," Group"," Partners"," Care"] },
    trendy:{ prefixes:["Urban","Neo","Aero","Mono","Vibe","Alpha"], roots:["Pet","Pack","Collective","Lab","Unit","Crew"], suffixes:[" Lab"," Club"," Co"," Works"," House"] },
    elegant:{ prefixes:["Regal","Noble","Ivory","Velvet","Crown"], roots:["Kennels","Cattery","Estates","Atelier","Manor"], suffixes:[" & Co."," House"," Manor"," Studio"," Lodge"] }
  },

  "Education": {
    fun:{ prefixes:["Learn","Brainy","Happy","Smarty","Bright","Study","Skill"], roots:["Box","Lab","Club","Camp","Hive","Spot","Room"], suffixes:[" Hub"," Club"," Lab"," Works"," House"," Studio"] },
    professional:{ prefixes:["Prime","Core","Summit","Schola","Academia","Legacy","Pioneer"], roots:["Academy","Institute","Tutors","Learning","Scholars","Prep","College"], suffixes:[" Academy"," Institute"," Group"," Center"," School"] },
    trendy:{ prefixes:["Neo","Meta","Aero","Kinetic","Velo","Next","Nano"], roots:["Learn","Labs","Collective","Unit","Stack","Sprint"], suffixes:[" Lab"," Co"," Studio"," Works"," Program"] },
    elegant:{ prefixes:["Aureus","Veritas","Regent","Ivory","Noble","Heritage"], roots:["Academy","Scholarium","Lyceum","Schola","Conservatory"], suffixes:[" & Co."," Institute"," House"," Collegium"," School"] }
  }
};

// Flat list for selector
const INDUSTRY_LIST = Object.keys(INDUSTRY_PARTS);

// DOM refs
const industrySearch = document.getElementById('industrySearch');
const industrySelect = document.getElementById('industrySelect');
const styleSelect = document.getElementById('styleSelect');
const wordCountSelect = document.getElementById('wordCountSelect');
const quantitySelect = document.getElementById('quantitySelect');
const generateBtn = document.getElementById('generateBtn');
const resultsEl = document.getElementById('results');
const copyAllBtn = document.getElementById('copyAllBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Mobile nav toggle
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainNav = document.getElementById('mainNav');
hamburgerBtn.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Populate industries
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

// Search typing filters list
industrySearch.addEventListener('input', (e) => {
  populateIndustrySelect(e.target.value);
});

// Mirror choice into search box
industrySelect.addEventListener('change', () => {
  const val = industrySelect.value || "";
  if (val) industrySearch.value = val;
});

// Utils
const rand = (arr) => arr[Math.floor(Math.random() * arr.length)];
function toTitleCase(str){ return str.replace(/\b\w/g, c => c.toUpperCase()); }
function joinCompact(parts){ return parts.filter(Boolean).join(" "); }
function coinSingleWord(p,r,s){
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

// Build a name
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
    const form = Math.random() < 0.6
      ? [rand(prefixes), rand(roots)]
      : [rand(roots), rand(suffixes)];
    return toTitleCase(joinCompact(form));
  }

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

  const industry = INDUSTRY_PARTS[chosenIndustry] ? chosenIndustry : "Technology";

  const set = new Set();
  let safety = 0;
  while(set.size < qty && safety < qty * 30){
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

// Defaults
industrySelect.value = "Technology";
industrySearch.value = "Technology";
