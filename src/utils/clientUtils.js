/**
 * Safely check if we're running in a browser environment
 */
export const isBrowser = () => typeof window !== 'undefined';

/**
 * Safely access the window object
 * @returns {Window|null} The window object or null if not in browser
 */
export const getWindow = () => isBrowser() ? window : null;

/**
 * Safely get the window location origin
 * @returns {string} The window location origin or empty string if not in browser
 */
export const getOrigin = () => isBrowser() ? window.location.origin : ''; 