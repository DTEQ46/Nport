
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Articles.module.css'
import { useRouter } from 'next/router'
import axios from 'axios'
import Article from '../components/Article';

function Articles() {
    const [art, setArt] = useState([]);

     useEffect(() => {
         const fetchData = async () => {
        const {data} = await axios.get("/api/article");
        setArt(data);
         };
         fetchData();
     }, []);

    
  return (
    <Layout title='Articles' description='Portfolio Articles Daniel Olasehinde' btnLeft = 'Projects' btnLeftLink = '/projects' btnRight ='Resume' btnRightLink = '/articles'>
              <div className={styles.container}>
              {art.map((arts) => {
                  return(
                      <Article data={arts} />
             ) })}
              </div>     
    </Layout>
  )
}

export default Articles
