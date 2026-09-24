import { services } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { ArrowRight, Package, CheckCircle, Search, Box, Globe, Truck } from 'lucide-react';

const SITE_URL = 'https://arseenenterprises.co.uk';

const servicesMeta = [
  {
    icon: Package
  },
  {
    icon: CheckCircle
  },
  {
    icon: Search
  },
  {
    icon: Box
  },
  {
    icon: Globe
  },
  {
    icon: Truck
  },
];

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Our Services · ARSEEN ENTERPRISES LTD</title>
        <meta name="description" content="Custom product procurement, order fulfillment, inspection coordination, packaging, international shipment and tracking — ARSEEN ENTERPRISES LTD." />
        <link rel="canonical" href={`${SITE_URL}/services`} />
        <meta property="og:title" content="Our Services · ARSEEN ENTERPRISES LTD" />
        <meta property="og:url" content={`${SITE_URL}/services`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <main>
        <div className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>Services</span>
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">What We Offer</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Custom product procurement and international order fulfillment for business clients (B2B) and individual consumers (B2C) — coordinated from requirements to delivery.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
              <span className="border border-border rounded px-3 py-1">6 Core Services</span>
              <span className="border border-border rounded px-3 py-1">International Shipment</span>
              <span className="border border-border rounded px-3 py-1">Written Quotations</span>
            </div>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="mb-10">
              <h2 className="text-2xl font-bold text-foreground mb-2">What We Do — Comprehensive Fulfillment Solutions</h2>
              <p className="text-muted-foreground">Every service is designed to reduce friction, increase visibility, and help your business scale without operational bottlenecks.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.services.map((s, _airoIdx) => {
                const Icon = servicesMeta[_airoIdx].icon;

                return (
                  <div key={s.title} className="bg-background border border-border rounded-lg p-6 flex flex-col">
                    <Icon className="text-primary mb-4" size={24} />
                    <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground flex-1">{s.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-1 text-sm text-primary mt-4 hover:underline">
                      Learn More <ArrowRight size={14} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How It Works mini */}
        <section className="py-16 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">How It Works — Simple. Reliable. Scalable.</h2>
            <div className="space-y-6">
              {[
                { num: '01', title: 'Submit Requirements', desc: 'Provide your product specifications, quantity, destination and fulfillment requirements.' },
                { num: '02', title: 'Receive a Quotation', desc: 'We review availability and provide a written quotation covering order and shipping details.' },
                { num: '03', title: 'Approve, Pay & Receive', desc: 'Approve the quotation, pay Arseen Enterprises LTD, and we coordinate procurement, preparation and delivery.' },
              ].map((step) => (
                <div key={step.num} className="flex gap-4">
                  <span className="text-2xl font-bold text-primary/30 shrink-0 w-10">{step.num}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Badges */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span>UK Private Limited Company</span>
              <span>B2B &amp; B2C</span>
              <span>International Reach</span>
              <span>Transparent Process — Written quotations before payment</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Tell us about your requirements and our team will review them and prepare a tailored procurement, fulfillment, and shipment-coordination quotation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
              >
                Contact Our Team <ArrowRight size={16} />
              </Link>
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 rounded-md font-medium hover:bg-accent transition-colors"
              >
                View How It Works
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
