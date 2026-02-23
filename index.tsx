
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/**
 * Saathi Drive Entry Point
 */
const startApp = () => {
  console.log("Starting Saathi Drive mounting sequence...");
  const container = document.getElementById('root');
  
  if (!container) {
    console.error("Fatal: Root element #root not found in the DOM.");
    return;
  }

  try {
    const root = createRoot(container);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React render cycle initiated.");
  } catch (err) {
    console.error("Fatal Error during React initialization:", err);
  }
};

// Execute start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', startApp);
} else {
  startApp();
}
