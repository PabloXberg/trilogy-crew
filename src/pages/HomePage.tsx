import { useLang } from '../contexts/LangContext';
import { djs, crewEvents, crewStats } from '../data/djs';
import DjCard from '../components/DjCard';
import EventList from '../components/EventList';
import Footer from '../components/Footer';

export default function HomePage() {
  const { t } = useLang();

  return (
    <section className="page">
      <div className="home-hero">
        <div className="hero-meta">
          <span className="pill">{t('home.meta.year')}</span>
          <span>{t('home.meta.vol')}</span>
          <span>{t('home.meta.tag')}</span>
        </div>

        <h1>
          TRILOGY
          <br />
          CREW
        </h1>

        <div className="tagline">
          <div className="left">{t('home.tagline')}</div>
          {/* <div className="equalizer" aria-hidden="true">
            {Array.from({ length: 32 }).map((_, i) => (
              <span
                key={i}
                style={{
                  animationDelay: `${(i % 16) * 0.06}s`,
                  animationDuration: `${0.7 + (i % 6) * 0.16}s`,
                }}
              />
            ))}
          </div> */}
        </div>
      </div>

      {/* DJs grid */}
      <div className="section" style={{ padding: 0 }}>
        <div
          className="section-head"
          style={{ padding: '48px 32px 20px', marginBottom: 0 }}
        >
          <span className="num">/01 — {t('home.members.num')}</span>
          <h2>{t('home.members.title')}</h2>
        </div>
        <div className="djs-grid">
          {djs.map((dj) => (
            <DjCard key={dj.slug} dj={dj} />
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <section className="section">
        <div className="section-head">
          <span className="num">/02 — {t('home.about.num')}</span>
          <h2>{t('home.about.title')}</h2>
        </div>
        <div className="manifesto">
          <div>
            <p
              className="lead"
              dangerouslySetInnerHTML={{ __html: t('home.about.lead') }}
            />
            <p>{t('home.about.body')}</p>
          </div>
          <div className="stats">
            <div className="stat">
              <span>{t('home.stat.founded')}</span>
              <span className="v">{crewStats.founded}</span>
            </div>
            <div className="stat">
              <span>{t('home.stat.members')}</span>
              <span className="v">{crewStats.members}</span>
            </div>
            <div className="stat">
              <span>{t('home.stat.base')}</span>
              <span className="v">{crewStats.base}</span>
            </div>
            <div className="stat">
              <span>{t('home.stat.events')}</span>
              <span className="v">{crewStats.events}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section">
        <div className="section-head">
          <span className="num">/03 — {t('home.events.num')}</span>
          <h2>{t('home.events.title')}</h2>
        </div>
        <EventList events={crewEvents} />
      </section>

      <Footer variant="home" />
    </section>
  );
}
