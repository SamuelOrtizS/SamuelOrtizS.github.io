import { translations, type Language, type TranslationKey } from './translations';

const STORAGE_KEY = 'pref-lang';

export function getCurrentLang(): Language {
  if (typeof window === 'undefined') return 'es';
  const saved = localStorage.getItem(STORAGE_KEY) as Language;
  if (saved && (saved === 'es' || saved === 'en')) {
    return saved;
  }
  return 'es';
}

export function setLanguage(lang: Language) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  
  // Animate transition using View Transitions API if supported, or CSS fade fallback
  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
    (document as any).startViewTransition(() => {
      updateDOM();
    });
  } else {
    animateFadeTransition();
  }

  window.dispatchEvent(new CustomEvent('language-changed', { detail: { lang } }));
}

function animateFadeTransition() {
  const elements = document.querySelectorAll('[data-i18n], [data-i18n-placeholder]');
  elements.forEach((el) => {
    (el as HTMLElement).style.transition = 'opacity 0.15s ease, transform 0.15s ease';
    (el as HTMLElement).style.opacity = '0';
    (el as HTMLElement).style.transform = 'translateY(2px)';
  });

  setTimeout(() => {
    updateDOM();
    elements.forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'translateY(0)';
    });
  }, 150);
}

export function updateDOM() {
  if (typeof window === 'undefined') return;
  const lang = getCurrentLang();
  document.documentElement.lang = lang;

  // Text content elements
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach((el) => {
    const key = el.getAttribute('data-i18n') as TranslationKey;
    if (key && translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Placeholder elements
  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder') as TranslationKey;
    if (key && translations[lang] && translations[lang][key]) {
      (el as HTMLInputElement | HTMLTextAreaElement).placeholder = translations[lang][key];
    }
  });

  // Active state for language toggle buttons
  const langButtons = document.querySelectorAll('[data-lang-btn]');
  langButtons.forEach((btn) => {
    const btnLang = btn.getAttribute('data-lang-btn');
    if (btnLang === lang) {
      btn.classList.add('bg-primary-500/20', 'text-primary-400', 'border-primary-500/40');
      btn.classList.remove('text-base-400', 'border-transparent', 'hover:text-base-200');
    } else {
      btn.classList.remove('bg-primary-500/20', 'text-primary-400', 'border-primary-500/40');
      btn.classList.add('text-base-400', 'border-transparent', 'hover:text-base-200');
    }
  });
}
