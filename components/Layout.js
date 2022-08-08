import React, {useEffect,useState, useCallback} from 'react'
import Head from 'next/head'
import Navigation from './Navigation'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'
import Desklinks from './Desklinks'

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

function Layout({title, description, children, btnRight,btnRightLink, btnLeft, btnLeftLink}) {
  const isBreakpoint = useMediaQuery(990)
  return (
        <div className={styles.container}>
        <Head>
        <title>{title ? `${title} - Daniel Olasehinde` : 'Daniel Olasehinde'}</title>
        {description && <meta name="description" content={description}></meta>}
        <link rel="icon" href="/images/avatar.png" />
      </Head>
      {
        isBreakpoint?
        <div>
      <Navigation />
      <main className={styles.main}> 
        {children}
      </main>
      <div className={styles.footercont}>
      <Footer btnRight={btnRight} btnRightLink={btnRightLink} btnLeft={btnLeft} btnLeftLink={btnLeftLink}/>
      </div>
      
        </div>
      :
      <div className={styles.desktoplayout}>
        <div className={styles.fixedleft}>
        <div className={styles.name}>
          <h1>Daniel Olasehinde</h1>
        <h3>Full-Stack Web Developer</h3>
        </div>
        <div className={styles.intro}>
          <p>I am persionate about <span>Web Development</span> and <span>Internet of Things</span>. I care about writing <span>effective</span>, <span>clean</span> and <span>reusable</span> codes. I am always open to <span>learning</span> new technologies too.</p>
        </div>
        <div className={styles.desklinks}>
            <Desklinks num="00" name="Projects" link='/projects'/>
            <Desklinks num="01" name="Articles" link='/articles'/>
            <Desklinks num="02" name="Resume" link='/resume'/>
        </div>
        <Footer />
        </div>
      <div className={styles.rightscroll}> 
      {children}
      </div>
      </div>
      }
      
    </div>
  )
}

export default Layout