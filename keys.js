// Credentials are read only on the server. Set them in the ignored .env.local file.
export const API_KEY = process.env.GOOGLE_API_KEY || ''
export const CONTEXT_KEY = process.env.GOOGLE_CSE_ID || ''
