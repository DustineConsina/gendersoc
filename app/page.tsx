"use client";

import { useState } from "react";

const sources = [
  {
    id: "who",
    organization: "World Health Organization",
    title: "Violence against women — Fact sheet",
    note: "Global prevalence estimates, definition, risk factors, and health impacts.",
    href: "https://www.who.int/news-room/fact-sheets/detail/violence-against-women",
  },
  {
    id: "ra-9262",
    organization: "Official Gazette of the Republic of the Philippines",
    title: "Republic Act No. 9262 — Anti-VAWC Act of 2004",
    note: "Covered relationships, acts of violence, and protection orders.",
    href: "https://lawphil.net/statutes/repacts/ra2004/ra_9262_2004.html",
  },
  {
    id: "ra-9710",
    organization: "Official Gazette of the Republic of the Philippines",
    title: "Republic Act No. 9710 — Magna Carta of Women",
    note: "National framework recognizing women's rights and protection from violence.",
    href: "https://lawphil.net/statutes/repacts/ra2009/ra_9710_2009.html",
  },
  {
    id: "ra-11313",
    organization: "Official Gazette of the Republic of the Philippines",
    title: "Republic Act No. 11313 — Safe Spaces Act",
    note: "Gender-based sexual harassment in public spaces, online, work, and education.",
    href: "https://lawphil.net/statutes/repacts/ra2019/ra_11313_2019.html",
  },
  {
    id: "pcw",
    organization: "Philippine Commission on Women",
    title: "Violence Against Women",
    note: "Philippine public information and links to services and support.",
    href: "https://pcw.gov.ph/violence-against-women/",
  },
];

const supportSteps = [
  "Listen and take what they share seriously",
  "Say clearly: “This is not your fault.”",
  "Ask what they need; let them make their own choices",
  "Offer practical help without pressuring them",
  "Keep their story private; ask before sharing it",
  "Offer to find a trusted local service together",
];

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M5 15 15 5M6 5h9v9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkedSteps, setCheckedSteps] = useState<number[]>([]);

  function toggleStep(index: number) {
    setCheckedSteps((current) =>
      current.includes(index)
        ? current.filter((step) => step !== index)
        : [...current, index],
    );
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <div className="utility-bar">
        <span>AN EVIDENCE-BASED LEARNING RESOURCE</span>
        <span>PHILIPPINES <span className="utility-divider">/</span> GENDER & SAFETY</span>
      </div>

      <header className="site-header" id="top">
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Safer Together home">
          <span className="brand-mark" aria-hidden="true">S</span>
          <span>safer<span>together</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className={`menu-icon${menuOpen ? " is-open" : ""}`} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
        <nav
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <a href="#issue" onClick={closeMenu}>The issue</a>
          <a href="#evidence" onClick={closeMenu}>Evidence</a>
          <a href="#law" onClick={closeMenu}>Philippine law</a>
          <a href="#support" onClick={closeMenu}>Get support</a>
          <a className="nav-button" href="#sources" onClick={closeMenu}>
            Sources <ArrowIcon diagonal />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-content">
            <p className="eyebrow"><span className="eyebrow-mark" /> INTIMATE PARTNER VIOLENCE · AWARENESS & ACTION</p>
            <h1 id="hero-title">Care should never come with <span>fear.</span></h1>
            <p className="hero-lede">
              Abuse by a current or former partner can be difficult to name. Learn the signs,
              understand your rights, and explore how to offer support.
            </p>
            <div className="hero-message">
              <span className="message-quote" aria-hidden="true">“</span>
              <p>You deserve relationships built on respect, trust, and safety.</p>
              <span className="message-credit">A STARTING POINT FOR EVERY CONVERSATION</span>
            </div>
            <aside className="hero-aside" aria-label="Key fact">
              <div className="hero-stat">25.8<sup>%</sup></div>
              <div className="hero-stat-copy">
                <span className="stat-label">A GLOBAL LIFETIME ESTIMATE · WHO</span>
                <p>of ever-partnered women aged 15–49 have experienced physical and/or sexual violence by an intimate partner.</p>
                <a className="hero-source" href="#claim-prevalence">
                  Understand the statistic <ArrowIcon />
                </a>
              </div>
            </aside>
            <div className="hero-actions">
              <a className="button button-primary" href="#issue">Learn to recognize abuse <ArrowIcon /></a>
              <a className="button button-outline" href="#support">How to support someone</a>
            </div>
          </div>
          <a className="hero-scroll" href="#issue"><span /> Scroll to explore</a>
        </section>

        <div className="focus-strip">
          <span className="focus-icon" aria-hidden="true">!</span>
          <p><strong>Our focus:</strong> intimate partner violence against women, including physical, sexual, psychological, and economic abuse.</p>
          <a href="#scope">Read the scope <ArrowIcon /></a>
        </div>
        <nav className="guide-nav" aria-label="Explore this guide">
          <span className="guide-nav-label">EXPLORE THIS GUIDE</span>
          <a href="#issue"><span>01</span> Understand <ArrowIcon /></a>
          <a href="#forms-title"><span>02</span> Recognize <ArrowIcon /></a>
          <a href="#evidence"><span>03</span> Evidence <ArrowIcon /></a>
          <a href="#law"><span>04</span> Your rights <ArrowIcon /></a>
          <a href="#support"><span>05</span> Get support <ArrowIcon /></a>
        </nav>

        <section className="section issue-section" id="issue" aria-labelledby="issue-title">
          <div className="section-intro">
            <SectionLabel number="01">UNDERSTAND THE ISSUE</SectionLabel>
            <h2 id="issue-title">Violence is about <span>power and control.</span></h2>
            <p className="section-summary">
              Intimate partner violence (IPV) is behavior by a current or former partner
              that causes physical, sexual, or psychological harm. It can include
              controlling behavior—and it is not limited to physical assault.
            </p>
          </div>
          <div className="issue-detail-grid" id="scope">
            <div className="detail-lead">
              <span className="detail-number">01 / DEFINITION</span>
              <h3>What counts as a partner?</h3>
              <p>
                The World Health Organization describes IPV as harm caused by a current
                or former intimate partner. Under Philippine RA 9262, covered relationships
                include a spouse or former spouse, a dating or sexual relationship, or a
                relationship where the parties have a common child.
              </p>
              <a className="inline-link" href="#claim-definition">Check the sources <ArrowIcon /></a>
            </div>
            <div className="detail-note">
              <span className="detail-number">IMPORTANT CONTEXT</span>
              <h3>Abuse is a choice made by the person causing harm.</h3>
              <p>
                Stress, alcohol, jealousy, or conflict do not excuse abuse. A person
                experiencing violence is not responsible for another person&apos;s actions.
                Every situation is different; no checklist can diagnose a relationship.
              </p>
              <span className="note-source">WHO · Philippine Commission on Women</span>
            </div>
          </div>
        </section>

        <section className="forms-section" aria-labelledby="forms-title">
          <div className="section forms-inner">
            <div className="forms-heading">
              <SectionLabel number="02">RECOGNIZE THE FORMS</SectionLabel>
              <h2 id="forms-title">It doesn’t have to leave a mark.</h2>
              <p>RA 9262 describes several forms of abuse. A person may experience more than one.</p>
            </div>
            <div className="forms-grid">
              <article className="form-card">
                <span className="form-index">A</span>
                <div>
                  <h3>Physical</h3>
                  <p>Actions that cause bodily harm, or threats and attempts to cause physical harm.</p>
                </div>
                <a href="#claim-law" aria-label="Read the legal source on physical violence"><ArrowIcon diagonal /></a>
              </article>
              <article className="form-card">
                <span className="form-index">B</span>
                <div>
                  <h3>Sexual</h3>
                  <p>Sexual acts or pressure through force, threat, harm, or coercion.</p>
                </div>
                <a href="#claim-law" aria-label="Read the legal source on sexual violence"><ArrowIcon diagonal /></a>
              </article>
              <article className="form-card">
                <span className="form-index">C</span>
                <div>
                  <h3>Psychological</h3>
                  <p>Conduct that causes or is likely to cause mental or emotional suffering, including intimidation, stalking, humiliation, and repeated verbal abuse.</p>
                </div>
                <a href="#claim-law" aria-label="Read the legal source on psychological violence"><ArrowIcon diagonal /></a>
              </article>
              <article className="form-card">
                <span className="form-index">D</span>
                <div>
                  <h3>Economic</h3>
                  <p>Actions that make or try to make a woman financially dependent, such as controlling money or preventing work.</p>
                </div>
                <a href="#claim-law" aria-label="Read the legal source on economic abuse"><ArrowIcon diagonal /></a>
              </article>
            </div>
            <p className="forms-footnote">These are plain-language summaries, not legal advice. See the full wording of <a href="#source-ra-9262">RA 9262</a>.</p>
            <div className="pattern-guide" aria-labelledby="pattern-title">
              <div className="pattern-heading">
                <span className="detail-number">A CLOSER LOOK</span>
                <h3 id="pattern-title">Control can show up in everyday decisions.</h3>
                <p>One disagreement does not define a relationship. Notice repeated behaviors that limit someone’s freedom, safety, or independence.</p>
              </div>
              <div className="pattern-list">
                <div className="pattern-item">
                  <span>01</span>
                  <p><strong>Isolation</strong> — monitoring messages or whereabouts, or making it difficult to see friends and family.</p>
                </div>
                <div className="pattern-item">
                  <span>02</span>
                  <p><strong>Intimidation</strong> — threats, stalking, property damage, or using fear to influence decisions.</p>
                </div>
                <div className="pattern-item">
                  <span>03</span>
                  <p><strong>Dependence</strong> — controlling money, withholding support, or interfering with work and access to resources.</p>
                </div>
                <div className="pattern-item">
                  <span>04</span>
                  <p><strong>Coercion</strong> — pressuring or forcing a person into sexual activity or choices they have a right to refuse.</p>
                </div>
                <a className="pattern-citation" href="#source-ra-9262">Examples summarized from RA 9262, Sections 3 and 5 <ArrowIcon diagonal /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section evidence-section" id="evidence" aria-labelledby="evidence-title">
          <div className="evidence-top">
            <div>
              <SectionLabel number="03">WHAT THE EVIDENCE SAYS</SectionLabel>
              <h2 id="evidence-title">Facts need <span>context.</span></h2>
            </div>
            <p>These claims are linked to primary sources. Read each note before applying a global finding to an individual or a local community.</p>
          </div>
          <div className="claims-grid">
            <article className="claim-card claim-feature" id="claim-prevalence">
              <span className="claim-type">01 <span>PREVALENCE · GLOBAL</span></span>
              <div className="claim-big-stat">25.8<small>%</small></div>
              <p>
                WHO estimates that one in four ever-partnered women aged 15–49 worldwide
                have experienced physical and/or sexual violence from a current or former
                intimate partner at least once in their lifetime.
              </p>
              <p className="claim-caveat">Global lifetime estimate; this is not a Philippines-specific rate and does not measure every form of abuse.</p>
              <a className="claim-citation" href="#source-who">WHO · Violence against women fact sheet <ArrowIcon diagonal /></a>
            </article>
            <article className="claim-card" id="claim-definition">
              <span className="claim-type">02 <span>DEFINITION</span></span>
              <h3>IPV includes more than physical assault.</h3>
              <p>
                WHO’s definition includes physical aggression, sexual coercion,
                psychological abuse, and controlling behaviors by a current or former partner.
              </p>
              <a className="claim-citation" href="#source-who">WHO · definition of IPV <ArrowIcon diagonal /></a>
            </article>
            <article className="claim-card" id="claim-health">
              <span className="claim-type">03 <span>HEALTH IMPACT</span></span>
              <h3>The effects can continue beyond an incident.</h3>
              <p>
                WHO reports associations with physical injury, sexual and reproductive
                health problems, depression, anxiety, and post-traumatic stress.
              </p>
              <a className="claim-citation" href="#source-who">WHO · health consequences <ArrowIcon diagonal /></a>
            </article>
            <article className="claim-card" id="claim-law">
              <span className="claim-type">04 <span>PHILIPPINE LAW</span></span>
              <h3>Economic abuse is named in RA 9262.</h3>
              <p>
                The Act includes acts that make or attempt to make a woman financially
                dependent in its definition of economic abuse.
              </p>
              <a className="claim-citation" href="#source-ra-9262">RA 9262 · Section 3(d) <ArrowIcon diagonal /></a>
            </article>
            <article className="claim-card claim-wide" id="claim-progress">
              <span className="claim-type">05 <span>GLOBAL PROGRESS</span></span>
              <div className="progress-claim-layout">
                <div className="progress-claim-stat">0.2<small>%</small></div>
                <div>
                  <h3>The global decline in intimate partner violence has been slow.</h3>
                  <p>WHO reports an average annual decline of only 0.2% over the last 20 years. This is a global trend, not a Philippine-specific measure.</p>
                  <a className="claim-citation" href="#source-who">WHO · progress and prevalence <ArrowIcon diagonal /></a>
                </div>
              </div>
            </article>
          </div>
          <p className="evidence-note">Prevalence estimates are based on population-level research. They describe groups, not the likelihood that any particular person will experience violence.</p>
        </section>

        <section className="law-section" id="law" aria-labelledby="law-title">
          <div className="section law-layout">
            <div className="law-intro">
              <SectionLabel number="04">PHILIPPINE LEGAL FRAMEWORK</SectionLabel>
              <h2 id="law-title">Know what the law <span>covers.</span></h2>
              <p>
                These national laws address violence against women, harassment, and
                women’s rights in different contexts. They are related protections—not
                interchangeable laws.
              </p>
              <a className="button button-light" href="#sources">View all references <ArrowIcon /></a>
              <p className="legal-disclaimer">
                General education only, not legal advice. For a specific situation,
                seek guidance from a qualified Philippine lawyer or local service provider.
              </p>
            </div>
            <div className="law-list">
              <article className="law-entry">
                <span className="law-year">2004</span>
                <div className="law-entry-main">
                  <h3>Anti-Violence Against Women and Their Children Act <span>RA 9262</span></h3>
                  <p>
                    The primary law in this guide’s focus. It defines covered relationships
                    and physical, sexual, psychological, and economic abuse; it also provides
                    for barangay, temporary, and permanent protection orders.
                  </p>
                  <a href="#source-ra-9262">Read the Act <ArrowIcon diagonal /></a>
                </div>
              </article>
              <article className="law-entry">
                <span className="law-year">2009</span>
                <div className="law-entry-main">
                  <h3>Magna Carta of Women <span>RA 9710</span></h3>
                  <p>
                    A broader women’s rights law that recognizes protection from violence
                    and discrimination as part of the State’s obligations.
                  </p>
                  <a href="#source-ra-9710">Read the Act <ArrowIcon diagonal /></a>
                </div>
              </article>
              <article className="law-entry">
                <span className="law-year">2019</span>
                <div className="law-entry-main">
                  <h3>Safe Spaces Act <span>RA 11313</span></h3>
                  <p>
                    Addresses gender-based sexual harassment in public spaces, online,
                    workplaces, and educational or training institutions. It is not a
                    substitute for RA 9262.
                  </p>
                  <a href="#source-ra-11313">Read the Act <ArrowIcon diagonal /></a>
                </div>
              </article>
              <aside className="protection-guide" id="protection-orders">
                <span className="protection-kicker">PRACTICAL INFORMATION · RA 9262, SECTION 8</span>
                <h3>What is a protection order?</h3>
                <p>
                  The Act establishes three kinds: a Barangay Protection Order (BPO),
                  Temporary Protection Order (TPO), and Permanent Protection Order (PPO).
                  Depending on the case and the order, relief may include no-contact or
                  stay-away conditions, temporary removal from a residence, or other
                  measures needed for safety.
                </p>
                <p className="protection-note">
                  The process and eligibility depend on the circumstances. A barangay
                  official, social worker, legal-aid provider, or lawyer can explain
                  available steps. This summary is not legal advice.
                </p>
                <a href="#source-ra-9262">Check Section 8 of RA 9262 <ArrowIcon diagonal /></a>
              </aside>
            </div>
          </div>
        </section>

        <section className="section support-section" id="support" aria-labelledby="support-title">
          <div className="support-intro">
            <SectionLabel number="05">SUPPORT WITHOUT JUDGMENT</SectionLabel>
            <h2 id="support-title">Believe. Listen. <span>Respect.</span></h2>
            <p>
              If someone tells you they are experiencing abuse, you don’t have to solve
              everything. Being calm, believing them, and respecting their decisions can help.
            </p>
            <div className="safety-callout">
              <span className="callout-icon" aria-hidden="true">!</span>
              <p><strong>Immediate danger?</strong> Call the Philippines emergency number <a href="tel:911">911</a>, or contact a trusted local authority or support service.</p>
            </div>
            <p className="privacy-note">If a device or account may be monitored, use a safer device when looking for help. Only take steps that feel safe for you.</p>
            <div className="support-boundary">
              <strong>Try not to:</strong> confront the person causing harm, demand that someone leave immediately, or share their story without permission. These actions can increase risk or reduce their control over what happens next.
            </div>
          </div>
          <div className="support-tool">
            <div className="tool-header">
              <div>
                <span className="tool-kicker">A QUICK GUIDE</span>
                <h3>How to show up</h3>
              </div>
              <span className="tool-count" aria-live="polite">{checkedSteps.length} / {supportSteps.length}</span>
            </div>
            <p className="tool-caption">Select each step as you read.</p>
            <div
              className="progress-track"
              role="progressbar"
              aria-label="Support steps read"
              aria-valuemin={0}
              aria-valuemax={supportSteps.length}
              aria-valuenow={checkedSteps.length}
            >
              <span style={{ width: `${(checkedSteps.length / supportSteps.length) * 100}%` }} />
            </div>
            <ul className="support-list">
              {supportSteps.map((step, index) => {
                const checked = checkedSteps.includes(index);
                return (
                  <li key={step}>
                    <button
                      className={`support-step${checked ? " is-checked" : ""}`}
                      type="button"
                      aria-pressed={checked}
                      onClick={() => toggleStep(index)}
                    >
                      <span className="step-check" aria-hidden="true">{checked ? "✓" : ""}</span>
                      <span>{step}</span>
                    </button>
                  </li>
                );
              })}
            </ul>
            <p className="tool-footer">Let them lead. Support does not mean taking control.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="sources">
        <div className="section footer-inner">
          <div className="footer-heading">
            <div>
              <SectionLabel number="06">REFERENCES & FURTHER READING</SectionLabel>
              <h2>Claims should be <span>checkable.</span></h2>
            </div>
            <p>Sources accessed October 2026. Legal summaries are for education; consult the full text for exact language.</p>
          </div>
          <div className="source-grid">
            {sources.map((source, index) => (
              <a
                className="source-card"
                href={source.href}
                id={`source-${source.id}`}
                key={source.id}
                target="_blank"
                rel="noreferrer"
              >
                <span className="source-index">{String(index + 1).padStart(2, "0")} <ArrowIcon diagonal /></span>
                <span className="source-org">{source.organization}</span>
                <span className="source-title">{source.title}</span>
                <span className="source-note">{source.note}</span>
              </a>
            ))}
          </div>
          <div className="footer-bottom">
            <a className="brand footer-brand" href="#top" aria-label="Safer Together home">
              <span className="brand-mark" aria-hidden="true">S</span>
              <span>safer<span>together</span></span>
            </a>
            <p>ONE ISSUE. SHARED RESPONSIBILITY. A SAFER FUTURE.</p>
            <a className="back-to-top" href="#top">Back to top ↑</a>
          </div>
          <div className="creator-credit">
            <span className="creator-credit-label">Created by</span>
            <ul>
              <li>Carungcong, Agatha Nicole V.</li>
              <li>Gipa, Emelson</li>
              <li>Lovendino, Jelaine G.</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
