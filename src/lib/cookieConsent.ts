export interface ConsentState {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
}

const STORAGE_KEY = 'menutti_cookie_consent';

/** null significa "todavía no eligió" — hay que mostrarle el banner. */
export function getConsent(): ConsentState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

export function setConsent(analytics: boolean, marketing: boolean): ConsentState {
  const consent: ConsentState = {
    necessary: true,
    analytics,
    marketing,
    updatedAt: new Date().toISOString(),
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  } catch {
    /* localStorage no disponible (privado/bloqueado) — el consentimiento
       no persiste entre visitas, pero la elección de esta sesión sigue
       siendo válida para no cargar trackers sin permiso. */
  }
  return consent;
}

export function clearConsent() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* nada que limpiar si no había storage disponible */
  }
}
