document.documentElement.classList.add('js-enabled');

const heroTitle = document.querySelector('#hero-title');
if (heroTitle) {
  heroTitle.innerHTML = '<span class="hero-line"><span>Building software</span></span><span class="hero-line"><em>with a point of view.</em></span>';
  document.documentElement.classList.add('hero-motion-ready');
  requestAnimationFrame(() => document.documentElement.classList.add('hero-entered'));
}

const stage = document.querySelector('#hero-stage');
const imageWrap = document.querySelector('#hero-image-wrap');
const zones = document.querySelectorAll('.interaction-zone');
let activeTimer;
let greetingTimer;
const greetingLine = document.querySelector('#greeting-line');
const greetingSubline = document.querySelector('#greeting-subline');
const greetingSequence = [
  ['Hey 👋', 'You found me.'],
  ['You found me.', 'Have a look around.'],
  ['Have a look around.', 'The good stuff is waiting below ↓'],
];

function resetGreeting() {
  clearInterval(greetingTimer);
  if (greetingLine) greetingLine.textContent = greetingSequence[0][0];
  if (greetingSubline) greetingSubline.textContent = greetingSequence[0][1];
}

function playGreeting() {
  clearInterval(greetingTimer);
  let index = 0;
  const showNext = () => {
    const [line, subline] = greetingSequence[index];
    if (greetingLine) greetingLine.textContent = line;
    if (greetingSubline) greetingSubline.textContent = subline;
    stage.dataset.greetingStage = String(index + 1);
    index = (index + 1) % greetingSequence.length;
  };
  showNext();
  greetingTimer = setInterval(showNext, 1050);
}

function setState(zone) {
  clearTimeout(activeTimer);
  stage.dataset.active = zone;
  if (zone === 'center') {
    playGreeting();
    imageWrap.animate([{ transform: 'translateY(0) scale(1)' }, { transform: 'translateY(-8px) scale(1.015)' }], { duration: 560, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' });
    return;
  }
  activeTimer = setTimeout(() => {
    stage.dataset.active = '';
    imageWrap.animate([{ transform: zone === 'left' ? 'translateX(-13px) rotate(-1deg)' : 'translateX(13px) rotate(1deg)' }, { transform: 'translateX(0) rotate(0)' }], { duration: 750, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' });
  }, 2400);
}

zones.forEach((zone) => zone.addEventListener('mouseenter', () => setState(zone.dataset.zone)));
stage.addEventListener('mouseleave', () => { clearTimeout(activeTimer); stage.dataset.active = ''; stage.dataset.greetingStage = ''; resetGreeting(); });

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
  if (entry.isIntersecting) {
    entry.target.classList.add('is-visible');
    if (entry.target.matches('.ai-lab')) animatePipeline(entry.target);
    if (entry.target.matches('.metrics-strip')) animateMetrics(entry.target);
    if (entry.target.matches('.project-story-section')) animateArchitecture(entry.target);
    if (entry.target.matches('.timeline-section')) animateTimeline(entry.target);
  }
}), { threshold: 0.12 });
document.querySelectorAll('.section, .metrics-strip, .contact-section, .ai-lab, .personal-section, .now-section, .principles-section, .project-story-section').forEach((el) => observer.observe(el));
const aiLab = document.querySelector('#ai-lab');
const skillsSection = document.querySelector('#skills');
if (aiLab && skillsSection) skillsSection.before(aiLab);
const personalSection = document.querySelector('.personal-section');
const aboutSection = document.querySelector('#about');
if (personalSection && aboutSection) aboutSection.after(personalSection);
const nowSection = document.querySelector('#now');
if (nowSection && personalSection) personalSection.after(nowSection);
const principlesSection = document.querySelector('.principles-section');
if (principlesSection && skillsSection) skillsSection.after(principlesSection);
const projectStorySection = document.querySelector('.project-story-section');
const workSection = document.querySelector('#work');
if (projectStorySection && workSection) workSection.after(projectStorySection);

function animateMetrics(strip) {
  if (strip.dataset.animated) return;
  strip.dataset.animated = 'true';
  strip.querySelectorAll('strong').forEach((metric, index) => {
    const value = metric.textContent.trim();
    const match = value.match(/^(\d+)(.*)$/);
    if (!match || index > 1) {
      metric.classList.add('metric-pop');
      return;
    }
    const end = Number(match[1]);
    const suffix = match[2];
    const duration = 700;
    const start = performance.now();
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      metric.textContent = `${Math.round(end * eased)}${suffix}`;
      if (progress < 1) requestAnimationFrame(tick);
      else metric.classList.add('metric-pop');
    };
    setTimeout(() => requestAnimationFrame(tick), index * 100);
  });
}

function animatePipeline(section) {
  if (section.dataset.animated) return;
  section.dataset.animated = 'true';
  section.querySelectorAll('.ai-flow > div:not(.ai-flow-line)').forEach((node, index) => {
    setTimeout(() => node.classList.add('flow-active'), 180 + index * 130);
  });
}

function animateArchitecture(section) {
  section.querySelectorAll('.architecture-flow').forEach((flow) => {
    flow.classList.add('flow-drawing');
    flow.querySelectorAll('span').forEach((node, index) => {
      setTimeout(() => node.classList.add('node-visible'), 180 + index * 110);
    });
  });
}

function animateTimeline(section) {
  section.querySelector('.timeline')?.classList.add('timeline-active');
  section.querySelectorAll('.timeline-item').forEach((item, index) => {
    setTimeout(() => item.classList.add('role-visible'), index * 100);
  });
}

// Keep the center invitation discoverable for keyboard and touch visitors too.
zones[1].addEventListener('focus', () => setState('center'));

const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const message = `Hi Shivam, my name is ${formData.get('name')}.\n\nEmail: ${formData.get('email')}\n\nMessage:\n${formData.get('query')}`;
  window.open(`https://wa.me/917210997712?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  if (formStatus) formStatus.textContent = 'Opening WhatsApp with your message...';
});

const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
document.querySelector('.timeline-section')?.setAttribute('id', 'experience');
let lastMenuFocus;
menuToggle?.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
  if (isOpen) { lastMenuFocus = document.activeElement; mobileMenu.querySelector('a')?.focus(); }
  else { lastMenuFocus?.focus?.(); }
});
mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  mobileMenu.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('menu-open');
  lastMenuFocus?.focus?.();
}));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && mobileMenu?.classList.contains('is-open')) {
    mobileMenu.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
    lastMenuFocus?.focus?.();
  }
});

const pageLoader = document.querySelector('#page-loader');
window.addEventListener('load', () => window.setTimeout(() => pageLoader?.classList.add('is-loaded'), 650), { once: true });

const scrollProgress = document.querySelector('#scroll-progress span');
const updateScrollProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollProgress && maxScroll > 0) scrollProgress.style.height = `${(window.scrollY / maxScroll) * 100}%`;
};
window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

const industryDetails = {
  insurance: ['Insurance systems', 'Reliable onboarding, licensing, appointments, and commission workflows for complex enterprise operations.'],
  utilities: ['Utilities platforms', 'Multi-client service workflows, integrations, production support, and delivery across time zones.'],
  healthcare: ['Healthcare journeys', 'Provider, patient, and administrator experiences connected through dependable APIs and data flows.'],
  ats: ['HR / ATS platforms', 'Job-seeker, onboarding, education, attendance, examination, and reporting workflows.'],
};
const industryDetail = document.querySelector('#industry-detail');
document.querySelectorAll('.industry-card[data-industry]').forEach((card) => {
  const activate = () => {
    document.querySelectorAll('.industry-card[data-industry]').forEach((item) => item.classList.remove('is-active'));
    card.classList.add('is-active');
    const detail = industryDetails[card.dataset.industry];
    if (industryDetail && detail) industryDetail.innerHTML = `<span>Currently exploring</span><strong>${detail[0]}</strong><p>${detail[1]}</p>`;
  };
  card.addEventListener('mouseenter', activate);
  card.addEventListener('focus', activate);
  card.addEventListener('click', activate);
});

const customCursor = document.querySelector('#custom-cursor');
if (customCursor && window.matchMedia('(pointer: fine) and (hover: hover)').matches) {
  let cursorX = -100; let cursorY = -100; let targetX = -100; let targetY = -100; let rafId;
  const renderCursor = () => {
    cursorX += (targetX - cursorX) * 0.25; cursorY += (targetY - cursorY) * 0.25;
    customCursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
    rafId = requestAnimationFrame(renderCursor);
  };
  const setCursorLabel = (label) => { customCursor.classList.toggle('is-active', Boolean(label)); const text = customCursor.querySelector('b'); if (text) text.textContent = label || ''; };
  window.addEventListener('mousemove', (event) => { targetX = event.clientX; targetY = event.clientY; const target = event.target.closest?.('.project-card,.button,.text-link,.contact-whatsapp,.interaction-zone,.hero-image-wrap,a'); if (target?.classList.contains('interaction-zone')) setCursorLabel(target.dataset.zone === 'center' ? 'HELLO' : target.dataset.zone.toUpperCase()); else if (target?.classList.contains('hero-image-wrap')) setCursorLabel('HEY 👋'); else if (target?.classList.contains('project-card')) setCursorLabel('VIEW'); else if (target?.classList.contains('button')) setCursorLabel('GO →'); else if (target?.matches?.('a')) setCursorLabel('OPEN'); else setCursorLabel(''); }, { passive: true });
  window.addEventListener('mouseleave', () => setCursorLabel(''));
  rafId = requestAnimationFrame(renderCursor);
  window.addEventListener('pagehide', () => cancelAnimationFrame(rafId), { once: true });
}

/* Context-aware HUD states layered onto the existing lightweight follower. */
if (customCursor && window.matchMedia('(pointer: fine) and (hover: hover)').matches) {
  const cursorLabel = customCursor.querySelector('b');
  const cursorMeta = document.createElement('small');
  cursorMeta.className = 'cursor-meta';
  customCursor.append(cursorMeta);
  const updateHudCursor = (event) => {
    const target = event.target;
    const explicit = target.closest?.('[data-cursor]');
    let state = { type: '', label: '', meta: '' };
    if (explicit) state = { type: explicit.dataset.cursor, label: explicit.dataset.cursorLabel || 'INSPECT', meta: explicit.dataset.cursorMeta || '' };
    else if (target.closest?.('input,textarea,select')) state = { type: 'type', label: 'TYPE', meta: 'INPUT' };
    else if (target.closest?.('.interaction-zone')) {
      const zone = target.closest('.interaction-zone').dataset.zone;
      state = zone === 'center' ? { type: 'hello', label: 'HELLO', meta: 'CENTER' } : { type: zone, label: zone.toUpperCase(), meta: zone === 'left' ? '<-' : '->' };
    } else if (target.closest?.('.hero-image-wrap')) state = { type: 'character', label: 'HEY', meta: 'SAY HI' };
    else if (target.closest?.('.project-card')) state = { type: 'project', label: 'VIEW', meta: 'PROJECT' };
    else if (target.closest?.('.ai-flow > div:not(.ai-flow-line),.ai-tags span')) state = { type: 'ai', label: 'AI MODE', meta: 'LLM / ACTIVE' };
    else if (target.closest?.('.architecture-flow')) state = { type: 'trace', label: 'TRACE', meta: 'SYSTEM' };
    else if (target.closest?.('.skills-list h3,.skills-list p,.skill-summary span')) state = { type: 'inspect', label: 'INSPECT', meta: 'SKILL' };
    else if (target.closest?.('.timeline-item')) state = { type: 'role', label: 'ROLE', meta: 'IMPACT' };
    else if (target.closest?.('.metrics-strip strong')) state = { type: 'impact', label: 'IMPACT', meta: 'RESULT' };
    else if (target.closest?.('.contact-form button')) state = { type: 'send', label: 'SEND ->', meta: 'MESSAGE' };
    else {
      const link = target.closest?.('a');
      if (link) {
        const href = link.getAttribute('href') || '';
        if (href.includes('github')) state = { type: 'code', label: 'CODE', meta: '</>' };
        else if (href.includes('linkedin')) state = { type: 'connect', label: 'CONNECT', meta: 'LINK' };
        else if (href.includes('wa.me')) state = { type: 'chat', label: 'CHAT', meta: 'WHATSAPP' };
        else if (href.startsWith('mailto:')) state = { type: 'write', label: 'WRITE', meta: '@_' };
        else if (href.includes('.pdf')) state = { type: 'download', label: 'GET CV', meta: 'DOWNLOAD' };
        else if (href.startsWith('http')) state = { type: 'open', label: 'LIVE', meta: 'EXTERNAL' };
        else state = { type: 'nav', label: 'GO ->', meta: 'NAV' };
      } else if (target.closest?.('.button')) state = { type: 'button', label: 'GO ->', meta: 'ACTION' };
    }
    customCursor.dataset.state = state.type;
    customCursor.classList.toggle('is-active', Boolean(state.label));
    customCursor.classList.toggle('on-dark', Boolean(target.closest?.('.work-section,.project-story-section,.skills-section,.personal-section,.contact-section,.footer')));
    customCursor.classList.toggle('edge-left', event.clientX > window.innerWidth - 150);
    customCursor.classList.toggle('edge-right', event.clientX < 150);
    customCursor.classList.toggle('edge-top', event.clientY > window.innerHeight - 120);
    if (cursorLabel) cursorLabel.textContent = state.label;
    cursorMeta.textContent = state.meta;
  };
  window.addEventListener('mousemove', updateHudCursor, { passive: true });
  window.addEventListener('mousedown', () => customCursor.classList.add('is-pressed'));
  window.addEventListener('mouseup', () => customCursor.classList.remove('is-pressed'));
}

const isTouchDevice = window.matchMedia('(hover: none), (pointer: coarse)').matches;
const heroImage = document.querySelector('#hero-image-wrap');
if (isTouchDevice && heroImage) {
  heroImage.setAttribute('tabindex', '0');
  heroImage.setAttribute('role', 'button');
  heroImage.setAttribute('aria-label', 'Tap to say hello');
  heroImage.addEventListener('click', () => setState('center'));
  heroImage.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setState('center'); } });
}
