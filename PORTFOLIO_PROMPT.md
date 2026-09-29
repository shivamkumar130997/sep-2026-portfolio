# Shivam Kumar Portfolio — Complete Design Prompt

Build a premium, responsive portfolio website for **Shivam Kumar**, a Senior Software Engineer specializing in AI/GenAI and full-stack engineering.

The portfolio should feel:

- Premium
- Minimal
- Technical
- Product-focused
- Enterprise-focused
- Modern
- Interactive
- Responsive

Do not make it feel like a generic developer template. The visual style should communicate senior-level engineering, product thinking, and practical AI delivery.

## Personal positioning

Use this positioning throughout the portfolio:

**Senior Software Engineer · AI / GenAI Full-Stack**

Primary message:

> I turn complex enterprise workflows into reliable, human-friendly products — from system design and APIs to polished interfaces and AI-assisted automation.

Core positioning:

> AI + Full-Stack Engineering

Supporting message:

> From production APIs to useful AI workflows.

## Hero section

Create a large interactive hero with the character illustration as the primary visual anchor.

Hero headline:

> Building software
> with a point of view.

Hero layout:

- Minimal top navigation with brand name: **Shivam Kumar**.
- Desktop navigation links: Work, Skills, About, Contact.
- Availability indicator: **Open to thoughtful work**.
- Large left-aligned headline and supporting copy.
- Large generated character illustration on the right, based on Shivam Kumar’s provided profile image.
- Laptop must remain visible.
- Character head must not be cropped.
- Leave clean space above the character for navigation.
- Use a bright white glow behind the character.
- Use the controlled warm editorial palette: `#F7F5EF`, `#EFECE5`, `#111111`, `#181818`, and coral accent `#FF5A36`.
- Keep the center mostly light and use gradients only for subtle hero atmosphere.

Hero actions:

- Primary: **View selected work**
- Secondary: **Download resume**
- Keep the Crio portfolio as a supporting link in About, credentials, or the footer rather than presenting three equal CTAs.

Hero interaction cue:

- Use a subtle premium card with the text:
  - **Interactive introduction**
  - **Hover the stage to explore**
- Use three small dots to imply left, center, and right interaction zones.
- Avoid loud instructional copy such as “Move cursor to call me”.

Hero technical labels:

- Keep `API / 42ms`, `AI WORKFLOW`, `EVENT -> KAFKA`, and `PROD` inside the character stage.
- Labels must not be positioned relative to the full hero copy area.
- Use `white-space: nowrap`, `pointer-events: none`, and restrained vertical movement so labels never cover the headline or supporting text.
- Reposition labels independently for tablet and mobile.

## Interactive character behavior

The hero is divided into three horizontal cursor zones.

### Left zone

- Show contextual message: **Anyone here on the left?**
- Move the character subtly left.
- Add a very subtle directional visual cue.
- Hold the reaction for approximately 2–3 seconds.
- Smoothly return to the default position.

### Right zone

- Show contextual message: **Anyone here on the right?**
- Move the character subtly right.
- Add a very subtle directional visual cue.
- Hold the reaction for approximately 2–3 seconds.
- Smoothly return to the default position.

### Center zone

The center should be the main greeting interaction.

Use a timed greeting sequence:

1. **Hey, it’s you!**
2. **Hiiii!**
3. **Check out the portfolio**

Supporting messages can include:

- I was hoping you would stop by
- Welcome to my little corner of the web
- The good stuff is waiting below

The center interaction should:

- Slightly lift the character.
- Add a subtle shadow/glow change.
- Animate the greeting text smoothly.
- Avoid making the character literally follow the cursor.
- Use the cursor only to select the interaction zone.

Use lightweight JavaScript and `requestAnimationFrame` or CSS transitions where appropriate. Avoid unnecessary framework re-renders or heavy animation libraries.

## Work section

Use a premium dark-theme bento-style section.

Section label:

> Selected work · 01

Heading:

> Built for complex products.
> Designed for real-world impact.

Supporting copy:

> I build and scale enterprise products across insurance, utilities, healthcare, and HR/ATS — combining strong engineering, system design, and product thinking to solve real business problems.

Do not use the old copy:

> Enterprise depth. Product-minded delivery.

### Work section visual treatment

- Use a dark charcoal / near-black background.
- Use subtle dusty-rose highlights.
- Use strong typography and hierarchy.
- Avoid excessive glassmorphism and excessive gradients.
- Use subtle scroll-reveal animation.
- Animate heading, supporting copy, impact panel, and project grid separately.

### Product thinking flow

Show the connection:

> Product thinking → Engineering → Scalable systems → Business impact

### Industry cards

Add small premium cards for:

- **Insurance** — Onboarding, licensing, appointments, and commission workflows.
- **Utilities** — Multi-client platforms, operations, integrations, and delivery.
- **Healthcare** — Provider, patient, and administrator journeys through APIs.
- **HR / ATS** — Job-seeker, onboarding, education, and reporting workflows.

Cards can use subtle icons, borders, glow, hover lift, and micro-interactions. Important information must remain visible without hover.

## Projects

Keep the project grid responsive. Desktop may use two columns; tablets should reduce intelligently; mobile must use one column.

### Client-confidential projects

Do not add public URLs for enterprise client work. Label these clearly as **Client-confidential**.

#### GenAI Workflow Automation

- GPT / LLM
- .NET
- REST APIs
- Prompt/workflow integration
- Testing and deployment support
- Production use
- Result: **20% operational efficiency improvement**

#### RAG & Agentic Systems

- RAG
- Python
- Node.js
- Embeddings
- Vector search
- Tool calling
- Structured outputs
- Guardrails
- Evaluation

#### EDWAO — ATS / Virtual Campus Platform

- React 18
- Node.js
- Express
- .NET Core API
- SQL Server
- Entity Framework
- Job seeker workflows
- Onboarding
- Education
- Attendance
- Calendar
- Examination
- Reporting

#### PM247 Digital

- ASP.NET MVC
- C#
- SQL Server
- JavaScript
- jQuery
- Razor
- REST APIs
- Azure
- Customer-facing service workflows

### Public projects

#### BuildTone — Construction & Builder Website

- Timeline: Jan 2026 — Present
- Associated with Smart Innovative Enterprises
- URL: https://www.buildtone.in/
- Mobile-first construction and builder website.
- Premium brand design.
- Services and project showcase.
- Contact form with frontend validation.
- EmailJS-ready enquiry flow.
- WhatsApp and email contact integration.
- SEO metadata, sitemap, and robots.txt.
- Optimized local assets.
- Smooth scroll and reveal animations.
- GoDaddy deployment-ready build.
- Technologies: HTML, CSS, JavaScript, EmailJS, Responsive Design, SEO, Static Hosting.

#### Silos.in

- Timeline: Jan 2026 — May 2026
- Associated with Smart Innovative Enterprises
- URL: https://www.silos.in/
- Authentication logic.
- Shopping cart and checkout.
- Responsive UI.
- REST API data loading.
- Netlify deployment.

#### QKart — Shop With Us

- Timeline: Jan 2023 — Mar 2023
- Associated with Smart Innovative Enterprises
- URL: https://crio-2016010077-shivam-meqtripstatic.netlify.app/
- React e-commerce application.
- Authentication.
- Cart and checkout.
- Keyword search.
- Debouncing.
- Material UI Grid.
- Reusable React components.
- REST API integration.
- Error handling.
- Responsive design.
- Netlify deployment.

#### QTrip — Trip With Us

- Timeline: Nov 2022 — Jan 2023
- Associated with Smart Innovative Enterprises
- URL: https://crio2016010077shivamqtripdynamic.netlify.app/
- Dynamic travel website.
- Multi-select filters.
- Image carousels.
- Conditional rendering.
- LocalStorage preferences.
- Reservation form submission.
- HTML, CSS, JavaScript, Bootstrap, REST APIs, JSON, DOM manipulation, cURL.
- Netlify and Heroku deployment.

## Skills section

Create a complete categorized skills section from the resume.

### AI & GenAI engineering

GPT/LLM application integration, prompt engineering, Retrieval-Augmented Generation, document chunking, embeddings, vector search, hybrid search, agentic workflows, tool/function calling, structured outputs, evaluation, guardrails, observability, latency/cost awareness, and AI-assisted SDLC.

Tools:

OpenAI / ChatGPT, Claude, GitHub Copilot, Cursor, Windsurf, Codex.

### Back-end & APIs

C#, .NET, .NET Core, ASP.NET Core Web API, ASP.NET MVC, Entity Framework, LINQ, ADO.NET, REST APIs, background jobs, Node.js, Express.js, Java, Python scripting.

### Front-end engineering

React.js, JavaScript, TypeScript, Angular, AngularJS, Blazor Server, jQuery, AJAX, HTML5, CSS3, Bootstrap, Material UI, Razor, responsive design, reusable components, forms, and client-side state.

### Architecture & engineering

System design, API contracts, modular services, microservices patterns, event-driven workflows, asynchronous workflows, design patterns, SOLID, dependency injection, scalability, resilience, performance tuning, monitoring, and observability.

### Data & persistence

SQL Server, PostgreSQL, MongoDB, MySQL, data modeling, stored procedures, joins, indexing, query optimization, API-to-database integration, Entity Framework, and data-access layers.

### Cloud, DevOps & quality

Azure, Azure DevOps, AWS fundamentals, EC2, S3, IAM, CloudWatch, VPC, Docker, CI/CD, Git, GitHub, GitLab, TFS, SonarQube, Datadog, Kong.

Additional requested engineering capabilities:

- Kafka
- Redis
- Production AI on AWS

### Technical leadership

Module ownership, architecture/design reviews, requirements, estimation, code reviews, mentoring, release coordination, client/SPOC communication, Agile/Scrum, cross-functional delivery, SDLC, root-cause analysis, production incident support, documentation, and release management.

### Domain experience

Life and annuity insurance, producer/agent onboarding, licensing and appointments, commission workflows, utilities and energy, healthcare, HR/ATS, education, and digital services.

## Experience

### Software Engineer II · Zinnia

Timeline: Apr 2025 — Present

Build and enhance Agent Onboarding and Commission Calculation capabilities for U.S. life and annuity clients, connecting reliable APIs, modern interfaces, data systems, and operational workflows across a distributed enterprise platform.

Technologies:

.NET / .NET Core, AngularJS / Angular, MongoDB, SQL Server, PostgreSQL, Java, Azure DevOps, Git, GitHub, TFS, SonarQube, Datadog.

AI + Full-Stack focus:

Designing the connective layer between enterprise systems and intelligent experiences using .NET APIs, LLM application patterns, prompting, embeddings, vector search, RAG, tool calling, agentic workflows, MCP, evaluation, observability, Kafka, Redis, OpenAI/ChatGPT, Claude, Codex, and production AI on AWS.

### Module Lead · Smart Energy Water

Timeline: Sep 2022 — Apr 2025

Served as Module Lead and SPOC for six global utility clients. Owned requirements, estimation, technical planning, delivery coordination, stakeholder communication, mentoring, and production issue resolution across time zones.

Technologies:

ASP.NET MVC, C#, REST APIs, SQL Server, Razor, JavaScript, jQuery, AJAX, Azure, GPT/LLM workflow automation.

### Associate Consultant Developer · Oodles Technologies

Timeline: Mar 2022 — Sep 2022

Redesigned and enhanced the PM247 production web application, built UI features, integrated backend APIs, followed layered MVC architecture, and partnered with QA on issue resolution and release stabilization.

Technologies:

ASP.NET MVC, C#, SQL Server, JavaScript, jQuery, Razor, REST APIs, Azure deployment.

### Associate Software Engineer · SmartData Enterprises

Timeline: Sep 2021 — Mar 2022

Developed and maintained ASP.NET MVC applications, estimated enhancements, improved SQL/data flows, and resolved production issues.

Technologies:

C#, Entity Framework, LINQ, SQL Server, stored procedures, workflow-based backend systems.

### Associate Software Engineer · Brucode Technology

Timeline: Sep 2020 — Sep 2021

Built and supported ASP.NET/C# web applications, JavaScript/jQuery frontends, SQL Server data-access modules, and Entity Framework features while completing practical ASP.NET 5.0 training.

Technologies:

ASP.NET / C#, JavaScript, jQuery, SQL Server, Entity Framework, ASP.NET 5.0.

## Education

Integrated Bachelor of Technology + Master of Technology in Computer Science and Engineering (Software Engineering).

Sharda University, Greater Noida, India · 2016 — 2021 · 70.87%

## Certification

**Fellowship Full Stack Development**

Crio.Do · Issued Jan 2023

Credential:

https://www.crio.do/learn/certificate/crio-2016010077-shivam/TRACK_FELLOWSHIP_FULL_STACK_V3/

## Publication

**Named Entity Recognition in Natural Language Processing: A Systematic Review**

Springer · 2022

https://link.springer.com/chapter/10.1007/978-981-16-3346-1_66

## Contact and links

- Email: 2016010077.shivam@gmail.com
- WhatsApp: +91 72109 97712
- WhatsApp link: https://wa.me/917210997712
- LinkedIn: https://www.linkedin.com/in/shivam-kumar-pal-7399681b4/
- GitHub: https://github.com/shivamkumar130997
- Crio portfolio: https://www.crio.do/learn/portfolio/crio-2016010077-shivam/

The contact form should collect:

- Name
- Email
- Query/message

On submit, open WhatsApp with a prefilled message containing all three fields.

## Responsive behavior

The entire portfolio must work cleanly at:

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1366px
- 1440px
- 1920px

### Mobile requirements

- Use a compact menu button below desktop navigation width.
- Mobile menu must be touch-friendly.
- Hero copy must not overflow.
- Hero buttons can wrap or stack.
- Character image must remain inside the viewport.
- Disable or simplify mouse-only effects on touch devices.
- Industry cards become a clean two-column or one-column layout depending on width.
- Project cards become one column.
- Skills and experience remain readable.
- Contact form becomes one column.
- No unintended horizontal scrolling.
- Use `clamp()` for major typography and responsive padding.
- Respect `prefers-reduced-motion`.

## Performance and implementation guidance

- Keep the current lightweight HTML/CSS/JavaScript architecture.
- Avoid unnecessary animation libraries.
- Use CSS transitions and small JavaScript state changes.
- Lazy-load or optimize heavy images where appropriate.
- Use `max-width: 100%` and responsive `object-fit` for images.
- Keep all important information visible without hover.
- Use scroll reveal only where it improves hierarchy.
- Keep the generated character image as the main hero asset.
- If real video frames become available later, replace the CSS character movement with frame-based animation while preserving the three-zone interaction model.

## Current project files

- `index.html` — portfolio structure and content
- `styles.css` — responsive visual system and animations
- `script.js` — hero interactions, greeting sequence, mobile menu, and WhatsApp form
- `assets/shivam-hero.png` — generated hero illustration based on the profile photo
- `assets/Shivam_Kumar_AI_Full_Stack_Resume.pdf` — downloadable resume
- `server.mjs` — local static server

## Local development

```powershell
cd "C:\Shivam Kumar\sk\sk-porfolis"
node server.mjs
```

Open:

http://127.0.0.1:4173

Refresh with `Ctrl + F5` after editing files.

## Latest responsive UX pass

The current implementation now treats desktop, tablet, and mobile as intentional versions of the same design system.

Responsive improvements include:

- Mobile-first hero composition with natural height, contained character art, visible laptop, and wrapped CTAs.
- Tablet-specific hero layouts between 701px and 1100px.
- Mobile menu with touch-friendly links, focus restoration, Escape-to-close behavior, and scroll locking.
- Custom cursor limited to precise hover-capable pointers only.
- Tap-to-say-hello character interaction on touch devices.
- Industry cards become tappable accordion-style cards on mobile.
- Product-thinking flow becomes a vertical pipeline on mobile.
- AI pipeline becomes a readable vertical flow on mobile.
- Projects collapse to one column on small screens.
- Skills collapse into readable vertical capability entries.
- Experience entries become clean vertical stacks.
- Contact form becomes full-width and touch-friendly.
- Safe-area padding for mobile menus, footer, and bottom spacing.
- `clamp()` typography and responsive spacing for small phones through large monitors.
- Explicit breakpoints for 360px, 600px, 700px, 920px, 1100px, and desktop widths.
- `max-width: 100%`, `overflow-wrap: anywhere`, and contained visual regions to prevent accidental horizontal overflow.
- `prefers-reduced-motion` support for loaders, cursor effects, reveal animations, floating labels, and card movement.
- Focus-visible outlines for keyboard users.
- Improved warm off-white, charcoal, and coral contrast across light and dark sections.

Responsive QA target widths:

`320px`, `360px`, `375px`, `390px`, `412px`, `430px`, `600px`, `768px`, `820px`, `912px`, `1024px`, `1280px`, `1366px`, `1440px`, and `1920px`.

Touch behavior is intentionally different from desktop behavior: hover-only cursor and parallax effects are disabled, while important content remains visible and the hero character can be tapped to start the greeting sequence.

## Latest visual polish pass

The visual system is now tokenized around one coherent palette:

- Primary light: `#F7F5EF`
- Secondary light: `#EFECE5`
- Dark: `#111111`
- Dark soft: `#181818`
- Primary text: `#161616`
- Secondary text: `#646464`
- Text on dark: `#F7F5EF`
- Muted text on dark: `#A6A6A6`
- Accent: `#FF5A36`
- Soft accent: `#FF8A70`
- Warm highlight: `#F4C95D`

The older dusty-rose and maroon colors are treated as accent aliases rather than separate visual systems. Light, dark, muted, border, form, navigation, card, and footer colors are intentionally separated for clearer contrast.

The redesign also includes:

- A stronger resume CTA hierarchy with Résumé as a navigation action and Crio portfolio kept as a supporting link.
- A compact Now section covering current building, exploring, and learning themes.
- Engineering principles: easy to understand, safe to change, observable, fast enough, and problem-led.
- Project storytelling for problem, built solution, personal contribution, architecture, and measurable outcome.
- A confidential architecture visual using Client UI → API Gateway → .NET Services → Kafka → Processing → MongoDB / SQL.
- A distinct practical AI section: AI engineering built on software engineering fundamentals.
- Stronger outcome emphasis for 20% efficiency improvement and six global utility clients.
- Dark skills treatment with clearer hierarchy between primary capability, supporting technology, and tooling.
- A dark contact ending with higher contrast form fields, labels, links, and WhatsApp CTA.
- Reduced gradient usage so the hero is the main atmospheric moment and most other sections use solid editorial surfaces.

## Latest contrast correction

Dark sections must define their heading colors explicitly instead of relying on inherited light-section styles. In particular:

- The Work heading `Built for complex products. Designed for real-world impact.` uses the light text token on charcoal.
- Its italic/accent phrase uses the soft accent token for visible emphasis.
- Work-section eyebrow labels, impact text, industry titles, and supporting labels use readable dark-theme tokens.
- Every text/background pairing should remain readable at mobile, tablet, and desktop widths; no muted text should blend into its section background.

## Latest animation and interaction pass

The implementation now uses a restrained motion language instead of applying the same fade-up effect everywhere:

- Hero headline lines reveal through a masked vertical motion, followed by the summary, actions, character, and technical labels.
- The hero character has a subtle idle float while preserving the left, center, and right interaction states.
- Technical labels remain contained within the hero stage, move only a few pixels, and cannot cover the editorial copy.
- Metrics count up once when the highlights strip enters the viewport; supported outcomes are not invented.
- Project cards lift slightly, move their titles a few pixels, and rotate their arrows on precise-pointer hover. These effects are simplified on touch devices.
- AI pipeline nodes activate sequentially when the AI section enters view.
- Confidential architecture nodes reveal sequentially while the connector line draws progressively.
- Experience entries reveal in order and the timeline line fills as the section becomes visible.
- “Now” status labels use a small, low-intensity pulse rather than notification-like animation.
- Motion uses transform and opacity where possible, with premium ease-out timing and no scroll-jacking.
- `prefers-reduced-motion: reduce` makes content immediately visible and removes idle loops, cursor motion, staged reveals, and decorative transitions.

## Latest context-aware cursor pass

On precise hover-capable desktop pointers, the cursor now acts as a small signature HUD rather than a generic glow:

- Default state: sharp center dot, thin ring, crosshair marker, and no label.
- Navigation and buttons: `GO ->` / `NAV` / `ACTION` context.
- Projects: `VIEW` / `PROJECT` with target-style rotating brackets.
- GitHub, LinkedIn, email, WhatsApp, live links, and resume: `CODE`, `CONNECT`, `WRITE`, `CHAT`, `LIVE`, and `GET CV` states.
- Character and hero zones: `HEY`, `HELLO`, `LEFT`, and `RIGHT` states.
- AI visuals, architecture, skills, experience, metrics, and contact submit: `AI MODE`, `TRACE`, `INSPECT`, `ROLE`, `IMPACT`, and `SEND ->` states.
- Dark sections switch the cursor to light readable tokens; accent actions use the existing coral accent.
- Labels move away from viewport edges, clicks compress the HUD, and form fields use a simpler `TYPE` state.
- Cursor rendering remains a single DOM element using requestAnimationFrame positioning, `pointer-events: none`, and no touch-device emulation.
- Touch/coarse pointers and reduced-motion users receive simplified or native behavior without cursor decoration.
