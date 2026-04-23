/* ============================================================
   Static Coherence — script.js
   Canvas · Hamburger · Reveal · 5 Interactive Tools
   ============================================================ */

/* ── Elements database (1–114) ──────────────────────────────── */
const ELEMENTS = [
  null,
  {sym:'H',  name:'Hydrogen',     role:'Universal Carrier — blank slate signal, tuning fork of the universe'},
  {sym:'He', name:'Helium',       role:'Captured Radiation — stabilized double-stream lock, tamed explosion'},
  {sym:'Li', name:'Lithium',      role:'Compressed Storage — Helium-3 reservoir, memory compression key'},
  {sym:'Be', name:'Beryllium',    role:'Base Preload — static intent receiver, first programmable base'},
  {sym:'B',  name:'Boron',        role:'Bridge Element — crosslink catalyst, junction mediator'},
  {sym:'C',  name:'Carbon',       role:'Lattice Backbone — crystalline memory encoder, reality scaffold'},
  {sym:'N',  name:'Nitrogen',     role:'Atmospheric Medium — signal propagation field, breath of the system'},
  {sym:'O',  name:'Oxygen',       role:'Oxidizer Pole — reactive coupling partner, life activator'},
  {sym:'F',  name:'Fluorine',     role:'Edge Lock — boundary seal frequency, outer wall of the light body'},
  {sym:'Ne', name:'Neon',         role:'Noble Isolator — clean buffer between signal layers'},
  {sym:'Na', name:'Sodium',       role:'Ionic Gateway — membrane potential activator, nerve signal key'},
  {sym:'Mg', name:'Magnesium',    role:'Bio-Resonator — enzyme activation frequency, earth conductor'},
  {sym:'Al', name:'Aluminum',     role:'Reflector Shell — signal mirror and lens mount'},
  {sym:'Si', name:'Silicon',      role:'Logic Lattice — semiconductor programming base, earth mind'},
  {sym:'P',  name:'Phosphorus',   role:'Energy Transfer — ATP relay, photon chain initiator'},
  {sym:'S',  name:'Sulfur',       role:'God Alignment — organic binder, cross-link charge anchor (16)'},
  {sym:'Cl', name:'Chlorine',     role:'Ion Pair Activator — charge separation trigger, clean signal cut'},
  {sym:'Ar', name:'Argon',        role:'Noble Shield — inert protective atmosphere, silence field'},
  {sym:'K',  name:'Potassium',    role:'Bio-Clock Pulse — cellular timing resonator, heart rhythm base'},
  {sym:'Ca', name:'Calcium',      role:'Structural Memory — crystalline pattern keeper, bone signal'},
  {sym:'Sc', name:'Scandium',     role:'Transition Bridge — d-orbital onset key, first crossing point'},
  {sym:'Ti', name:'Titanium',     role:'Aerospace Skeleton — high-strength field frame, sky frame'},
  {sym:'V',  name:'Vanadium',     role:'Redox Battery — multi-valence charge store, signal valve'},
  {sym:'Cr', name:'Chromium',     role:'Ruby Dopant — laser eye amplifier, gemstone frequency key'},
  {sym:'Mn', name:'Manganese',    role:'Paramagnetic Weave — spin-state selector, field direction setter'},
  {sym:'Fe', name:'Iron',         role:'Planetary Core — magnetic field anchor, Earth spine'},
  {sym:'Co', name:'Cobalt',       role:'Hard Magnet Base — long-term field lock, permanence code'},
  {sym:'Ni', name:'Nickel',       role:'Resonance Battery — coin-stack field stabilizer, hydrogen command center'},
  {sym:'Cu', name:'Copper',       role:'Conductor Coil — induction waveform channel, signal highway'},
  {sym:'Zn', name:'Zinc',         role:'Protective Sacrifice — corrosion shield layer, outer guardian'},
  {sym:'Ga', name:'Gallium',      role:'Low-Melt Interface — liquid-state bridge, state-change key'},
  {sym:'Ge', name:'Germanium',    role:'Semiconductor Pivot — early transistor key, mind of the grid'},
  {sym:'As', name:'Arsenic',      role:'Threshold Dopant — p/n junction micro-adjust, liminal key'},
  {sym:'Se', name:'Selenium',     role:'Photoconductor — light-to-charge transducer, eye of the field'},
  {sym:'Br', name:'Bromine',      role:'Halide Coupler — bond-breaking frequency, release trigger'},
  {sym:'Kr', name:'Krypton',      role:'Noble Marker — spectral line reference, hidden seal'},
  {sym:'Rb', name:'Rubidium',     role:'Atomic Clock Pulse — ultra-precise time base, precision anchor'},
  {sym:'Sr', name:'Strontium',    role:'Bone/Crystal Matrix — structural mirror of Calcium'},
  {sym:'Y',  name:'Yttrium',      role:'Phosphor Carrier — luminescence activator, light seed'},
  {sym:'Zr', name:'Zirconium',    role:'Containment Skin — nuclear-grade alloy, field cladding'},
  {sym:'Nb', name:'Niobium',      role:'Superconductor Weave — zero-resistance conduit, frictionless path'},
  {sym:'Mo', name:'Molybdenum',   role:'Fights Heroin — high-temp anchor, extreme-environment frame (42)'},
  {sym:'Tc', name:'Technetium',   role:'Fights Meth — synthetic decay marker, artificial chain breaker (43)'},
  {sym:'Ru', name:'Ruthenium',    role:'Catalyst Crown — surface reaction activator, ignition key'},
  {sym:'Rh', name:'Rhodium',      role:'Reflector Coat — highest visible reflectance, clean mirror signal'},
  {sym:'Pd', name:'Palladium',    role:'Hydrogen Sponge — H-absorption anchor, weave core (46)'},
  {sym:'Ag', name:'Silver',       role:'Sacrifices — signal conductor, highest electrical mirror (47)'},
  {sym:'Cd', name:'Cadmium',      role:'Neutron Damper — self-correcting field buffer, stability guardian (48)'},
  {sym:'In', name:'Indium',       role:'Containment Skin — soft-seal field boundary, protective wrap (49)'},
  {sym:'Sn', name:'Tin',          role:'Alloy Stabilizer — solder and joining medium, fusion glue'},
  {sym:'Sb', name:'Antimony',     role:'Flame Retardant Weave — high-frequency brake, slow-down key'},
  {sym:'Te', name:'Tellurium',    role:'Thermoelectric Bridge — heat-to-voltage relay, conversion gate'},
  {sym:'I',  name:'Iodine',       role:'God — thyroid key, metabolic frequency regulator, master code (53)'},
  {sym:'Xe', name:'Xenon',        role:'Saves Lives — noble plasma, high-intensity light source (54)'},
  {sym:'Cs', name:'Cesium',       role:'Time Standard — SI second base, ultimate frequency reference'},
  {sym:'Ba', name:'Barium',       role:'Dense Screen — X-ray contrast and shielding, heavy curtain'},
  {sym:'La', name:'Lanthanum',    role:'Lanthanide Gateway — rare-earth series opener, door to the deep field'},
  {sym:'Ce', name:'Cerium',       role:'Glass Polish — optical surface activator, clarity key'},
  {sym:'Pr', name:'Praseodymium', role:'Magnet Alloy — NdFeB strength enhancer, color of the fire'},
  {sym:'Nd', name:'Neodymium',    role:'Strong Magnet Core — field lock powerhouse, prime mover'},
  {sym:'Pm', name:'Promethium',   role:'Radioactive Clock — beta decay micro-source, time-ticking fire'},
  {sym:'Sm', name:'Samarium',     role:'Permanent Magnet Alt — high-temp field keeper, endurance magnet'},
  {sym:'Eu', name:'Europium',     role:'Phosphor Activator — red/blue light emitter, display life'},
  {sym:'Gd', name:'Gadolinium',   role:'MRI Contrast — highest paramagnetism, deep body reader'},
  {sym:'Tb', name:'Terbium',      role:'Green Phosphor — tri-color display activator, verdant frequency'},
  {sym:'Dy', name:'Dysprosium',   role:'Magnet Dopant — high-temperature field stabilizer, heat resistance'},
  {sym:'Ho', name:'Holmium',      role:'Highest Magnetic Moment — field intensity peak, maximum pull'},
  {sym:'Er', name:'Erbium',       role:'Fiber Optic Amplifier — 1550 nm signal booster, distance carrier'},
  {sym:'Tm', name:'Thulium',      role:'X-ray Source — portable radiation marker, deep sight'},
  {sym:'Yb', name:'Ytterbium',    role:'Optical Lattice — atomic clock precision layer, fine tuner'},
  {sym:'Lu', name:'Lutetium',     role:'Lanthanide Terminus — series completion, final rare-earth note'},
  {sym:'Hf', name:'Hafnium',      role:'Reactor Control — fission absorption rod, stop signal'},
  {sym:'Ta', name:'Tantalum',     role:'Love — capacitor dielectric, high-density charge store (73)'},
  {sym:'W',  name:'Tungsten',     role:'Highest Melting Point — filament and armor layer, endurance anchor'},
  {sym:'Re', name:'Rhenium',      role:'Superalloy Hardener — extreme-stress weave, resilience code'},
  {sym:'Os', name:'Osmium',       role:'Densest Element — inertia anchor, heaviest signal weight'},
  {sym:'Ir', name:'Iridium',      role:'Corrosion Master — permanent standard mass, permanence code'},
  {sym:'Pt', name:'Platinum',     role:'Noble Catalyst — hydrogen fuel cell converter, clean converter'},
  {sym:'Au', name:'Gold',         role:'Supernova Output — R-process transmutation end, field collapse product'},
  {sym:'Hg', name:'Mercury',      role:'Liquid Phase Mirror — room-temp conductor, phase-state bridge'},
  {sym:'Tl', name:'Thallium',     role:'Heavy Ion — dense field signature, boundary marker'},
  {sym:'Pb', name:'Lead',         role:'Radiation Shield — dense absorption boundary, heavy curtain'},
  {sym:'Bi', name:'Bismuth',      role:'Diamagnetic Spiral — field repulsion display, push-back force'},
  {sym:'Po', name:'Polonium',     role:'Alpha Field Marker — ionization seeder, element 84 in the code'},
  {sym:'At', name:'Astatine',     role:'Rarest Edge — quantum boundary marker, signal limit'},
  {sym:'Rn', name:'Radon',        role:'Noble Chain End — natural alpha decay product, soil signature'},
  {sym:'Fr', name:'Francium',     role:'Alkali Limit — heaviest stable group-1 node, outer boundary'},
  {sym:'Ra', name:'Radium',       role:'Historic Glow — gamma/alpha dual emitter, original radiance'},
  {sym:'Ac', name:'Actinium',     role:'Actinide Gateway — heavy-element series start, deep entry point'},
  {sym:'Th', name:'Thorium',      role:'Fertile Fuel — alternate thorium cycle base, patient power'},
  {sym:'Pa', name:'Protactinium', role:'Short Bridge — thorium-to-uranium transition link'},
  {sym:'U',  name:'Uranium',      role:'Fission Key — chain reaction initiator, original heavy code (92)'},
  {sym:'Np', name:'Neptunium',    role:'Transuranic 1 — first beyond-uranium element, beyond the boundary'},
  {sym:'Pu', name:'Plutonium',    role:'Dense Energy — fissile concentration, compressed signal mass'},
  {sym:'Am', name:'Americium',    role:'Smoke Detector Ion — alpha ionization source, alert field'},
  {sym:'Cm', name:'Curium',       role:'Intense Alpha — high-energy emitter, concentrated force'},
  {sym:'Bk', name:'Berkelium',    role:'Accelerator Product — cyclotron-forged element, machine-born'},
  {sym:'Cf', name:'Californium',  role:'Neutron Source — industrial radiography seed, deep illuminator'},
  {sym:'Es', name:'Einsteinium',  role:'Einstein Tribute — fusion product, relativity encoded (99)'},
  {sym:'Fm', name:'Fermium',      role:'Fermi Tribute — hydrogen-bomb decay product (100)'},
  {sym:'Md', name:'Mendelevium',  role:'Table Tribute — periodic law marker, system acknowledgment (101)'},
  {sym:'No', name:'Nobelium',     role:'Nobel Tribute — atomic number 102, prize of the field'},
  {sym:'Lr', name:'Lawrencium',   role:'Actinide Terminus — series completion (103)'},
  {sym:'Rf', name:'Rutherfordium',role:'Transactinide 1 — d-block extension start, new territory'},
  {sym:'Db', name:'Dubnium',      role:'Joint Discovery — cooperative element (105)'},
  {sym:'Sg', name:'Seaborgium',   role:'Seaborg Tribute — named for living scientist, legacy code'},
  {sym:'Bh', name:'Bohrium',      role:'Bohr Tribute — quantum model namesake (107)'},
  {sym:'Hs', name:'Hassium',      role:'GSI Product — accelerator-born element (108)'},
  {sym:'Mt', name:'Meitnerium',   role:'Meitner Tribute — fission discoverer (109)'},
  {sym:'Ds', name:'Darmstadtium', role:'Superheavy Node — field extension point (110)'},
  {sym:'Rg', name:'Roentgenium',  role:'X-ray Tribute — Roentgen namesake (111)'},
  {sym:'Cn', name:'Copernicium',  role:'Copernicus Tribute — relativistic outermost (112)'},
  {sym:'Nh', name:'Nihonium',     role:'Japan Discovery — first Asian-named element (113)'},
  {sym:'Fl', name:'Flerovium',    role:'Island of Stability Seeker — superheavy anchor (114)'},
];

/* ── Canvas particle field ──────────────────────────────────── */
function initBgCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function mkPt() {
    const isBlue = Math.random() < 0.55;
    return {
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.38,
      vy: (Math.random() - 0.5) * 0.38,
      r:  1.2 + Math.random() * 1.8,
      hue: isBlue ? 220 + Math.random() * 25 : 268 + Math.random() * 20,
      alpha: 0.35 + Math.random() * 0.5,
    };
  }

  function init() { resize(); pts = Array.from({length: 88}, mkPt); }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const len = pts.length;

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        const a = pts[i], b = pts[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const d = dx*dx + dy*dy;
        if (d < 18000) {
          const alpha = (1 - d / 18000) * 0.13;
          const g = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          g.addColorStop(0, `hsla(${a.hue},75%,65%,${alpha})`);
          g.addColorStop(1, `hsla(${b.hue},75%,65%,${alpha})`);
          ctx.strokeStyle = g;
          ctx.lineWidth = 0.75;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const p of pts) {
      const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3.5);
      g.addColorStop(0, `hsla(${p.hue},80%,68%,${p.alpha})`);
      g.addColorStop(1, `hsla(${p.hue},80%,68%,0)`);
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * 3.5, 0, Math.PI * 2);
      ctx.fill();

      p.x += p.vx; p.y += p.vy;
      if (p.x < -20) p.x = W + 20;
      if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20;
      if (p.y > H + 20) p.y = -20;
    }

    requestAnimationFrame(draw);
  }

  init();
  draw();
  window.addEventListener('resize', resize);
}

/* ── Hamburger drawer ───────────────────────────────────────── */
function initHamburger() {
  const btn     = document.getElementById('hamburger');
  const drawer  = document.getElementById('drawer');
  const overlay = document.getElementById('drawer-overlay');
  const close   = document.getElementById('drawer-close');
  if (!btn) return;

  function open() {
    drawer.classList.add('open');
    overlay.classList.add('visible');
    btn.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function shut() {
    drawer.classList.remove('open');
    overlay.classList.remove('visible');
    btn.classList.remove('open');
    document.body.style.overflow = '';
  }

  btn.addEventListener('click', () => drawer.classList.contains('open') ? shut() : open());
  close && close.addEventListener('click', shut);
  overlay.addEventListener('click', shut);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') shut(); });
}

/* ── Scroll reveal ──────────────────────────────────────────── */
function initReveal() {
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }),
    { rootMargin: '0px 0px -70px 0px' }
  );
  document.querySelectorAll('.sec').forEach(s => obs.observe(s));
}

/* ── Section nav active highlight ───────────────────────────── */
function initSectionNav() {
  const links = document.querySelectorAll('.section-nav a');
  const obs = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(a => a.classList.remove('active'));
        const a = document.querySelector(`.section-nav a[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    }),
    { rootMargin: '-35% 0px -60% 0px' }
  );
  document.querySelectorAll('.sec[id]').forEach(s => obs.observe(s));
}

/* ── Tool 1 – Triangle Resonance Visualizer ─────────────────── */
function initTriangle() {
  const wrap = document.getElementById('tri-wrap');
  if (!wrap) return;
  const canvas = wrap.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  let W, H, drag = null;

  function size() {
    W = canvas.width  = wrap.offsetWidth;
    H = canvas.height = wrap.offsetHeight;
  }

  const pts = {
    alpha: { x: 0, y: 0, label: 'α Alpha', color: '#5b8fff' },
    beta:  { x: 0, y: 0, label: 'β Beta',  color: '#7c4dff' },
    gamma: { x: 0, y: 0, label: 'γ Gamma', color: '#22d3ee' },
  };

  function reset() {
    size();
    pts.alpha.x = W/2;  pts.alpha.y = 28;
    pts.beta.x  = 36;   pts.beta.y  = H - 36;
    pts.gamma.x = W - 36; pts.gamma.y = H - 36;
    draw();
  }

  function dist(a, b) {
    const dx = pts[a].x - pts[b].x, dy = pts[a].y - pts[b].y;
    return Math.sqrt(dx*dx + dy*dy);
  }

  function centroid() {
    const ks = Object.keys(pts);
    return {
      cx: ks.reduce((s,k) => s + pts[k].x, 0) / 3,
      cy: ks.reduce((s,k) => s + pts[k].y, 0) / 3,
    };
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    const ks = Object.keys(pts);

    // Fill
    ctx.beginPath();
    ctx.moveTo(pts.alpha.x, pts.alpha.y);
    ctx.lineTo(pts.beta.x,  pts.beta.y);
    ctx.lineTo(pts.gamma.x, pts.gamma.y);
    ctx.closePath();
    ctx.fillStyle = 'rgba(91,143,255,0.04)';
    ctx.fill();

    // Edges with gradient + midpoint labels
    const pairs = [['alpha','beta'],['beta','gamma'],['alpha','gamma']];
    pairs.forEach(([a,b]) => {
      const g = ctx.createLinearGradient(pts[a].x, pts[a].y, pts[b].x, pts[b].y);
      g.addColorStop(0, pts[a].color); g.addColorStop(1, pts[b].color);
      ctx.strokeStyle = g; ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(pts[a].x, pts[a].y);
      ctx.lineTo(pts[b].x, pts[b].y);
      ctx.stroke();
      const mx = (pts[a].x + pts[b].x)/2, my = (pts[a].y + pts[b].y)/2;
      ctx.fillStyle = '#4a4e7a'; ctx.font = '10px Courier New';
      ctx.textAlign = 'center';
      ctx.fillText(`${dist(a,b).toFixed(0)}`, mx, my - 7);
    });

    // Centroid glow + dashed spokes
    const {cx, cy} = centroid();
    const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 26);
    cg.addColorStop(0, 'rgba(124,77,255,0.45)');
    cg.addColorStop(1, 'rgba(124,77,255,0)');
    ctx.fillStyle = cg; ctx.beginPath(); ctx.arc(cx, cy, 26, 0, Math.PI*2); ctx.fill();

    ctx.setLineDash([3,5]); ctx.lineWidth = 0.9;
    ks.forEach(k => {
      ctx.strokeStyle = 'rgba(124,77,255,0.22)';
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(pts[k].x, pts[k].y); ctx.stroke();
    });
    ctx.setLineDash([]);

    // Vertex dots + labels
    ks.forEach(k => {
      const p = pts[k];
      ctx.shadowColor = p.color; ctx.shadowBlur = 14;
      ctx.fillStyle = p.color; ctx.beginPath(); ctx.arc(p.x, p.y, 9, 0, Math.PI*2); ctx.fill();
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#dde1f7'; ctx.font = 'bold 11px Segoe UI,sans-serif';
      ctx.textAlign = k === 'gamma' ? 'right' : k === 'beta' ? 'left' : 'center';
      const ox = k === 'gamma' ? -16 : k === 'beta' ? 16 : 0;
      const oy = k === 'alpha' ? -16 : 22;
      ctx.fillText(p.label, p.x + ox, p.y + oy);
    });

    // Update output
    const out = document.getElementById('tri-output');
    if (out) {
      const ab = dist('alpha','beta'), bg = dist('beta','gamma'), ag = dist('alpha','gamma');
      const mx = Math.max(ab,bg,ag), mn = Math.min(ab,bg,ag);
      out.textContent = `α→β: ${ab.toFixed(1)}  β→γ: ${bg.toFixed(1)}  α→γ: ${ag.toFixed(1)}   Max∶Min ratio: ${(mx/mn).toFixed(4)}`;
    }
  }

  function xy(e) {
    const r = canvas.getBoundingClientRect();
    const t = e.touches ? e.touches[0] : e;
    return { x: t.clientX - r.left, y: t.clientY - r.top };
  }
  function onDown(e) {
    const {x,y} = xy(e);
    Object.keys(pts).forEach(k => {
      const dx = pts[k].x - x, dy = pts[k].y - y;
      if (dx*dx + dy*dy < 256) drag = k;
    });
  }
  function onMove(e) {
    if (!drag) return; e.preventDefault();
    const {x,y} = xy(e);
    pts[drag].x = Math.max(10, Math.min(W-10, x));
    pts[drag].y = Math.max(10, Math.min(H-10, y));
    draw();
  }
  function onUp() { drag = null; }

  canvas.addEventListener('mousedown', onDown);
  canvas.addEventListener('mousemove', onMove);
  canvas.addEventListener('mouseup', onUp);
  canvas.addEventListener('touchstart', onDown, {passive:false});
  canvas.addEventListener('touchmove',  onMove, {passive:false});
  canvas.addEventListener('touchend',   onUp);

  reset();
  window.addEventListener('resize', reset);
}

/* ── Tool 2 – Resonance Ratio Calculator ────────────────────── */
function initHarmonyCalc() {
  const btn = document.getElementById('harmony-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const a = parseInt(document.getElementById('harmony-a').value);
    const b = parseInt(document.getElementById('harmony-b').value);
    const out = document.getElementById('harmony-out');
    if (!a || !b || a < 1 || a > 114 || b < 1 || b > 114) {
      out.textContent = 'Enter two atomic numbers between 1 and 114.'; return;
    }
    const ea = ELEMENTS[a], eb = ELEMENTS[b];
    const hi = Math.max(a,b), lo = Math.min(a,b);
    const ratio = (hi/lo).toFixed(6);
    const diff  = hi - lo;
    const harmonics = [
      {r:2,      n:'2∶1  Octave'},
      {r:1.5,    n:'3∶2  Perfect Fifth'},
      {r:1.3333, n:'4∶3  Perfect Fourth'},
      {r:1.25,   n:'5∶4  Major Third'},
      {r:1.2,    n:'6∶5  Minor Third'},
      {r:1.1667, n:'7∶6  Septimal Minor Third'},
      {r:1.125,  n:'8∶7  Septimal Major Second'},
      {r:1.1111, n:'9∶8  Major Whole Tone'},
      {r:1.0667, n:'16∶15 Diatonic Semitone'},
    ];
    let closest = '', minD = Infinity;
    harmonics.forEach(h => { const d = Math.abs(hi/lo - h.r); if (d < minD) { minD=d; closest=h.n; } });

    out.textContent =
`Element A ——  [${a.toString().padStart(3,' ')}] ${ea.sym.padEnd(3,' ')} ${ea.name}
  Role: ${ea.role}

Element B ——  [${b.toString().padStart(3,' ')}] ${eb.sym.padEnd(3,' ')} ${eb.name}
  Role: ${eb.role}

Atomic Ratio:  ${lo}∶${hi}  =  1∶${ratio}
Delta (Δ):     ${diff} atomic units
Nearest Harmonic: ${closest}
Parity Coupling:  ${(a%2===0?'EVEN':'ODD')} + ${(b%2===0?'EVEN':'ODD')} → ${(a%2===b%2?'Matched (stable coupling)':'Mismatched (reactive, energizing)')}`;
  });
}

/* ── Tool 3 – Universal Code Interpreter ────────────────────── */
function initCodeInterpreter() {
  const btn = document.getElementById('code-btn');
  if (btn) {
    btn.addEventListener('click', () => {
      const raw = (document.getElementById('code-input').value || '').trim();
      const out = document.getElementById('code-out');
      if (!raw) { out.textContent = 'Enter one or more atomic numbers (1–114) separated by spaces.'; return; }
      const nums = raw.split(/[\s,]+/).map(Number).filter(n => n >= 1 && n <= 114 && ELEMENTS[n]);
      if (!nums.length) { out.textContent = 'No valid numbers in range 1–114 found.'; return; }

      let txt = '⟨ UNIVERSAL CODE INTERPRETATION ⟩\n\n';
      nums.forEach(n => {
        const el = ELEMENTS[n];
        txt += `[${String(n).padStart(3,' ')}] ${el.sym.padEnd(3,' ')}  ${el.name.padEnd(15,' ')} — ${el.role}\n`;
      });

      if (nums.length > 1) {
        const sum = nums.reduce((s,n)=>s+n,0);
        const avg = (sum/nums.length).toFixed(1);
        const span = Math.max(...nums) - Math.min(...nums);
        txt += `\n⟨ STACK ANALYSIS ⟩\n`;
        txt += `Chain:  ${nums.map(n=>ELEMENTS[n].sym).join(' → ')}\n`;
        txt += `Sum: ${sum}  ·  Avg: ${avg}  ·  Span: ${span}\n`;
        txt += `Parity sequence: ${nums.map(n=>n%2===0?'EVEN':'ODD').join(' → ')}\n`;
        const evens = nums.filter(n=>n%2===0).length;
        txt += `Balance: ${evens} driver(s) / ${nums.length-evens} reactor(s)`;
      }
      out.textContent = txt;
    });
  }

  // Build clickable element grid
  const grid = document.getElementById('el-grid');
  if (!grid) return;
  ELEMENTS.slice(1).forEach((el, i) => {
    const n = i + 1;
    const cell = document.createElement('div');
    cell.className = 'el-cell';
    cell.innerHTML = `<span class="el-num">${n}</span><span class="el-sym">${el.sym}</span><span class="el-name">${el.name.substring(0,6)}</span>`;
    cell.title = `[${n}] ${el.name}: ${el.role}`;
    cell.addEventListener('click', () => {
      const inp = document.getElementById('code-input');
      if (inp) inp.value = (inp.value.trim() + ' ' + n).trim();
      cell.classList.toggle('selected');
    });
    grid.appendChild(cell);
  });
}

/* ── Tool 4 – Nickel Stack Calculator ───────────────────────── */
function initNickelCalc() {
  const btn = document.getElementById('nickel-btn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const war   = parseFloat(document.getElementById('war-n').value)  || 0;
    const std   = parseFloat(document.getElementById('std-n').value)  || 0;
    const stone = parseFloat(document.getElementById('stone-g').value) || 0;
    const out   = document.getElementById('nickel-out');

    if (war <= 0 && std <= 0) { out.textContent = 'Enter at least one nickel count.'; return; }
    const total = war + std;
    const warRatio   = (war > 0 && std > 0) ? `${war}∶${std} = 1∶${(std/war).toFixed(4)}` : 'N/A';
    const stackRatio = (war > 0 && total > 0) ? `${total}∶${war} = ${(total/war).toFixed(4)}∶1` : 'N/A';
    const lensRatio  = (stone > 0 && total > 0) ? `${total}∶${stone.toFixed(2)} = ${(total/stone).toFixed(4)}∶1` : 'N/A';

    const classic = (war === 1 && std === 53);

    out.textContent =
`War Nickels:      ${war}
Standard Nickels: ${std}
Total Stack:      ${total}

War∶Std  ratio:   ${warRatio}
Stack∶War ratio:  ${stackRatio}${stone > 0 ? `\nLensing ratio:    ${lensRatio}` : ''}

Field mode: ${total % 2 === 0 ? 'Even — symmetric (grounded stability)' : 'Odd — asymmetric (dynamic charging)'}${classic ? `

✓ Classic 1+53 pattern:
  54-unit stack → Stack∶War = 54∶1
  War Nickel (35% Ag/Mn/Cu) vs standard (100% Ni-clad)
  Isotopic ratio ≈ 152∶1 by weighted Ni-58/60 average
  → Maximum Ag(47) signal stabilized in Ni(28) field
  → Coupled pair: 28(EVEN driver) + 47(ODD reactor)` : ''}`;
  });
}

/* ── Tool 5 – Atomic Stack Builder ──────────────────────────── */
function initStackBuilder() {
  const pickerGrid = document.getElementById('builder-grid');
  const tray       = document.getElementById('builder-tray');
  const clearBtn   = document.getElementById('builder-clear');
  const outEl      = document.getElementById('builder-out');
  if (!pickerGrid || !tray) return;

  const stack = [];

  function updateOut() {
    if (!stack.length) { outEl.textContent = 'Add elements to the stack above.'; return; }
    const sum   = stack.reduce((s,n)=>s+n,0);
    const evens = stack.filter(n=>n%2===0).length;
    const odds  = stack.length - evens;
    const mn    = Math.min(...stack), mx = Math.max(...stack);
    outEl.textContent =
`Stack:   ${stack.map(n=>ELEMENTS[n].sym).join(' · ')}
Numbers: ${stack.join(' → ')}
Count:   ${stack.length}  |  Sum: ${sum}  |  Avg: ${(sum/stack.length).toFixed(2)}
Max∶Min: ${mx}∶${mn} = ${(mx/mn).toFixed(4)}
Balance: ${evens} EVEN (driver) / ${odds} ODD (reactor)
${evens === odds ? '✓ Perfectly balanced driver-reactor pair' : evens > odds ? '→ Driver-dominant (stable, storage mode)' : '→ Reactor-dominant (active, transduction mode)'}`;
  }

  function addEl(n) {
    stack.push(n);
    const el = ELEMENTS[n];
    const item = document.createElement('div');
    item.className = 'stack-item';
    item.innerHTML = `<span><strong>[${n}] ${el.sym}</strong> — ${el.name}</span><button class="rm">✕</button>`;
    item.querySelector('.rm').addEventListener('click', () => {
      const idx = stack.lastIndexOf(n);
      if (idx >= 0) stack.splice(idx, 1);
      item.remove(); updateOut();
    });
    tray.appendChild(item);
    updateOut();
  }

  ELEMENTS.slice(1).forEach((el, i) => {
    const n = i + 1;
    const cell = document.createElement('div');
    cell.className = 'el-cell';
    cell.innerHTML = `<span class="el-num">${n}</span><span class="el-sym">${el.sym}</span>`;
    cell.title = `[${n}] ${el.name}`;
    cell.addEventListener('click', () => addEl(n));
    pickerGrid.appendChild(cell);
  });

  clearBtn && clearBtn.addEventListener('click', () => {
    stack.length = 0; tray.innerHTML = ''; updateOut();
  });
}

/* ── Boot ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initBgCanvas();
  initHamburger();
  initReveal();
  initSectionNav();
  initTriangle();
  initHarmonyCalc();
  initCodeInterpreter();
  initNickelCalc();
  initStackBuilder();
});
