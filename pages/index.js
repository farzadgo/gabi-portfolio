import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
// import { useRouter } from 'next/router';
// import Link from 'next/link';
import styles from '../styles/Home.module.css';
// import bg_01 from '../assets/spr-01.png';


export default function Home() {

  // const router = useRouter();

  const footerStyle = {
    position: 'absolute',
    width: '100%',
    bottom: '0',
    display: 'flex',
    // justifyContent: 'center',
    padding: '12px 15px',
    fontFamily: 'var(--text-type)',
    fontSize: '0.7em'
  }

  const videoRef = useRef(null);

  const [showAbout, setShowAbout] = useState(false);
  const toggleAbout = () => setShowAbout(prev => !prev);

  const [showPDF, setShowPDF] = useState(false);
  const togglePDF = () => {
    setShowPDF(prev => !prev);
    if (showAbout) setShowAbout(false);
  }

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   router.push('/works');
  // }

  // const handleVideo = (e) => {
  //   // console.log(e.target);
  //   // e.target.play();
  //   // e.target.currentTime = 100;
  //   // videoRef.current && videoRef.current.play();
  // }

  useEffect(() => {
    let startFrom = Math.floor(Math.random() * 196);
    console.log(startFrom);
    videoRef.current.src = 'https://cloud.disorient.xyz/s/GQ8xkcXWQEAJnb9/download/gvaldespino-web-intro_2023.m4v';
    videoRef.current.currentTime = startFrom;

    return () => {
    }
  }, [])
  

  return (
    <div>
      <Head>
        <title> Gabriela Valdespino </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>

        <div className={styles.info}>
          <h1> GABRIELA VALDESPINO </h1>
          <About show={showAbout}/>
          <div className={styles.infobuttons}>
            <button onClick={toggleAbout} className={styles.btn}> {showAbout ? '✕' : 'ABOUT' } </button>
            <button onClick={togglePDF} className={styles.btn}> WORKS </button>
            {/* <button onClick={handleClick} className={styles.btn}> WORKS </button> */}
          </div>
        </div>

        <div className={styles.videoContainer}>
          <video ref={videoRef} width="100%" height="100%" autoPlay loop muted >
            {/* <source src="https://cloud.disorient.xyz/s/GQ8xkcXWQEAJnb9/download/gvaldespino-web-intro_2023.m4v" type="video/mp4"/> */}
          </video>
        </div>

        {showPDF &&
          <div className={styles.pdfcontainer}>
            <button onClick={togglePDF} className={styles.btn}> ✕ </button>
            <iframe src='/portfolio_valdespino_online_2023.pdf#toolbar=0&view=FitH'/>
          </div>
        }

        {/* <div className={styles.bg}>
          // <img src={background.src} alt="speicher"/>
          // TODO: change that src every 3 seconds
          <div style={{ backgroundImage: `url(${bg_01.src})` }}>
            <h1 style={{ mixBlendMode: 'difference' }}> GABRIELA VALDESPINO </h1>
          </div>
        </div> */}

      </main>

      <footer style={footerStyle}> copyright © gabriela valdespino 2023 </footer>
    </div>
  )
}

const About = ({show}) => {

  const paragStyle = {
    height: show ? 'var(--about-height)' : '0px',
    opacity: show ? '1' : '0',
    overflow: 'hidden',
    transitionProperty: 'height, opacity',
    transitionDuration: '0.7s',
    transitionDelay: show ? '0s, 0.3s' : '0.3s, 0s',
    fontSize: 'var(--text-size)',
    fontFamily: 'var(--text-type)',
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1.3em',
    margin: '0.5em 0',
    // webkitTextStroke: '0.2px #fff',
    textShadow: '1px 1px 1px #fff',
  }

  const aboutParag = `
    Gabriela Valdespino (*1993) is an artist working in the fields of photography, moving images, sound, and performance.
    She explores body and space, focusing on the relationship between social/somatic affectations and their relationship with technology.
    Speculative thinking towards the future of the interaction technology-humans, the impact of media on society, and the role of technology in performative context are the main subjects of her research.
    After graduating with a Bachelor of Arts in Integrated Design at the University of the Arts in Bremen (2021) she is currently completing studies in Master of Arts Program Digital Media (2021).
  `
  return (
    <div style={paragStyle}>
      <p> {aboutParag} </p>
    </div>
  )
}