# Personal Portfolio — Sounak Banerjee

> A modern, responsive personal portfolio website built with **React** to showcase my projects, technical skills, experiments, education, and software development journey.

---

## About

This repository contains the source code for my personal portfolio website.

The portfolio is designed to provide a central place to showcase the software and applications I build, the technologies I work with, and the areas of computer engineering that I am exploring.

Rather than being a purely static profile page, the website is built as a modular React application with reusable components and a clean project structure.

### What the portfolio showcases

* My introduction and developer profile
* Technical skills and technologies
* Software and application projects
* Experimental and ongoing work
* Educational background
* Links to GitHub and other professional profiles
* Contact information
* Resume

---

## Features

### Modern UI

A clean developer-focused interface designed with an emphasis on:

* Minimal visual clutter
* Clear typography
* Responsive layouts
* Consistent spacing
* Accessible navigation
* Subtle animations and interactions

### Responsive Design

The website is designed to work across different screen sizes:

```text
Desktop
   ↓
Laptop
   ↓
Tablet
   ↓
Mobile
```

The layout adapts to different viewport sizes while maintaining usability and readability.

### Component-Based Architecture

The portfolio is divided into reusable React components instead of placing the entire interface inside a single file.

```text
Navbar
Hero
About
Skills
Projects
Experiments
Education
Contact
Footer
```

This makes individual sections easier to develop, modify, and maintain.

### Project Showcase

Projects are presented with relevant information such as:

* Project description
* Technologies used
* Key features
* GitHub repository
* Live demonstration, when available

### Experiments

A separate section is used for smaller projects, prototypes, technical experiments, and ongoing explorations that may not yet qualify as complete projects.

### Contact Section

Provides visitors with ways to connect with me regarding:

* Projects
* Collaboration
* Internship opportunities
* Job opportunities
* Technical discussions

---

## Tech Stack

| Technology     | Purpose                              |
| -------------- | ------------------------------------ |
| **React**      | Frontend UI development              |
| **Vite**       | Development server and build tooling |
| **JavaScript** | Application logic                    |
| **HTML5**      | Semantic page structure              |
| **CSS3**       | Styling and responsive design        |
| **Git**        | Version control                      |
| **GitHub**     | Source code hosting                  |

Additional libraries may be introduced as the project evolves.

---

## Project Structure

```text
portfolio/
│
├── public/
│   ├── favicon.ico
│   ├── resume.pdf
│   └── ...
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experiments.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   │
│   ├── data/
│   │   ├── projects.js
│   │   └── skills.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## Architecture

The application follows a component-based architecture.

```text
                         index.html
                             │
                             ▼
                         main.jsx
                             │
                             ▼
                          App.jsx
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
     Navbar                Hero                 About
                                                  │
        ┌───────────────────┼────────────────────┘
        │                   │
        ▼                   ▼
      Skills             Projects
                            │
                            ▼
                       Experiments
                            │
                            ▼
                        Education
                            │
                            ▼
                         Contact
                            │
                            ▼
                         Footer
```

### `main.jsx`

Acts as the entry point of the React application and mounts the root React component to the HTML document.

### `App.jsx`

Acts as the top-level application component and combines the individual sections of the portfolio.

### `components/`

Contains reusable React components responsible for individual sections and UI elements.

### `assets/`

Contains resources used by the application, including images, icons, fonts, and other static assets.

### `data/`

Contains structured information used to populate components, such as project and skill information.

---

## Sections

### Hero

The landing section introduces me and provides quick access to important links such as projects, GitHub, and my resume.

### About

Provides a brief overview of my background, interests, and approach to software development.

### Skills

Displays the programming languages, technologies, frameworks, tools, and other technical skills that I work with.

### Projects

Contains my major completed or actively developed projects.

Examples include:

* **VELOCITY** — A modern native text editor built using C++ and Qt.
* **MonitorOne** — A system monitoring application focused on hardware and system telemetry.
* **Library Management System** — A Java Swing application demonstrating object-oriented programming and GUI development.
* **DSA with Java** — A collection of data structure and algorithm implementations and problem-solving solutions.

### Experiments

Contains smaller technical experiments, prototypes, proof-of-concepts, and ongoing explorations.

This section allows me to document things that may not yet be polished enough to be considered full projects.

### Education

Provides information about my academic background and relevant coursework.

### Contact

Provides ways for visitors, recruiters, developers, and potential collaborators to get in touch.

### Footer

Contains additional navigation, social links, copyright information, and other relevant links.

---

## Getting Started

### Prerequisites

Make sure the following are installed on your system:

* **Node.js**
* **npm**
* **Git**

You can verify the installations with:

```bash
node --version
npm --version
git --version
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd portfolio
```

Install the dependencies:

```bash
npm install
```

---

## Development

Start the Vite development server:

```bash
npm run dev
```

Vite will provide a local development URL, typically:

```text
http://localhost:5173
```

Open the URL in your browser to view the portfolio.

---

## Production Build

To create an optimized production build:

```bash
npm run build
```

The generated production files will be placed in the:

```text
dist/
```

directory.

---

## Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

---

## Development Workflow

The project follows a simple development workflow:

```text
Create Component
       │
       ▼
Implement UI
       │
       ▼
Add Styling
       │
       ▼
Test Responsiveness
       │
       ▼
Connect Data
       │
       ▼
Test Functionality
       │
       ▼
Build
       │
       ▼
Deploy
```

---

## Design Philosophy

The portfolio is being developed around a few principles.

### 01 — Simplicity

The interface should communicate information without unnecessary visual complexity.

### 02 — Functionality

Animations and visual effects should support the user experience rather than distract from the content.

### 03 — Responsiveness

The website should remain usable regardless of the device or screen size.

### 04 — Maintainability

The codebase should remain organized as new projects, experiments, and features are added.

### 05 — Authenticity

The portfolio should represent actual projects, technologies, and skills rather than simply listing technologies without demonstrating their use.

---

## Future Improvements

Planned improvements may include:

* [ ] Complete responsive navigation
* [ ] Add dark/light theme support
* [ ] Add project filtering
* [ ] Add project detail pages
* [ ] Add project screenshots and demonstrations
* [ ] Add GitHub repository integration
* [ ] Add GitHub activity section
* [ ] Add contact form functionality
* [ ] Add scroll-based animations
* [ ] Improve accessibility
* [ ] Add SEO metadata
* [ ] Add Open Graph metadata
* [ ] Add custom favicon and branding
* [ ] Deploy the website
* [ ] Add a custom domain

---

## Deployment

The portfolio can be deployed using platforms such as:

* Vercel
* Netlify
* GitHub Pages

The production workflow is:

```text
GitHub Repository
       │
       ▼
Production Build
       │
       ▼
Deployment Platform
       │
       ▼
Live Portfolio
```

---

## Version Control

Git is used to track changes throughout development.

Typical workflow:

```bash
git status

git add .

git commit -m "Add projects section"

git push
```

Commits are kept descriptive so that the development history remains understandable.

---

## Goals of the Project

This project is not only intended to serve as a personal website.

It is also an opportunity to improve practical knowledge of:

* React
* Component architecture
* Frontend development
* Responsive web design
* JavaScript
* Git and GitHub
* Web deployment
* UI/UX principles
* API integration
* Performance optimization

The portfolio itself is treated as an evolving software project rather than a one-time website.

---

## Author

### Sounak Banerjee

**Computer Engineering Student | Software Developer**

Interested in:

```text
Software Development
        │
        ├── C / C++
        ├── Java
        ├── Python
        ├── JavaScript / React
        ├── System Programming
        ├── Data Structures & Algorithms
        └── Application Development
```

---

## Connect

* **GitHub:** [28-Sounak](https://github.com/28-Sounak)
* **LinkedIn:** Add your LinkedIn profile
* **Portfolio:** Coming soon

---

## License

This project is primarily intended as a personal portfolio.

The source code may be referenced for educational purposes, but personal content, branding, images, and other identifying materials should not be reused without permission.

---

<p align="center">
  Built with React and curiosity.
</p>

<p align="center">
  <sub>© 2026 Sounak Banerjee</sub>
</p>
