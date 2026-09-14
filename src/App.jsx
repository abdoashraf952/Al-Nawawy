import { useI18n } from './i18n/useI18n';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './sections/Hero';
import { TrustStrip } from './sections/TrustStrip';
import { Problem } from './sections/Problem';
import { ServicesOverview } from './sections/ServicesOverview';
import { AIAgents } from './sections/AIAgents';
import { Automation } from './sections/Automation';
import { WebDevelopment } from './sections/WebDevelopment';
import { Marketing } from './sections/Marketing';
import { MediaShowcase } from './sections/MediaShowcase';
import { WhyUs } from './sections/WhyUs';
import { Process } from './sections/Process';
import { FinalCTA } from './sections/FinalCTA';

export default function App() {
  const { t } = useI18n();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t('common.skipToContent')}
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <TrustStrip />
        <Problem />
        <ServicesOverview />
        <AIAgents />
        <Automation />
        <WebDevelopment />
        <Marketing />
        <MediaShowcase />
        <WhyUs />
        <Process />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
