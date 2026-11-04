import { useLang } from '../contexts/LangContext';
import type { DjEvent } from '../data/djs';

interface Props {
  events: DjEvent[];
}

export default function EventList({ events }: Props) {
  const { t, pick } = useLang();

  const open = (url: string) => {
    if (url && url !== '#') window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="events">
      {events.map((e, i) => (
        <div
          key={`${e.date}-${i}`}
          className="event"
          role="link"
          tabIndex={0}
          onClick={() => open(e.url)}
          onKeyDown={(ev) => {
            if (ev.key === 'Enter' || ev.key === ' ') open(e.url);
          }}
        >
          <div className="e-date">
            {e.date}
            <small>{pick(e.weekday)}</small>
          </div>
          <div className="e-venue">
            {e.venue}
            <small>{pick(e.venueDetail)}</small>
          </div>
          <div className="e-lineup">{pick(e.lineup)}</div>
          <div className="e-action">{t('events.info')}</div>
        </div>
      ))}
    </div>
  );
}
