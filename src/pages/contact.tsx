import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { contact } from 'virtual:content';

const SITE_URL = 'https://arseenenterprises.co.uk';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us · ARSEEN ENTERPRISES LTD</title>
        <meta name="description" content="Contact ARSEEN ENTERPRISES LTD for procurement requests, fulfillment inquiries, and custom quotations. Registered Office: Office 1878 85 Dunstall Hill, Wolverhampton, WV6 0SR, UK." />
        <link rel="canonical" href={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact Us · ARSEEN ENTERPRISES LTD" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <div className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>Contact</span>
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">{contact.hero.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{contact.hero.heading}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{contact.hero.intro}</p>
          </div>
        </section>

        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              {/* Contact details */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-1">{contact.details.companyName}</h2>
                  <p className="text-sm text-muted-foreground">{contact.details.entityNote}</p>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Registered Office</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{contact.details.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Email</p>
                    <a href={`mailto:${contact.details.email}`} className="text-sm text-primary hover:underline">
                      {contact.details.email}
                    </a>
                    <p className="text-xs text-muted-foreground mt-1">{contact.details.emailNote}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="text-primary shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">Response Time</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{contact.details.responseTime}</p>
                  </div>
                </div>

                <div className="bg-muted/30 border border-border rounded-lg p-4 text-sm">
                  <p className="font-medium text-foreground mb-1">Entity Type</p>
                  <p className="text-muted-foreground">{contact.details.entityType}</p>
                  <p className="text-muted-foreground">{contact.details.jurisdiction}</p>
                  <p className="text-muted-foreground">{contact.details.companyNumber}</p>
                </div>

                {/* Business hours */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">{contact.hours.heading}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>{contact.hours.weekdays}</span>
                      <span>{contact.hours.weekdayHours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{contact.hours.weekend}</span>
                      <span>{contact.hours.weekendHours}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">{contact.hours.note}</p>
                </div>

                {/* Service area */}
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{contact.serviceArea.heading}</h3>
                  <p className="text-sm text-muted-foreground">{contact.serviceArea.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {contact.serviceArea.regions.map((region) => (
                      <span key={region.id} className="text-xs bg-muted/30 border border-border rounded px-2 py-1 text-muted-foreground">{region.label}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Inquiry types + CTA */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-4">{contact.inquiryTypes.heading}</h2>
                  <div className="space-y-4">
                    {contact.inquiryTypes.items.map((item) => (
                      <div key={item.id} className="bg-background border border-border rounded-lg p-4">
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/20 border border-border rounded-lg p-5">
                  <h3 className="font-semibold text-foreground mb-2">{contact.compliance.heading}</h3>
                  <p className="text-sm text-muted-foreground">{contact.compliance.body}</p>
                </div>

                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-3">{contact.cta.heading}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{contact.cta.body}</p>
                  <a
                    href={`mailto:${contact.details.email}`}
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
                  >
                    Send an Email <ArrowRight size={16} />
                  </a>
                  <div className="mt-4">
                    <Link to="/services" className="text-sm text-primary hover:underline">View our services</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
