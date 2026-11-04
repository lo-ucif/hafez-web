import "./index.css";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import WhatsAppButton from "./components/common/WhatsAppButton";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";

// Flag to deactivate Terms and Privacy pages without deleting them
const ENABLE_LEGAL_PAGES = false;

function AppContent() {
  const { currentPage } = useNavigation();

  return (
    <>
      {ENABLE_LEGAL_PAGES && currentPage === "terms" ? (
        <Terms />
      ) : ENABLE_LEGAL_PAGES && currentPage === "privacy" ? (
        <Privacy />
      ) : (
        <Home />
      )}
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
