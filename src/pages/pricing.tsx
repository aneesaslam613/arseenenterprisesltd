import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { pricing } from 'virtual:content';

const SITE_URL = 'https://arseenenterprises.co.uk';

export default function PricingPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    customerType: '',
    quantity: '',
    destination: '',
    postalCode: '',
    weight: '',
    shippingSpeed: '',
    productDescription: '',
    additionalInstructions: '',
    confirmed: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent('Quote Request — Arseen Enterprises LTD');
    const body = encodeURIComponent(
      `Full Name: ${form.fullName}\nEmail: ${form.email}\nCustomer Type: ${form.customerType}\nQuantity: ${form.quantity}\nDestination Country: ${form.destination}\nPostal Code: ${form.postalCode}\nEstimated Weight: ${form.weight}\nPreferred Shipping Speed: ${form.shippingSpeed}\n\nProduct Description:\n${form.productDescription}\n\nAdditional Instructions:\n${form.additionalInstructions}`
    );
    window.location.href = `mailto:support@arseenenterprises.co.uk?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Helmet>
        <title>Pricing &amp; Quotes · ARSEEN ENTERPRISES LTD</title>
        <meta name="description" content="Request a custom procurement and fulfillment quotation from ARSEEN ENTERPRISES LTD. Written quotation before payment. B2B and B2C." />
        <link rel="canonical" href={`${SITE_URL}/pricing`} />
        <meta property="og:title" content="Pricing & Quotes · ARSEEN ENTERPRISES LTD" />
        <meta property="og:url" content={`${SITE_URL}/pricing`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <main>
        <div className="border-b border-border bg-muted/20">
          <div className="container mx-auto px-4 py-3">
            <p className="text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
              <span className="mx-2">›</span>
              <span>Pricing &amp; Quotes</span>
            </p>
          </div>
        </div>

        <section className="py-16 md:py-24 border-b border-border">
          <div className="container mx-auto px-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">{pricing.hero.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">{pricing.hero.heading}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{pricing.hero.intro}</p>
          </div>
        </section>

        {/* Pricing tiers */}
        <section className="py-16 border-b border-border">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 text-sm text-amber-800">
              <strong>Important:</strong> <span>{pricing.disclaimer}</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background border border-border rounded-lg p-6">
                <h2 className="font-bold text-foreground mb-4">{pricing.individualTier.heading}</h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {pricing.individualTier.items.map((item) => (
                    <li key={item.id} className="flex justify-between gap-4">
                      <span>{item.label}</span>
                      <span className="text-foreground font-medium shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-background border border-border rounded-lg p-6">
                <h2 className="font-bold text-foreground mb-4">{pricing.businessTier.heading}</h2>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {pricing.businessTier.items.map((item) => (
                    <li key={item.id} className="flex justify-between gap-4">
                      <span>{item.label}</span>
                      <span className="text-foreground font-medium shrink-0">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-muted/30 border border-border rounded-lg p-4">
              <p className="text-sm font-medium text-foreground mb-2">{pricing.pricingFactors.heading}</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
                {pricing.pricingFactors.items.map((item) => (
                  <span key={item.id} className="flex items-center gap-1">
                    <span className="text-primary">·</span> <span>{item.label}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote form */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-2xl">
            <h2 className="text-2xl font-bold text-foreground mb-2">{pricing.form.heading}</h2>
            <p className="text-muted-foreground mb-8">{pricing.form.subheading}</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Full Name <span className="text-destructive">*</span></label>
                <input
                  type="text"
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Email Address <span className="text-destructive">*</span></label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Customer Type <span className="text-destructive">*</span></label>
                <select
                  required
                  value={form.customerType}
                  onChange={(e) => setForm({ ...form, customerType: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select type…</option>
                  <option value="Business">Business</option>
                  <option value="Individual">Individual</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Quantity <span className="text-destructive">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Destination Country <span className="text-destructive">*</span></label>
                  <input
                    type="text"
                    required
                    value={form.destination}
                    onChange={(e) => setForm({ ...form, destination: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Postal Code</label>
                  <input
                    type="text"
                    value={form.postalCode}
                    onChange={(e) => setForm({ ...form, postalCode: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Estimated Weight (if known)</label>
                  <input
                    type="text"
                    value={form.weight}
                    onChange={(e) => setForm({ ...form, weight: e.target.value })}
                    className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Preferred Shipping Speed</label>
                <select
                  value={form.shippingSpeed}
                  onChange={(e) => setForm({ ...form, shippingSpeed: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select speed…</option>
                  <option value="Express (3–10 business days)">Express (3–10 business days)</option>
                  <option value="Standard (7–20 business days)">Standard (7–20 business days)</option>
                  <option value="Economy (10–35 business days)">Economy (10–35 business days)</option>
                  <option value="No preference">No preference</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Product Description or Product Link <span className="text-destructive">*</span></label>
                <textarea
                  required
                  rows={4}
                  value={form.productDescription}
                  onChange={(e) => setForm({ ...form, productDescription: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Additional Instructions</label>
                <textarea
                  rows={3}
                  value={form.additionalInstructions}
                  onChange={(e) => setForm({ ...form, additionalInstructions: e.target.value })}
                  className="w-full border border-border rounded-md px-3 py-2 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="confirm"
                  required
                  checked={form.confirmed}
                  onChange={(e) => setForm({ ...form, confirmed: e.target.checked })}
                  className="mt-1"
                />
                <label htmlFor="confirm" className="text-sm text-muted-foreground">
                  I confirm that I have reviewed the product or service description, estimated processing and delivery times,{' '}
                  <Link to="/shipping" className="text-primary hover:underline">Shipping Policy</Link>,{' '}
                  <Link to="/terms" className="text-primary hover:underline">Terms of Service</Link>, and{' '}
                  <Link to="/acceptable-use" className="text-primary hover:underline">Acceptable Use Policy</Link>.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-md font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Send Quote Request <ArrowRight size={16} />
              </button>
              <p className="text-xs text-muted-foreground text-center">{pricing.form.submitNote}</p>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
