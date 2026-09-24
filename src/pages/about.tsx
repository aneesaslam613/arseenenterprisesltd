import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { ArrowRight, ShieldCheck, Globe, Users, FileText } from 'lucide-react';
import { about } from 'virtual:content';

const SITE_URL = 'https://arseenenterprises.co.uk';

const iconMap: Record<string, React.ElementType> = {
  wcu1: FileText,
  wcu2: Users,
  wcu3: Globe,
};

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About ARSEEN ENTERPRISES LTD · Procurement &amp; Fulfillment</title>
        <meta name="description" content="ARSEEN ENTERPRISES LTD is a UK private limited company (Company Number: 17474730) providing custom product procurement and international order fulfillment for B2B and B2C clients." />
        <link rel="canonical" href={`${SITE_URL}/about`} />
        <meta property="og:title" content="About ARSEEN ENTERPRISES LTD" />
        <meta property="og:description" content="UK private limited company providing custom product procurement and international order fulfillment." />
        <meta property="og:url" content={`${SITE_URL}/about`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>About</span>
            </p>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">{about.hero.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{about.hero.heading}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{about.hero.intro}</p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">{about.whoWeAre.heading}</h2>
            <div className="space-y-4 text-muted-foreground">
              {about.whoWeAre.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Company Details */}
        <section className="py-16 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">{about.companyDetails.heading}</h2>
            <div className="bg-background border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Company Name', 'ARSEEN ENTERPRISES LTD'],
                    ['Entity Type', 'Private Limited Company (Ltd)'],
                    ['Jurisdiction', 'England and Wales, United Kingdom'],
                    ['Company Number', '17474730'],
                    ['Registration', 'Active — Companies House'],
                    ['Registered Office', 'Office 1878 85 Dunstall Hill, Wolverhampton, WV6 0SR, GB'],
                    ['Services', 'Product Procurement & Order Fulfillment'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 font-medium text-foreground bg-muted/30 w-1/3">{label}</td>
                      <td className="px-4 py-3 text-muted-foreground">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">{about.companyDetails.note}</p>
          </div>
        </section>

        {/* Procurement Scope */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-2">{about.procurementScope.heading}</h2>
            <p className="text-muted-foreground mb-6">{about.procurementScope.intro}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {about.procurementScope.items.map((item) => (
                <div key={item.id} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5">·</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">{about.procurementScope.note}</p>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-6">{about.coreValues.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {about.coreValues.items.map((item) => (
                <div key={item.id} className="flex items-start gap-3 bg-background border border-border rounded-lg p-4">
                  <ShieldCheck className="text-primary shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">{about.whyChooseUs.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {about.whyChooseUs.items.map((item) => {
                const Icon = iconMap[item.id] ?? FileText;
                return (
                  <div key={item.id}>
                    <Icon className="text-primary mb-3" size={24} />
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">{about.cta.heading}</h2>
            <p className="text-muted-foreground mb-6">{about.cta.body}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <span>UK Private Limited Company</span>
              <span>Company Number: 17474730</span>
              <span>International B2B &amp; B2C Services</span>
              <span>1–2 Business Days Support Response Time</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
