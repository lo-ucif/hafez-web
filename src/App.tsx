import { useState, useEffect } from 'react';
import './index.css';
import Home from './pages/Home';
import Terms from './pages/Terms';
import RoleDetails from './pages/RoleDetails';

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

  // Match #/role/:id, #role/:id, #/roles/:id, #roles/:id, #/role, etc.
  const roleMatch = currentHash.match(/^#\/?role[s]?(?:\/([a-zA-Z0-9_-]+))?/);
  const isRolePage = Boolean(roleMatch);
  const selectedRoleId = roleMatch && roleMatch[1] ? roleMatch[1] : 'supervisor';

  if (isTermsPage) {
    return <Terms />;
  }

  if (isRolePage) {
    return <RoleDetails key={selectedRoleId} initialRoleId={selectedRoleId} />;
  }

  return <Home />;
}

