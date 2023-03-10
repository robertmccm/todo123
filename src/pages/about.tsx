import Head from 'next/head';
import styles from '@/styles/Home.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            This is the about page.
          </p>
        </div>
      </main>
    </>
  );
}
