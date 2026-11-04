import { useLang } from '../contexts/LangContext';

interface Props {
  url: string;
  size: string;
}

export default function PresskitBox({ url, size }: Props) {
  const { t } = useLang();

  const handleClick = (e: React.MouseEvent) => {
    if (!url || url === '#') {
      e.preventDefault();
      window.alert('Presskit not available yet — replace the URL in djs.ts');
    }
  };

  return (
    <div className="presskit-box">
      <div className="text">
        <h3>{t('dj.presskit.title')}</h3>
        <p>{t('dj.presskit.desc')}</p>
      </div>
      <a
        className="btn"
        href={url}
        download={url !== '#' ? true : undefined}
        onClick={handleClick}
      >
        <span className="ico">↓</span>
        <span>
          {t('dj.presskit.cta')} · {size}
        </span>
      </a>
    </div>
  );
}
