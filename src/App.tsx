import { useState, useEffect } from 'react';
import './index.css';
import Home from './pages/Home';
import Terms from './pages/Terms';

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isTermsPage = currentHash === '#terms' || currentHash === '#/terms';

  return isTermsPage ? <Terms /> : <Home />;
}

