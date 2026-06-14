import { Link } from 'react-router-dom';

interface ResponsiveLogoProps {
  className?: string; // Additional classes for the wrapper Link
  onClick?: () => void;
  invert?: boolean; // Toggle to force solid white logo
}

export default function ResponsiveLogo({ className = "", onClick, invert = false }: ResponsiveLogoProps) {
  // Mobile/Tablet Logo (Icon Only) - https://ibb.co/Pv4vzwjZ
  // Desktop/Laptop Logo (Full) - https://ibb.co/1tgrqDBd
  
  const iconLogo = "https://i.ibb.co/G4k43cpv/file-00000000f48c720794722f82911a2d5e.png";
  const fullLogo = "https://i.ibb.co/8LCr5WGd/IMG-20260614-214548.png";

  const invertClasses = invert ? "brightness-0 invert" : "";

  return (
    <Link 
      to="/" 
      className={`flex items-center shrink-0 ${className}`}
      onClick={onClick}
    >
      {/* Mobile & Tablet: 320px to 1024px */}
      <img
        src={iconLogo}
        alt="Pexel Paradox Icon"
        className={`h-[42px] sm:h-[50px] md:h-[60px] w-auto object-contain block lg:hidden pointer-events-none ${invertClasses}`}
      />

      {/* Desktop & Larger Screens: 1025px+ (Tailwind lg is 1024px) */}
      <img
        src={fullLogo}
        alt="Pexel Paradox Logo"
        className={`lg:h-[2.25rem] xl:h-[2.5rem] 2xl:h-[2.75rem] w-auto object-contain hidden lg:block pointer-events-none ${invertClasses}`}
      />
    </Link>
  );
}
