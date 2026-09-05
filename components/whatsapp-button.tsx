'use client';

import { useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/27628567694?text=Hi%20Sky%20House%20Finishing%2C%20I%20would%20like%20to%20request%20a%20quote';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white">
      <path d="M17.47 14.38c-.29-.15-1.71-.84-1.98-.94-.27-.1-.46-.15-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-2-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.48-.5-.66-.5-.17-.01-.36-.01-.56-.01-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.43 0 1.43 1.04 2.82 1.19 3.01.15.19 2.05 3.13 4.97 4.39.69.3 1.24.48 1.66.61.7.22 1.33.19 1.84.11.56-.08 1.71-.7 1.95-1.37.24-.68.24-1.26.17-1.38-.07-.13-.26-.2-.55-.34z" />
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.89.52 3.66 1.43 5.18L2 22l4.94-1.4A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.68 0-3.24-.48-4.56-1.31l-.33-.2-3.09.88.87-3.03-.21-.33A8.18 8.18 0 0 1 3.8 12c0-4.53 3.68-8.2 8.2-8.2s8.2 3.67 8.2 8.2-3.68 8.2-8.2 8.2z" />
    </svg>
  );
}

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <span className="rounded-lg bg-navy px-4 py-2 text-sm font-semibold text-white shadow-lg">
          Need a quick quote? Talk to us on WhatsApp
        </span>
      )}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="flex items-center justify-center rounded-full bg-[#25D366] p-4 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a]"
      >
        <WhatsAppIcon />
      </a>
    </div>
  );
}
