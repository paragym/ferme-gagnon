import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  const apiBaseUrl = import.meta.env.VITE_API_URL || '';
  const healthUrl = `${apiBaseUrl}/health`;

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', padding: 32 }}>
      <h1>Quebec Canine Cuisine</h1>
      <p>Frontend is deployed and ready for Railway.</p>
      <p>
        Backend health: <a href={healthUrl} target="_blank" rel="noreferrer">{healthUrl}</a>
      </p>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
