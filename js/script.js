/* ========================================
KOUSHIK B K - PORTFOLIO SCRIPT (PRO FIXED)
======================================== */

// ================= THEME TOGGLE =================
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  if (!themeIcon) return;

  const isLight = body.getAttribute('data-theme') === 'light';

  if (isLight) {
    body.removeAttribute('data-theme');
    themeIcon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    themeIcon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  }
}

// ================= INIT =================
window.addEventListener('DOMContentLoaded', () => {
  try {
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.getElementById('theme-icon');

    if (savedTheme === 'light') {
      document.body.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.className = 'fas fa-moon';
    }

    initializePortfolio();
    initializeAnimations();
    initializeCircuitBackground();
  } catch (err) {
    console.error("Initialization Error:", err);
  }
});

// ================= DATA =================
const portfolioData = {
  about: {
    title: "About Me",
    content: `Cloud and Infrastructure Engineer with hands-on experience in AWS, Azure, and platform support. Skilled in monitoring, RBAC, incident resolution, and system reliability.`
  },

  education: {
    title: "Education",
    items: [
      {
        degree: "MCA - Cloud Technologies",
        institution: "Jain University",
        period: "2023 - 2025",
        grade: "CGPA: 8.28"
      }
    ]
  },

  experience: {
    title: "Experience",
    items: [
      {
        company: "Manyathy Business Solutions",
        position: "Platform Support Engineer",
        period: "Aug 2025 – Mar 2026",
        description: "Supported Power Platform with Azure & M365, handled RBAC, monitoring & incidents, improved resolution time by 30%."
      },
      {
        company: "Jain University",
        position: "Backend Intern",
        period: "Nov 2024 – May 2025",
        description: "Developed backend system with authentication, monitoring & proctoring features."
      }
    ]
  },

  projects: {
    title: "Projects",
    items: [
      {
        name: "AWS EC2 Automation",
        description: "Automated EC2 provisioning using Ansible playbooks.",
        tech: ["AWS", "Ansible", "Linux"],
        github: "https://github.com/koushik21bk/Ansible-Galaxy-Automation",
        period: "2025"
      }
    ]
  },

  skills: {
    title: "Skills",
    categories: [
      {
        name: "Cloud",
        skills: ["AWS", "Azure", "EC2", "S3", "VPC"]
      },
      {
        name: "System Admin",
        skills: ["Active Directory", "RBAC", "User Management"]
      }
    ]
  },

  certifications: {
    title: "Certifications",

    cloud: [
      { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft", link: "#" },
      { name: "AWS Cloud Practitioner", issuer: "AWS", link: "#" }
    ],

    devops: [
      { name: "Mastering DevOps", issuer: "Infosys", link: "#" }
    ],

    programming: [
      { name: "Python Basics", issuer: "HackerRank", link: "#" }
    ]
  },

  extracurricular: {
    title: "Extracurricular",
    items: [
      {
        title: "Volunteer",
        description: "NSS Activities & Social Work"
      }
    ]
  }
};

// ================= MAIN RENDER =================
function initializePortfolio() {
  const container = document.querySelector('.portfolio .container');
  if (!container) return;

  container.innerHTML = "";

  renderAbout(container);
  renderEducation(container);
  renderExperience(container);
  renderProjects(container);
  renderSkills(container);
  renderCertifications(container);
  renderExtracurricular(container);
}

// ================= RENDER FUNCTIONS =================

function renderAbout(container) {
  const section = createSection(portfolioData.about.title);
  const card = createCard();
  card.innerHTML = `<p>${portfolioData.about.content}</p>`;
  section.appendChild(card);
  container.appendChild(section);
}

function renderEducation(container) {
  const section = createSection(portfolioData.education.title);

  portfolioData.education.items.forEach(item => {
    const card = createCard();
    card.innerHTML = `
      <h3>${item.degree}</h3>
      <p>${item.institution}</p>
      <span>${item.period} | ${item.grade}</span>
    `;
    section.appendChild(card);
  });

  container.appendChild(section);
}

function renderExperience(container) {
  const section = createSection(portfolioData.experience.title);

  portfolioData.experience.items.forEach(item => {
    const card = createCard();
    card.innerHTML = `
      <h3>${item.company}</h3>
      <h4>${item.position}</h4>
      <span>${item.period}</span>
      <p>${item.description}</p>
    `;
    section.appendChild(card);
  });

  container.appendChild(section);
}

function renderProjects(container) {
  const section = createSection(portfolioData.projects.title);

  portfolioData.projects.items.forEach(p => {
    const card = createCard();

    card.innerHTML = `
      <h3>${p.name}</h3>
      <p>${p.description}</p>
      <small>${p.tech.join(" • ")}</small>
      <br>
      <a href="${p.github}" target="_blank">View Project</a>
    `;

    section.appendChild(card);
  });

  container.appendChild(section);
}

function renderSkills(container) {
  const section = createSection(portfolioData.skills.title);

  portfolioData.skills.categories.forEach(cat => {
    const card = createCard();
    card.innerHTML = `
      <h4>${cat.name}</h4>
      <p>${cat.skills.join(", ")}</p>
    `;
    section.appendChild(card);
  });

  container.appendChild(section);
}

// ✅ FIXED CERTIFICATIONS
function renderCertifications(container) {
  const section = createSection(portfolioData.certifications.title);
  const grid = document.createElement('div');
  grid.className = 'cert-grid';

  Object.keys(portfolioData.certifications).forEach(key => {
    if (key === "title") return;

    const column = document.createElement('div');
    column.className = 'cert-column';

    const title = key.replace("_", " ").toUpperCase();
    column.innerHTML = `<div class="cert-header">${title}</div>`;

    portfolioData.certifications[key].forEach(cert => {
      const item = document.createElement('div');
      item.className = 'cert-item';

      item.innerHTML = `
        <strong>${cert.name}</strong>
        <span>${cert.issuer}</span>
      `;

      column.appendChild(item);
    });

    grid.appendChild(column);
  });

  section.appendChild(grid);
  container.appendChild(section);
}

function renderExtracurricular(container) {
  const section = createSection(portfolioData.extracurricular.title);

  portfolioData.extracurricular.items.forEach(item => {
    const card = createCard();
    card.innerHTML = `
      <strong>${item.title}</strong>
      <p>${item.description}</p>
    `;
    section.appendChild(card);
  });

  container.appendChild(section);
}

// ================= HELPERS =================
function createSection(title) {
  const section = document.createElement('section');
  section.className = 'section';
  section.innerHTML = `<h2>${title}</h2>`;
  return section;
}

function createCard() {
  const div = document.createElement('div');
  div.className = 'card';
  return div;
}

// ================= ANIMATIONS =================
function initializeAnimations() {
  const cards = document.querySelectorAll('.card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  cards.forEach(card => observer.observe(card));
}

// ================= BACKGROUND =================
function initializeCircuitBackground() {
  // Placeholder for animated background (future enhancement)
}
