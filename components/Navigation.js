import{ React, useRef} from 'react'
import styles from '../styles/Navigation.module.css'
import Menubar from './Menubar';

function Navigation() {
    const navRef = useRef();
    const toggleNav = () =>{
        navRef.current.classList.toggle(styles.show);
    }
  return (
    <div className={styles.navigation}>
      <a href='https://danielolasehinde.vercel.app/'>
        <img src='/images/logo.svg' alt='logo' />
      </a>
      <Menubar toggleNav={toggleNav} />
      <nav ref={navRef} className={styles.nav}>
            <div className={styles.links}>
            <a href='/'>Home</a>
            <a href='/projects'>Projects</a>
            <a href='/articles'>Articles</a>
            <a href='/#'>Resume</a>
            <div className={styles.social}>
            <a target="_blank"
          href="https://twitter.com/danitex46"
          rel="noopener noreferrer"><img src='/images/twitter.png' alt='avatar'/></a>
            <a target="_blank"
          href="https://github.com/DTEQ46"
          rel="noopener noreferrer"><img src='/images/github.png' alt='github'/></a>
            <a target="_blank"
          href="https://www.linkedin.com/in/olasehinde-daniel-89399b1b6/"
          rel="noopener noreferrer"><img src='/images/linkedin.png' alt='linkedin'/></a>
            <a target="_blank"
          href="mailto:olasehindedaniel109@gmail.com"
          rel="noopener noreferrer"><img src='/images/email.png' alt='email'/>
          </a>
            </div>
            </div>

        </nav>
        
    </div>
  )
}

export default Navigation