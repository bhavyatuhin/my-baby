
import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, BookOpen, ExternalLink, Menu, X } from 'lucide-react';
import { futureEntries, links, type EvidenceItem } from './data/portfolio';

type ModalItem = { title: string; image?: string; document?: string; description?: string } | null;

const certificates: EvidenceItem[] = [
  {
    id: 'waw-award',
    title: 'Distinguished Idea Award',
    category: 'Award · Written Word',
    issuer: '2026 WAW Global Sustainability Competition',
    date: '22 September 2026',
    description: 'Recognised for outstanding performance and achievement in the Written Word category.',
    document: '/assets/waw-distinguished-idea-award.pdf',
  },
  {
    id: 'internshala',
    title: 'Certificate of Selection — AI Research',
    category: 'Internship selection',
    issuer: 'InAmigos Foundation · through Internshala',
    date: '27 August 2026',
    description: 'Selected for an AI Research internship at InAmigos Foundation through Internshala. This records selection, not internship completion.',
    image: '/assets/internshala-selection.jpeg',
  },
  {
    id: 'inamigos-offer',
    title: 'Researcher — Internship Offer',
    category: 'Internship offer',
    issuer: 'InAmigos Foundation',
    date: '1 September 2026',
    description: 'An offer for a two-week Researcher internship. The letter describes flexible working hours and generally remote work, with possible local fieldwork if required. It is presented as an offer, not as a completed internship.',
    document: '/assets/inamigos-researcher-offer.pdf',
  },
];

const debateAward: EvidenceItem = {
  id: 'trailblazers',
  title: 'Trailblazers Dreamtime Debate Competition',
  category: 'Competition winner',
  issuer: 'Certificate of Achievement',
  date: '30 November 2023',
  description: 'Won the Trailblazers Dreamtime Debate Competition, held on 30 November 2023.',
  image: '/assets/trailblazers-debate-award.png',
};

function App() {
  const [active, setActive] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [modal, setModal] = useState<ModalItem>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 70);
      const ids = ['home', 'work', 'research', 'credentials', 'speaking', 'interests', 'about'];
      let current = 'home';

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.42) {
          current = id;
        }
      }

      setActive(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modal]);

  const nav = [
    ['work', 'Selected work'],
    ['research', 'Research & writing'],
    ['credentials', 'Credentials'],
    ['speaking', 'Speaking & debate'],
    ['interests', 'Beyond the page'],
    ['about', 'About'],
  ];

  const jump = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const openEvidence = (item: EvidenceItem) => {
    setModal({
      title: item.title,
      image: item.image,
      document: item.document,
      description: item.description,
    });
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a
          className="wordmark"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            jump('home');
          }}
        >
          BT<span>.</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([id, label]) => (
            <button
              key={id}
              className={active === id ? 'active' : ''}
              onClick={() => jump(id)}
            >
              {label}
            </button>
          ))}
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-menu">
          {nav.map(([id, label]) => (
            <button key={id} onClick={() => jump(id)}>
              {label}
              <ArrowUpRight size={16} />
            </button>
          ))}
        </nav>
      )}

      <main>
        <section className="hero" id="home">
          <div className="hero-topline">
                        <div className="hero-topline">
            <span>Bhavya Thakor</span>
            <span>Personal portfolio</span>
          </div>

          <div className="hero-layout">
            <div className="portrait-wrap">
              <div className="portrait-placeholder portrait-photo">
                <img
                  src="/assets/bhavya-portrait.jpg.jpg"
                  alt="Bhavya Thakor"
                />
              </div>
            </div>

            <div className="hero-copy">
        

           
              <p className="eyebrow">Curiosity · creativity · direction</p>
              <h1>
                Bhavya
                <br />
                <em>Thakor.</em>
              </h1>
              <p className="hero-intro">
                An ambitious mind, always learning, exploring possibilities and making room for the life happening along the way.
              </p>
              <button className="text-link" onClick={() => jump('work')}>
                Explore my work <ArrowDownRight size={18} />
              </button>
            </div>
          </div>

          <div className="hero-bottom">
            <span>01 — Selected work</span>
            <span className="scroll-cue">
              Scroll to explore <span className="scroll-line" />
            </span>
          </div>
        </section>

        <section className="section work-section" id="work">
          <SectionIntro
            number="01"
            kicker="A closer look"
            title="Selected work"
            note="Two collaborative projects built around research, technology and problem-solving."
          />

          <div className="project-grid">
            <article className={`project-card ${expandedProject === 'paradigm' ? 'expanded' : ''}`}>
              <button
                className="project-trigger"
                onClick={() => setExpandedProject(expandedProject === 'paradigm' ? null : 'paradigm')}
                aria-expanded={expandedProject === 'paradigm'}
              >
                <div className="project-image">
                  <img
                    src="/assets/paradigm-shift-cover.png"
                    alt="Earth, Moon and Mars in a cinematic space landscape"
                  />
                  <span className="image-index">01 / SPACE</span>
                </div>

                <div className="project-heading">
                  <div>
                    <p className="eyebrow">NASA Space Apps Challenge · 2026</p>
                    <h3>Paradigm Shift</h3>
                  </div>
                  <span className="round-arrow">
                    <ArrowUpRight />
                  </span>
                </div>

                <p className="project-summary">
                  Exploring Earth analogues that can help inform future human exploration of the Moon and Mars.
                </p>
                <p className="founders">
                  Co-founded by Bhavya Thakor & Tuhin Ahmed · equal 50/50 co-founders
                </p>
              </button>

              {expandedProject === 'paradigm' && (
                <div className="project-detail">
                  <div>
                    <span className="detail-label">The project</span>
                    <p>
                      Paradigm Shift investigates places on Earth that can serve as analogues for lunar and Martian environments, helping frame questions around terrain, geology, resources and future exploration.
                    </p>
                    <p className="founders">
                      Co-founded by Bhavya Thakor and Tuhin Ahmed as equal 50/50 co-founders.
                    </p>
                    <a
                      className="text-link"
                      href={links.paradigmShift}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit project <ExternalLink size={16} />
                    </a>

                    <div className="project-evidence">
                      <span className="detail-label">Project recognition</span>
                      <button
                        className="evidence-thumb"
                        onClick={() =>
                          setModal({
                            title: 'NASA Space Apps Challenge — Galactic Problem Solver',
                            image: '/assets/nasa-galactic-problem-solver.jpeg',
                            description: 'The 2026 NASA Space Apps Challenge certificate recognises Bhavya Thakor for outstanding participation and efforts to address challenges faced on Earth and in space. Dated November 14–15, 2026.',
                          })
                        }
                      >
                        <img
                          src="/assets/nasa-galactic-problem-solver.jpeg"
                          alt="NASA Space Apps Challenge Galactic Problem Solver certificate"
                        />
                        <span>
                          View certificate <ArrowUpRight size={15} />
                        </span>
                      </button>
                    </div>
                  </div>

                  <div className="project-expanded-visual">
                    <img
                      src="/assets/paradigm-shift-cover.png"
                      alt="Earth, Moon and Mars project visual"
                    />
                    <span>Earth analogues · lunar & Martian exploration</span>
                  </div>
                </div>
              )}
            </article>

            <article className={`project-card ${expandedProject === 'bridge' ? 'expanded' : ''}`}>
              <button
                className="project-trigger"
                onClick={() => setExpandedProject(expandedProject === 'bridge' ? null : 'bridge')}
                aria-expanded={expandedProject === 'bridge'}
              >
                <div className="bridge-art">
                  <span className="bridge-orbit orbit-one" />
                  <span className="bridge-orbit orbit-two" />
                  <span className="bridge-glyph">અ</span>
                  <span className="bridge-glyph second">অ</span>
                  <span className="bridge-art-label">LANGUAGE · ACCESS · RESPONSE</span>
                </div>

                <div className="project-heading">
                  <div>
                    <p className="eyebrow">AI · multilingual disaster intelligence</p>
                    <h3>
                      BANGUJ Bridge <span className="alias">/ Veritas AI</span>
                    </h3>
                  </div>
                  <span className="round-arrow">
                    <ArrowUpRight />
                  </span>
                </div>

                <p className="project-summary">
                  An AI-powered multilingual disaster-intelligence project designed around language access and information exchange.
                </p>
                <p className="founders">
                  Co-founded by Bhavya Thakor & Tuhin Ahmed · equal 50/50 co-founders
                </p>
              </button>

              {expandedProject === 'bridge' && (
                <div className="project-detail">
                  <div>
                    <span className="detail-label">The project</span>
                    <p>
                      BANGUJ Bridge / Veritas AI is one project: an AI-powered multilingual disaster-intelligence initiative. The portfolio presents the project under this combined name.
                    </p>
                    <p className="founders">
                      Co-founded by Bhavya Thakor and Tuhin Ahmed as equal 50/50 co-founders.
                    </p>
                    <a
                      className="text-link"
                      href={links.bangUjBridge}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Visit project <ExternalLink size={16} />
                    </a>
                  <div className="project-evidence">
  <span className="detail-label">Project recognition</span>

  <button
    className="evidence-thumb"
    onClick={() =>
      setModal({
        title: 'INSERT EXACT AWARD TITLE',
        image: '/assets/veritas-ai-award.jpg',
        description:
          'Award recognition for BANGUJ Bridge / Veritas AI. Update this description using the exact details printed on the certificate.',
      })
    }
  >
    <img
      src="/assets/veritas-ai-award.jpg"
      alt="Veritas AI award certificate"
    />
    <span>
      View award certificate <ArrowUpRight size={15} />
    </span>
  </button>
</div>

                  <div className="project-expanded-visual bridge-expanded">
                    <div className="bridge-mini">
                      <span>બાંગુજ</span>
                      <small>One bridge. Many voices.</small>
                    </div>
                  </div>
                </div>
              )}
            </article>
          </div>

          <p className="section-footnote">
            Project descriptions are concise portfolio summaries; the linked project pages contain the project interfaces and further detail.
          </p>
        </section>

        <section className="section research-section" id="research">
          <SectionIntro
            number="02"
            kicker="Ideas in print"
            title="Research & publications"
            note="Writing, inquiry and ideas shared beyond the page."
          />

          <div className="publication-feature">
            <button
              className="book-cover-button"
              onClick={() =>
                setModal({
                  title: 'Drifted — From Lost to Self-Directed',
                  image: '/assets/drifted-cover.jpg',
                  description: 'The original book cover supplied for Bhavya Thakor’s Wattpad work.',
                })
              }
              aria-label="View original Drifted book cover"
            >
              <img
                src="/assets/drifted-cover.jpg"
                alt="Original Drifted — From Lost to Self-Directed book cover by Bhavya Thakor"
              />
              <span className="cover-open">
                View cover <ArrowUpRight size={15} />
              </span>
            </button>

            <div className="publication-copy">
              <p className="eyebrow">Book · Wattpad</p>
              <h3>
                Drifted <em>— From Lost to Self-Directed</em>
              </h3>
              <p className="byline">Written by Bhavya Thakor</p>
              <p>
                The original cover and reading link for Bhavya’s book. The work is presented with its own identity and without an invented synopsis.
              </p>
              <a className="text-link" href={links.drifted} target="_blank" rel="noreferrer">
                Read on Wattpad <ExternalLink size={16} />
              </a>
            </div>
          </div>

          <div className="article-feature">
            <div className="article-visual">
              <span className="article-number">ESSAY / 01</span>
              <span className="article-quote">
                “Protected on paper.
                <br />
                <em>Vulnerable in practice.</em>”
              </span>
              <span className="article-visual-foot">India’s women’s safety crisis</span>
            </div>

            <div className="article-copy">
              <p className="eyebrow">Article · WordPress</p>
              <h3>Protected on Paper, Vulnerable in Practice: India’s Women’s Safety Crisis</h3>
              <p className="byline">By Bhavya Thakor · BhavyaAI</p>
              <p>
                An article examining the gap between legal protections for women and everyday experiences of safety in India. The original publication includes its own source material and disclosure.
              </p>
              <a
                className="text-link"
                href={links.womenSafetyArticle}
                target="_blank"
                rel="noreferrer"
              >
                Read original article <ExternalLink size={16} />
              </a>
              <p className="small-note">
                The original article’s AI-use disclosure remains part of the source publication.
              </p>
            </div>
          </div>
        </section>

        <section className="section credentials-section" id="credentials">
          <SectionIntro
            number="03"
            kicker="Milestones & evidence"
            title="Certificates & credentials"
            note="A selected record of awards, selections and formal offers. Original documents are kept intact."
          />

          <div className="timeline">
            {certificates.map((item, i) => (
              <EvidenceRow
                key={item.id}
                item={item}
                index={i}
                onOpen={() => openEvidence(item)}
              />
            ))}
          </div>
        </section>

        <section className="section speaking-section" id="speaking">
          <SectionIntro
            number="04"
            kicker="Dialogue & expression"
            title="Public speaking & debate"
            note="A dedicated space for speaking experiences, debate competitions, participation and recognition."
          />

          <div className="speaking-feature">
            <div className="speaking-image">
              <img
                src="/assets/trailblazers-debate-award.png"
                alt="Photograph of Bhavya Thakor’s Trailblazers Dreamtime Debate Competition certificate"
              />
              <span>01 / COMPETITION WIN</span>
            </div>

            <div className="speaking-copy">
              <p className="eyebrow">Competition · 30 November 2023</p>
              <h3>Trailblazers Dreamtime Debate Competition</h3>
              <p className="award-line">Winner · Certificate of Achievement</p>
              <p>
                Won the Trailblazers Dreamtime Debate Competition held on 30 November 2023. The photograph of the original physical certificate is preserved as supplied.
              </p>
              <button className="text-link" onClick={() => openEvidence(debateAward)}>
                View certificate <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className="future-strip">
            <span className="future-icon">+</span>
            <div>
              <strong>More speaking & debate records</strong>
              <p>Additional certificates and event details can be added through the portfolio content file when ready.</p>
            </div>
            <span className="quiet-tag">Not yet published</span>
          </div>
        </section>

        <section className="section interests-section" id="interests">
          <SectionIntro
            number="05"
            kicker="Beyond the page"
            title="Achievements & interests"
            note="A glimpse of the interests, skills and involvement that shape how I learn and contribute."
          />

          <div className="interest-grid">
            <InterestCard
              number="01"
              title="Creative pursuits"
              items={['Guitar', 'Singing', 'Writing']}
              detail="Creative practices and forms of expression."
            />
            <InterestCard
              number="02"
              title="Research & learning"
              items={['Research', 'Expanding knowledge', 'Finding opportunities']}
              detail="A curiosity for new ideas, knowledge and ways to grow."
            />
            <InterestCard
              number="03"
              title="Skills"
              items={['Communication', 'Writing', 'Research', 'Leadership']}
              detail="Skills the portfolio owner has identified as part of her strengths."
            />
            <InterestCard
              number="04"
              title="Leadership & involvement"
              items={['Model United Nations', 'Turning Point Community', 'Debate event organising']}
              detail="Bhavya has been appointed National Ambassador at Turning Point Community. Further activity details can be added as evidence is supplied."
            />
          </div>

          <div className="appointment-evidence">
            <div>
              <p className="eyebrow">Formal appointment · 3 November 2026</p>
              <h3>National Ambassador — Turning Point Community</h3>
              <p>
                Appointed as a National Ambassador of Turning Point Community, with responsibilities described in the original appointment letter.
              </p>
              <button
                className="text-link"
                onClick={() =>
                  setModal({
                    title: 'Turning Point Community — National Ambassador appointment',
                    document: '/assets/turning-point-appointment.pdf',
                    description: 'Letter of appointment dated 3 November 2026, appointing Bhavya Thakor as National Ambassador.',
                  })
                }
              >
                View appointment letter <ArrowUpRight size={15} />
              </button>
            </div>
            <div className="appointment-mark">
              TPC<span>National Ambassador</span>
            </div>
          </div>

          <div className="future-strip">
            <span className="future-icon">+</span>
            <div>
              <strong>Additional achievements & activities</strong>
              <p>
                Reserved for more appointments, MUN details, organising work and other evidence. Empty entries stay hidden until completed.
              </p>
            </div>
            <span className="quiet-tag">Expandable</span>
          </div>

          {futureEntries.length > 0 && (
            <div className="future-list">
              {futureEntries.map((item) => (
                <div key={item.id}>
                  <strong>{item.title}</strong>
                  <span>{item.category}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="about-section" id="about">
          <div className="about-side">
            <span className="eyebrow">A little about me</span>
            <span className="about-number">06</span>
          </div>

          <div className="about-main">
            <h2>
              Still becoming.
              <br />
              <em>Always curious.</em>
            </h2>
            <div className="about-columns">
              <p>
                I’m Bhavya Thakor, a student at Bright Day School, Vadodara. I’m interested in learning, exploring ideas and finding opportunities that help me grow.
              </p>
              <p>
                I believe in working towards a future I’m excited about while remembering to enjoy the experiences, people and small moments along the way.
              </p>
            </div>
            <div className="about-signoff">
              Bhavya Thakor <span>—</span> <em>in progress, by design.</em>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a
          className="wordmark"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            jump('home');
          }}
        >
          BT<span>.</span>
        </a>
        <p>Made with curiosity and care.</p>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            jump('home');
          }}
        >
          Back to top ↑
        </a>
        <small>© {new Date().getFullYear()} Bhavya Thakor</small>
      </footer>

      {modal && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setModal(null);
          }}
        >
          <div className="modal-panel" role="dialog" aria-modal="true" aria-label={modal.title}>
            <div className="modal-top">
              <span>{modal.title}</span>
              <button onClick={() => setModal(null)} aria-label="Close">
                <X />
              </button>
            </div>
            {modal.image && <img className="modal-image" src={modal.image} alt={modal.title} />}
            {modal.description && <p className="modal-description">{modal.description}</p>}
            {modal.document && (
              <a className="text-link" href={modal.document} target="_blank" rel="noreferrer">
                Open original document <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function SectionIntro({
  number,
  kicker,
  title,
  note,
}: {
  number: string;
  kicker: string;
  title: string;
  note: string;
}) {
  return (
    <div className="section-intro">
      <div className="section-meta">
        <span>{number}</span>
        <span>{kicker}</span>
      </div>
      <div className="section-heading">
        <h2>{title}</h2>
        <p>{note}</p>
      </div>
    </div>
  );
}

function EvidenceRow({
  item,
  index,
  onOpen,
}: {
  item: EvidenceItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <article className="timeline-row">
      <div className="timeline-date">{item.date}</div>
      <span className="timeline-dot" />
      <div className="timeline-content">
        <div className="timeline-text">
          <p className="eyebrow">{item.category} · {item.issuer}</p>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <button className="text-link" onClick={onOpen}>
            View original evidence <ArrowUpRight size={15} />
          </button>
        </div>
        <button
          className={`timeline-preview ${item.image ? '' : 'document-preview'}`}
          onClick={onOpen}
          aria-label={`View ${item.title}`}
        >
          {item.image ? (
            <img src={item.image} alt={item.title} />
          ) : (
            <div className="document-art">
              <BookOpen />
              <span>Original document</span>
              <small>PDF · opens in new tab</small>
            </div>
          )}
          <span className="preview-index">0{index + 1}</span>
        </button>
      </div>
    </article>
  );
}

function InterestCard({
  number,
  title,
  items,
  detail,
}: {
  number: string;
  title: string;
  items: string[];
  detail: string;
}) {
  return (
    <article className="interest-card">
      <span className="interest-number">{number}</span>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>{detail}</p>
    </article>
  );
}

export default App;
