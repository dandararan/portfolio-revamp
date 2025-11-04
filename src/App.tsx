import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "./components/theme-provider";

import Nav from "./components/Nav";
import HeaderIntro from "./components/HeaderIntro";
import WorkSection from "./components/WorkSection";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
import RecentProjectSection from "./components/RecentProjectsSection";

const SECTION_IDS = ["intro", "work", "projects", "connect"] as const;

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState<string>("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("animate-fade-in-up");
          setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );
    sectionsRef.current.forEach((sec) => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const toggleTheme = () => setIsDark((d) => !d);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground relative">
        <Nav
          sections={SECTION_IDS}
          activeSection={activeSection}
          onNavClick={handleNavClick}
        />
        <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
          <HeaderIntro setRef={(el) => (sectionsRef.current[0] = el)} />
          <WorkSection setRef={(el) => (sectionsRef.current[1] = el)} />
          <RecentProjectSection
            setRef={(el) => (sectionsRef.current[2] = el)}
          />
          <ConnectSection setRef={(el) => (sectionsRef.current[3] = el)} />
          <Footer isDark={isDark} toggleTheme={toggleTheme} />
        </main>
        <div className="fixed bottom-0 left-0 right-0 h-24 bg-linear -to-t from-background via-background/80 to-transparent pointer-events-none" />
      </div>
    </ThemeProvider>
  );
}

export default App;
