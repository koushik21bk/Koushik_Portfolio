/* ========================================
   KOUSHIK B K - PORTFOLIO SCRIPT (FIXED)
======================================== */

// THEME TOGGLE
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');

  if (body.getAttribute('data-theme') === 'light') {
    body.removeAttribute('data-theme');
    themeIcon.className = 'fas fa-sun';
    localStorage.setItem('theme', 'dark');
  } else {
    body.setAttribute('data-theme', 'light');
    themeIcon.className = 'fas fa-moon';
    localStorage.setItem('theme', 'light');
  }
}

// LOAD THEME
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');

  if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    themeIcon.className = 'fas fa-moon';
  }

  initializePortfolio();
  initializeAnimations();
  initializeCircuitBackground();
});

// DATA
const portfolioData = {
  about: {
    title: "About Me",
    content: `Cloud and DevOps enthusiast with hands-on project experience in Cloud technologies. Proficient in AWS, Azure, Python, and Java fundamentals.`
  },

  education: {
    title: "Education",
    items: [
      {
        degree: "MCA: Cloud Technologies",
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
        company: "Jain University",
        position: "Intern",
        location: "On-site",
        period: "2023 – 2025",
        description: "Worked on backend development and system monitoring."
      }
    ]
  },

  projects: {
    title: "Projects",
    items: [
      {
        name: "AWS EC2 Automation",
        description: "Automated EC2 provisioning using Ansible.",
        tech: ["Ansible", "AWS"],
        github: "#",
        period: "2025"
      }
    ]
  },

  skills: {
    title: "Skills",
    categories: [
      {
        name: "Cloud",
        skills: ["AWS", "Azure"]
      },
      {
        name: "DevOps",
        skills: ["Ansible", "Jenkins"]
      }
    ]
  },

  // ✅ ADDED CERTIFICATIONS (IMPORTANT FIX)
  certifications: {
    title: "Certifications",

    cloud: [
      {
        name: "Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        link: "#"
      }
    ],

    system_admin: [
      {
        name: "Career Essentials in System Administration",
        issuer: "Microsoft & LinkedIn Learning",
        link: "https://drive.google.com/file/d/1BomYHoboAL1KKbJRnvJh8jGE-IUJ181K/view"
      },
      {
        name: "Managing Windows Servers, Virtualization & Containerization",
        issuer: "Coursera",
        link: "https://drive.google.com/file/d/1kF33Ow-6QpCizNJmXI4Q5aa29pPZUAPZ/view"
      }
    ],

    cybersecurity: [
      {
        name: "Cybersecurity Support Technician",
        issuer: "Cisco",
        link: "#"
      }
    ],

    programming: [
      {
        name: "Python Programming",
        issuer: "HackerRank",
        link: "#"
      }
    ]
  }
};

// INIT
function initializePortfolio() {
  const container = document.querySelector('.portfolio-section');

  renderAbout(container);
  renderEducation(container);
  renderExperience(container);
  renderProjects(container);
  renderSkills(container);
  renderCertifications(container);
}

// RENDER FUNCTIONS
function renderAbout(container) {
  const section = createSection(portfolioData.about.title);
  const card = createCard();
  card.innerHTML = `<p>${portfolioData.about.content}</p>`;
  section.appendChild(card);
  container.appendChild(section);
}

function renderEducation(container) {
  const section = createSection(portfolioData.education.title);
  const card = createCard();
  card.innerHTML = portfolioData.education.items.map(e =>
    `<p><strong>${e.degree}</strong> - ${e.institution}</p>`
  ).join('');
  section.appendChild(card);
  container.appendChild(section);
}

function renderExperience(container) {
  const section = createSection(portfolioData.experience.title);
  const card = createCard();
  card.innerHTML = portfolioData.experience.items.map(e =>
    `<p><strong>${e.company}</strong> - ${e.position}</p>`
  ).join('');
  section.appendChild(card);
  container.appendChild(section);
}

function renderProjects(container) {
  const section = createSection(portfolioData.projects.title);
  const card = createCard();
  card.innerHTML = portfolioData.projects.items.map(p =>
    `<p><strong>${p.name}</strong></p>`
  ).join('');
  section.appendChild(card);
  container.appendChild(section);
}

function renderSkills(container) {
  const section = createSection(portfolioData.skills.title);
  const card = createCard();
  card.innerHTML = portfolioData.skills.categories.map(c =>
    `<p><strong>${c.name}:</strong> ${c.skills.join(', ')}</p>`
  ).join('');
  section.appendChild(card);
  container.appendChild(section);
}

// ✅ FINAL CERTIFICATION RENDER (WITH SYSTEM ADMIN)
function renderCertifications(container) {
  const section = createSection(portfolioData.certifications.title);
  const grid = document.createElement('div');
  grid.className = 'cert-grid';

  Object.entries(portfolioData.certifications).forEach(([key, value]) => {
    if (key === "title") return;

    const col = document.createElement('div');
    col.className = 'cert-column';

    const title = key.replace("_", " ").toUpperCase();
    col.innerHTML = `<div class="cert-header">${title}</div>`;

    value.forEach(cert => {
      const item = document.createElement('div');
      item.className = 'cert-item';

      item.innerHTML = `
        <strong>${cert.name}</strong>
        <span>${cert.issuer}</span>
        <a href="${cert.link}" target="_blank">
          <i class="fas fa-external-link-alt"></i>
        </a>
      `;

      col.appendChild(item);
    });

    grid.appendChild(col);
  });

  section.appendChild(grid);
  container.appendChild(section);
}

// HELPERS
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

// ANIMATIONS
function initializeAnimations() {}

// BACKGROUND
function initializeCircuitBackground() {}
