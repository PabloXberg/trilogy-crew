import { useEffect, useState } from 'react';
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
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const goHome = () => navigate('/');

  return (
    <nav className="top">
      <div
        className="brand"
        role="link"
        tabIndex={0}
        onClick={goHome}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') goHome();
        }}
      >
        <img src="/assets/logo-white.png" alt="Trilogy Crew" />
        <div className="name">TRILOGY</div>
      </div>

      {/* Desktop links */}
      <ul className="nav-links">
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
        {/* Hamburger — only visible on mobile via CSS */}
        <button
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile slide-down menu */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>
          {t('nav.home')}
        </NavLink>
        {djs.map((dj) => (
          <NavLink
            key={dj.slug}
            to={`/dj/${dj.slug}`}
            onClick={() => setOpen(false)}
          >
            <span className="mm-num">/{dj.order}</span>
            {dj.name}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
