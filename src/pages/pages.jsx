import { Link } from 'react-router-dom';
import { useI18n } from '../i18n/useI18n';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { RelatedServices } from '../components/ui/RelatedServices';
import { Hero } from '../sections/Hero';
import { TrustStrip } from '../sections/TrustStrip';
import { Problem } from '../sections/Problem';
import { ServicesOverview } from '../sections/ServicesOverview';
import { ExploreStrip } from '../sections/ExploreStrip';
import { Engagement } from '../sections/Engagement';
import { AIAgents } from '../sections/AIAgents';
import { Automation } from '../sections/Automation';
import { WebDevelopment } from '../sections/WebDevelopment';
import { Marketing } from '../sections/Marketing';
import { Solutions } from '../sections/Solutions';
import { MediaShowcase } from '../sections/MediaShowcase';
import { WhyUs } from '../sections/WhyUs';
import { Process } from '../sections/Process';
import { FAQ } from '../sections/FAQ';

// One component per route. The first section of each page renders the page's <h1>
// (`primary`); Contact is added by Layout, not here.

export const HomePage = () => (
  <>
    <Hero />
    <TrustStrip />
    <Problem />
    <ServicesOverview />
    <ExploreStrip />
  </>
);

export const ServicesPage = () => (
  <>
    <ServicesOverview primary />
    <Engagement />
  </>
);

export const AIAgentsPage = () => (
  <>
    <AIAgents primary />
    <RelatedServices current="ai-agents" />
  </>
);

export const AutomationPage = () => (
  <>
    <Automation primary />
    <RelatedServices current="automation" />
  </>
);

export const WebPage = () => (
  <>
    <WebDevelopment primary />
    <RelatedServices current="web" />
  </>
);

export const MarketingPage = () => (
  <>
    <Marketing primary />
    <RelatedServices current="marketing" />
  </>
);

export const UseCasesPage = () => <Solutions primary />;

export const WorkPage = () => <MediaShowcase primary />;

export const HowWeWorkPage = () => (
  <>
    <WhyUs primary />
    <Process />
  </>
);

export const FAQPage = () => <FAQ primary />;

export function NotFoundPage() {
  const { t } = useI18n();
  return (
    <Container className="py-24 text-center sm:py-32">
      <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{t('notFound.title')}</h1>
      <p className="mx-auto mt-4 max-w-md text-body">{t('notFound.text')}</p>
      <Button as={Link} to="/" className="mt-8" withArrow>
        {t('notFound.cta')}
      </Button>
    </Container>
  );
}
