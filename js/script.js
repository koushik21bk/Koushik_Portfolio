/* ========================================
   KOUSHIK B K - PORTFOLIO SCRIPT
   Interactive functionality & data rendering
======================================== */

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

// LOAD SAVED THEME
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const themeIcon = document.getElementById('theme-icon');
  
  if (savedTheme === 'light') {
    document.body.setAttribute('data-theme', 'light');
    themeIcon.className = 'fas fa-moon';
  }
  
  initializePortfolio();
  initializeAnimations();
});

// SCROLL TO PORTFOLIO
function scrollToPortfolio() {
  document.getElementById('portfolio').scrollIntoView({
    behavior: 'smooth'
  });
}

// PORTFOLIO DATA
const portfolioData = {
  about: {
    title: "About Me",
        content: `Cloud and DevOps enthusiast with hands-on project experience in Cloud technologies. Proficient in cloud platforms (AWS, Azure), and Python, Java Fundamentals. Committed to leveraging cloud-native practices to deliver efficient, resilient solutions. Open to opportunities and to contribute effectively for organizational and personal growth.`
  },
  
  education: {
    title: "Education",
    items: [
      {
        degree: "MCA: Cloud Technologies and DevOps",
        institution: "Jain University, Bengaluru",
        period: "Aug 2023 - June 2025",
        grade: "CGPA: 8.28"
      },
      {
        degree: "BCA: Computer Applications",
        institution: "S.R.N.M.N, Kuvempu University, Shivamogga",
        period: "Jun 2019 - Sep 2022",
        grade: "CGPA: 8.17"
      }
    ]
  },
  
  experience: {
    title: "Experience",
    items: [
      {
        company: "Innovate Intern",
        position: "Intern",
        location: "Virtual",
        period: "July 2024 - Aug 2024",
        description: "Contributed to the development of SecureSnap. Implemented a user interface for a secure stock photo e-Commerce platform. Focused on implementing a secure login, protecting user data, and ensuring a smooth user experience. Also worked on understanding and applying data encryption and secure communication protocols throughout the system."
      },
      {
        company: "Jain University",
        position: "Intern (PCL)",
        location: "On-site",
        period: "Sep 2023 – May 2025",
        description: "Contributed to backend development, by implementing secure authentication, course enrollment, learning progress tracking, and proctored test functionalities. Ensured session persistence, real-time monitoring, and seamless integration with the front-end. The project was appreciated and internally adapted by the CS&IT MCA department."
      }
    ]
  },

     projects: {
    title: "Projects",
    items: [
      {
        name: "AWS EC2 - Automation",
        period: "Mar 2025 – May 2025",
        tech: ["Ansible", "AWS EC2", "MySQL"],
        description: "Automated EC2 provisioning and configuration using Ansible playbooks, reducing manual deployment time. Installed and configured MySQL servers on AWS instances as part of automated infrastructure setup. Enhanced cloud readiness by implementing consistent and repeatable automation workflows.",
        github: "https://github.com/koushik21bk/Ansible-Galaxy-Automation"
      },
      {
        name: "Cloud File Management System",
        period: "Oct 2024 – Jun 2025",
        tech: ["DriveHQ", "DES Encryption", "Compression", "Deduplication"],
        description: "Designed a secure, cloud-integrated CMS using DriveHQ for encrypted file storage and retrieval. Implemented data deduplication, compression, and file ranking algorithms, increasing storage efficiency by 10.91%. Applied DES encryption for secure transmission of uploaded/downloaded files to ensure data confidentiality.",
        github: "https://github.com/koushik21bk/ZenDrive"
      },
      {
        name: "SecureSnap",
        period: "July 2024 - Aug 2024",
        tech: ["Django", "PostgreSQL", "JWT", "TLS/SSL"],
        description: "Contributed to backend development of a secure stock photo e-commerce app. Implemented JWT authentication and SSL/TLS protocols for secure user sessions and transactions. Collaborated on frontend using HTML/CSS and ensured responsive UI.",
        github: "https://github.com/koushik21bk/Securesnap"
      },
      {
        name: "QR-Based Smart Medicine System",
        period: "Jun 2022 – Nov 2022",
        tech: ["Java", "Android Studio", "MySQL", "PHP"],
        description: "Built a mobile app using Java and Android Studio to scan medicine QR codes and display real-time prescription data. Integrated a smart reminder system with alerts for scheduled and emergency-based medication notifications. Used MySQL and PHP (XAMPP) for storing and retrieving dosage, expiry, and side-effect data from a central database.",
        github: "https://github.com/koushik21bk/REAL-TIME-QR-CODE-BASED-SMART-MEDICINE-SYSTEM"
      }
    ]
  },
   
  
  skills: {
        title: "Skills",
        categories: [
          {
            name: "Cloud & DevOps Tools",
            skills: ["AWS", "Azure", "Ansible", "Jenkins", "GitHub", "CI/CD"]
          },
          {
            name: "Programming Languages.",
            skills: ["Python", "Java"]
          },
          {
            name: "Database",
            skills: ["MySQL"]
          },
          {
            name: "Cybersecurity",
            skills: ["Security Principles & Governance", "Cyber Laws & Regulations"]
          },
          {
            name: "Platforms & Tools",
            skills: ["Windows", "Linux", "Visual Studio", "IntelliJ"]
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
        name: "AWS Practitioner Essential",
        issuer: "Coursera",
        link: "https://drive.google.com/file/d/1Rx78j5ySUG_JvSV51-z7VvxrKhbOAI1m/view?usp=drive_link"
      },
      {
        name: "CI/CD with Jenkins Ansible Kubernetes",
        issuer: "Coursera",
        link: "https://drive.google.com/file/d/1_guQx1uNzeTiv4Fekr3kLMR8k28RaXjF/view?usp=sharing"
      }
    ],
    cybersecurity: [
      {
        name: "Cybersecurity Support Technician",
        issuer: "Cisco",
        link: "https://drive.google.com/file/d/1B2WZUSJ2pdfcFoYWnNEaHd-VVDOQHcHA/view?usp=drive_link"
      },
      {
        name: "Mastering DevOps",
        issuer: "Infosys Springboard",
        link: "#"
      },
      {
        name: "Digital Forensics",
        issuer: "Coursera",
        link: "https://drive.google.com/file/d/1NeOagw7TluZbdMeKrmL4PFR6q6jipwpp/view?usp=sharing"
      }
    ],
    programming: [
      {
        name: "Java Programming",
        issuer: "HackerRank",
        link: "https://www.hackerrank.com/certificates/3e29e614211b"
      },
      {
        name: "Java Full Stack Web Development",
        issuer: "Tap Academy",
        link: "https://drive.google.com/file/d/1Y3N5o9W96ErDGmjXC7wDUXknzneP0iL-/view?usp=drive_link"
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
  const container = document.querySelector('.portfolio .container');
  
  // Render all sections
  renderAbout(container);
  renderEducation(container);
  renderExperience(container);
  renderProjects(container);
  renderSkills(container);
  renderCertifications(container);
  renderExtracurricular(container);
}

// RENDER ABOUT SECTION
function renderAbout(container) {
  const section = createSection(portfolioData.about.title);
  const card = createCard();
  card.innerHTML = `<p>${portfolioData.about.content}</p>`;
  section.appendChild(card);
  container.appendChild(section);
}

// RENDER EDUCATION SECTION
function renderEducation(container) {
  const section = createSection(portfolioData.education.title);
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
  const section = createSection(portfolioData.experience.title);
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
        <p>${item.description}</p>
      </div>
    `;
    timeline.appendChild(timelineItem);
  });
  
  section.appendChild(timeline);
  container.appendChild(section);
}

// RENDER PROJECTS SECTION
function renderProjects(container) {
  const section = createSection(portfolioData.projects.title);
  const grid = document.createElement('div');
  grid.className = 'two-column';
  
  portfolioData.projects.items.forEach(project => {
    const card = createCard();
    card.innerHTML = `
      <h3>${project.name}
        <a href="${project.github}" target="_blank" style="color: var(--primary); margin-left: 0.5rem; font-size: 0.9rem;">
          <i class="fab fa-github"></i>
        </a>
      </h3>
      <p><strong>Period:</strong> ${project.period}</p>
      <p><strong>Technologies:</strong> ${project.tech.join(' • ')}</p>
      <p>${project.description}</p>
    `;
    grid.appendChild(card);
  });
  
  section.appendChild(grid);
  container.appendChild(section);
}

// RENDER SKILLS SECTION
function renderSkills(container) {
  const section = createSection(portfolioData.skills.title);
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

// RENDER CERTIFICATIONS SECTION
function renderCertifications(container) {
  const section = createSection(portfolioData.certifications.title);
  const grid = document.createElement('div');
  grid.className = 'cert-grid';
  
  // Cloud Technologies Column
  const cloudCol = document.createElement('div');
  cloudCol.className = 'cert-column';
  cloudCol.innerHTML = '<div class="cert-header">Cloud Technologies</div>';
  portfolioData.certifications.cloud.forEach(cert => {
    const item = document.createElement('div');
    item.className = 'cert-item';
    item.innerHTML = `
      <strong>${cert.name}</strong>
      <span>${cert.issuer}</span>
      <a href="${cert.link}" target="_blank" title="View Certificate">
        <i class="fas fa-external-link-alt"></i>
      </a>
    `;
    cloudCol.appendChild(item);
  });
  
  // Cybersecurity Column
  const cyberCol = document.createElement('div');
  cyberCol.className = 'cert-column';
  cyberCol.innerHTML = '<div class="cert-header">Cybersecurity</div>';
  portfolioData.certifications.cybersecurity.forEach(cert => {
    const item = document.createElement('div');
    item.className = 'cert-item';
    item.innerHTML = `
      <strong>${cert.name}</strong>
      <span>${cert.issuer}</span>
      <a href="${cert.link}" target="_blank" title="View Certificate">
        <i class="fas fa-external-link-alt"></i>
      </a>
    `;
    cyberCol.appendChild(item);
  });
  
  // Programming Column
  const progCol = document.createElement('div');
  progCol.className = 'cert-column';
  progCol.innerHTML = '<div class="cert-header">Programming</div>';
  portfolioData.certifications.programming.forEach(cert => {
    const item = document.createElement('div');
    item.className = 'cert-item';
    item.innerHTML = `
      <strong>${cert.name}</strong>
      <span>${cert.issuer}</span>
      <a href="${cert.link}" target="_blank" title="View Certificate">
        <i class="fas fa-external-link-alt"></i>
      </a>
    `;
    progCol.appendChild(item);
  });
  
  grid.appendChild(cloudCol);
  grid.appendChild(cyberCol);
  grid.appendChild(progCol);
  
  section.appendChild(grid);
  container.appendChild(section);
}

// RENDER EXTRACURRICULAR SECTION
function renderExtracurricular(container) {
  const section = createSection(portfolioData.extracurricular.title);
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
function createSection(title) {
  const section = document.createElement('section');
  section.className = 'section scroll-animate';
  
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

// SCROLL ANIMATIONS
function initializeAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);
  
  // Observe all scroll-animate elements
  document.querySelectorAll('.scroll-animate').forEach(el => {
    observer.observe(el);
  });
}

// ANIMATED CIRCUIT BACKGROUND
function initializeCircuitBackground() {
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
    ctx.strokeStyle = isLight ? '#1976d2' : '#00d9ff';
    ctx.globalAlpha = 0.3;
    ctx.lineWidth = 1;
    
    const nodeCount = 20;
    const connectionCount = 40;
    
    // Draw nodes
    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      
      ctx.beginPath();
      ctx.arc(x, y, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    // Draw connections
    for (let i = 0; i < connectionCount; i++) {
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;
      const x2 = x1 + (Math.random() - 0.5) * 200;
      const y2 = y1 + (Math.random() - 0.5) * 200;
      
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    }
    
    ctx.restore();
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
  
  // Redraw circuit periodically
  setInterval(drawCircuit, 3000);
  drawCircuit();
}

// Initialize circuit background when page loads
window.addEventListener('DOMContentLoaded', initializeCircuitBackground);
