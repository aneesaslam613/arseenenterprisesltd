import { home } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Globe, Package, ShieldCheck, CheckCircle, Building2, Clock, MapPin } from 'lucide-react';

const COMPANY = 'ARSEEN ENTERPRISES LTD';
const SITE_URL = 'https://arseenenterprises.co.uk';

const tickerItems = [
  'International Procurement',
  'Regulatory Compliance',
  'Custom Order Fulfillment',
  'Shipment Coordination',
  'Written Quotations',
  '1–2 Day Response Time',
  'UK Private Limited Company',
  'B2B & B2C Services',
  'Legally Registered Business',
  'Product Inspection Coordination',
];

const servicesMeta = [
  { icon: Package },
  { icon: CheckCircle },
  { icon: ShieldCheck },
  { icon: Globe },
];

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 26 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      transition={{ duration: 0.55, ease: 'easeOut' as const, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: COMPANY,
        url: SITE_URL,
        email: 'support@arseenenterprises.co.uk',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Office 1878 85 Dunstall Hill',
          addressLocality: 'Wolverhampton',
          postalCode: 'WV6 0SR',
          addressCountry: 'GB',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY,
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${COMPANY} · Procurement & Fulfillment`,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <>
      <Helmet>
        <title>ARSEEN ENTERPRISES LTD · Procurement &amp; Fulfillment</title>
        <meta name="description" content="ARSEEN ENTERPRISES LTD — custom product procurement and international order fulfillment for B2B and B2C clients. UK private limited company, Company Number 17474730." />
        <link rel="canonical" href={SITE_URL} />
        <meta property="og:title" content="ARSEEN ENTERPRISES LTD · Procurement & Fulfillment" />
        <meta property="og:description" content="Custom product procurement and international order fulfillment for B2B and B2C clients." />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-border bg-primary">
          {/* Dot-grid texture */}
          <div
            className="absolute inset-0 pointer-events-none hero-dots"
          />
          {/* Soft radial glow */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none hero-glow" />

          <div className="relative container mx-auto px-4 py-24 md:py-36 max-w-5xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full border text-xs font-medium hero-badge"
            >
              <span className="w-1.5 h-1.5 rounded-full hero-dot inline-block" />
              UK Private Limited Company · Company No. 17474730
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' as const }}
              className="text-4xl md:text-[3.5rem] font-bold leading-[1.12] tracking-tight text-primary-foreground mb-6 max-w-3xl"
            >
              Custom Product Procurement &amp; International Order Fulfillment
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: 'easeOut' as const }}
              className="text-base md:text-lg max-w-2xl mb-10 leading-relaxed hero-sub"
            >
              Arseen Enterprises LTD coordinates custom product procurement and order fulfillment for business clients (B2B) and individual consumers (B2C). You provide the requirements — we handle procurement, preparation, packaging, and international shipment.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.34, ease: 'easeOut' as const }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm bg-primary-foreground text-primary transition-opacity hover:opacity-90"
              >
                Request a Quote <ArrowRight size={15} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-sm border hero-outline-btn transition-colors"
              >
                How It Works
              </Link>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs hero-trust"
            >
              {['Registered in England & Wales', 'Written Quotations Before Payment', 'B2B & B2C', '1–2 Day Response'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full hero-trust-dot inline-block" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Ticker ── */}
        <div className="border-b border-border overflow-hidden py-3 bg-muted">
          <div className="flex animate-[ticker_38s_linear_infinite] whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-2 px-6 text-sm text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary/30 inline-block" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ── Stats ── */}
        <section className="py-14 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {home.stats.map((s, i) => (
                <FadeUp key={s.label} delay={i * 0.08}>
                  <p className="text-3xl font-bold text-primary mb-1">{s.value}</p>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── Who We Are ── */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <FadeUp>
                <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">Who We Are</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
                  Procurement &amp; Fulfillment for Businesses and Individuals
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Arseen Enterprises LTD coordinates custom product procurement and order fulfillment for business clients (B2B) and individual consumers (B2C). Customers provide their requirements, we prepare a quotation, and upon approval we coordinate procurement, preparation, packaging, international shipment and tracking.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  We are committed to transparent business practices, written quotations before payment, and responsive customer support throughout the fulfillment process.
                </p>
                <Link to="/about" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                  About Our Company <ArrowRight size={14} />
                </Link>
              </FadeUp>

              <div className="flex flex-col gap-4">
                {[
                  { icon: Building2, title: 'UK Registered Company', desc: 'Private limited company registered in England & Wales. Company Number: 17474730.' },
                  { icon: MapPin, title: 'Registered Office', desc: 'Office 1878 85 Dunstall Hill, Wolverhampton, WV6 0SR, United Kingdom.' },
                  { icon: Clock, title: '1–2 Day Response', desc: 'Business inquiries and support requests answered within 1–2 business days.' },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <FadeUp key={title} delay={i * 0.1}>
                    <div className="flex gap-4 p-4 rounded-xl border border-border bg-card">
                      <div className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'hsl(var(--primary) / 0.07)' }}>
                        <Icon size={17} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-foreground mb-0.5">{title}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                      </div>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20 border-b border-border bg-muted">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeUp className="text-center mb-12">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">What We Offer</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Services</h2>
              <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
                Custom product procurement and international order fulfillment for business clients and individual consumers.
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {home.services.map((s, _airoIdx) => {
                const Icon = servicesMeta[_airoIdx]?.icon ?? Package;
                return (
                  <FadeUp key={s.title} delay={_airoIdx * 0.08}>
                    <div className="rounded-xl border border-border p-6 flex flex-col bg-background h-full">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                        style={{ background: 'hsl(var(--primary) / 0.07)' }}
                      >
                        <Icon size={19} className="text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </FadeUp>
                );
              })}
            </div>
            <FadeUp className="text-center mt-8">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-md font-medium text-sm border border-border bg-background text-foreground hover:border-primary transition-colors"
              >
                View All Services <ArrowRight size={14} />
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 border-b border-border">
          <div className="container mx-auto px-4 max-w-5xl">
            <FadeUp className="text-center mb-12">
              <p className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">The Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">How It Works</h2>
              <p className="mt-3 max-w-xl mx-auto text-muted-foreground">
                A straightforward process from inquiry to delivery — designed for efficiency and transparency.
              </p>
            </FadeUp>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {home.steps.map((step, i) => (
                <FadeUp key={step.num} delay={i * 0.07}>
                  <div className="rounded-xl border border-border p-6 bg-card h-full">
                    <span
                      className="text-2xl font-bold block mb-3"
                      style={{ color: 'hsl(var(--primary) / 0.22)' }}
                    >
                      {step.num}
                    </span>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
            <FadeUp className="text-center mt-8">
              <Link to="/how-it-works" className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline">
                Full process details <ArrowRight size={14} />
              </Link>
            </FadeUp>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
              <p className="mb-8 leading-relaxed cta-sub">
                Contact our team with your product requirements and we will prepare a custom quotation for your order.
              </p>
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-md font-semibold text-sm bg-primary-foreground text-primary hover:opacity-90 transition-opacity"
              >
                Request a Quote <ArrowRight size={15} />
              </Link>
              <p className="text-xs mt-5 cta-fine">
                Response time: 1–2 business days · support@arseenenterprises.co.uk
              </p>
              <div className="flex flex-wrap justify-center gap-6 mt-6 text-xs cta-meta">
                <span>UK Private Limited Company</span>
                <span>Company Number: 17474730</span>
                <span>International B2B &amp; B2C</span>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        /* Hero overlays */
        .hero-dots {
          background-image: radial-gradient(circle, hsl(var(--primary-foreground) / 0.07) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .hero-glow {
          background: radial-gradient(circle at top right, hsl(var(--primary-foreground) / 0.06) 0%, transparent 65%);
        }
        .hero-badge {
          border-color: hsl(var(--primary-foreground) / 0.2);
          color: hsl(var(--primary-foreground) / 0.7);
          background: hsl(var(--primary-foreground) / 0.06);
        }
        .hero-dot { background: hsl(var(--primary-foreground) / 0.6); }
        .hero-sub { color: hsl(var(--primary-foreground) / 0.65); }
        .hero-outline-btn {
          border-color: hsl(var(--primary-foreground) / 0.22);
          color: hsl(var(--primary-foreground) / 0.8);
        }
        .hero-outline-btn:hover {
          background: hsl(var(--primary-foreground) / 0.06);
        }
        .hero-trust { color: hsl(var(--primary-foreground) / 0.4); }
        .hero-trust-dot { background: hsl(var(--primary-foreground) / 0.3); }

        /* CTA section */
        .cta-sub  { color: hsl(var(--primary-foreground) / 0.65); }
        .cta-fine { color: hsl(var(--primary-foreground) / 0.4); }
        .cta-meta { color: hsl(var(--primary-foreground) / 0.3); }
      `}</style>
    </>
  );
}
