import { Link } from 'react-router';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/pricing', label: 'Pricing & Quotes' },
    { href: '/shipping', label: 'Shipping & Delivery' },
    { href: '/contact', label: 'Contact Us' },
  ];

  const legalLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/refund-policy', label: 'Refund Policy' },
    { href: '/acceptable-use', label: 'Acceptable Use' },
  ];

  return (
    <footer className="mt-auto border-t border-border bg-primary">
      {/* Entity verification bar */}
      <div className="border-b" style={{ borderColor: 'hsl(var(--primary-foreground) / 0.12)' }}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.6)' }}>
            <span className="font-semibold text-primary-foreground">Arseen Enterprises LTD · Procurement &amp; Fulfillment</span>
            <div className="flex flex-wrap gap-4">
              <span>Private Limited Company</span>
              <span>International Procurement &amp; Fulfillment — B2B &amp; B2C</span>
            </div>
          </div>
          <p className="mt-1 text-xs" style={{ color: 'hsl(var(--primary-foreground) / 0.5)' }}>
            ARSEEN ENTERPRISES LTD is a private limited company registered in England and Wales. Company Number: 17474730. Registered Office: Office 1878 85 Dunstall Hill, Wolverhampton, WV6 0SR, GB.
          </p>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-3">Get in Touch</h3>
            <div className="space-y-2 text-sm" style={{ color: 'hsl(var(--primary-foreground) / 0.6)' }}>
              <p>
                <span className="font-medium text-primary-foreground">Registered Office:</span><br />
                Office 1878 85 Dunstall Hill<br />
                Wolverhampton, WV6 0SR<br />
                United Kingdom
              </p>
              <p>
                <a href="mailto:support@arseenenterprises.co.uk" className="transition-colors hover:text-primary-foreground">
                  support@arseenenterprises.co.uk
                </a>
              </p>
              <p className="text-xs pt-1">
                Business inquiries and customer-support requests are normally answered within 1–2 business days, Monday – Friday.
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors hover:text-primary-foreground"
                    style={{ color: 'hsl(var(--primary-foreground) / 0.6)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-semibold text-primary-foreground mb-3">Legal &amp; Policies</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm transition-colors hover:text-primary-foreground"
                    style={{ color: 'hsl(var(--primary-foreground) / 0.6)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t" style={{ borderColor: 'hsl(var(--primary-foreground) / 0.12)' }}>
        <div className="container mx-auto px-4 py-4">
          <p className="text-xs text-center" style={{ color: 'hsl(var(--primary-foreground) / 0.4)' }}>
            © {currentYear} ARSEEN ENTERPRISES LTD. All Rights Reserved. We maintain transparent business, billing, shipping, refund, privacy, and customer-support practices designed to support secure international commerce.{' '}
            Private Limited Company · Company Number: 17474730 · Registered in England &amp; Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
