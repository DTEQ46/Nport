import React from 'react'
import styles from '../styles/Project.module.css'

function Project({data}) {
  return (
      <div className={styles.container} key={data.name}>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.techstack}>{data.techstack}</div>
          <div className={styles.description}>{data.description}</div>
          <div className={styles.show}>
              <button><img src='/images/live.svg' /> Live</button>
              <button><img src='/images/code.svg' />Code</button>
          </div>
    </div>
  )
}

export default Project