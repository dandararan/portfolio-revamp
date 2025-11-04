import React from "react";

type NavProps = {
  sections: readonly string[];
  activeSection: string;
  onNavClick: (id: string) => void;
};

const Nav: React.FC<NavProps> = ({ sections, activeSection, onNavClick }) => (
  <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
    <ul className="flex flex-col items-center gap-3">
      {sections.map((section) => (
        <li key={section}>
          <button
            onClick={() => onNavClick(section)}
            aria-label={`Navigate to ${section}`}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              activeSection === section
                ? "bg-primary scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
