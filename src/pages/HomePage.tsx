import { useLang } from '../contexts/LangContext';
import { djs, crewEvents } from '../data/djs';
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
        </div>
      </div>

      {/* 01 — Sobre nosotros (manifiesto arriba) */}
      <section className="section about-section">
        <div className="section-head">
          <span className="num">/01 — {t('home.about.num')}</span>
          <h2>{t('home.about.title')}</h2>
        </div>
        <div className="manifesto-single">
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: t('home.about.lead') }}
          />
          <p className="body-text">{t('home.about.body')}</p>
        </div>
      </section>

      {/* 02 — Miembros */}
      <div className="section" style={{ padding: 0 }}>
        <div
          className="section-head"
          style={{ padding: '48px 32px 20px', marginBottom: 0 }}
        >
          <span className="num">/02 — {t('home.members.num')}</span>
          <h2>{t('home.members.title')}</h2>
        </div>
        <div className="djs-grid">
          {djs.map((dj) => (
            <DjCard key={dj.slug} dj={dj} />
          ))}
        </div>
      </div>

      {/* 03 — Próximos eventos */}
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
