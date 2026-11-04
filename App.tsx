import { useLang } from '../contexts/LangContext';
import type { Dj } from '../data/djs';

/** Renders the optional press-kit sections only when the DJ has the data. */
export default function DjExtras({ dj }: { dj: Dj }) {
  const { t, pick } = useLang();

  return (
    <>
      {dj.releases && dj.releases.length > 0 && (
        <div className="dj-section">
          <div className="sub-head">
            <span className="num">{t('dj.releases.num')}</span>
            <h2>{t('dj.releases.title')}</h2>
          </div>
          <div className="release-list">
            {dj.releases.map((r, i) => (
              <div className="release" key={i}>
                <div className="release-title">{r.title}</div>
                <div className="release-label">
                  {t('dj.releases.label')} · {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {dj.clubs && dj.clubs.length > 0 && (
        <div className="dj-section">
          <div className="sub-head">
            <span className="num">{t('dj.clubs.num')}</span>
            <h2>{t('dj.clubs.title')}</h2>
          </div>
          <div className="chip-grid">
            {dj.clubs.map((c, i) => (
              <span className="chip" key={i}>
                {c}
              </span>
            ))}
          </div>
        </div>
      )}

      {dj.playedWith &&
        (dj.playedWith.international.length > 0 ||
          dj.playedWith.national.length > 0) && (
          <div className="dj-section">
            <div className="sub-head">
              <span className="num">{t('dj.playedwith.num')}</span>
              <h2>{t('dj.playedwith.title')}</h2>
            </div>
            {dj.playedWith.international.length > 0 && (
              <div className="lineup-block">
                <div className="lineup-label">{t('dj.playedwith.intl')}</div>
                <p className="lineup-names">
                  {dj.playedWith.international.join('  ·  ')}
                </p>
              </div>
            )}
            {dj.playedWith.national.length > 0 && (
              <div className="lineup-block">
                <div className="lineup-label">{t('dj.playedwith.natl')}</div>
                <p className="lineup-names">
                  {dj.playedWith.national.join('  ·  ')}
                </p>
              </div>
            )}
          </div>
        )}

      {dj.rider && dj.rider.length > 0 && (
        <div className="dj-section">
          <div className="sub-head">
            <span className="num">{t('dj.rider.num')}</span>
            <h2>{t('dj.rider.title')}</h2>
          </div>
          <div className="rider-list">
            {dj.rider.map((opt, i) => (
              <div className="rider-row" key={i}>
                <div className="rider-opt">{pick(opt.label)}</div>
                <div className="rider-gear">{opt.gear}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
