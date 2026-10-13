import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import {
  HomePage,
  ServicesPage,
  AIAgentsPage,
  AutomationPage,
  WebPage,
  MarketingPage,
  UseCasesPage,
  WorkPage,
  HowWeWorkPage,
  FAQPage,
  NotFoundPage,
} from './pages/pages';

// Paths here must match src/data/routes.js (which also drives the post-build static pages).
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/ai-agents" element={<AIAgentsPage />} />
        <Route path="services/automation" element={<AutomationPage />} />
        <Route path="services/web" element={<WebPage />} />
        <Route path="services/marketing" element={<MarketingPage />} />
        <Route path="use-cases" element={<UseCasesPage />} />
        <Route path="work" element={<WorkPage />} />
        <Route path="how-we-work" element={<HowWeWorkPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
