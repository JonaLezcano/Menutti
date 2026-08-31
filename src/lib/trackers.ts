import { GA_MEASUREMENT_ID, META_PIXEL_ID } from '../config';

let gaLoaded = false;
let pixelLoaded = false;

/** Inyecta gtag.js — no hace nada si todavía no hay GA_MEASUREMENT_ID cargado. */
export function loadGoogleAnalytics() {
  if (gaLoaded || !GA_MEASUREMENT_ID) return;
  gaLoaded = true;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  const win = window as typeof window & { dataLayer?: unknown[] };
  win.dataLayer = win.dataLayer || [];
  function gtag(...args: unknown[]) {
    win.dataLayer!.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
}

type FbqFn = {
  (...args: unknown[]): void;
  queue: unknown[];
  loaded: boolean;
  callMethod?: (...args: unknown[]) => void;
};

/** Inyecta el Meta Pixel — no hace nada si todavía no hay META_PIXEL_ID cargado. */
export function loadMetaPixel() {
  if (pixelLoaded || !META_PIXEL_ID) return;
  pixelLoaded = true;

  const win = window as typeof window & { fbq?: FbqFn; _fbq?: unknown };

  let pixel = win.fbq;
  if (!pixel) {
    pixel = function (...args: unknown[]) {
      if (pixel!.callMethod) {
        pixel!.callMethod(...args);
      } else {
        pixel!.queue.push(args);
      }
    } as FbqFn;
    pixel.queue = [];
    pixel.loaded = true;
    win.fbq = pixel;
    win._fbq = pixel;
  }

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  pixel('init', META_PIXEL_ID);
  pixel('track', 'PageView');
}
