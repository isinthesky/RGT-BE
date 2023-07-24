const config = process.env.NODE_ENV !== "production" ? await import("dotenv") : null;

if (config) config.config();

export const SERVER_PORT = process.env.SERVER_PORT || 3000;

export const GOOGLE_AUTH_URI = process.env.GOOGLE_AUTH_URI;
export const GOOGLE_AUTH_CLIENTID = process.env.GOOGLE_AUTH_CLIENTID;
export const GOOGLE_AUTH_PASSWORD = process.env.GOOGLE_AUTH_PASSWORD;
export const GOOGLE_AUTH_REDIRECTIONURL = process.env.GOOGLE_AUTH_REDIRECTIONURL;
export const COOKIE_SECRET = process.env.COOKIE_SECRET;
