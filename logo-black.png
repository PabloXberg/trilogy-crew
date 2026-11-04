import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { translations, type TranslationKey } from '../i18n/translations';
import type { Lang, Localized } from '../data/djs';

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translate a UI key from the i18n dictionary */
  t: (key: TranslationKey) => string;
  /** Pick the current language from a Localized object (DJ-specific copy) */
  pick: (loc: Localized) => string;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'trilogy-lang';

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'es';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'en' ? 'en' : 'es';
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem(STORAGE_KEY, lang);
  }, [lang]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);

  const t = useCallback(
    (key: TranslationKey) => translations[lang][key] ?? key,
    [lang],
  );

  const pick = useCallback((loc: Localized) => loc[lang], [lang]);

  const value = useMemo<LangContextValue>(
    () => ({ lang, setLang, t, pick }),
    [lang, setLang, t, pick],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within <LangProvider>');
  return ctx;
}
