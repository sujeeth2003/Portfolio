const projects = [
  {
    title: "AI Finance Spending Assistant",
    short: "Interactive AI system for spending analysis.",
    long: `
An end-to-end AI-powered finance assistant that analyzes user expenses,
detects patterns, and generates actionable insights using LLM reasoning.
Includes a live interactive demo with editable inputs.
`,
    github: "https://github.com/yourusername/finance-ai",
    cloud: "s"
  },
  {
    title: "Reinforcement Learning DC Motor Control",
    short: "RL agent controlling a real motor.",
    long: `
Designed a reinforcement learning environment, trained an agent in simulation,
and deployed it to control a real-world DC motor with adaptive control behavior.
`,
    github: "https://github.com/yourusername/rl-motor",
    cloud: "p_x"
  },
  {
    title: "AI Image Classification",
    short: "CNN-based vision system.",
    long: `
Built and evaluated deep learning pipelines for image classification with
a focus on generalization, evaluation metrics, and dataset bias handling.
`,
    github: "https://github.com/yourusername/image-classification",
    cloud: "p_y"
  },
  {
    title: "Medical Pulse Signal Analysis",
    short: "Clinical waveform intelligence.",
    long: `
Collected and analyzed pulse signals from diverse subjects to extract
physiological patterns across age and health conditions.
`,
    github: "https://github.com/yourusername/pulse-analysis",
    cloud: "d"
  }
];

const container = document.getElementById("projects");

projects.forEach((p, idx) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.dataset.cloud = p.cloud;
  card.dataset.github = p.github;
  card.dataset.clicked = "false";

  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.short}</p>
    <div class="project-long">${p.long}</div>
  `;

  card.addEventListener("mouseenter", () => {
    window.setQuantumMode(p.cloud);
  });

  card.addEventListener("mouseleave", () => {
    window.setQuantumMode(null);
  });

  card.addEventListener("click", () => {
    if (card.dataset.clicked === "false") {
      card.dataset.clicked = "true";
      card.classList.add("expanded");
    } else {
      window.open(p.github, "_blank");
    }
  });

  container.appendChild(card);
});
