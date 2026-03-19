// ========================================
// KOUSHIK B K - PORTFOLIO SCRIPT
// Interactive functionality & data rendering
// ========================================

// THEME TOGGLE FUNCTIONALITY
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

// LOAD SAVED THEME AND INITIALIZE
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');
  
  if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    themeIcon.className = 'fas fa-moon';
  }
  
  initializePortfolio();
  initializeNavigation();
});

// NAVIGATION FUNCTIONALITY
function initializeNavigation() {
  const navLinks = document.querySelectorAll('.nav-links a');

  // Smooth scroll for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Highlight active section on scroll
  const observerOptions = {
    threshold: 0.3,
    rootMargin: '-100px 0px -50% 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('data-section') === sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }, observerOptions);

  // Start observing sections after they're created
  setTimeout(() => {
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });
  }, 100);
}

// PORTFOLIO DATA
const portfolioData = {
  about: {
    title: "About Me",
    content: `Cloud and Infrastructure Engineer with hands-on experience supporting AWS and Microsoft environments,
infrastructure monitoring, platform support, and incident resolution. Skilled in cloud services, identity and access
management, networking fundamentals, and system reliability. Microsoft Azure Fundamentals (AZ-900) certified
with experience supporting Microsoft 365 and Power Platform environments.`
  },

  education: {
    title: "Education",
    items: [
      {
        degree: "MCA: Cloud Technologies",
        institution: "Jain University, Bengaluru",
        period: "Aug 2023 - June 2025",
        grade: "CGPA: 8.28"
      },
      {
        degree: "BCA: Computer Applications", 
        institution: "S.R.N.M.N College, Kuvempu University, Shivamogga",
        period: "Jun 2019 - Sep 2022",
        grade: "CGPA: 8.45"
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
        description: "Provided platform and infrastructure support for Microsoft Power Platform solutions integrated with Microsoft Azure and Microsoft 365. Managed user provisioning, RBAC, and identity-related issues. Monitored platform health, resolved production incidents, and performed root cause analysis. Configured PowerApps environments and collaborated using Azure DevOps for issue tracking, improving incident resolution efficiency by 30%."
      },
      {
        company: "Jain University",
        position: "Backend Developer Intern (PCL)",
        location: "On-site",
        period: "Sep 2023 – May 2025",
        description: "Contributed to backend development by implementing secure authentication, course enrollment, learning progress tracking, and proctored test functionalities. Ensured session persistence, real-time monitoring, and seamless integration with the front-end. The platform was adopted by the CS & IT MCA department."
      }
    ]
  },

  skills: {
    title: "Skills",
    categories: [
      {
        name: "System Administration",
        skills: [
          "Active Directory",
          "User Provisioning",
          "User & Group Management",
          "RBAC",
          "System Configuration",
          "Software Installation",
          "Incident Management",
          "Platform Monitoring"
        ]
      },
      {
        name: "Cloud & Infrastructure",
        skills: [
          "AWS (EC2, IAM, VPC, S3, CloudWatch)",
          "Microsoft Azure",
          "Microsoft 365 Administration",
          "Power Platform"
        ]
      },
      {
        name: "Networking",
        skills: [
          "TCP/IP",
          "DNS",
          "DHCP",
          "VLAN",
          "VPN",
          "LAN/WAN",
          "OSI Model"
        ]
      },
      {
        name: "DevOps & Tools",
        skills: [
          "Ansible",
          "Jenkins",
          "CI/CD Pipelines",
          "GitHub",
          "Terraform (Basics)",
          "Azure DevOps"
        ]
      },
      {
        name: "Operating Systems",
        skills: [
          "Windows",
          "Windows Server",
          "Linux (Ubuntu, AMI)"
        ]
      },
      {
        name: "Programming",
        skills: [
          "Python (Basics)"
        ]
      }
    ]
  },

  projects: {
    title: "Projects",
    items: [
      {
        name: "AWS EC2 - Automation",
        description: "Automated EC2 provisioning and configuration using Ansible playbooks, reducing manual deployment time. Installed and configured MySQL servers on AWS instances as part of automated infrastructure setup. Enhanced cloud readiness by implementing consistent and repeatable automation workflows.",
        tech: ["Ansible", "Ansible Galaxy", "AWS EC2", "Visual Studio Code"],
        github: "https://github.com/koushik21bk/Ansible-Galaxy-Automation",
        period: "Mar 2025 – May 2025"
      },
      {
        name: "ZenDrive",
        description: "Designed a secure, cloud-integrated CMS using DriveHQ for encrypted file storage and retrieval. Implemented data deduplication, compression, and file ranking algorithms, increasing storage efficiency by 10.91%. Applied DES encryption for secure transmission of uploaded/downloaded files to ensure data confidentiality.",
        tech: ["DriveHQ", "Java", "HeidiSQL", "Netbeans"],
        github: "https://github.com/koushik21bk/ZenDrive",
        period: "Oct 2024 – Jun 2025"
      },
      {
        name: "QR-Based Smart Medicine System",
        description: "Built a mobile app using Java and Android Studio to scan medicine QR codes and display real-time prescription data. Integrated a smart reminder system with alerts for scheduled and emergency-based medication notifications. Used MySQL and PHP (XAMPP) for storing and retrieving dosage, expiry, and side-effect data from a central database.",
        tech: ["Java", "Android Studio", "MySQL", "PHP"], 
        github: "https://github.com/koushik21bk/REAL-TIME-QR-CODE-BASED-SMART-MEDICINE-SYSTEM",
        period: "Jun 2022 – Nov 2022"
      }
    ]
  },

  certifications: {
    title: "Certifications",
    cloud: [
      {
        name: "Azure Fundamentals (AZ-900)",
        issuer: "Microsoft",
        link: "https://drive.google.com/file/d/1sUV4suwxmdnLbACUWbduRFT-Mzj-FYsg/view?usp=drive_link"
      },
      {
        name: "AWS Cloud Practitioner Essentials",
        issuer: "Amazon Web Services (Coursera)",
        link: "https://drive.google.com/file/d/1Rx78j5ySUG_JvSV51-z7VvxrKhbOAI1m/view?usp=drive_link"
      },
      {
        name: "CI/CD with Jenkins, Ansible & Kubernetes",
        issuer: "Coursera",
        link: "https://drive.google.com/file/d/1_guQx1uNzeTiv4Fekr3kLMR8k28RaXjF/view?usp=sharing"
      }
    ],
    system_admin: [
      {
        name: "Career Essentials in System Administration",
        issuer: "Microsoft & LinkedIn Learning",
        link: "https://drive.google.com/file/d/1BomYHoboAL1KKbJRnvJh8jGE-IUJ181K/view?usp=sharing"
      },
      {
        name: "Managing Windows Servers, Virtualization & Containerization",
        issuer: "Coursera",
        link: "https://drive.google.com/file/d/1kF33Ow-6QpCizNJmXI4Q5aa29pPZUAPZ/view?usp=sharing"
      }
    ],
    cybersecurity: [
      {
        name: "Cybersecurity Support Technician",
        issuer: "Cisco",
        link: "https://drive.google.com/file/d/1B2WZUSJ2pdfcFoYWnNEaHd-VVDOQHcHA/view?usp=drive_link"
      },
      {
        name: "Digital Forensics",
        issuer: "Coursera",
        link: "https://drive.google.com/file/d/1NeOagw7TluZbdMeKrmL4PFR6q6jipwpp/view?usp=sharing"
      }
    ],
    devops: [
      {
        name: "Mastering DevOps",
        issuer: "Infosys Springboard",
        link: "#"
      }
    ],
    programming: [
      {
        name: "Python Programming",
        issuer: "HackerRank",
        link: "https://www.hackerrank.com/certificates/0470541c3407"
      },
      {
        name: "Java Programming",
        issuer: "HackerRank",
        link: "https://www.hackerrank.com/certificates/3e29e614211b"
      }
    ]
  },

  extracurricular: {
    title: "Extracurricular Activities",
    items: [
      {
        title: "Published Paper",
        description: "Synergizing Cloud in Autonomous Vehicles (2024) - IJSREM",
        link: "#"
      },
      {
        title: "Volunteer Work",
        description: "Active in National Service Scheme (2019-2022)"
      },
      {
        title: "Languages",
        description: "English (Fluent), Hindi (Fluent), Kannada (Native)"
      },
      {
        title: "Interests",
        description: "Emerging technologies, Novels, Dance, Music"
      }
    ]
  }
};

// INITIALIZE PORTFOLIO
function initializePortfolio() {
  const container = document.querySelector('.portfolio-section');
  
  // Render all sections in order
  renderAbout(container);
  renderEducation(container);
  renderExperience(container);
  renderSkills(container);
  renderProjects(container);
  renderCertifications(container);
  renderExtracurricular(container);
}

// RENDER ABOUT SECTION
function renderAbout(container) {
  const section = createSection(portfolioData.about.title, 'about');
  const card = createCard();
  card.innerHTML = `<p style="font-size: 1.1rem; line-height: 1.8;">${portfolioData.about.content}</p>`;
  section.appendChild(card);
  container.appendChild(section);
}

// RENDER EDUCATION SECTION
function renderEducation(container) {
  const section = createSection(portfolioData.education.title, 'education');
  const timeline = document.createElement('div');
  timeline.className = 'timeline';
  
  portfolioData.education.items.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${item.period}</div>
        <h3 class="timeline-title">${item.degree}</h3>
        <div class="timeline-subtitle">${item.institution}</div>
        <p><strong>${item.grade}</strong></p>
      </div>
    `;
    timeline.appendChild(timelineItem);
  });
  
  section.appendChild(timeline);
  container.appendChild(section);
}

// RENDER EXPERIENCE SECTION
function renderExperience(container) {
  const section = createSection(portfolioData.experience.title, 'experience');
  const timeline = document.createElement('div');
  timeline.className = 'timeline';
  
  portfolioData.experience.items.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <div class="timeline-content">
        <div class="timeline-date">${item.period}</div>
        <h3 class="timeline-title">${item.company}</h3>
        <div class="timeline-subtitle">${item.position} | ${item.location}</div>
        <p style="line-height: 1.7;">${item.description}</p>
      </div>
    `;
    timeline.appendChild(timelineItem);
  });
  
  section.appendChild(timeline);
  container.appendChild(section);
}

// RENDER SKILLS SECTION
function renderSkills(container) {
  const section = createSection(portfolioData.skills.title, 'skills');
  const grid = document.createElement('div');
  grid.className = 'skills-grid';
  
  portfolioData.skills.categories.forEach(category => {
    const card = createCard();
    card.className += ' skill-category';
    card.innerHTML = `
      <h4>${category.name}</h4>
      <div class="skill-tags">
        ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
      </div>
    `;
    grid.appendChild(card);
  });
  
  section.appendChild(grid);
  container.appendChild(section);
}

// RENDER PROJECTS SECTION
function renderProjects(container) {
  const section = createSection(portfolioData.projects.title, 'projects');
  const grid = document.createElement('div');
  grid.className = 'two-column';
  
  portfolioData.projects.items.forEach(project => {
    const card = createCard();
    card.innerHTML = `
      <h3 style="color: var(--primary); margin-bottom: 1rem;">${project.name}
        <a href="${project.github}" target="_blank" style="color: var(--primary); margin-left: 0.5rem; font-size: 0.9rem;">
          <i class="fab fa-github"></i>
        </a>
      </h3>
      <p style="line-height: 1.7; margin-top: 1rem;">${project.description}</p>
      <p><strong>Technologies:</strong> ${project.tech.join(' • ')}</p>
      <p><strong>Period:</strong> ${project.period}</p>
    `;
    grid.appendChild(card);
  });
  
  section.appendChild(grid);
  container.appendChild(section);
}

// RENDER CERTIFICATIONS SECTION
function renderCertifications(container) {
  const section = createSection(portfolioData.certifications.title, 'certifications');
  const grid = document.createElement('div');
  grid.className = 'cert-grid';

  // Create certification columns
  function createCertColumn(title, certArray) {
    const col = document.createElement('div');
    col.className = 'cert-column';
    col.innerHTML = `<div class="cert-header">${title}</div>`;

    certArray.forEach(cert => {
      const item = document.createElement('div');
      item.className = 'cert-item';
      item.innerHTML = `
        <strong>${cert.name}</strong>
        <span style="color: var(--text-light); opacity: 0.8;">${cert.issuer}</span>
        <a href="${cert.link}" target="_blank" title="View Certificate">
          <i class="fas fa-external-link-alt"></i>
        </a>
      `;
      col.appendChild(item);
    });

    return col;
  }

  // Add columns in order
  grid.appendChild(createCertColumn("Cloud Technologies", portfolioData.certifications.cloud));
  grid.appendChild(createCertColumn("System Administration", portfolioData.certifications.system_admin));
  grid.appendChild(createCertColumn("Cybersecurity", portfolioData.certifications.cybersecurity));
  grid.appendChild(createCertColumn("DevOps", portfolioData.certifications.devops));
  grid.appendChild(createCertColumn("Programming", portfolioData.certifications.programming));

  section.appendChild(grid);
  container.appendChild(section);
}

// RENDER EXTRACURRICULAR SECTION
function renderExtracurricular(container) {
  const section = createSection(portfolioData.extracurricular.title, 'extracurricular');
  const card = createCard();
  
  const list = document.createElement('ul');
  portfolioData.extracurricular.items.forEach(item => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${item.title}:</strong> ${item.description}
      ${item.link ? `<a href="${item.link}" target="_blank" style="margin-left: 0.5rem; color: var(--primary);"><i class="fas fa-external-link-alt"></i></a>` : ''}
    `;
    list.appendChild(li);
  });
  
  card.appendChild(list);
  section.appendChild(card);
  container.appendChild(section);
}

// HELPER FUNCTIONS
function createSection(title, id) {
  const section = document.createElement('section');
  section.className = 'section';
  section.id = id;
  
  const heading = document.createElement('h2');
  heading.textContent = title;
  section.appendChild(heading);
  
  return section;
}

function createCard() {
  const card = document.createElement('div');
  card.className = 'card';
  return card;
}

// ANIMATED CIRCUIT BACKGROUND
const canvas = document.querySelector('.circuit-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function drawCircuit() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  
  // Get current theme color
  const isLight = document.body.getAttribute('data-theme') === 'light';
  ctx.strokeStyle = isLight ? '#2196f3' : '#00bcd4';
  ctx.globalAlpha = 0.3;
  ctx.lineWidth = 1;
  
  const w = canvas.width, h = canvas.height;
  for (let i = 0; i < 15; i++) {
    let x = Math.random() * w, y = Math.random() * h;
    ctx.beginPath();
    ctx.moveTo(x, y);
    for (let j = 0; j < 5; j++) {
      x += (Math.random() - 0.5) * 100;
      y += (Math.random() - 0.5) * 100;
      ctx.lineTo(x, y);
    }
    ctx.shadowColor = ctx.strokeStyle;
    ctx.shadowBlur = 6;
    ctx.stroke();
  }
  ctx.restore();
}

window.addEventListener('resize', resizeCanvas);
resizeCanvas();
setInterval(drawCircuit, 2000);
drawCircuit();
