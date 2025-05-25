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
