import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* WhatsApp Link */}
      <a 
        href="https://wa.me/919833000052" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="WhatsApp Us"
      >
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-black/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none tracking-wider">
          WA: +91 9833-0000-52
        </span>
        <MessageCircle size={26} fill="white" className="text-white" />
      </a>

      {/* Call Link */}
      <a 
        href="tel:+919833000052" 
        className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-red text-white shadow-[0_4px_20px_rgba(220,53,53,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 relative group"
        aria-label="Call Now"
      >
        <span className="absolute right-16 scale-0 group-hover:scale-100 bg-black/90 text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-all duration-300 pointer-events-none tracking-wider">
          Call: +91 9833-0000-52
        </span>
        <Phone size={24} fill="white" className="text-white" />
      </a>
    </div>
  );
}
