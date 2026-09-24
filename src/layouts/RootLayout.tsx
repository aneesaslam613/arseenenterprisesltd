import { Helmet } from '@dr.pogodin/react-helmet';
import Header from './parts/Header';
import Footer from './parts/Footer';
import Website from './Website';

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Helmet>
        <title>ARSEEN ENTERPRISES LTD · Procurement &amp; Fulfillment</title>
        <meta
          name="description"
          content="ARSEEN ENTERPRISES LTD — custom product procurement and international order fulfillment for B2B and B2C clients. UK private limited company, Company Number 17474730."
        />
      </Helmet>
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </Website>
  );
}
