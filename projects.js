/* ══════════════════════════════════════════════════════════════
   PORTFOLIO DATA
   To add a new project: copy an object in PROJECTS, fill in the
   fields, and drop it in. No other file needs to change.

   Project fields:
     year      - "2026" etc.
     title     - project name
     teaser    - one sentence, shown on the collapsed card
     tags      - array of short tech/topic tags
     bullets   - array of detail bullets (revealed on hover/click),
                 <strong> allowed for emphasis
     repo      - (optional) GitHub URL. Omit if not pushed yet —
                 the card will show "code coming soon" instead.
     status    - (optional) "In Progress" badge text; omit if finished.
════════════════════════════════════════════════════════════════ */

const EXPERIENCE = [
  {
    role: "Data Engineer Intern",
    org: "MedLaunch Concepts",
    period: "2025 — Present",
    sections: [
      { label: "Healthcare Data & RAG Pipelines", bullets: [
        "Extracting DMV and state hospital-code standards into a hierarchical JSON database; ancestry structure enables faster grouping and lower query latency for a customer-facing RAG chatbot.",
        "Built an ETL pipeline: source extraction → JSON schema generation → load into <strong>AWS S3</strong>, feeding an LLM/RAG system for medical-record context retrieval.",
        "Wrote and optimized SQL queries with preloading strategies to make a user-facing filtering page feel instant.",
        "Set up <strong>MongoDB</strong> for flexible access patterns and <strong>Redis</strong> for caching hot queries."
      ]}
    ]
  },
  {
    role: "Data Systems Engineer — Industrial DAQ/PLC & Applied ML",
    org: "Gantner Instruments · Chennai, India",
    period: "2024 — 2025",
    sections: [
      { label: "Aerospace Test-Stand Instrumentation (ISRO Liquid Propulsion Lab)", bullets: [
        "Designed and installed <strong>Siemens (TIA Portal)</strong> and <strong>Rockwell (Studio 5000)</strong> PLC control systems — including High-Speed Counter (HSC) blocks — plus safety PLCs with voltage/current cutoff logic, for 5N and 10N thruster test benches.",
        "Wired and commissioned Gantner DAQ systems sampling <strong>100 kHz / 24-bit ADC</strong> across MEMS, thermistor, pressure, and strain-gauge sensors via barrier relays and Amphenol connectors.",
        "Built the communications backbone: Modbus master/slave device networking, NTP time sync, RS-232 DAQ links, and event-triggered logging — engineered the full data path to sustain full 100 kHz logging using Gantner's GI-Bench protocol.",
        "Authored ladder logic and structured-text control for VFD-driven DC motors, solenoid valves, MOVs, and FPVs integrated with existing ISRO satellite sensor/control hardware.",
        "Used <strong>AutoCAD</strong> for electrical wiring, PLC/DAQ panel layout, power and heat-dissipation calculations, and server-rack design.",
        "Ran 48-hour continuous burn tests across 100+ sensors; performed on-site installation, grounding, and maintenance across industrial sites, including nights/weekends to hit test deadlines.",
        "Built a custom desktop app for live time-series visualization, FFT/filter analysis on selected data windows, manual device control, and bidirectional Modbus communication with PLCs."
      ]},
      { label: "Anomaly Detection on Aerospace Telemetry", bullets: [
        "Built a real-time ML pipeline processing 50+ simultaneous PLC/DAQ sensor channels during satellite subsystem tests.",
        "Extracted time-series features from 100 kHz sensor signals; trained <strong>Isolation Forest</strong> and <strong>LSTM autoencoder</strong> models to catch failures before they happened.",
        "Implemented in <strong>LabVIEW (G)</strong>, compiled to native x86, exploiting full CPU clock cycles for real-time inference.",
        "Used a proprietary low-latency protocol to fuse multiple master/slave data streams at sub-millisecond latency for real-time decisioning."
      ]},
      { label: "Data Infrastructure & ML Tooling", bullets: [
        "Built an <strong>AWS</strong> data pipeline (S3, Lambda, Athena, Boto3, Step Functions) with least-privilege IAM roles per function.",
        "Configured a Windows Server as a long-term data lake — time sync and directory structure designed for process identification and retrieval.",
        "Used the <strong>KDB/kdb+</strong> ML toolkit to prototype anomaly-detection models over tick-style time-series data."
      ]}
    ]
  },
  {
    role: "Machine Learning Research Intern",
    org: "NIT Calicut · India",
    period: "2023",
    sections: [
      { label: "Reinforcement Learning & Control", bullets: [
        "Trained RL agents in simulation and deployed learned policies to real-world control systems.",
        "Reduced steady-state control error by <strong>17%</strong> through iterative environment modeling and policy evaluation.",
        "Assisted in experiment design, data preprocessing, and metric-driven evaluation on hardware-in-the-loop setups."
      ]}
    ]
  }
];

const PROJECTS = [
  { year:"2026", status:"In Progress", title:"Eureka — Idea Lineage Graph", teaser:"Ingests research papers and builds a lineage graph — each node holds the idea it built on and what it disproved.", tags:["NLP","Graph","Embeddings","Clustering"], bullets:[
    "Analyzes papers, orders them chronologically, and models the transformation between one idea and the next — the same way the gold-foil experiment disproving the plum-pudding model led to the Bohr model.",
    "Extracts and clusters ideas from paper text/citations to place each paper into an intellectual 'chain'.",
    "Goal: a navigable map that lets a new researcher see where a line of thought came from and where it's headed.",
    "Builds on an earlier normalized-SQL version of this idea (see 'Eureka — Research Lineage Intelligence Platform')."
  ]},
  { year:"2026", status:"In Progress", title:"Sparse Autoencoder for LLM Hidden-State Features", teaser:"Trains a sparse autoencoder over LLM hidden states to extract interpretable, monosemantic features.", tags:["PyTorch","Interpretability","SAE","LLM"], bullets:[
    "Captures hidden-state activations from a transformer's residual stream during inference.",
    "Trains a sparse autoencoder (L1-regularized reconstruction) to decompose dense activations into sparse, more interpretable feature directions.",
    "Aimed at surfacing individual semantic/behavioral features buried in superposition inside the hidden state."
  ]},
  { year:"2026", title:"Algorithmic Trading & Portfolio Optimization", teaser:"Walk-forward backtesting achieving 12% annual return with a Gaussian Hidden Markov Model for regime detection.", tags:["Python","HMM","Quant Finance","Time-Series"], bullets:[
    "Built automated market data ingestion via Polygon API for SPY, QQQ, AAPL with rolling 2-year walk-forward windows.",
    "Implemented Moving Average Momentum, Mean Reversion, and a <strong>Gaussian HMM from scratch</strong> (Forward-Backward + EM) for bull/bear classification.",
    "Incorporated transaction costs (0.1%) and slippage (0.05%) for realistic capital evolution.",
    "<strong>12% annualized return</strong> with controlled drawdown and competitive Sharpe vs. buy-and-hold benchmark."
  ]},
  { year:"2025", title:"Multi-Agent Analytics Orchestration Platform", teaser:"Scalable Planner/Retriever/Executor/Critic system using LangGraph, Ray, Redis, FastAPI, and Docker.", tags:["LangGraph","Ray","Redis","FastAPI","Docker"], bullets:[
    "Orchestrated agents using LangGraph with vector-based memory workflows.",
    "Enabled concurrent execution via Ray and Redis; monitored latency and failure rates.",
    "Containerized inference services with FastAPI and Docker for modular deployment."
  ]},
  { year:"2026", title:"Eureka — Research Lineage Intelligence Platform", teaser:"Relational system modeling intellectual lineage, mentorship influence, and industry adoption in normalized 3NF schema.", tags:["SQLite","SQL","Graph Analytics","3NF"], bullets:[
    "Engineered 5-entity normalized schema (3NF): Mentors, Authors, Papers, PaperAuthors, CompanyAdoption.",
    "Self-referential paper derivation for intellectual ancestry modeling via self-join foreign key.",
    "Advanced SQL analytics: mentor productivity, avg citations by field, industry adoption, intellectual lineage.",
    "Outlined graph extension: centrality, community detection, logistic regression adoption prediction."
  ]},
  { year:"2025", title:"Anime Recommendation System", teaser:"Hybrid engine: ALS collaborative filtering + TF-IDF content embeddings over 73k users × 12k items. 38% RMSE reduction.", tags:["ALS","TF-IDF","Collaborative Filtering","Sparse Matrices"], bullets:[
    "Processed 73k users × 12k items into sparse implicit-feedback interaction matrices.",
    "Trained ALS-based CF; achieved <strong>38% RMSE reduction</strong> over popularity baseline.",
    "Integrated TF-IDF content embeddings (genres, metadata) into hybrid scoring.",
    "Evaluated using Precision@K and Recall@K; modularized for scalable experimentation."
  ]},
  { year:"2025", title:"User Engagement & Retention Modeling", teaser:"ML analytics over 70k+ MyAnimeList users — K-Means segmentation and Gradient Boosting model (ROC-AUC ≈ 0.87).", tags:["Gradient Boosting","K-Means","Cohort Analysis","Feature Eng"], bullets:[
    "Designed time-based cohort analysis for onboarding and long-term engagement phases.",
    "Engineered completion rate, interaction intensity, temporal consistency, and content diversity features.",
    "Applied K-Means clustering to segment users into interpretable behavioral cohorts.",
    "Gradient Boosting retention model: <strong>ROC-AUC ≈ 0.87</strong>."
  ]},
  { year:"2025", title:"Remaining Useful Life Prediction", teaser:"Predictive maintenance on NASA Turbofan dataset — LSTM, RF, Gradient Boosting achieving RMSE ≈ 13 cycles.", tags:["LSTM","Predictive Maintenance","Time-Series","PyTorch"], bullets:[
    "Cleaned time-series data from 100+ engines across multiple operating cycles.",
    "Engineered rolling-window degradation features and health indicators for lifecycle modeling.",
    "Trained RF, Gradient Boosting, and LSTM models; achieved <strong>RMSE ≈ 13 cycles</strong>.",
    "Validated using MAE and early-warning reliability metrics for maintenance decision support."
  ]},
  { year:"2025", title:"AI Image Generator Classification", teaser:"End-to-end pipeline classifying AI images by source model (SD 1.5, SDXL-Turbo, PixArt) via handcrafted visual features.", tags:["PyTorch","OpenCV","scikit-image","Random Forest"], bullets:[
    "Generated labeled dataset using DiffusionPipeline with multiple prompts and controlled inference steps.",
    "Feature pipeline: RGB/HSV stats, Laplacian sharpness, Sobel edge strength, FFT energy, entropy, brightness, contrast.",
    "Trained Random Forest (300 trees) to predict generator model from handcrafted features.",
    "Designed reproducible Colab workflow with dataset export, CSV feature table, stratified split."
  ]},
  { year:"2025", title:"Real vs AI Image Classification", teaser:"XGBoost classifier on 15k+ images detecting AI-generated imagery with 92% test accuracy.", tags:["XGBoost","OpenCV","Computer Vision","Feature Eng"], bullets:[
    "Extracted RGB statistics, sharpness, contrast, and texture features from 15k+ images.",
    "Trained RF and XGBoost classifiers achieving <strong>92% test accuracy</strong>.",
    "Confusion-matrix-driven error analysis to improve robustness across generators."
  ]},
  { year:"2025", title:"SmartSpend AI — Financial Analytics", teaser:"LLM-assisted tool with merchant categorization, expense clustering, and natural-language spending insights.", tags:["LLM","LangChain","Pandas","NLP"], bullets:[
    "Automated merchant categorization and expense clustering using Pandas and rule-based NLP.",
    "Integrated LLM reasoning to generate natural-language insights from tabular spending data.",
    "Built reproducible batch pipelines for monthly trend analysis, reporting, and visualization."
  ]},
  { year:"2025", title:"DCGAN — Image Generation", teaser:"Deep Convolutional GAN from scratch in PyTorch — ConvTranspose2D, BatchNorm, LeakyReLU — 1000 epochs on MNIST.", tags:["PyTorch","GAN","Deep Learning","MNIST"], bullets:[
    "Implemented Generator + Discriminator from scratch using ConvTranspose2D, BatchNorm, LeakyReLU.",
    "Trained with adversarial BCE loss, alternating optimization, and careful label handling.",
    "Applied weight initialization (Normal σ=0.02), Adam (β₁=0.5), and latent-space sampling best practices.",
    "Monitored loss balance and visual sample quality across 1000 epochs on GPU."
  ]},
  { year:"2025", title:"Time-Series Anomaly Detection", teaser:"Unsupervised + supervised anomaly detection on industrial multivariate sensor data, optimized for false-positive rate and detection latency.", tags:["Isolation Forest","LSTM Autoencoder","Feature Eng","AWS"], bullets:[
    "Engineered rolling statistical and frequency-domain features from multivariate sensor streams.",
    "Trained Isolation Forest and LSTM autoencoder for operational monitoring.",
    "Evaluation designed around false-positive rate and detection latency to reflect production constraints."
  ]},
  { year:"2026", title:"Data-Driven Portfolio Optimization", teaser:"Optimized portfolio site via Google Analytics behavioral data — bounce rate reduction and A/B content iterations.", tags:["Google Analytics","UX Optimization","A/B Testing"], bullets:[
    "Implemented GA tracking for session duration, bounce rate, click-through paths, and device segmentation.",
    "Analyzed user flow, scroll depth, and interaction metrics to identify drop-off and friction.",
    "Restructured project ordering, improved CTA placement, optimized layout from engagement heat patterns.",
    "Tested section ordering and headline structures to maximize GitHub/LinkedIn click-through."
  ]}
];
