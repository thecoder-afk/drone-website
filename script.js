* {
  box-sizing: border-box;
}

:root {
  --bg: #07141b;
  --bg-2: #0d1f2d;
  --card: rgba(15, 30, 39, 0.78);
  --card-strong: rgba(12, 26, 34, 0.96);
  --text: #edf6ff;
  --muted: #a8bbcb;
  --line: rgba(255, 255, 255, 0.08);
  --primary: #66d9ff;
  --accent: #8ef0d2;
  --shadow: 0 28px 60px rgba(0, 0, 0, 0.38);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  background:
    radial-gradient(circle at top left, rgba(102, 217, 255, 0.18), transparent 30%),
    radial-gradient(circle at bottom right, rgba(142, 240, 210, 0.14), transparent 28%),
    var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1100px, calc(100% - 2rem));
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 40;
  backdrop-filter: blur(18px);
  background: rgba(7, 20, 27, 0.75);
  border-bottom: 1px solid var(--line);
}

.nav-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 78px;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  font-weight: 700;
}

.brand-mark {
  display: inline-grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 0.8rem;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #051b25;
  font-weight: 800;
}

.nav {
  display: inline-flex;
  align-items: center;
  gap: 1.4rem;
  color: var(--muted);
}

.nav a {
  position: relative;
  transition: color 0.2s ease;
}

.nav a.active,
.nav a:hover,
.nav a:focus-visible,
.footer-links a:hover,
.footer-links a:focus-visible,
.inline-link:hover,
.inline-link:focus-visible {
  color: var(--text);
}

.nav a.active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.5rem;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
}

.nav-cta,
.primary-btn,
.secondary-btn,
.contact-form button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  text-align: center;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.nav-cta,
.primary-btn,
.contact-form button {
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #041b26;
  box-shadow: 0 15px 25px rgba(103, 217, 255, 0.24);
}

.nav-cta {
  padding: 0.8rem 1.1rem;
}

.primary-btn,
.contact-form button {
  padding: 1rem 1.45rem;
}

.secondary-btn {
  padding: 1rem 1.3rem;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text);
}

.nav-cta:hover,
.primary-btn:hover,
.secondary-btn:hover,
.contact-form button:hover,
.nav-cta:focus-visible,
.primary-btn:focus-visible,
.secondary-btn:focus-visible,
.contact-form button:focus-visible {
  transform: translateY(-1px);
}

.hero {
  padding: 4.5rem 0 3rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 2rem;
}

.eyebrow {
  margin: 0 0 1rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--primary);
}

h1, h2, h3, p {
  margin-top: 0;
}

h1 {
  font-size: clamp(2.7rem, 5vw, 4.8rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
  margin-bottom: 1.2rem;
}

h2 {
  font-size: clamp(2.1rem, 3vw, 3.2rem);
  line-height: 1.1;
  letter-spacing: -0.05em;
  margin-bottom: 0;
}

.lead,
.page-hero p,
.feature-card p,
.service-card p,
.review-card p,
.price-card p,
.gallery-copy span,
.details-box li,
.contact-box label,
.contact-box span,
.project-card p,
.footer-wrap p {
  color: var(--muted);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 2rem 0;
}

.hero-stats {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}

.hero-stats li {
  display: grid;
  gap: 0.25rem;
}

.hero-stats strong {
  font-size: 1.5rem;
  line-height: 1;
}

.hero-stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-visual {
  position: relative;
  min-height: 520px;
  display: grid;
  place-items: center;
}

.drone-scene {
  position: relative;
  width: min(100%, 520px);
  height: 360px;
  border-radius: 2rem;
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(120, 200, 255, 0.08), rgba(14, 30, 39, 0.9)),
    linear-gradient(135deg, #0d1f2d, #0d1520);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.drone-scene::before,
.drone-scene::after {
  content: "";
  position: absolute;
  inset: auto 0 0 0;
  height: 42%;
  background: linear-gradient(180deg, rgba(72, 120, 146, 0.08), rgba(5, 10, 12, 0.7));
}

.drone-scene::after {
  inset: 0 0 auto 0;
  height: 40%;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), transparent 62%);
}

.drone {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 210px;
  height: 90px;
}

.body {
  position: absolute;
  left: 28px;
  right: 28px;
  top: 30px;
  height: 26px;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(255,255,255,0.72), rgba(123, 168, 182, 0.78));
  border: 1px solid rgba(255,255,255,0.28);
  box-shadow: 0 0 26px rgba(126, 214, 255, 0.34);
}

.prop {
  position: absolute;
  width: 24px;
  height: 68px;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(189, 215, 228, 0.82), rgba(129, 152, 167, 0.52));
  animation: spin 2.6s linear infinite;
}

.prop-1 { left: 12px; top: 8px; }
.prop-2 { right: 12px; top: 8px; }
.prop-3 { left: 12px; bottom: 8px; }
.prop-4 { right: 12px; bottom: 8px; }

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.glass-card {
  position: absolute;
  z-index: 2;
  padding: 1rem 1.1rem;
  border-radius: 1rem;
  background: rgba(13, 25, 34, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
  backdrop-filter: blur(10px);
}

.card-left {
  left: 0;
  top: 2rem;
  max-width: 230px;
}

.card-right {
  right: 0;
  bottom: 2rem;
  min-width: 220px;
}

.badge {
  display: inline-block;
  margin-bottom: 0.55rem;
  padding: 0.45rem 0.7rem;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: rgba(103, 217, 255, 0.12);
  color: var(--primary);
}

.glass-card h3 {
  margin-bottom: 0.3rem;
}

.glass-card p,
.glass-card strong {
  margin: 0;
  color: var(--text);
}

.sponsors {
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  background: rgba(255,255,255,0.01);
}

.logo-row {
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 0;
  text-align: center;
  color: rgba(237,246,255,0.7);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.83rem;
}

.section {
  padding: 5.5rem 0;
}

.section-heading {
  margin-bottom: 2.4rem;
}

.split-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 2rem;
}

.inline-link {
  color: var(--primary);
  font-weight: 600;
}

.feature-grid,
.review-grid,
.pricing-grid,
.gallery-grid,
.service-layout {
  display: grid;
  gap: 1.2rem;
}

.feature-grid,
.review-grid,
.service-layout {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.feature-card,
.review-card,
.service-card,
.price-card,
.contact-box,
.details-box {
  background: rgba(255,255,255,0.02);
  border: 1px solid var(--line);
  border-radius: 1.4rem;
  box-shadow: var(--shadow);
}

.feature-card,
.service-card,
.price-card,
.contact-box,
.details-box {
  padding: 1.8rem 1.4rem;
}

.icon {
  display: inline-grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.9rem;
  background: rgba(103, 217, 255, 0.1);
  color: var(--primary);
  font-size: 1.2rem;
  margin-bottom: 1rem;
}

.icon.large {
  font-size: 1.5rem;
  width: 3.3rem;
  height: 3.3rem;
}

.feature-card h3,
.service-card h3,
.contact-box h3,
.details-box h3,
.price-card h3 {
  margin-bottom: 0.8rem;
}

.service-card ul,
.price-card ul,
.details-box ul {
  margin: 1rem 0 0;
  padding-left: 1.2rem;
  color: var(--muted);
}

.stats-band {
  padding: 0 0 2rem;
}

.stats-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  padding: 1.8rem 1.6rem;
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  background: rgba(255,255,255,0.02);
}

.stats-row div {
  display: grid;
  gap: 0.2rem;
  text-align: center;
}

.stats-row strong {
  font-size: clamp(1.4rem, 2vw, 2rem);
}

.stats-row span {
  color: var(--muted);
}

.project-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr;
  gap: 1rem;
}

.project-card {
  position: relative;
  min-height: 340px;
  padding: 1.4rem;
  border: 1px solid var(--line);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: end;
  box-shadow: var(--shadow);
  overflow: hidden;
  background-size: cover;
  background-position: center;
}

.project-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(4, 12, 18, 0.12), rgba(4, 12, 18, 0.76));
}

.project-card > * {
  position: relative;
  z-index: 1;
}

.project-one {
  background-image: linear-gradient(135deg, rgba(18, 38, 48, 0.18), rgba(18, 38, 48, 0.38)),
    radial-gradient(circle at 20% 25%, rgba(163, 231, 255, 0.35), transparent 22%),
    linear-gradient(160deg, #335e72, #0f1d28);
}

.project-two {
  background-image: linear-gradient(135deg, rgba(18, 38, 48, 0.2), rgba(18, 38, 48, 0.4)),
    radial-gradient(circle at 60% 30%, rgba(138, 240, 211, 0.25), transparent 20%),
    linear-gradient(160deg, #1d3d4f, #0b171f);
}

.project-three {
  background-image: linear-gradient(135deg, rgba(18, 38, 48, 0.2), rgba(18, 38, 48, 0.4)),
    radial-gradient(circle at 40% 20%, rgba(186, 160, 255, 0.25), transparent 25%),
    linear-gradient(160deg, #2f3d6b, #0d1726);
}

.project-tag {
  align-self: flex-start;
  display: inline-block;
  padding: 0.5rem 0.7rem;
  border: 1px solid rgba(255,255,255,0.12);
  background: rgba(9, 18, 25, 0.54);
  border-radius: 999px;
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.project-card h3 {
  margin: 0.8rem 0 0.35rem;
  color: var(--text);
  font-size: 1.8rem;
}

.review-card {
  padding: 1.5rem 1.2rem;
}

.stars {
  letter-spacing: 0.2em;
  color: #ffd166;
  font-size: 1rem;
  margin-bottom: 1rem;
}

.review-card strong {
  display: block;
  margin-top: 1rem;
  color: var(--text);
}

.review-card span {
  display: block;
  margin-top: 0.15rem;
  color: var(--muted);
  font-size: 0.85rem;
}

.page-hero {
  padding: 5rem 0 2rem;
}

.small-center {
  text-align: center;
  max-width: 760px;
  margin: 0 auto;
}

.service-layout {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.pricing-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.price-card {
  position: relative;
}

.price-card.highlighted {
  border-color: rgba(103, 217, 255, 0.4);
  background: linear-gradient(180deg, rgba(103, 217, 255, 0.08), rgba(255,255,255,0.02));
}

.plan-name {
  color: var(--primary);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.72rem;
}

.gallery-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.gallery-card {
  position: relative;
  min-height: 260px;
  border-radius: 1.5rem;
  overflow: hidden;
  border: 1px solid var(--line);
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow);
}

.gallery-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(7, 17, 23, 0.06), rgba(7, 17, 23, 0.78));
}

.gallery-copy {
  position: absolute;
  left: 1.2rem;
  right: 1.2rem;
  bottom: 1rem;
  z-index: 1;
}

.gallery-copy span {
  display: block;
  margin-bottom: 0.3rem;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(237,246,255,0.75);
}

.gallery-copy h3 {
  margin: 0;
  font-size: 1.6rem;
}

.g1 {
  background-image: radial-gradient(circle at 20% 30%, rgba(166, 226, 255, 0.45), transparent 22%),
    linear-gradient(160deg, #2d647d, #0e1e2d);
}

.g2 {
  background-image: radial-gradient(circle at 60% 35%, rgba(142, 240, 210, 0.4), transparent 18%),
    linear-gradient(160deg, #2d5362, #101b22);
}

.g3 {
  background-image: radial-gradient(circle at 35% 22%, rgba(175, 184, 255, 0.42), transparent 20%),
    linear-gradient(160deg, #394a7b, #0d1826);
}

.g4 {
  background-image: radial-gradient(circle at 50% 25%, rgba(115, 213, 255, 0.42), transparent 18%),
    linear-gradient(160deg, #294f6f, #10212b);
}

.g5 {
  background-image: radial-gradient(circle at 72% 20%, rgba(198, 202, 255, 0.36), transparent 22%),
    linear-gradient(160deg, #1f4255, #0d1b25);
}

.g6 {
  background-image: radial-gradient(circle at 28% 24%, rgba(142, 240, 210, 0.38), transparent 22%),
    linear-gradient(160deg, #2a4d57, #0d1923);
}

.contact-layout {
  display: grid;
  grid-template-columns: 1.1fr 0.7fr;
  gap: 1.25rem;
}

.contact-form {
  display: grid;
  gap: 1rem;
}

.contact-form label {
  display: grid;
  gap: 0.45rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border-radius: 0.9rem;
  border: 1px solid var(--line);
  background: rgba(7, 20, 27, 0.74);
  color: var(--text);
  padding: 0.9rem 1rem;
}

.details-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 0.8rem;
}

.site-footer {
  padding: 1rem 0 2.5rem;
}

.footer-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-top: 1px solid var(--line);
  padding-top: 1.3rem;
}

.footer-links {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  color: var(--muted);
}

@media (max-width: 900px) {
  .feature-grid,
  .review-grid,
  .pricing-grid,
  .gallery-grid,
  .service-layout,
  .project-grid,
  .contact-layout {
    grid-template-columns: 1fr;
  }

  .hero-grid {
    grid-template-columns: 1fr;
  }

  .stats-row {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .nav {
    display: none;
  }
}

@media (max-width: 560px) {
  .nav-wrap,
  .footer-wrap,
  .split-heading {
    display: grid;
    justify-content: stretch;
  }

  .nav-cta {
    width: 100%;
  }

  .stats-row,
  .logo-row {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 3rem;
  }

  .glass-card {
    position: static;
    width: 100%;
    margin-bottom: 1rem;
  }

  .hero-visual {
    display: block;
    min-height: auto;
  }

  .drone-scene {
    min-height: 290px;
  }
}
