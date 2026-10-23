import { useState, useEffect } from "react";
import "./index.css";
import Home from "./pages/Home";
import Terms from "./pages/Terms";

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const newHash = window.location.hash;
      const isSwitchingPage = newHash === "#terms" || newHash === "#/terms";

      setCurrentHash(newHash);

      // Only scroll to top when actually navigating to Terms page
      if (isSwitchingPage) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isTermsPage = currentHash === "#terms" || currentHash === "#/terms";

  if (isTermsPage) {
    return <Terms />;
  }

  return <Home />;
}
