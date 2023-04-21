import Head from 'next/head';
import styles from '../styles/Home.module.css';

import background from '../images/spr-01.png'

export default function Home() {

  console.log(background);

  return (
    <div>
      <Head>
        <title>Gabriela Valdespino</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <section className={styles.info}>
          <h1> Gabriela Valdespino </h1>
          <a href="https://cloud.disorient.xyz/"><h3> PDF Portfolio &rarr;</h3></a>
        </section>
        <div className={styles.bg}><img src={background.src} alt="speicher" /></div>
      </main>

      {/* <footer>
      </footer> */}

    </div>
  )
}
