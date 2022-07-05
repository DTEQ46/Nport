
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Projects.module.css'
import { useRouter } from 'next/router'
// import data from '../utils/data'
import axios from 'axios'
import Project from '../components/Project';

function Projects() {
    const [pro, setPro] = useState([]);

     useEffect(() => {
         const fetchData = async () => {
        const {data} = await axios.get("/api/project");
        setPro(data);
         };
         fetchData();
     }, []);

    
  return (
    <Layout title='Projects' description='Portfolio Projects Daniel Olasehinde' btnLeft = 'Home' btnLeftLink = '/' btnRight ='Article' btnRightLink = '/articles'  >
              <div className={styles.container}>
              {pro.map((proj) => {
                  return(
                      <Project data={proj} />
             ) })}
              </div>     
    </Layout>
  )
}

export default Projects
