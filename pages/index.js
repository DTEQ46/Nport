import React,{useState, useCallback, useEffect} from 'react';
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import clientPromise from '../utils/mongodb';
import Project from '../components/Project';
import {useRouter} from 'next/router'

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

export default function Home({pro}) {
  const isBreakpoint = useMediaQuery(990)
  const router = useRouter();
  return (
    <Layout title='Home' description='Daniel Olasehinde'>
      {isBreakpoint?
      <div className={styles.container}>
        <div className={styles.name}>
          <h1>Daniel Olasehinde</h1>
        <h3>Full-Stack Web Developer</h3>
        </div>
        <div className={styles.intro}>
          <p>I am passionate about <span>Web Development</span> and <span>Internet of Things</span>. I care about writing <span>effective</span>, <span>clean</span> and <span>reusable</span> codes. I am always open to <span>learning</span> new technologies too.</p>
        </div>
        <div className={styles.btn}>
          <button onClick={() => {
              router.push('mailto:olasehindedaniel109@gmail.com');
            }}>Contact Me <svg width="15" height="15" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 5.55556V4.44444L15 6.66667L12.5 4.44444V5.55556L15 7.77778L17.5 5.55556ZM18.3333 0H1.66667C0.75 0 0 1 0 2.22222V17.7778C0 19 0.75 20 1.66667 20H18.3333C19.25 20 19.9917 19 19.9917 17.7778L20 2.22222C20 1 19.25 0 18.3333 0ZM6.66667 3.33333C8.05 3.33333 9.16667 4.82222 9.16667 6.66667C9.16667 8.51111 8.05 10 6.66667 10C5.28333 10 4.16667 8.51111 4.16667 6.66667C4.16667 4.82222 5.28333 3.33333 6.66667 3.33333ZM11.6667 16.6667H1.66667V15.5556C1.66667 13.3333 5 12.1111 6.66667 12.1111C8.33333 12.1111 11.6667 13.3333 11.6667 15.5556V16.6667ZM18.3333 10H11.6667V3.33333H18.3333V10Z" fill="white"/>
</svg>
</button>
          <button onClick={()=>{
            router.push('/projects')
          }}>Explore <svg width="15" height="15" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 8L2.98023e-07 15.7942L2.98023e-07 0.205772L13.5 8Z" fill="#D9D9D9"/>
</svg>
</button>
        </div>
      </div>:
      <div className={styles.deskcontainer}>
              {pro.map((proj) => {
                  return(
                      <Project data={proj} />
             ) })}
              </div>  
} 
      </Layout>
    )
}

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
