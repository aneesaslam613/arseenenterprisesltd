import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { how_it_works } from 'virtual:content';

const SITE_URL = 'https://arseenenterprises.co.uk';

const steps = [
  { num: '01', title: 'Submit Product Requirements', desc: 'The customer provides the requested product specifications, quantity, destination and relevant fulfillment requirements.' },
  { num: '02', title: 'Receive a Quotation', desc: 'Arseen Enterprises LTD reviews procurement availability and fulfillment requirements and provides the customer with a quotation, including applicable order and shipping information.' },
  { num: '03', title: 'Approve & Pay', desc: 'The customer reviews and accepts the quotation and pays Arseen Enterprises LTD for the approved order.' },
  { num: '04', title: 'Product Procurement', desc: 'Arseen Enterprises LTD coordinates procurement of the requested physical products through its sourcing and procurement network.' },
  { num: '05', title: 'Order Preparation', desc: 'The order is inspected where applicable, consolidated, prepared and packaged for shipment.' },
  { num: '06', title: 'International Shipment', desc: 'Arseen Enterprises LTD coordinates shipment through an appropriate independent logistics provider as part of the order fulfillment process.' },
  { num: '07', title: 'Tracking & Delivery', desc: 'Tracking information is provided to the customer when available, and Arseen Enterprises LTD provides shipment-status support through delivery.' },
];

export default function HowItWorksPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Helmet>
        <title>How It Works · ARSEEN ENTERPRISES LTD</title>
        <meta name="description" content="A clear 7-step process from product requirements to delivery — coordinated by ARSEEN ENTERPRISES LTD from start to finish." />
        <link rel="canonical" href={`${SITE_URL}/how-it-works`} />
        <meta property="og:title" content="How It Works · ARSEEN ENTERPRISES LTD" />
        <meta property="og:url" content={`${SITE_URL}/how-it-works`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <div className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>How It Works</span>
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">The Process</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How It Works</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              A clear process from product requirements to delivery — coordinated by Arseen Enterprises LTD from start to finish.
            </p>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Seven Steps to Seamless Fulfillment</h2>
            <p className="text-muted-foreground mb-10">Every order follows the same proven path — transparent, efficient, and trackable.</p>
            <div className="space-y-10">
              {steps.map((step, i) => (
                <div key={step.num} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                      {step.num}
                    </div>
                    {i < steps.length - 1 && <div className="w-px flex-1 bg-border mt-2" />}
                  </div>
                  <div className="pb-6 flex-1">
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey summary */}
        <section className="py-12 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-foreground mb-6 text-center">Your Order's Journey at a Glance</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {steps.map((step, i) => (
                <div key={step.num} className="flex items-center gap-2">
                  <span className="text-xs bg-background border border-border rounded px-2 py-1 text-muted-foreground">
                    {step.num} {step.title}
                  </span>
                  {i < steps.length - 1 && <span className="text-muted-foreground text-xs">→</span>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ — inline map, no child component */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground mb-6">Quick answers to common questions about our fulfillment process.</p>
            <div className="space-y-3">
              {how_it_works.faqs.map((faq, i) => (
                <div key={faq.id} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-muted-foreground ml-4">{openIndex === i ? '−' : '+'}</span>
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-4 text-sm text-muted-foreground border-t border-border pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Begin?</h2>
            <p className="text-muted-foreground mb-6">Start Your Fulfillment Journey — Ready to submit your product requirements?</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
