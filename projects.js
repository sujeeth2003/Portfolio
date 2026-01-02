const projects = [
  {
    title: "AI Finance Spending Assistant",
    short: "Interactive AI system for spending analysis.",
    long: `An end-to-end AI-powered finance assistant that analyzes user expenses,
detects patterns, and generates actionable insights using LLM reasoning.
Includes a live interactive demo with editable inputs.`,
    github: "https://github.com/sujeeth2003/Spending-Assistant",
    cloud: "s"
  },
  {
    title: "Fraud Detection System",
    short: "Random forest classifier for fraud detection",
    long: `This project demonstrates a fraud detection pipeline for financial transactions using machine learning.
It generates synthetic data, preprocesses it, trains a model, and evaluates fraud classification performance. I used Random forest to classify fraduantal transactions`,
    github: "https://github.com/sujeeth2003/Fraud-Detection",
    cloud: "p_x"
  },
  {
    title: "AI Image Classification",
    short: "CNN-based vision system.",
    long: `Built and evaluated deep learning pipelines for image classification with
a focus on generalization, evaluation metrics, and dataset bias handling.`,
    github: "https://github.com/sujeeth2003/AI_Classifier",
    cloud: "p_y"
  },
  {
    title: "Real vs AI image classifier",
    short: "Probability of an image being real or ai generated using kaggle dataset",
    long: `used kaggle dataset to train a model on identifying real and ai images and deployed the model in hugging face as a website.`,
    github: "https://huggingface.co/spaces/sujeeth73/Real_vs_AI_image",
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

  card.addEventListener("mouseenter", () => window.setQuantumMode(p.cloud));
  card.addEventListener("mouseleave", () => window.setQuantumMode(null));
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
