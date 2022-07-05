import React from 'react'
import styles from '../styles/Article.module.css'

function Article({data}) {
  return (
      <div className={styles.container} key={data.title}>
          <div className={styles.status}>{data.status}</div>
          <div className={styles.date}>{data.date}</div>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.readtime}>{data.readtime} <a target="_blank" href ={data.live}>read <img src='/images/link.svg'/></a></div>
    </div>
  )
}

export default Article