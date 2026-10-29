import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export type PageRoute = "home" | "terms";

interface NavigationContextType {
  currentPage: PageRoute;
  navigateTo: (page: PageRoute, targetHash?: string) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPage: "home",
  navigateTo: () => {},
});

export const useNavigation = () => useContext(NavigationContext);

function getRouteFromUrl(): PageRoute {
  if (typeof window === "undefined") return "home";
  const path = window.location.pathname.toLowerCase();
  const hash = window.location.hash.toLowerCase();

  if (
    path.includes("/terms") ||
    hash.startsWith("#/terms") ||
    hash === "#terms"
  ) {
    return "terms";
  }
  return "home";
}

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>(getRouteFromUrl);

  const navigateTo = useCallback((page: PageRoute, targetHash?: string) => {
    setCurrentPage(page);

    if (page === "terms") {
      const newUrl = targetHash ? `/terms${targetHash}` : "/terms";
      window.history.pushState(null, "", newUrl);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const newUrl = targetHash ? `/${targetHash}` : "/";
      window.history.pushState(null, "", newUrl);

      if (targetHash) {
        setTimeout(() => {
          const id = targetHash.replace(/^#\/?/, "");
          const el = document.getElementById(id);
          if (el) {
            const headerHeight = window.innerWidth < 768 ? 60 : 85;
            const currentScroll = window.scrollY || window.pageYOffset || 0;
            const targetY =
              el.getBoundingClientRect().top + currentScroll - headerHeight;
            window.scrollTo({
              top: Math.max(0, targetY),
              behavior: "smooth",
            });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  }, []);

  useEffect(() => {
    const handlePopState = () => {
      const nextRoute = getRouteFromUrl();
      setCurrentPage(nextRoute);
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("hashchange", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("hashchange", handlePopState);
    };
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

