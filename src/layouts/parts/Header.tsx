import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/shipping', label: 'Shipping' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-border" style={{ background: 'hsl(var(--primary))' }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-sm font-bold text-primary-foreground tracking-tight leading-tight">
              Arseen Enterprises LTD
            </span>
            <span className="hidden sm:inline text-xs font-normal" style={{ color: 'hsl(var(--primary-foreground) / 0.55)' }}>
              · Procurement &amp; Fulfillment
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === item.href
                    ? 'text-primary-foreground'
                    : ''
                }`}
                style={location.pathname !== item.href ? { color: 'hsl(var(--primary-foreground) / 0.65)' } : {}}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Link
              to="/pricing"
              className="text-sm font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity bg-primary-foreground text-primary whitespace-nowrap"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors text-primary-foreground"
            style={{ background: 'hsl(var(--primary-foreground) / 0.08)' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden border-t py-4" style={{ borderColor: 'hsl(var(--primary-foreground) / 0.15)' }}>
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-sm font-medium transition-colors py-2 px-2 rounded-md ${
                    location.pathname === item.href
                      ? 'text-primary-foreground'
                      : ''
                  }`}
                  style={location.pathname !== item.href
                    ? { color: 'hsl(var(--primary-foreground) / 0.65)' }
                    : { background: 'hsl(var(--primary-foreground) / 0.1)' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/pricing"
                className="mt-2 text-sm font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity text-center bg-primary-foreground text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
