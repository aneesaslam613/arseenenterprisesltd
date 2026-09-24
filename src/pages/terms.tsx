import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { terms } from 'virtual:content';

const SITE_URL = 'https://arseenenterprises.co.uk';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service · ARSEEN ENTERPRISES LTD</title>
        <meta name="description" content="Terms of Service for ARSEEN ENTERPRISES LTD — the legally binding agreement governing use of our procurement and fulfillment services." />
        <link rel="canonical" href={`${SITE_URL}/terms`} />
        <meta property="og:title" content="Terms of Service · ARSEEN ENTERPRISES LTD" />
        <meta property="og:url" content={`${SITE_URL}/terms`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <div className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>Terms of Service</span>
            </p>
          </div>
        </div>

        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-xs text-muted-foreground mb-2">{terms.meta.lastUpdated}</p>
            <h1 className="text-4xl font-bold text-foreground mb-4">{terms.meta.heading}</h1>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
              <p>{terms.intro}</p>

              {terms.sections.map((section) => (
                <div key={section.id}>
                  <h2 className="text-base font-bold text-foreground mb-2">{section.heading}</h2>
                  <p>{section.body}</p>
                </div>
              ))}

              <div className="pt-4 border-t border-border">
                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm">
                  Contact Us With Questions →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
