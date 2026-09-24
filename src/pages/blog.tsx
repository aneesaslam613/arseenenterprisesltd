import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { blog } from 'virtual:content';

const SITE_URL = 'https://arseenenterprises.co.uk';

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title>Blog · ARSEEN ENTERPRISES LTD</title>
        <meta name="description" content="Practical guidance on international product procurement, order fulfillment coordination, and shipment support — from ARSEEN ENTERPRISES LTD." />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Blog · ARSEEN ENTERPRISES LTD" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <div className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>Blog</span>
            </p>
          </div>
        </div>

        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">{blog.hero.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{blog.hero.heading}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{blog.hero.intro}</p>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-lg">{blog.empty}</p>
          </div>
        </section>
      </main>
    </>
  );
}
