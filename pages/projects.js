
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Projects.module.css'
import clientPromise from '../utils/mongodb';
// import data from '../utils/data'
import axios from 'axios'
import Project from '../components/Project';

function Projects({pro}) {
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

export async function getStaticProps() {
  const client = await clientPromise;
  const database = client.db('test');
  const userdb = await database
    .collection('projects')
    .find({})
    .toArray();
  return {
    props: {
      pro: JSON.parse(JSON.stringify(userdb)),
    },
  };
}
