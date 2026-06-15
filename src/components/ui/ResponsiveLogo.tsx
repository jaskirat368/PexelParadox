import { Link } from 'react-router-dom';

interface ResponsiveLogoProps {
  className?: string; // Additional classes for the wrapper Link
  onClick?: () => void;
  invert?: boolean; // Toggle to force solid white logo
}

export default function ResponsiveLogo({ className = "", onClick, invert = false }: ResponsiveLogoProps) {
  // Mobile/Tablet Logo (Icon Only) - User requested logo
  // Desktop/Laptop Logo (Full) - https://ibb.co/mCZThJH5
  
  const iconLogo = "https://i.ibb.co/svvft18S/favicon.png";
  const fullLogo = "https://i.ibb.co/fY6FrMCd/IMG-20260614-214548.png";

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
        alt="Pexel Paradox brand icon representing elite gym performance marketing and fitness lead generation systems in India"
        title="Pexel Paradox Gym Marketing Icon"
        loading="eager"
        className={`h-[42px] sm:h-[50px] md:h-[60px] w-auto object-contain block lg:hidden pointer-events-none ${invertClasses}`}
      />

      {/* Desktop & Larger Screens: 1025px+ (Tailwind lg is 1024px) */}
      <img
        src={fullLogo}
        alt="Pexel Paradox main logo - The leading performance marketing growth partner for gym owners and fitness studios"
        title="Pexel Paradox - Gym Performance Marketing Agency"
        loading="eager"
        width="240"
        height="44"
        className={`lg:h-[2.25rem] xl:h-[2.5rem] 2xl:h-[2.75rem] w-auto object-contain hidden lg:block pointer-events-none ${invertClasses}`}
      />
    </Link>
  );
}
