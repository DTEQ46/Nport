import React from 'react'
import styles from '../styles/Resumecomp.module.css'

function Resumecomp({heading, children}) {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>{heading}</div>
        <div className={styles.children}>{children}</div>
    </div>
  )
}

export default Resumecomp