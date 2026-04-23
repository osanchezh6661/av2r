const e = import.meta.env;

export const PHONE         = e.PUBLIC_PHONE         ?? '5510530425';
export const PHONE_DISPLAY = e.PUBLIC_PHONE_DISPLAY ?? '55 1053 0425';
export const EMAIL         = e.PUBLIC_EMAIL         ?? 'contacto@av2rlamundial.com';
export const WHATSAPP      = e.PUBLIC_WHATSAPP      ?? '525510530425';
export const SITE_URL      = e.PUBLIC_SITE_URL      ?? 'https://av2r.mx';
export const FORMSPREE_ID  = e.PUBLIC_FORMSPREE_ID  ?? 'mdayygeq';
export const MAPS_EMBED_URL = e.PUBLIC_MAPS_EMBED_URL ?? '';

export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_ID}`;
export const WA_QUOTE_URL = `https://wa.me/${WHATSAPP}?text=Hola%20AV2R%2C%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n%20para%20un%20servicio%20de%20transporte.`;
export const WA_CONTACT_URL = `https://wa.me/${WHATSAPP}?text=Hola%2C%20me%20interesa%20cotizar%20un%20flete.`;
