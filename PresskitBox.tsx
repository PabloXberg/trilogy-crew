import { useLang } from '../contexts/LangContext';

interface HomeFooterProps {
  variant: 'home';
}

interface DjFooterProps {
  variant: 'dj';
  djName: string;
  email: string;
}

type FooterProps = HomeFooterProps | DjFooterProps;

export default function Footer(props: FooterProps) {
  const { t } = useLang();

  return (
    <footer className="site-footer">
      <div className="col brand-col">
        <img src="/assets/logo-white.png" alt="" />
        <strong>{props.variant === 'home' ? 'TRILOGY CREW' : props.djName}</strong>
        <p>{t('footer.brand.tag')}</p>
      </div>

      {props.variant === 'home' ? (
        <>
          <div className="col">
            <strong>{t('footer.links')}</strong>
            <a href="https://soundcloud.com/trilogy-crew" target="_blank" rel="noreferrer">
              SoundCloud
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              YouTube
            </a>
          </div>
          <div className="col">
            <strong>{t('footer.contact')}</strong>
            <a href="mailto:bookings@trilogycrew.com">bookings@trilogycrew.com</a>
            <a href="mailto:press@trilogycrew.com">press@trilogycrew.com</a>
          </div>
        </>
      ) : (
        <>
          <div className="col">
            <strong>{t('footer.bookings')}</strong>
            <a href={`mailto:${props.email}`}>{props.email}</a>
          </div>
          <div className="col">
            <strong>{t('footer.back')}</strong>
            <a href="/">{t('footer.back.home')}</a>
          </div>
        </>
      )}

      <div className="copyright">© 2026 TRILOGY CREW</div>
    </footer>
  );
}
