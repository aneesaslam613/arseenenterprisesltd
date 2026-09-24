import type { RouteObject } from 'react-router';

export type Path =
  | '/'
  | '/about'
  | '/services'
  | '/how-it-works'
  | '/pricing'
  | '/shipping'
  | '/contact'
  | '/blog'
  | '/privacy'
  | '/terms'
  | '/acceptable-use'
  | '/refund-policy';

export type Params = Record<string, string | undefined>;
import HomePage from './pages/index';
import AboutPage from './pages/about';
import ServicesPage from './pages/services';
import HowItWorksPage from './pages/how-it-works';
import PricingPage from './pages/pricing';
import ShippingPage from './pages/shipping';
import ContactPage from './pages/contact';
import BlogPage from './pages/blog';
import PrivacyPage from './pages/privacy';
import TermsPage from './pages/terms';
import AcceptableUsePage from './pages/acceptable-use';
import RefundPolicyPage from './pages/refund-policy';
import NotFoundPage from './pages/_404';

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/how-it-works', element: <HowItWorksPage /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/shipping', element: <ShippingPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/blog', element: <BlogPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/acceptable-use', element: <AcceptableUsePage /> },
  { path: '/refund-policy', element: <RefundPolicyPage /> },
  { path: '*', id: 'airo-not-found', element: <NotFoundPage /> },
];
