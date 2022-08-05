import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Resume.module.css'
import Resumecomp from '../components/Resumecomp'

function Resume() {
    return (
        <Layout title='Resume' description='Resume Daniel Olasehinde' btnLeft = 'Articles' btnLeftLink = '/articles' btnRight ='Home' btnRightLink = '/'>
                  <div className={styles.container}>
                <div className={styles.head}>

                <h2 className={styles.name}>DANIEL OLUWABUNMI OLASEHINDE</h2>
                <p className={styles.title}>Full-Stack Developer</p>
                <div className={styles.contact}>
                    <div className={styles.address}>Zone 11, Capital Area, Oshogbo, Osun State, Nigeria</div>
                    <div className={styles.gmail}>olasehindedaniel109@gmail.com </div>
                    <div className={styles.phone}>+2348161648794</div>
                  </div>
                </div>

                  <Resumecomp heading="ABOUT ME" >
                      <p>I am persionate about Web Development and Internet of Things. I care about writing clean, efficient and reusable codes. I am always ready to work on any project, and I am open to learning new technologies, too.</p>
                  </Resumecomp>
                  <Resumecomp heading="PORTFOLIO ULR: danielolasehinde.vercel.app" />
                  <Resumecomp heading="SKILLS" >
                      <div>DIGITAL SKILLS: Web Devs, UI Design, Embedded Systems’ Design</div>
                      <div>LIFE SKILLS: Analytic Skill, Problem Solving Skill, Detail Oriented, Self-Driven, Fast Learning</div>
                      <div>TECHNOLOGIES: HTML, CSS, JavaScript,React Js, Next Js, Node, Express, Mongodb, Figma Git/Github</div>
                      <div>INTEREST: Web Apps, Mobile Apps, Blockchain</div>
                  </Resumecomp>
                  <Resumecomp heading="EDUCATION" >
                      <ul>
                        <li>
                          <div>Adekunle Ajasin University Akungba-Akoko, Ondo State</div>
                          <div>BSc. (Hons.) Physics and Electronics</div>
                          <div>2020</div>
                        </li>
                        <li>
                          <div>Ijomimo Oluwa High School Akure, Ondo State</div>
                          <div>Senior School Certificate Examination(SSCE)</div>
                          <div>2013</div>
                        </li>
                        <li>
                          <div>Community Primary School Elemuletu, Akure, Ondo State</div>
                          <div>Primary School Leaving Certificate(PSLC)</div>
                          <div>2007</div>
                        </li>
                      </ul>
                  </Resumecomp>
                  <Resumecomp heading="HOBBIES" >
                      <div>Traveling, Writing, Singing</div>
                  </Resumecomp>

                  </div>  
                  
        </Layout>
      )
}

export default Resume