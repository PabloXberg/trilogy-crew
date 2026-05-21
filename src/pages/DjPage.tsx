import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';
import { getDjBySlug } from '../data/djs';
import EventList from '../components/EventList';
import Footer from '../components/Footer';
import Gallery from '../components/Gallery';
import DjExtras from '../components/DjExtras';
import PresskitBox from '../components/PresskitBox';
import SocialLinks from '../components/SocialLinks';
import SpotifyEmbed from '../components/SpotifyEmbed';
import Tracks from '../components/Tracks';

export default function DjPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t, pick } = useLang();

  const dj = slug ? getDjBySlug(slug) : undefined;
  if (!dj) return <Navigate to="/" replace />;

  return (
    <section className="page">
      {/* Hero */}
      <div className="dj-hero">
        <div className="photo-lg">
          <div className="tag">/// MEMBER {dj.order}</div>
          <img src={dj.heroPhotoUrl ?? dj.photoUrl} alt={dj.name} />
        </div>
        <div className="info">
          <div
            className="breadcrumb"
            role="link"
            tabIndex={0}
            onClick={() => navigate('/')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate('/');
            }}
          >
            {t('dj.bc')}
            {dj.order}
          </div>
          <h1>
            {dj.nameLines[0]}
            <br />
            {dj.nameLines[1]}
          </h1>
          <div className="role">{pick(dj.role)}</div>
          <div className="quick-meta">
            {dj.realName && (
              <div>
                {t('dj.meta.realname')} <b>{dj.realName}</b>
              </div>
            )}
            <div>
              {t('dj.meta.based')} <b>{pick(dj.meta.based)}</b>
            </div>
            <div>
              {t('dj.meta.origin')} <b>{pick(dj.meta.origin)}</b>
            </div>
            <div>
              {t('dj.meta.since')} <b>{dj.meta.activeSince}</b>
            </div>
            <div>
              {t('dj.meta.bpm')} <b>{dj.meta.bpmRange}</b>
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div className="dj-bio">
        <div className="label">{t('dj.bio.label')}</div>
        <div className="text">
          <p
            className="lead"
            dangerouslySetInnerHTML={{ __html: pick(dj.bio.lead) }}
          />
          {dj.bio.paragraphs.map((p, i) => (
            <p key={i}>{pick(p)}</p>
          ))}
        </div>
      </div>

      {/* Optional press-kit sections (releases / clubs / lineups / rider) */}
      <DjExtras dj={dj} />

      {/* Tracks */}
      <div className="dj-section">
        <div className="sub-head">
          <span className="num">{t('dj.tracks.num')}</span>
          <h2>{t('dj.tracks.title')}</h2>
        </div>
        <Tracks urls={dj.trackUrls} />
        {dj.spotifyArtistId && (
          <div style={{ marginTop: 24 }}>
            <SpotifyEmbed artistId={dj.spotifyArtistId} />
          </div>
        )}
      </div>

      {/* Socials */}
      <div className="dj-section">
        <div className="sub-head">
          <span className="num">{t('dj.socials.num')}</span>
          <h2>{t('dj.socials.title')}</h2>
        </div>
        <SocialLinks socials={dj.socials} />
      </div>

      {/* Gallery */}
      <div className="dj-section">
        <div className="sub-head">
          <span className="num">{t('dj.gallery.num')}</span>
          <h2>{t('dj.gallery.title')}</h2>
        </div>
        <Gallery photos={dj.gallery} slots={8} />
      </div>

      {/* Presskit */}
      <PresskitBox url={dj.presskit.url} size={dj.presskit.size} />

      {/* Upcoming */}
      {dj.events && dj.events.length > 0 && (
        <div className="dj-section">
          <div className="sub-head">
            <span className="num">{t('dj.upcoming.num')}</span>
            <h2>{t('dj.upcoming.title')}</h2>
          </div>
          <EventList events={dj.events} />
        </div>
      )}

      <Footer variant="dj" djName={dj.name.toUpperCase()} email={dj.email} />
    </section>
  );
}
