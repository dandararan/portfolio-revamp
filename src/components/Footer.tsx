import { MoonIcon, SunIcon } from "lucide-react";

type FooterProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

const Footer: React.FC<FooterProps> = ({ isDark, toggleTheme }) => {
  return (
    <footer
      className="py-12 sm:py-16 border-t border-border"
      aria-label="Footer actions"
    >
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">
            {new Date().getFullYear()} DAN
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300 cursor-pointer"
          >
            {isDark ? (
              <MoonIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            ) : (
              <SunIcon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
