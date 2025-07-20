/* ══════════════════════════════════════════════════════════════
   SITE CONTENT — edit this file to change what shows up on the
   page. index.html only renders whatever is here; nothing about
   projects, skills, education, or the YouTube credits lives in
   the HTML itself.
════════════════════════════════════════════════════════════════ */

/* ---- site-wide identity & every plain-text string on the page ----
   Change SITE.email once and it updates everywhere (nav, hero,
   contact, footer). Same for name/linkedin/github. Headings,
   button labels, and section intros below are all plain strings -
   edit them directly, no HTML needed. */
const SITE = {
  name:"Sujeeth Sukumar",
  email:"sujeeth@umd.edu",
  linkedin:"https://www.linkedin.com/in/sujeeth73/",
  github:"https://github.com/sujeeth2003",
  calendarLink:"https://calendar.app.google/6z1MAE1pPd1BCqET7",
  footerYear:"2026",

  nav:{ explore:"Explore", contact:"Contact" },

  hero:{
    eyebrow:"M.S. Data Science &middot; University of Maryland",
    title:"Systems that run fast. Models that hold up.",
    desc:"Low-latency C++, RTL hardware, quantitative trading, applied ML, and industrial data systems. One flagship build per field, below.",
  },

  explore:{
    eyebrow:"Explore",
    title:"Pick a field to dive in",
    desc:"One flagship build per track. Click the card in front, or wait for the one you want.",
  },

  /* eyebrow/title shown at the top of each opened field, plus the
     short label used in the nav bar and the hero pills */
  fields:{
    systems:{ nav:"Systems", pill:"Low-Latency Systems", eyebrow:"Arc 1 - Low-Latency Systems", title:"C++, from correct to fast" },
    hardware:{ nav:"Hardware", pill:"RTL &amp; Hardware", eyebrow:"Arc 2 - RTL &amp; Hardware", title:"A CPU, verified the way a real one has to be" },
    quant:{ nav:"Quant", pill:"Quant &amp; Trading", eyebrow:"Arc 3 - Quant &amp; Trading", title:"Regime detection, backtested honestly" },
    ml:{ nav:"ML", pill:"Applied ML", eyebrow:"Arc 4 - Applied ML &amp; GenAI", title:"Reading the paper, then rebuilding the model" },
    data:{ nav:"Data", pill:"Data &amp; Industrial", eyebrow:"Arc 5 - Data Engineering &amp; Industrial Systems", title:"From 100 kHz sensor data to production pipelines" },
  },

  skills:{ eyebrow:"Skills", title:"Technical stack" },
  education:{ eyebrow:"Education", title:"Academic background" },
  learnedFrom:{ eyebrow:"Credit where it's due", title:"YouTube channels I learned from" },

  contact:{
    title:"Let's talk.",
    desc:"Open to internship and new-grad roles across systems, quant, ML, and data engineering.",
  },

  backToExplore:"&larr; Choose a different field",
};

/* ---- deck cards on the "pick a field" selector ---- */
const DECK = [
  { field:"systems",  title:"Low-Latency Systems",   desc:"C++ matching engine, tuned version by version.",        thumb:"assets/thumb-systems.svg" },
  { field:"hardware", title:"RTL & Hardware",         desc:"A pipelined RISC-V CPU, verified in UVM.",               thumb:"assets/thumb-hardware.svg" },
  { field:"quant",    title:"Quant & Trading",        desc:"Regime detection, backtested honestly.",                thumb:"assets/thumb-quant.svg" },
  { field:"ml",       title:"Applied ML & GenAI",     desc:"A DeepSeek-style LLM, built from scratch.",              thumb:"assets/thumb-ml.svg" },
  { field:"data",     title:"Data & Industrial",      desc:"100 kHz sensor data to production pipelines.",          thumb:"assets/thumb-data.svg" },
];

/* ---- flagship project per field ---- */
const FLAGSHIPS = {
  systems: {
    title:"Limit Order Book &amp; Matching Engine",
    lede:"A price-time-priority matching engine taken from a correct-but-slow <code>std::map</code> baseline to a cache-aware, branchless, SIMD-accelerated, single-writer design.",
    stats:[ {value:"6",label:"versions benchmarked"}, {value:"AVX2",label:"SIMD quantity summation"}, {value:"0",label:"runtime locks in v5+"} ],
    bullets:[
      "<strong>v1&rarr;v2:</strong> Replaced the tree-walk book with flat array price levels and a preallocated order pool, cutting cache misses confirmed via <code>perf stat</code>.",
      "<strong>v3:</strong> Replaced data-dependent branches in the matching loop with branchless constructs, verified in generated assembly and via <code>perf stat -e branches,branch-misses</code>.",
      "<strong>v4:</strong> Summed resting-order quantities 4-at-a-time with AVX2 intrinsics, then benchmarked the actual scalar/SIMD crossover point instead of assuming SIMD always wins.",
      "<strong>v5:</strong> Gave one matching thread exclusive lock-free ownership of the book; client threads push into per-connection SPSC rings it polls.",
    ],
    stack:["C++","Atomics","AVX2","Lock-free design","perf / perf c2c"],
    linkText:"View on GitHub &#8599;", linkHref:"https://github.com/sujeeth2003",
  },
  hardware: {
    title:"5-Stage Pipelined RISC-V CPU + UVM Verification",
    lede:"A fetch &rarr; decode &rarr; execute &rarr; memory &rarr; writeback RISC-V-lite pipeline in SystemVerilog, hardened with hazard forwarding, a CDC bridge, and a full UVM regression.",
    stats:[ {value:"100+",label:"random test regression"}, {value:"0",label:"scoreboard mismatches"}, {value:"&gt;90%",label:"functional coverage"} ],
    bullets:[
      "<strong>Hazards:</strong> Forwarding unit (EX/MEM and MEM/WB &rarr; EX) plus stall and branch-flush logic, verified against a hand-built EX-EX / MEM-EX / load-use hazard truth table.",
      "<strong>Verification:</strong> Full UVM environment (driver, monitor, sequencer, scoreboard, agent) driving instruction sequences against a reference model.",
      "<strong>Formal:</strong> Proved FIFO/arbiter ordering properties with SymbiYosys, catching a corner case the UVM random regression had missed.",
      "<strong>I/O:</strong> AXI-Lite slave with VALID/READY handshake logic, protocol-checked with SystemVerilog assertions.",
    ],
    stack:["SystemVerilog","UVM","SVA","SymbiYosys","AXI-Lite"],
    linkText:"View on GitHub &#8599;", linkHref:"https://github.com/sujeeth2003",
  },
  quant: {
    title:"Algorithmic Trading &amp; Portfolio Optimization",
    lede:"A from-scratch 2-state Gaussian HMM for market regime detection, benchmarked against momentum, mean-reversion, and buy-and-hold under realistic frictions.",
    stats:[ {value:"12%",label:"annualized return"}, {value:"504-day",label:"rolling training window"}, {value:"155th",label:"IMC Prosperity 4, Rd. 1 manual trading"} ],
