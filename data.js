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

