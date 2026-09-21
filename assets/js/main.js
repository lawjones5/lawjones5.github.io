// Data store for posts
const DEFAULT_POSTS = [
  {
    id: "chapsim2-mhd",
    title: "MHD DNS in Liquid Metal Fusion Breeder Blankets using CHAPsim2",
    category: "projects",
    date: "2024-05-15",
    summary: "Investigating magnetohydrodynamic (MHD) turbulence and duct flow phenomena in liquid metal breeder blankets using the high-fidelity DNS code CHAPsim2.",
    tags: ["MHD", "CHAPsim2", "Liquid Metals", "DNS", "Fusion"],
    file: "content/projects/chapsim2-mhd.md"
  },
  {
    id: "sco2-power-cycles",
    title: "Supercritical CO2 (sCO2) Power Cycles for Fusion Energy Systems",
    category: "projects",
    date: "2024-04-10",
    summary: "Exploring Brayton cycle architectures utilizing supercritical carbon dioxide (sCO2) for balance-of-plant heat conversion in fusion reactors.",
    tags: ["sCO2", "Power Cycles", "Thermodynamics", "Fusion BOP"],
    file: "content/projects/sco2-power-cycles.md"
  },
  {
    id: "dns-liquid-metal-mhd",
    title: "Direct Numerical Simulation of Turbulent Liquid Metal Flow in Rectangular Ducts under Transverse Magnetic Fields",
    category: "papers",
    date: "2024-02-18",
    summary: "A study on anisotropic turbulent suppression and velocity redistribution in duct flows subjected to transverse magnetic fields.",
    tags: ["Paper", "DNS", "MHD Duct Flow", "Turbulence"],
    file: "content/papers/dns-liquid-metal-mhd.md"
  },
  {
    id: "phd-research-update",
    title: "PhD Progress Update: CHAPsim2 Setup & Computational Scaling at Sheffield",
    category: "updates",
    date: "2024-01-20",
    summary: "Commissioning DNS mesh scaling on high-performance computing clusters and initial benchmark runs.",
    tags: ["Update", "PhD", "University of Sheffield", "HPC"],
    file: "content/updates/phd-research-update.md"
  }
];

// Asynchronously load posts or fallback
async function getPosts() {
  try {
    const res = await fetch("posts.json");
    if (res.ok) {
      return await res.json();
    }
  } catch (err) {
    // Fallback if local file protocol blocks fetch
    console.info("Using embedded posts data fallback:", err);
  }
  return DEFAULT_POSTS;
}

// Tag badge colouring — driven by data, not hardcoded keyword whitelists.
// Matches are a normalized (lowercased) tag against these sets.
const TEAL_TAGS = new Set(["mhd", "chapsim2", "thermodynamics", "dns"]);
const HIGHLIGHT_TAGS = new Set(["fusion", "liquid metal", "brayton cycle", "paper", "update"]);

// Render post cards into a container element
function renderCards(posts, containerId, categoryFilter = "all") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = categoryFilter === "all" 
    ? posts 
    : posts.filter(p => p.category.toLowerCase() === categoryFilter.toLowerCase());

  if (filtered.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); font-style: italic;">No posts found in this section.</p>`;
    return;
  }

  container.innerHTML = filtered.map(post => {
    const tagBadges = (post.tags || []).map(t => {
      const key = String(t).toLowerCase();
      let cls = "tag";
      if (TEAL_TAGS.has(key)) cls += " teal";
      if (HIGHLIGHT_TAGS.has(key)) cls += " highlight";
      return `<span class="${cls}">${t}</span>`;
    }).join(" ");

    return `
      <article class="card">
        <div class="card-header">
          <h3 class="card-title">
            <a href="post.html?file=${encodeURIComponent(post.file)}">${post.title}</a>
          </h3>
          <span class="card-meta">${formatDate(post.date)}</span>
        </div>
        <p class="card-desc">${post.summary}</p>
        <div class="tag-group">
          ${tagBadges}
        </div>
      </article>
    `;
  }).join("");
}

// Format date utility
function formatDate(dateStr) {
  try {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateStr).toLocaleDateString("en-GB", options);
  } catch {
    return dateStr;
  }
}
