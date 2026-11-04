import { useLang } from '../contexts/LangContext';
import type { Lang } from '../data/djs';

const LANGS: Lang[] = ['es', 'en'];

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="lang-toggle" role="group" aria-label="Language">
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          className={l === lang ? 'active' : ''}
          aria-pressed={l === lang}
          onClick={() => setLang(l)}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
