import React from 'react'
import styles from '../styles/Footer.module.css'
import {useRouter} from 'next/router'

function Footer({ btnRight, btnRightLink, btnLeft, btnLeftLink }) {
  
  const router = useRouter()
  return (
    <div className={styles.container}>

      {
        btnLeft &&
        <div className={styles.btn}>
        <button onClick={() => { router.push(btnLeftLink) }} >{btnLeft}</button>
        <button onClick={()=>{router.push(btnRightLink)}} >{ btnRight}</button>
      </div>
      }
      
      <div className={styles.footer}>
      
      <img src='/images/avatar.png' alt='avatar'/>
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
      <div className={styles.inspired}>Inspired by <a target='_blank' href='https://kadet.dev' rel='noopener noreferrer'>Kadet</a></div>
    </div>
  )
}

export default Footer