import { Link } from 'react-router-dom';

interface ResponsiveLogoProps {
  className?: string; // Additional classes for the wrapper Link
  onClick?: () => void;
}

export default function ResponsiveLogo({ className = "", onClick }: ResponsiveLogoProps) {
  // Mobile/Tablet Logo (Icon Only) - https://i.ibb.co/Pv4vzwjZ/image.png
  // Desktop/Laptop Logo (Full) - https://i.ibb.co/LX2nc036/image.png
  
  const iconLogo = "https://i.ibb.co/Pv4vzwjZ/image.png";
  const fullLogo = "https://i.ibb.co/LX2nc036/image.png";

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
        className="h-[42px] sm:h-[50px] md:h-[60px] w-auto object-contain block lg:hidden pointer-events-none"
      />

      {/* Desktop & Larger Screens: 1025px+ (Tailwind lg is 1024px) */}
      <img
        src={fullLogo}
        alt="Pexel Paradox Logo"
        className="w-[180px] xl:w-[240px] 2xl:w-[320px] h-auto object-contain hidden lg:block pointer-events-none"
      />
    </Link>
  );
}
