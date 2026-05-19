import { useNavigate } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';
import type { Dj } from '../data/djs';

interface Props {
  dj: Dj;
}

export default function DjCard({ dj }: Props) {
  const { pick } = useLang();
  const navigate = useNavigate();
  const go = () => navigate(`/dj/${dj.slug}`);

  return (
    <div
      className="dj-card"
      role="link"
      tabIndex={0}
      onClick={go}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') go();
      }}
    >
      <div className="num">/{dj.letter}</div>
      <div className="photo">
        <img src={dj.photoUrl} alt={dj.name} />
      </div>
      <div>
        <div className="name">{dj.name}</div>
        <div className="role">{pick(dj.role)}</div>
      </div>
      <div className="arrow" aria-hidden="true">
        ↗
      </div>
    </div>
  );
}
