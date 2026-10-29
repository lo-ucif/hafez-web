import "./index.css";
import Home from "./pages/Home";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import WhatsAppButton from "./components/common/WhatsAppButton";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";

function AppContent() {
  const { currentPage } = useNavigation();

  return (
    <>
      {currentPage === "terms" ? (
        <Terms />
      ) : currentPage === "privacy" ? (
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
