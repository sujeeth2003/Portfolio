const canvas = document.getElementById("quantum");
const ctx = canvas.getContext("2d");

let hoveredProject = null;
window.setHoveredProject = el => hoveredProject = el;

function resize() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
}
resize();
window.onresize = resize;

// ---- ATOM MODEL PARAMETERS ----
const nucleus = { x: 0, y: 0 };
const electrons = Array.from({ length: 6 }, (_, i) => ({
  radius: 120 + i * 35,
  speed: 0.002 + i * 0.0005,
  angle: Math.random() * Math.PI * 2
}));

let time = 0;

// Electron cloud parameters
const cloudParticles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: (Math.random() - 0.5) * 0.5,
  vy: (Math.random() - 0.5) * 0.5,
  radius: Math.random() * 3 + 1
}));

function drawParticleMode() {
  nucleus.x = canvas.width / 2;
  nucleus.y = canvas.height / 2;

  // Nucleus glow
  const glow = ctx.createRadialGradient(
    nucleus.x, nucleus.y, 0,
    nucleus.x, nucleus.y, 60
  );
  glow.addColorStop(0, "rgba(96,165,250,0.8)");
  glow.addColorStop(1, "rgba(96,165,250,0.05)");

  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(nucleus.x, nucleus.y, 60, 0, Math.PI * 2);
  ctx.fill();

  // Orbits
  ctx.strokeStyle = "rgba(255,255,255,0.05)";
  electrons.forEach(e => {
    ctx.beginPath();
    ctx.arc(nucleus.x, nucleus.y, e.radius, 0, Math.PI * 2);
    ctx.stroke();
  });

  // Electrons
  electrons.forEach(e => {
    e.angle += e.speed * canvas.width;
    const x = nucleus.x + Math.cos(e.angle) * e.radius;
    const y = nucleus.y + Math.sin(e.angle) * e.radius;

    ctx.fillStyle = "#60a5fa";
    ctx.beginPath();
    ctx.arc(x, y, 2.5, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawElectronCloud() {
  if (!hoveredProject) return;

  const rect = hoveredProject.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  cloudParticles.forEach(p => {
    // Move particle slightly around center
    p.vx += (Math.random() - 0.5) * 0.2;
    p.vy += (Math.random() - 0.5) * 0.2;

    p.x += p.vx;
    p.y += p.vy;

    // Pull particles toward center
    p.vx += (centerX - p.x) * 0.002;
    p.vy += (centerY - p.y) * 0.002;

    // Draw particle
    ctx.fillStyle = "rgba(96,165,250,0.25)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawParticleMode();

  if (hoveredProject) {
    drawElectronCloud(); // Cloud around hovered project
  }

  time += 0.02;
  requestAnimationFrame(animate);
}

animate();
