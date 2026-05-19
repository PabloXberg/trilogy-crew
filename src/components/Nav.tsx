import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useLang } from '../contexts/LangContext';
import { djs } from '../data/djs';
import Clock from './Clock';
import LangToggle from './LangToggle';

export default function Nav() {
  const { t } = useLang();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="top">
      <div
        className="brand"
        role="link"
        tabIndex={0}
        onClick={() => navigate('/')}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') navigate('/');
        }}
      >
        <img src="/assets/logo-white.png" alt="Trilogy Crew" />
        <div className="name">TRILOGY</div>
      </div>

      <ul>
        <li>
          <NavLink to="/" end className={isHome ? 'active' : undefined}>
            {t('nav.home')}
          </NavLink>
        </li>
        {djs.map((dj) => (
          <li key={dj.slug}>
            <NavLink
              to={`/dj/${dj.slug}`}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              {dj.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="right-cluster">
        <LangToggle />
        <Clock />
      </div>
    </nav>
  );
}
