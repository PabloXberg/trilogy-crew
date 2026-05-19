import { useLang } from '../contexts/LangContext';
import type { Social } from '../data/djs';

interface Props {
  socials: Social[];
}

export default function SocialLinks({ socials }: Props) {
  const { pick } = useLang();
  return (
    <div className="socials-grid">
      {socials.map((s) => (
        <a
          key={s.platform}
          className="social-link"
          href={s.url}
          target="_blank"
          rel="noreferrer"
        >
          <div>
            <div className="platform">{s.label}</div>
            <div className="handle">{s.handle}</div>
          </div>
          <div className="go">{pick(s.cta)}</div>
        </a>
      ))}
    </div>
  );
}
