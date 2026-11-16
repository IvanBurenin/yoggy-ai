import { useEffect, useRef, type ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Check,
  Flame,
  Github,
  Heart,
  Leaf,
  Moon,
  Send,
  Sparkles,
  Sun,
  Wind,
} from 'lucide-react'

const TELEGRAM = 'https://t.me/AiYoggyBot'
const REPO = 'https://github.com/IvanBurenin/yoggy-ai'
const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const SCREENS = [
  {
    key: 'today',
    label: 'Today',
    title: 'A calm start',
    text: 'A greeting, a quote and one practice that fits the day you are having.',
  },
  {
    key: 'practices',
    label: 'Practices',
    title: '65 guided practices',
    text: 'Yoga, meditation, breathing and gentle stretching — filtered by goal, level and length.',
  },
  {
    key: 'plans',
    label: 'Plans',
    title: 'A rhythm for the week',
    text: 'Choose a ready plan or let the assistant shape one around your schedule.',
  },
  {
    key: 'progress',
    label: 'Progress',
    title: 'Quiet progress',
    text: 'Minutes, practice days and streaks. No leaderboard, no pressure.',
  },
  {
    key: 'ai',
    label: 'AI assistant',
    title: 'Ask in plain words',
    text: '“Build me a 7-day plan for better sleep.” Done in seconds, synced everywhere.',
  },
  {
    key: 'diary',
    label: 'Diary',
    title: 'One gentle record',
    text: 'Check-ins and sessions in one place, with the full picture of how you feel.',
  },
]

const PILLARS = [
  {
    icon: Leaf,
    title: 'Practice, not performance',
    text: 'Guidance for the body you have today. Skip a day — nothing breaks, nothing turns red.',
  },
  {
    icon: CalendarDays,
    title: 'A plan you can keep',
    text: 'Short sessions on busy days, longer ones when there is room. The week bends with you.',
  },
  {
    icon: Heart,
    title: 'How you feel, recorded',
    text: 'Mood, energy, tension, sleep and water. Small notes that turn into a real picture.',
  },
]

const FAQ = [
  {
    q: 'Do I need to install anything?',
    a: 'No. Yoggy lives in Telegram: open the bot, tap Start, and the Mini App opens with a button in the chat. It works on iOS, Android, desktop and web.',
  },
  {
    q: 'Is Yoggy free?',
    a: 'Yes — you can start and keep a full practice with the free bot and Mini App. There are no ads inside your practice.',
  },
  {
    q: 'What can the AI assistant do?',
    a: 'It builds and changes weekly plans, adds or moves practices, records sessions and check-ins, and answers questions about your progress. It asks before anything is deleted.',
  },
  {
    q: 'Where is my data stored?',
    a: 'On Yoggy’s own servers. Your check-ins, notes and practice history are visible only to you. You can export or delete your account from the profile.',
  },
  {
    q: 'What if I miss a day?',
    a: 'Nothing happens. There is no punishment, no broken streak screen and no guilt copy. The plan simply waits for you.',
  },
  {
    q: 'Is this medical advice?',
    a: 'No. Yoggy offers general wellbeing practices. If you are pregnant, injured or managing a condition, check with a professional before starting.',
  },
]

function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('in')
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.classList.add('in')
            observer.unobserve(node)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -8% 0px' },
    )
    observer.observe(node)
    // Safety net: content must never stay invisible if the observer is skipped.
    const fallback = window.setTimeout(() => node.classList.add('in'), 3000)
    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function Phone({
  screen,
  alt,
  className = '',
}: {
  screen: string
  alt: string
  className?: string
}) {
  return (
    <div className={`phone ${className}`}>
      <div className="phone-screen">
        <img src={asset(`screens/${screen}.png`)} alt={alt} loading="lazy" />
      </div>
    </div>
  )
}

function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-index">{index}</span>
      <span>{children}</span>
    </p>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#top" aria-label="Yoggy home">
          <img src={asset('app-icon.png')} width={32} height={32} alt="" />
          <span>Yoggy</span>
        </a>
        <nav className="nav" aria-label="Sections">
          <a href="#screens">App</a>
          <a href="#ai">AI assistant</a>
          <a href="#plans">Plans</a>
          <a href="#languages">Languages</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a className="button button-primary header-cta" href={TELEGRAM} target="_blank" rel="noreferrer">
          Open in Telegram
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal>
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" />
              Yoga &amp; mindfulness · Telegram Mini App
            </p>
            <h1>
              A calmer practice,
              <br />
              <em>one day at a time.</em>
            </h1>
            <p className="lede">
              Yoggy is a quiet coach inside Telegram. Guided yoga, meditation and
              breathing, a weekly plan that bends with your life, and an assistant
              that listens in plain words.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={TELEGRAM} target="_blank" rel="noreferrer">
                Open Yoggy in Telegram
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a className="button button-ghost" href="#screens">
                See the app
              </a>
            </div>
            <p className="hero-meta">
              Free to start · No install · iOS · Android · Desktop
            </p>
          </Reveal>
        </div>

        <Reveal className="hero-visual" delay={120}>
          <div className="hero-halo" aria-hidden="true" />
          <div className="float float-checkin">
            <span className="float-label">Today’s check-in</span>
            <strong>Mood 4/5 · Energy 4/5</strong>
            <span className="float-sub">Sleep 7.5 h · Water 1.6 L</span>
          </div>
          <div className="float float-streak">
            <Flame size={16} aria-hidden="true" />
            <span>7-day streak</span>
          </div>
          <div className="float float-badge" aria-hidden="true">
            <Sparkles size={18} />
          </div>
          <Phone screen="today" alt="Yoggy Today screen with a morning yoga practice" className="hero-phone" />
        </Reveal>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section className="section pillars-section">
      <div className="wrap">
        <Reveal>
          <SectionLabel index="01">A different pace</SectionLabel>
          <h2 className="section-title">
            Built for the days you <em>actually</em> have.
          </h2>
        </Reveal>
        <div className="pillars">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <Reveal key={pillar.title} delay={index * 90} className="pillar">
                <span className="pillar-icon" aria-hidden="true">
                  <Icon size={19} />
                </span>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Screens() {
  return (
    <section className="section screens-section" id="screens">
      <div className="wrap">
        <Reveal>
          <SectionLabel index="02">Inside the app</SectionLabel>
          <div className="section-head">
            <h2 className="section-title">
              Six screens, <em>no noise.</em>
            </h2>
            <p className="section-lead">
              Everything opens in the Telegram you already use. Swipe through the
              parts you will touch every day.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="screens-track" role="list">
            {SCREENS.map((screen) => (
              <article className="screen-card" key={screen.key} role="listitem">
                <Phone screen={screen.key} alt={`Yoggy ${screen.label} screen`} />
                <div className="screen-caption">
                  <span className="screen-label">{screen.label}</span>
                  <h3>{screen.title}</h3>
                  <p>{screen.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function AiSection() {
  return (
    <section className="section" id="ai">
      <div className="wrap split">
        <Reveal>
          <SectionLabel index="03">AI assistant</SectionLabel>
          <h2 className="section-title">
            Ask for a plan.
            <br />
            <em>It appears.</em>
          </h2>
          <p className="body-text">
            Describe the week you want — “gentle, 15 minutes, before bed, my lower
            back is sensitive” — and the assistant shapes a plan around it. It can
            move practices, log a session, save a check-in or answer what changed.
          </p>
          <ul className="feature-list">
            <li>
              <Check size={16} aria-hidden="true" /> Builds and edits weekly plans
            </li>
            <li>
              <Check size={16} aria-hidden="true" /> Logs practices and check-ins
            </li>
            <li>
              <Check size={16} aria-hidden="true" /> Shares one history with the bot
            </li>
          </ul>
          <div className="prompts" aria-label="Example requests">
            <span>“Build a 7-day plan for sleep”</span>
            <span>“Move today’s practice to Saturday”</span>
            <span>“How was my week?”</span>
          </div>
          <a className="text-link" href={TELEGRAM} target="_blank" rel="noreferrer">
            Try it in Telegram <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="split-visual" delay={120}>
          <div className="soft-halo" aria-hidden="true" />
          <Phone screen="ai" alt="Yoggy AI assistant chat about a seven-day sleep plan" />
        </Reveal>
      </div>
    </section>
  )
}

function PlansSection() {
  return (
    <section className="section section-tinted" id="plans">
      <div className="wrap split split-reverse">
        <Reveal className="split-visual" delay={120}>
          <div className="soft-halo soft-halo-green" aria-hidden="true" />
          <Phone screen="plans" alt="Yoggy plans screen with an active seven-day plan" />
        </Reveal>
        <Reveal>
          <SectionLabel index="04">Plans</SectionLabel>
          <h2 className="section-title">
            A week that
            <br />
            <em>fits your week.</em>
          </h2>
          <p className="body-text">
            Start with a ready-made plan for calm, sleep, energy or flexibility —
            or ask Yoggy to make one. Every day knows its practice and length, and
            you can pause a plan without losing your place.
          </p>
          <div className="mini-stats">
            <div>
              <strong>21</strong>
              <span>ready plans</span>
            </div>
            <div>
              <strong>5–30</strong>
              <span>minutes a day</span>
            </div>
            <div>
              <strong>6</strong>
              <span>languages</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function ProgressSection() {
  return (
    <section className="section" id="progress">
      <div className="wrap split">
        <Reveal>
          <SectionLabel index="05">Progress &amp; check-ins</SectionLabel>
          <h2 className="section-title">
            Progress,
            <br />
            <em>without the pressure.</em>
          </h2>
          <p className="body-text">
            Minutes practiced. Days that felt like practice. How your mood, energy
            and tension moved. Yoggy keeps the record and never turns it into a
            competition.
          </p>
          <div className="checkin-row">
            <span>
              <Moon size={16} aria-hidden="true" /> Sleep quality
            </span>
            <span>
              <Wind size={16} aria-hidden="true" /> Tension
            </span>
            <span>
              <Sun size={16} aria-hidden="true" /> Energy
            </span>
            <span>
              <Heart size={16} aria-hidden="true" /> Mood
            </span>
          </div>
          <a className="text-link" href={TELEGRAM} target="_blank" rel="noreferrer">
            Start your first check-in <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </Reveal>
        <Reveal className="split-visual" delay={120}>
          <div className="soft-halo" aria-hidden="true" />
          <Phone screen="progress" alt="Yoggy progress screen with weekly minutes and streaks" />
        </Reveal>
      </div>
    </section>
  )
}

function Languages() {
  return (
    <section className="section languages-section" id="languages">
      <div className="wrap">
        <Reveal>
          <SectionLabel index="06">Languages</SectionLabel>
          <div className="languages-head">
            <h2 className="section-title">
              Six languages.
              <br />
              <em>One quiet practice.</em>
            </h2>
            <p className="section-lead">
              The bot and the app follow your Telegram language. You can change it
              anytime in your profile.
            </p>
          </div>
          <ul className="languages">
            <li>English</li>
            <li>Русский</li>
            <li>Deutsch</li>
            <li>Français</li>
            <li>Español</li>
            <li>中文</li>
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="section" id="faq">
      <div className="wrap faq-grid">
        <Reveal>
          <SectionLabel index="07">Questions</SectionLabel>
          <h2 className="section-title">
            Before you
            <br />
            <em>begin.</em>
          </h2>
        </Reveal>
        <Reveal className="faq-list" delay={100}>
          {FAQ.map((item) => (
            <details key={item.q}>
              <summary>
                <span>{item.q}</span>
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

function Cta() {
  return (
    <section className="section cta-section">
      <div className="wrap">
        <Reveal className="cta">
          <div className="cta-glow" aria-hidden="true" />
          <p className="eyebrow eyebrow-light">Ready when you are</p>
          <h2>
            Your next practice
            <br />
            is <em>one message away.</em>
          </h2>
          <p>
            Open the bot, answer a few gentle questions, and pick your first
            practice. It takes about a minute.
          </p>
          <a className="button button-light" href={TELEGRAM} target="_blank" rel="noreferrer">
            <Send size={16} aria-hidden="true" />
            Open @AiYoggyBot
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <img src={asset('app-icon.png')} width={28} height={28} alt="" />
          <div>
            <strong>Yoggy</strong>
            <span>A quiet practice in Telegram.</span>
          </div>
        </div>
        <div className="footer-links">
          <a href={TELEGRAM} target="_blank" rel="noreferrer">
            Telegram
          </a>
          <a href={REPO} target="_blank" rel="noreferrer">
            <Github size={14} aria-hidden="true" /> GitHub
          </a>
          <a href="https://github.com/IvanBurenin" target="_blank" rel="noreferrer">
            Ivan Burenin
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Yoggy</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <Pillars />
        <Screens />
        <AiSection />
        <PlansSection />
        <ProgressSection />
        <Languages />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
