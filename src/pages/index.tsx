import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--md"
            to="/docs/intro">
            ابدأ التعلم الآن 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="تعلم أنظمة القوى الكهربائية">
      <HomepageHeader />
      <main>
        <div className="container margin-top--xl margin-bottom--xl">
          <div className="text--center margin-bottom--xl">
            <Heading as="h2">دورة أنظمة القوى الكهربائية</Heading>
            <p>ابدأ رحلتك في عالم أنظمة القوى الكهربائية</p>
          </div>
          <HomepageFeatures />
        </div>
      </main>
    </Layout>
  );
}
