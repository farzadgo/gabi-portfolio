import { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import Link from 'next/link';
import styles from '../styles/Home.module.css';
// import bg_01 from '../assets/spr-01.png';


export default function Home() {

  const footerStyle = {
    position: 'absolute',
    width: '100%',
    bottom: '0',
    display: 'flex',
    // justifyContent: 'space-between',
    padding: '12px 15px',
    fontFamily: 'var(--text-type)',
    fontSize: '0.7em',

  }

  const router = useRouter();
  const videoRef = useRef(null);

  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);
  // const toggleAbout = () => setShowAbout(prev => !prev);

  const toggleContact = () =>{
    if (!showContact) {
      setShowAbout(false);
      if (showAbout) {
        setTimeout(() => {
          setShowContact(true);
        }, "800");
      } else {
        setShowContact(true);
      }
    } else {
      setShowContact(false);
    }
  }

  const toggleAbout = () => {
    if (!showAbout) {
      setShowContact(false);
      if (showContact) {
        setTimeout(() => {
          setShowAbout(true);
        }, "800");
      } else {
        setShowAbout(true);
      }
    } else {
      setShowAbout(false);
    }
  }

  // const [showPDF, setShowPDF] = useState(false);
  // const togglePDF = () => {
  //   setShowPDF(prev => !prev);
  //   // if (showAbout || showContact) {
  //   //   setShowAbout(false);
  //   //   setShowContact(false);
  //   // }
  // }

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/works');
  }

  useEffect(() => {
    let startFrom = Math.floor(Math.random() * 196);
    console.log(`startFrom: ${startFrom}`);
    videoRef.current.src = 'https://cloud.disorient.xyz/s/GQ8xkcXWQEAJnb9/download/gvaldespino-web-intro_2023.m4v';
    videoRef.current.currentTime = startFrom;
    return () => {
    }
  }, [])
  

  return (
    <div>
      <Head>
        <title> Gabriela Valdespino </title>
        <meta charSet='utf-8' />
        <meta name="description" content="Gabriela Valdespino is an artist working in the fields of photography, moving images, sound, and performance. She explores body and space, focusing on the relationship between social/somatic affectations and their relationship with technology." />
        <meta name="keywords" content="artist, performance, HfK_Bremen, multimedia, scenography, stage design, sound artist, DJ, audiovisual, composition, Restore_Bremen, film, photography, dance, portfolio" />
        <meta name="image" content="/gvaldespino-webcover-2023.png" />      
        <meta name="author" content="Gabriela Valdespino" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Gabriela Valdespino" key="title" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gvaldespino.xyz/" />
        <meta property="og:description" content="Gabriela Valdespino is an artist working in the fields of photography, moving images, sound, and performance. She explores body and space, focusing on the relationship between social/somatic affectations and their relationship with technology." />
        <meta property="og:image" content="/gvaldespino-webcover-2023.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>

        <div className={styles.info}>
          <h1> GABRIELA VALDESPINO </h1>
          <About showAbout={showAbout} />
          <Contact showContact={showContact} />
          <div className={styles.infobuttons}>
            <button onClick={toggleAbout} className={styles.btn}> {showAbout ? '✕' : 'ABOUT' } </button>
            {/* <button onClick={togglePDF} className={styles.btn}> WORKS </button> */}
            <button onClick={handleClick} className={styles.btn}> WORKS </button>
            <button onClick={toggleContact} className={styles.btn}> {showContact ? '✕' : 'CONTACT' } </button>
          </div>
        </div>

        <div className={styles.videoContainer}>
          <video ref={videoRef} width="100%" height="100%" autoPlay loop muted >
            {/* <source src="https://cloud.disorient.xyz/s/GQ8xkcXWQEAJnb9/download/gvaldespino-web-intro_2023.m4v" type="video/mp4"/> */}
          </video>
        </div>

        {/* {showPDF &&
          <div className={styles.pdfcontainer}>
            <button onClick={togglePDF} className={styles.btn}> ✕ </button>
            <iframe src='/GV_portfolio_online_2023.pdf#toolbar=0&view=FitH'/>
          </div>
        } */}

        {/* <div className={styles.bg}>
          // <img src={background.src} alt="speicher"/>
          // TODO: change that src every 3 seconds
          <div style={{ backgroundImage: `url(${bg_01.src})` }}>
            <h1 style={{ mixBlendMode: 'difference' }}> GABRIELA VALDESPINO </h1>
          </div>
        </div> */}

      </main>

      <footer style={footerStyle}>
        <span> copyright © gabriela valdespino 2023 </span> &nbsp; — &nbsp;
        <span> web by <a href='https://github.com/farzadgo' target='_blank'> farzadgo </a></span>
      </footer>
    </div>
  )
}



const paragStyle = {
  overflow: 'hidden',
  transitionProperty: 'height, opacity',
  transitionDuration: '0.7s',
  fontSize: 'var(--text-size)',
  fontFamily: 'var(--text-type)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  lineHeight: '1.3em',
  margin: '0.5em 0',
  textShadow: 'var(--txt-shadow);',
  // paddingLeft: '10px'
}

const About = ({ showAbout }) => {

  const aboutStyle = {
    height: showAbout ? 'var(--about-height)' : '0px',
    opacity: showAbout ? '1' : '0',
    transitionDelay: showAbout ? '0s, 0.3s' : '0.3s, 0s',
  }

  const aboutParag = `
    Gabriela Valdespino is an artist and designer whose work encompasses photography, moving images, sound and performance.
    In her artistic practice she explores the relationship between the physical and spatial constructions, focussing on social dynamics and the resulting somatic affects.
    Her investigations begin with contemplative perceptual exercises to develop her own methods, such as hypersensitive soundwalks.
    Her work critically examines the historical, present and potential future interactions of individuals with and through technological interfaces.
    This investigation is emphasised by the inclusion of multimedia elements in performative contexts that serve as tools for the interplay of human engagement and technological mediation.
    In 2022 in collaboration with other artists, Gabriela co-initiated the project restore_ a series of site-specific performances in off-spaces around Bremen.
    She is currently completing a Master of Arts in Digital Media.
  `
  return (
    <div style={{...aboutStyle, ...paragStyle}}>
      <p> {aboutParag} </p>
    </div>
  )
}

const Contact = ({ showContact }) => {

  const contactStyle = {
    height: showContact ? 'var(--contact-height)' : '0px',
    opacity: showContact ? '1' : '0',
    transitionDelay: showContact ? '0s, 0.3s' : '0.3s, 0s',
  }

  return (
    <ul style={{...contactStyle, ...paragStyle}}>
      <li style={{marginBottom: '0.3em'}}> gabrielavaldespino@gmx.de </li>
      <li> <a href="https://www.instagram.com/lowfisd/" target="_blank"> @lowfisd </a></li>
    </ul>
  )
}