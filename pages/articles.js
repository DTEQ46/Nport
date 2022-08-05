
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Articles.module.css'
import clientPromise from '../utils/mongodb';
import Article from '../components/Article';

function Articles({art}) {
  return (
    <Layout title='Articles' description='Portfolio Articles Daniel Olasehinde' btnLeft = 'Projects' btnLeftLink = '/projects' btnRight ='Resume' btnRightLink = '/resume'>
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

export async function getStaticProps() {
  const client = await clientPromise;
  const database = client.db('test');
  const userdb = await database
    .collection('articles')
    .find({})
    .toArray();
  return {
    props: {
      art: JSON.parse(JSON.stringify(userdb)),
    },
  };
}
