import { refund_policy } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';

const SITE_URL = 'https://arseenenterprises.co.uk';

export default function RefundPolicyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${SITE_URL}/refund-policy#webpage`,
    name: 'Refund Policy · ARSEEN ENTERPRISES LTD',
    url: `${SITE_URL}/refund-policy`,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <>
      <Helmet>
        <title>Refund Policy · ARSEEN ENTERPRISES LTD</title>
        <meta
          name="description"
          content="Refund policy for orders placed with ARSEEN ENTERPRISES LTD — cancellation windows, defective goods claims, non-refundable fees, and UK consumer rights."
        />
        <link rel="canonical" href={`${SITE_URL}/refund-policy`} />
        <meta property="og:title" content="Refund Policy · ARSEEN ENTERPRISES LTD" />
        <meta property="og:description" content="Refund and cancellation policy for custom procurement and fulfillment orders." />
        <meta property="og:url" content={`${SITE_URL}/refund-policy`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">{JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>Refund Policy</span>
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
              Last Updated: <span>{refund_policy.meta.lastUpdated}</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {refund_policy.meta.heading}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed">
              {refund_policy.intro}
            </p>
          </div>
        </section>

        {/* Summary cards */}
        <section className="py-10 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-sm font-semibold text-foreground mb-4">Quick Reference</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-background border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-foreground mb-1">Before Procurement Starts</p>
                <p className="text-xs text-muted-foreground">Full refund available — contact us immediately in writing.</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-foreground mb-1">After Procurement / In Transit</p>
                <p className="text-xs text-muted-foreground">No refund — costs already incurred on your behalf.</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-4">
                <p className="text-xs font-semibold text-foreground mb-1">Defective or Wrong Goods</p>
                <p className="text-xs text-muted-foreground">Notify within 7 days with photos — replacement, credit, or refund assessed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy sections */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-10">
              {refund_policy.sections.map((section) => (
                <div key={section.id} className="border-b border-border pb-10 last:border-0 last:pb-0">
                  <h2 className="text-lg font-bold text-foreground mb-3">{section.heading}</h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 border-t border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <h2 className="text-xl font-bold text-foreground mb-3">Questions About a Refund?</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Email us with your order reference and we will respond within 2 business days.
            </p>
            <a
              href="mailto:support@arseenenterprises.co.uk?subject=Refund%20Request"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
            >
              Email support@arseenenterprises.co.uk
            </a>
            <p className="text-xs text-muted-foreground mt-4">
              ARSEEN ENTERPRISES LTD · Company Number: 17474730 · Registered in England &amp; Wales
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
