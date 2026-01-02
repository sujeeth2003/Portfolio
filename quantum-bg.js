const canvas = document.getElementById("quantum");
const ctx = canvas.getContext("2d");

function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
resize();
window.addEventListener("resize", resize);

let cloudMode = null;
window.setQuantumMode = mode => cloudMode = mode;

const center = {x:0, y:0};

const visualElectrons = Array.from({ length: 20 }, (_, i) => ({
  r: 140 + i * 28,
  angle: Math.random() * Math.PI * 2,
  speed: 0.0012 + i * 0.00025
}));

const CLOUD_COUNT = 1400;
const cloud = Array.from({ length: CLOUD_COUNT }, () => ({ x:0, y:0, vx:0, vy:0 }));

function orbitalDensity(x,y,mode) {
  const r = Math.sqrt(x*x+y*y)+0.0001;
  const decay = Math.exp(-r/260);
  switch(mode){
    case "s": return decay;
    case "p_x": return Math.abs(x/r)*decay;
    case "p_y": return Math.abs(y/r)*decay;
    case "d": return Math.abs((x*y)/(r*r))*decay;
    default: return 0;
  }
}

function drawNucleus(){
  const g = ctx.createRadialGradient(center.x,center.y,0,center.x,center.y,100);
  g.addColorStop(0,"rgba(200,230,255,1)");
  g.addColorStop(0.5,"rgba(96,165,250,0.9)");
  g.addColorStop(1,"rgba(30,58,138,0.08)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(center.x,center.y,100,0,Math.PI*2);
  ctx.fill();
}

function drawOrbitElectrons(){
  ctx.strokeStyle="rgba(255,255,255,0.05)";
  visualElectrons.forEach(e=>{
    ctx.beginPath();
    ctx.arc(center.x,center.y,e.r,0,Math.PI*2);
    ctx.stroke();
    e.angle += e.speed * canvas.width * 0.0007;
    const x = center.x + Math.cos(e.angle)*e.r;
    const y = center.y + Math.sin(e.angle)*e.r;
    ctx.fillStyle="#93c5fd";
    ctx.beginPath();
    ctx.arc(x,y,3.2,0,Math.PI*2);
    ctx.fill();
  });
}

function drawElectronCloud(){
  cloud.forEach(p=>{
    const dx=p.x-center.x, dy=p.y-center.y;
    const d=orbitalDensity(dx,dy,cloudMode);
    const flowX=-dy*0.0001, flowY=dx*0.0001;
    p.vx += (flowX + dx*d*-0.00015);
    p.vy += (flowY + dy*d*-0.00015);
    p.vx *= 0.99; p.vy *= 0.99;
    p.x += p.vx; p.y += p.vy;
    const dist = Math.sqrt(dx*dx+dy*dy);
    if(dist>Math.max(canvas.width,canvas.height)){
      const angle = Math.random()*Math.PI*2;
      const r = Math.random()*120;
      p.x=center.x+Math.cos(angle)*r;
      p.y=center.y+Math.sin(angle)*r;
      p.vx=p.vy=0;
    }
    const alpha = Math.min(0.7,d*1.8);
    ctx.fillStyle = `rgba(120,180,255,${alpha})`;
    ctx.beginPath();
    ctx.arc(p.x,p.y,1.6+d*1.6,0,Math.PI*2);
    ctx.fill();
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  center.x=canvas.width/2; center.y=canvas.height/2;
  drawNucleus();
  if(cloudMode) drawElectronCloud();
  else drawOrbitElectrons();
  requestAnimationFrame(animate);
}
animate();
