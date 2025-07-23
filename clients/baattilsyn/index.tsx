import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <main>
    <h1>Båttilsyn</h1>
    <p>Se <a href="pages/index.html">nettsiden</a>.</p>
  </main>
);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
