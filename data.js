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
    bullets:[
      "<strong>Regime model:</strong> Built the 2-state Gaussian HMM from scratch using the Forward-Backward algorithm and EM-style parameter updates.",
      "<strong>Benchmarks:</strong> Compared against Moving Average Momentum, Statistical Mean Reversion, and a Buy-and-Hold baseline.",
      "<strong>Realism:</strong> Incorporated transaction costs and slippage directly into the walk-forward backtest, not as an after-the-fact adjustment.",
      "<strong>Data:</strong> Automated ingestion via the Polygon API across SPY, QQQ, and AAPL.",
    ],
    stack:["Python","Gaussian HMM","Walk-forward CV","Polygon API"],
    linkText:"View on GitHub &#8599;", linkHref:"https://github.com/sujeeth2003",
  },
  ml: {
    title:"Building DeepSeek LLM From Scratch",
    lede:"A tested PyTorch implementation of the architecture, scaling laws, training loop, and alignment stages from the DeepSeek LLM paper (Bi et al., 2024).",
    stats:[ {value:"3.37&rarr;0.02",label:"loss over 250 steps"}, {value:"ln(2)",label:"DPO loss at init, as required"}, {value:"6.49B",label:"param count matched to paper's 7B config"} ],
    bullets:[
      "<strong>Architecture:</strong> RMSNorm, RoPE, SwiGLU feed-forward, and Grouped-Query Attention (64 query heads sharing 8 KV heads), verified against the paper's published parameter counts using meta-device instantiation.",
      "<strong>Scaling laws:</strong> Implemented the paper's FLOPs-per-token formula and IsoFLOP allocation method, checked against its Table 3 and Figure 4 reference values.",
      "<strong>Training:</strong> 3-stage LR schedule, AdamW, gradient clipping, and mixed precision, verified end-to-end on a small model.",
      "<strong>Alignment:</strong> SFT with response-span-masked cross-entropy, plus DPO, confirmed correct by checking the loss equals ln(2) when the policy equals the reference model.",
    ],
    stack:["PyTorch","RoPE / GQA","SFT + DPO","Mixed precision"],
    linkText:"View on GitHub &#8599;", linkHref:"https://github.com/sujeeth2003",
  },
  data: {
    title:"Anomaly Detection on Aerospace Telemetry, Gantner Instruments",
    lede:"A real-time ML pipeline over PLC/DAQ sensor channels during ISRO liquid-propulsion thruster test-stand runs, built end-to-end from wiring to inference.",
    stats:[ {value:"50+",label:"simultaneous sensor channels"}, {value:"100 kHz",label:"24-bit ADC sampling"}, {value:"48 hr",label:"continuous burn-test logging"} ],
    bullets:[
      "<strong>Instrumentation:</strong> Designed and installed Siemens (TIA Portal) and Rockwell (Studio 5000, HSC blocks) PLC control with safety cutoff logic for 5N/10N thruster benches, wired via AutoCAD-designed panels.",
      "<strong>Data path:</strong> Modbus master/slave networking, NTP time sync, and RS-232 DAQ links engineered to sustain full 100 kHz event-triggered logging over Gantner's GI-Bench protocol.",
      "<strong>Models:</strong> Trained Isolation Forest and LSTM autoencoders on extracted time-series features to catch failures before they happened, implemented in LabVIEW compiled to native x86.",
      "<strong>Tooling:</strong> Built a custom desktop app for live FFT/filter analysis, manual device control, and bidirectional Modbus communication with the PLCs.",
    ],
    stack:["LabVIEW","Isolation Forest","LSTM Autoencoder","PLC / Modbus"],
    linkText:"Ask for a walkthrough", linkHref:"mailto:sujeeth@umd.edu",
  },
};

/* ---- secondary projects per field, rendered below the flagship ---- */
const FIELD_PROJECTS = {

  systems: [
    { year:"2025", title:"Multi-Producer Market Data Feed Handler", teaser:"UDP feed handler optimized across six versions from a mutex queue to kernel-bypass, core-pinned ingestion.", tags:["C++","Atomics","AF_PACKET","Kernel Bypass"], bullets:[
      "v1&rarr;v2: Diagnosed futex sleep/wake round-trips as the tail-latency bottleneck, replaced with a lock-free SPSC ring buffer using memory_order_release/acquire.",
      "v3: Found false sharing between head/tail atomics with perf c2c cache-to-cache profiling, fixed with alignas(64) padding.",
      "v4: Gave each producer its own SPSC ring instead of a CAS-based MPSC queue, avoiding the ABA problem entirely.",
      "v5-v6: Kernel-bypass via AF_PACKET/PACKET_MMAP, then core pinning, isolated CPUs, and huge pages to cut TLB misses."
    ]},
    { year:"2025", title:"Custom Low-Overhead Latency Tracing Tool", teaser:"RDTSC-based, per-thread tracer built to measure the feed handler and matching engine at nanosecond granularity.", tags:["C++","RDTSC","thread_local","NIC Timestamping"], bullets:[
      "Replaced std::chrono and string labels with the RDTSC hardware cycle counter and integer IDs, cutting per-call overhead to single-digit nanoseconds.",
      "Gave each thread its own trace buffer to remove false sharing, merging and sorting off the hot path at shutdown.",
      "Correlated NIC hardware packet-arrival timestamps (SO_TIMESTAMPING) against application-level traces to isolate true wire-to-application latency.",
      "Quantified tracer overhead against perf and VTune with a concrete ns/iteration comparison."
    ]},
  ],

  hardware: [
    { year:"2024", title:"Verilog Compiler with AST Generation & Schematic Synthesis", teaser:"A C++ compiler for a subset of Verilog: lexer, parser, AST, gate-level netlist, and automatic circuit visualization.", tags:["C++","Compilers","AST","Graphviz"], bullets:[
      "Built a lexer and recursive-descent parser with operator precedence, constructing an AST for Verilog modules and expressions.",
      "Compiled the AST into a gate-level netlist (AND, OR, XOR, NOT, ADD, SUB) with temporary net generation.",
      "Generated Graphviz DOT output and rendered digital circuit schematics automatically to SVG.",
      "Modularized into independent lexing, parsing, AST, netlist, and schematic stages with exception-based error diagnostics."
    ]},
    { year:"2024", title:"Constrained-Random &amp; Formal Verification Suite", teaser:"SystemVerilog OOP testbenches with functional coverage, plus formal proofs on a FIFO/arbiter block.", tags:["SystemVerilog","UVM","Formal","Coverage"], bullets:[
      "Rebuilt ALU/FIFO testbenches as class-based, constrained-random environments with a self-checking scoreboard and functional coverage.",
      "Achieved over 90% coverage on defined coverpoints; random testing surfaced bugs directed tests had missed.",
      "Wrote and proved formal properties (ordering, mutual exclusion of full/empty) for a FIFO/arbiter with SymbiYosys."
    ]},
  ],

  quant: [],

  ml: [
    { year:"2026", title:"Eureka — Research Lineage Intelligence Platform", teaser:"Relational system modeling intellectual lineage and industry adoption of research ideas in a normalized 3NF schema.", tags:["SQLite","SQL","Graph Analytics"], bullets:[
      "Engineered a 5-entity normalized schema: Mentors, Authors, Papers (self-referential lineage), PaperAuthors, CompanyAdoption.",
      "Modeled intellectual ancestry via self-join foreign keys, with SQL analytics for mentor productivity and industry adoption.",
      "Outlined a graph extension for centrality and community detection as a scaling path to PostgreSQL."
    ]},
    { year:"2025", title:"Multi-Agent Analytics Orchestration Platform", teaser:"Planner/Retriever/Executor/Critic agents on LangGraph with concurrent execution via Ray and Redis.", tags:["LangGraph","Ray","Redis","FastAPI"], bullets:[
      "Orchestrated four agent roles with vector-based memory workflows.",
      "Enabled concurrent execution across agents using Ray and Redis, monitoring latency and failure rates.",
      "Containerized inference services with FastAPI and Docker for modular deployment."
    ]},
    { year:"2025", title:"Anime Recommendation System", teaser:"Hybrid ALS collaborative filtering and TF-IDF content embeddings over 73k users x 12k items.", tags:["ALS","TF-IDF","Sparse Matrices"], bullets:[
      "Processed 73k users by 12k items into sparse implicit-feedback interaction matrices.",
      "Trained ALS-based collaborative filtering, reducing RMSE by 38% over a popularity baseline.",
      "Integrated TF-IDF content embeddings into hybrid scoring, evaluated with Precision@K and Recall@K."
    ]},
  ],

  data: [
    { year:"2025", title:"AWS Data Pipeline (S3 / Athena / Lambda / Step Functions)", teaser:"End-to-end AWS pipeline with least-privilege IAM roles scoped per function.", tags:["AWS","Boto3","Step Functions","IAM"], bullets:[
      "Built an S3-to-Athena pipeline with Boto3 for refining data and Lambda triggered automatically on new S3 objects.",
      "Orchestrated the pipeline end-to-end with AWS Step Functions.",
      "Scoped each function to its own least-privilege IAM role instead of a shared broad-access role."
    ]},
    { year:"2025", title:"Healthcare Data &amp; RAG Pipeline, MedLaunch Concepts", teaser:"Hierarchical JSON database of hospital coding standards feeding a customer-facing RAG chatbot.", tags:["ETL","AWS S3","MongoDB","Redis"], bullets:[
      "Extracted DMV and state hospital-code standards into a hierarchical JSON schema with ancestry structure for faster grouping and lower query latency.",
      "Built an ETL pipeline from source extraction through JSON schema generation into AWS S3, feeding an LLM/RAG system.",
      "Set up MongoDB for flexible access patterns and Redis for caching hot queries, optimizing SQL for a filtering page that needed to feel instant."
    ]},
    { year:"2025", title:"Time-Series Anomaly Detection, Industrial Sensor Data", teaser:"Unsupervised and supervised anomaly detection on multivariate industrial sensor streams.", tags:["Isolation Forest","LSTM Autoencoder","Feature Engineering"], bullets:[
      "Engineered rolling statistical and frequency-domain features from multivariate sensor streams.",
      "Trained Isolation Forest and LSTM autoencoder models for operational monitoring.",
      "Evaluated against false-positive rate and detection latency to reflect real production constraints."
    ]},
  ],
};

/* ---- technical skills grid ---- */
const SKILLS = [
  { label:"Systems / Low-Latency", items:"C++, atomics, lock-free structures, AVX2, kernel bypass, core pinning" },
  { label:"RTL / Hardware",        items:"SystemVerilog, UVM, SVA, formal verification, AXI-Lite, CDC" },
  { label:"Quant / Finance",       items:"HMM regime detection, backtesting, walk-forward validation, Python" },
  { label:"Deep Learning",         items:"PyTorch, TensorFlow, Hugging Face, transformer architectures" },
  { label:"LLM Systems",           items:"LangChain, LangGraph, RAG, prompt engineering" },
  { label:"Data Engineering",      items:"AWS (S3, Lambda, Athena, Step Functions), PostgreSQL, MongoDB, Redis" },
  { label:"Industrial Systems",    items:"PLC programming (Siemens, Rockwell), SCADA/HMI, DAQ, sensors" },
  { label:"Languages",             items:"Python, C++, SQL, MATLAB, Embedded C, Verilog/SystemVerilog" },
];

/* ---- education ---- */
const EDUCATION = [
  { school:"University of Maryland, College Park", degree:"M.S. in Data Science", meta:"2025 - 2027", place:"College Park, MD" },
  { school:"Anna University", degree:"B.E. in Electronics & Instrumentation", meta:"2020 - 2024", place:"Chennai, India" },
];

/* ---- YouTube channels credited as learning sources ----
   Add {name, url, thumb} per channel. thumb is optional — paste a
   direct image URL (e.g. the channel's avatar image URL) and it
   will render next to the name; leave it out and it's just a pill. */
const YT_CHANNELS = [
  { name:"Ben Eater",   url:"https://youtube.com/playlist?list=PLowKtXNTBypGqImE405J2565dvjafglHU&si=kxeag1LRDNLbxiN3", thumb:"https://yt3.googleusercontent.com/ytc/AIdro_kzQ9Fabth3QHyk1YLRHA62goVPgxJdd68G0CPIs0tU3A=s160-c-k-c0x00ffffff-no-rj" },
  { name:"3blue1brown",   url:"https://www.youtube.com/@3blue1brown", thumb:"https://yt3.googleusercontent.com/ytc/AIdro_nFzZFPLxPZRHcE3SSwzdrbuWqfoWYwLAu0_2iO6blQYAU=s160-c-k-c0x00ffffff-no-rj" },
  { name:"C++ Talks - Low-Latency Related", url:"https://www.youtube.com/playlist?list=PLrR3oTpJZ9TguAl26k7C1f8uWLPZv27BK", thumb:"https://i.ytimg.com/vi/nX5CXx1gdEg/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLAzn-LFEctZTxTd7tBzK2DFMpBEsw" },
];
