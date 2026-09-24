import { shipping } from 'virtual:content';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const SITE_URL = 'https://arseenenterprises.co.uk';

const destinations = [
  ['China to the United Kingdom', 'approximately 7–13 business days'],
  ['China to the United States', 'approximately 4–7 business days'],
  ['China to Canada', 'approximately 7–13 business days'],
  ['China to Australia', 'approximately 7–13 business days'],
  ['China to Europe', 'approximately 7–13 business days'],
  ['China to the Middle East', 'approximately 7–13 business days'],
  ['Other destinations', 'estimate provided in the customer quotation'],
];

export default function ShippingPage() {
  return (
    <>
      <Helmet>
        <title>Shipping &amp; Delivery · ARSEEN ENTERPRISES LTD</title>
        <meta name="description" content="International shipping and delivery information for orders fulfilled by ARSEEN ENTERPRISES LTD — processing times, carriers, tracking, and customs guidance." />
        <link rel="canonical" href={`${SITE_URL}/shipping`} />
        <meta property="og:title" content="Shipping & Delivery · ARSEEN ENTERPRISES LTD" />
        <meta property="og:url" content={`${SITE_URL}/shipping`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <div className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>Shipping &amp; Delivery</span>
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">Estimates — Not Guarantees</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">International Shipping &amp; Delivery</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Processing times, delivery estimates, carrier information, customs guidance, and tracking details for international orders fulfilled by Arseen Enterprises LTD. Orders may be sourced or fulfilled through independent suppliers and fulfillment partners in China and other approved sourcing locations.
            </p>
          </div>
        </section>

        {/* Processing times */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-foreground mb-4">Order Processing Before Dispatch</h2>
            <p className="text-sm text-muted-foreground mb-4">Processing time is separate from delivery time. Delivery estimates begin after the parcel has been dispatched.</p>
            <div className="bg-background border border-border rounded-lg overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {[
                    ['Standard orders', 'approximately 3–7 business days'],
                    ['Product sourcing or procurement orders', 'approximately 5–10 business days'],
                    ['Customised, bulk, or complex orders', 'time stated in the quotation'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-border last:border-0">
                      <td className="px-4 py-3 text-foreground">{label}</td>
                      <td className="px-4 py-3 text-muted-foreground text-right">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Delivery estimates */}
        <section className="py-12 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-foreground mb-4">Estimated Delivery After Dispatch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-border bg-muted/30">
                  <p className="text-sm font-medium text-foreground">Service Levels</p>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      ['Express international service', 'approximately 4–7 business days'],
                      ['Standard international service', 'approximately 7–13 business days'],
                      ['Economy international service', 'approximately 13–19 business days'],
                    ].map(([label, value]) => (
                      <tr key={label} className="border-b border-border last:border-0">
                        <td className="px-4 py-3 text-foreground">{label}</td>
                        <td className="px-4 py-3 text-muted-foreground text-right">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="bg-background border border-border rounded-lg overflow-hidden">
                <div className="px-4 py-3 border-b border-border bg-muted/30">
                  <p className="text-sm font-medium text-foreground">Typical Destination Estimates</p>
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {destinations.map(([dest, time]) => (
                      <tr key={dest} className="border-b border-border last:border-0">
                        <td className="px-4 py-3 text-foreground">{dest}</td>
                        <td className="px-4 py-3 text-muted-foreground text-right">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Carriers */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-foreground mb-4">Carrier Information</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Depending on the shipment, parcels may be transported by, transferred to, or delivered through established international or regional carrier networks, including:
            </p>
            <div className="flex flex-wrap gap-2">
              {shipping.carriers.map((c) => (
                <span key={c} className="text-sm bg-muted/30 border border-border rounded px-3 py-1 text-muted-foreground">{c}</span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              The availability of a carrier varies by route and order. Listing a carrier does not necessarily mean that Arseen Enterprises LTD has a direct contractual partnership with that carrier.
            </p>
          </div>
        </section>

        {/* Tracking */}
        <section className="py-12 border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-foreground mb-4">Tracking Information</h2>
            <p className="text-sm text-muted-foreground mb-2">
              Tracking information is normally provided after the shipment has been accepted and processed by the applicable logistics provider. Tracking activation may take approximately 24–72 hours after dispatch. Some economy services provide milestone tracking rather than continuous scans.
            </p>
            <p className="text-sm text-muted-foreground">
              If a tracking number has not been received within 48 hours of the expected dispatch date, please contact us at{' '}
              <a href="mailto:support@arseenenterprises.co.uk" className="text-primary hover:underline">support@arseenenterprises.co.uk</a>.
            </p>
          </div>
        </section>

        {/* Customs */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-xl font-bold text-foreground mb-4">Customs and Import Charges</h2>
            <p className="text-sm text-muted-foreground mb-2">
              Customers are responsible for reviewing the import requirements of their destination country. Unless expressly included in the written quotation, customs duties, import taxes, brokerage fees, remote-area charges, and government assessments are payable by the recipient.
            </p>
            <p className="text-sm text-muted-foreground mb-2">
              Arseen Enterprises LTD may assist with reasonable shipment documentation but does not control customs authorities and cannot guarantee customs clearance.
            </p>
            <p className="text-sm text-muted-foreground">
              All delivery periods are estimates rather than guarantees. Actual delivery may be affected by customs clearance, security inspections, carrier congestion, weather, public holidays, remote destinations, inaccurate address information, recipient unavailability, import restrictions, or events outside our reasonable control.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Need a Shipping Estimate?</h2>
            <p className="text-muted-foreground mb-6">Request a custom quotation and we will provide specific processing and delivery estimates for your order.</p>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              Request a Quote <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
