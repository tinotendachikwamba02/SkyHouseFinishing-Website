import { Facebook, Instagram, Linkedin } from 'lucide-react';
import type { SVGProps } from 'react';

// lucide-react has no TikTok icon, so it is provided as an inline SVG
function TiktokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M16.6 5.82c-.9-.98-1.39-2.24-1.39-3.55h-3.2v13.87c0 1.6-1.3 2.9-2.9 2.9a2.9 2.9 0 0 1 0-5.8c.3 0 .58.05.85.13V9.42a6.1 6.1 0 0 0-.85-.06 6.1 6.1 0 1 0 6.1 6.1V8.62a8.6 8.6 0 0 0 5 1.6V7.03c-1.34 0-2.58-.44-3.61-1.21z" />
    </svg>
  );
}

export const socialLinks = [
  { name: 'Facebook', href: 'https://www.facebook.com/skyhousefinishing', icon: Facebook },
  { name: 'Instagram', href: 'https://www.instagram.com/skyhousefinishing/', icon: Instagram },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/skyhousefinishing', icon: Linkedin },
  { name: 'TikTok', href: 'https://www.tiktok.com/@skyhousefinishing', icon: TiktokIcon },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={className}>
      {socialLinks.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-canvas transition hover:border-sky hover:bg-sky hover:text-white"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
