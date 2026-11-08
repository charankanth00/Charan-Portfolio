# Guru Charan Kanth — Portfolio

> Modern, interactive, and responsive developer portfolio engineered with **Next.js 15**, **React 19**, **Tailwind CSS**, and **Framer Motion**.

[![Next.js](https://img.shields.io/badge/Next.js-15.3-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.1-ff0055?logo=framer)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🌟 Overview

This repository hosts the source code for the personal developer portfolio of **Guru Charan Kanth Swamy** — Software Engineer & AI-Native Developer. The website showcases software engineering projects, verified industry internships, official technical certifications, TCS iON NQT credentials, skills matrix, and educational background.

---

## ✨ Key Features & Sections

- **Hero & Interactive Introduction**:
  - Dynamic ambient lighting effects using Framer Motion
  - Quick-glance core competencies chip bar
  - Direct CTAs for projects, resume, and contact channels
  - Social connectivity (LinkedIn, GitHub, Email)

- **About Me**:
  - Multi-tab interactive interface: *Overview*, *Skills Matrix*, *Journey Timeline*, and *Interests*
  - Structured skill tiers with proficiency levels (Foundational, Proficient, Advanced)

- **Featured Projects**:
  - **Vizag Bus AI**: Real-time public transit tracking and intelligent commuter assistance platform powered by Google Gemma AI, FastAPI, JavaScript, and live telemetry
  - **Portfolio Website**: Modern responsive single-page application built with Next.js 15 and React 19

- **Internship Experience**:
  - **Indo German Institute of Advanced Technology (IGIAT)**: AI with Python Intern (June 2023 – July 2023)
  - Detailed project submodules (Face Detection, LBPH Recognition, AR Filters, Color Detection utility)
  - Integrated certificate preview and interactive modal lightbox viewer
  - Collapsible by default for clean presentation

- **Certifications & Credentials**:
  - **Artificial Intelligence (AI) with Python** — IGIAT (*Outstanding Performance*)
  - **Full Stack Java** — SkillDzire & APSCHE (AICTE approved)
  - Direct links to certificates and high-resolution document previews

- **Standardized Exam Scores (Achievements)**:
  - **TCS iON NQT - IT** scorecard breakdown with animated circular progress indicators:
    - Part A: Foundation (67.44%)
    - Part B: Advanced Quantitative & Reasoning (52.40%)
    - Programming Hands-On: Java (76.14%)

- **Education Timeline**:
  - **Bachelor of Technology (B.Tech)** in Computer Science & Engineering (CSE) — **JNTUG-V** (Aggregate: **7.18 CGPA**)
  - **Intermediate (MPC)** — **Aditya Junior College** (**84%**)
  - **Secondary School Certificate (SSC)** — **Sri Maharshi School** (**9.2 CGPA**)

- **Contact Form**:
  - Clean form with input validation and automated `mailto:` client fallback
  - Verified contact information (Email, LinkedIn, GitHub, Location: Visakhapatnam, AP, India)

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Linting**: ESLint (Next.js Core Web Vitals)
- **Deployment**: Render / Vercel

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18.18.0 or later) installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/charankanth00/Charan-Portfolio.git
   cd Charan-Portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

To create an optimized production build:
```bash
npm run build
npm run start
```

To run lint checks:
```bash
npm run lint
```

---

## 📁 Project Structure

```text
├── public/
│   ├── certificates/       # High-resolution certificates & documents
│   ├── charan_kanth.png    # Profile avatar
│   └── tcs-nqt-scorecard.pdf
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles & Tailwind directives
│   │   ├── layout.js       # Root HTML layout and metadata
│   │   └── page.js         # Single-page portfolio root
│   └── components/
│       ├── About.jsx       # About tabs & timeline
│       ├── Achievements.jsx# TCS NQT score visualization
│       ├── Certifications.jsx # Certificate showcase & lightbox
│       ├── Contact.jsx     # Contact info & message form
│       ├── Education.jsx   # Interactive academic timeline
│       ├── Hero.jsx        # Top banner & introduction
│       ├── Internship.jsx  # Experience details & project cards
│       ├── Navbar.jsx      # Navigation bar with scroll spy
│       ├── Projects.jsx    # Featured engineering projects
│       └── Skills.jsx      # Technical skills catalog
├── eslint.config.mjs       # Flat ESLint configuration
├── next.config.mjs         # Next.js build configuration
├── tailwind.config.js      # Tailwind theme extensions
└── package.json            # Project dependencies & scripts
```

---

## 📬 Contact & Connect

- **Name**: Guru Charan Kanth Swamy
- **Location**: Visakhapatnam, Andhra Pradesh, India
- **Email**: [charanbandaru869@gmail.com](mailto:charanbandaru869@gmail.com)
- **LinkedIn**: [linkedin.com/in/charanbandaru](https://www.linkedin.com/in/charanbandaru/)
- **GitHub**: [github.com/charankanth00](https://github.com/charankanth00)
