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

