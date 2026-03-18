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

// LOAD THEME + INIT
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

// ================= DATA =================
const portfolioData = {

about: {
title: "About Me",
content: `Cloud and DevOps enthusiast with hands-on experience in AWS, Azure, and infrastructure support. Skilled in platform monitoring, incident resolution, and system reliability.`
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
location: "Hybrid",
period: "Aug 2025 – Mar 2026",
description: "Supported Microsoft Power Platform with Azure & M365. Managed RBAC, monitored systems, resolved incidents, improved resolution time by 30%."
},
{
company: "Jain University",
position: "Backend Intern",
location: "On-site",
period: "Sep 2023 – May 2025",
description: "Built backend systems for student platform with authentication, monitoring & proctoring."
}
]
},

projects: {
title: "Projects",
items: [
{
name: "AWS EC2 Automation",
description: "Automated EC2 provisioning using Ansible.",
tech: ["AWS", "Ansible"],
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
skills: ["AWS", "Azure", "S3", "EC2"]
},
{
name: "System Admin",
skills: ["Active Directory", "RBAC", "User Management"]
}
]
},

certifications: {
title: "Certifications",

```
cloud: [
  {
    name: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    link: "#"
  }
],

system_admin: [
  {
    name: "System Administration Essentials",
    issuer: "Microsoft",
    link: "#"
  }
],

devops: [
  {
    name: "Mastering DevOps",
    issuer: "Infosys",
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
```

},

extracurricular: {
title: "Extracurricular",
items: [
{
title: "Volunteer",
description: "NSS Activities"
}
]
}
};

// ================= INIT =================
function initializePortfolio() {
const container = document.querySelector('.portfolio .container');

renderAbout(container);
renderEducation(container);
renderExperience(container);
renderProjects(container);
renderSkills(container);
renderCertifications(container);
renderExtracurricular(container);
}

// ================= RENDER =================

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
card.innerHTML = `<h3>${item.degree}</h3><p>${item.institution}</p>`;
section.appendChild(card);
});
container.appendChild(section);
}

function renderExperience(container) {
const section = createSection(portfolioData.experience.title);
portfolioData.experience.items.forEach(item => {
const card = createCard();
card.innerHTML = `<h3>${item.company}</h3><p>${item.description}</p>`;
section.appendChild(card);
});
container.appendChild(section);
}

function renderProjects(container) {
const section = createSection(portfolioData.projects.title);
portfolioData.projects.items.forEach(p => {
const card = createCard();
card.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p>`;
section.appendChild(card);
});
container.appendChild(section);
}

function renderSkills(container) {
const section = createSection(portfolioData.skills.title);
portfolioData.skills.categories.forEach(cat => {
const card = createCard();
card.innerHTML = `<h4>${cat.name}</h4>${cat.skills.join(", ")}`;
section.appendChild(card);
});
container.appendChild(section);
}

// ⭐ FIXED CERTIFICATIONS (DYNAMIC)
function renderCertifications(container) {
const section = createSection(portfolioData.certifications.title);
const grid = document.createElement('div');
grid.className = 'cert-grid';

Object.keys(portfolioData.certifications).forEach(key => {
if (key === "title") return;

```
const column = document.createElement('div');
column.className = 'cert-column';

const title = key.replace("_", " ").toUpperCase();
column.innerHTML = `<div class="cert-header">${title}</div>`;

portfolioData.certifications[key].forEach(cert => {
  const item = document.createElement('div');
  item.className = 'cert-item';
  item.innerHTML = `<strong>${cert.name}</strong><span>${cert.issuer}</span>`;
  column.appendChild(item);
});

grid.appendChild(column);
```

});

section.appendChild(grid);
container.appendChild(section);
}

function renderExtracurricular(container) {
const section = createSection(portfolioData.extracurricular.title);
portfolioData.extracurricular.items.forEach(item => {
const card = createCard();
card.innerHTML = `<strong>${item.title}</strong><p>${item.description}</p>`;
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

// ================= ANIMATION =================
function initializeAnimations() {}

function initializeCircuitBackground() {}
