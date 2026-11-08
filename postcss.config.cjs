/**
 * PostCSS configuration for the CineBite Vite + React application.
 * This file intentionally uses the .cjs extension because package.json
 * declares "type": "module" while PostCSS plugins are configured with
 * CommonJS exports.
 */
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
