import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type RouteMeta = {
  title: string;
  description: string;
  keywords: string;
};

const SITE_NAME = 'NovaTech Solutions';
const SITE_URL = 'https://tienxdun.github.io/NovaTech_Website';
const DEFAULT_OG_IMAGE = `${SITE_URL}/favicon.svg`;

const routeMeta: Record<string, RouteMeta> = {
  '/': {
    title: 'Enterprise IT Consulting & Software Solutions',
    description:
      'NovaTech delivers enterprise IT consulting, network infrastructure, software development, and secure data communication solutions in Vietnam and globally.',
    keywords:
      'NovaTech, IT consulting, software development, network solutions, data communication, Vietnam IT services',
  },
  '/about': {
    title: 'About NovaTech',
    description:
      'Learn about NovaTech\'s mission, leadership team, and unique approach to secure and scalable enterprise technology solutions.',
    keywords: 'about NovaTech, IT company Vietnam, enterprise technology partner, digital transformation',
  },
  '/services': {
    title: 'IT Services',
    description:
      'Explore NovaTech services: network architecture, cybersecurity, custom software development, and secure data communication.',
    keywords: 'IT services, network architecture, cybersecurity, custom software, data communication',
  },
  '/projects': {
    title: 'Case Studies & Projects',
    description:
      'See NovaTech case studies with measurable outcomes across fintech, e-commerce, and healthcare digital infrastructure projects.',
    keywords: 'IT case studies, software projects, cloud migration, enterprise solutions, NovaTech portfolio',
  },
  '/careers': {
    title: 'Careers at NovaTech',
    description:
      'Join NovaTech and build high-impact IT products. Discover open positions, work culture, and our application process.',
    keywords: 'NovaTech careers, React jobs Vietnam, network security jobs, IT hiring',
  },
  '/management': {
    title: 'Project Management Workflow',
    description:
      'Understand NovaTech\'s project management structure, delivery stages, communication plan, and quality control standards.',
    keywords: 'project management workflow, software delivery process, QA standards, agile team',
  },
};

const normalizePath = (pathname: string) => {
  if (!pathname || pathname === '/') {
    return '/';
  }

  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
};

const getCanonicalUrl = (pathname: string) => {
  const normalized = normalizePath(pathname);
  return normalized === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
};

export default function Seo() {
  const location = useLocation();
  const path = normalizePath(location.pathname);
  const meta = routeMeta[path] ?? routeMeta['/'];
  const canonicalUrl = getCanonicalUrl(path);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        logo: DEFAULT_OG_IMAGE,
      },
      {
        '@type': 'WebSite',
        name: SITE_NAME,
        url: `${SITE_URL}/`,
        inLanguage: 'en',
      },
      {
        '@type': 'WebPage',
        name: `${meta.title} | ${SITE_NAME}`,
        description: meta.description,
        url: canonicalUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: SITE_NAME,
          url: `${SITE_URL}/`,
        },
      },
    ],
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>{`${meta.title} | ${SITE_NAME}`}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={`${meta.title} | ${SITE_NAME}`} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={DEFAULT_OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${meta.title} | ${SITE_NAME}`} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={DEFAULT_OG_IMAGE} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}