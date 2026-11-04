import { useEffect, useState } from 'react';
import { useLang } from '../contexts/LangContext';

function formatNow() {
  return new Date().toLocaleTimeString('es-UY', {
    timeZone: 'America/Montevideo',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

export default function Clock() {
  const { t } = useLang();
  const [time, setTime] = useState(formatNow);

  useEffect(() => {
    const id = window.setInterval(() => setTime(formatNow()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="clock">
      {t('clock.label')} —— {time}
    </div>
  );
}
