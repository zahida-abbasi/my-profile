// app/about/page.tsx
"use client"; 
import React from 'react';
import Link from 'next/link';
import styles from './about.module.css';
import Layout from '../components/layout/Layout';

const About: React.FC = () => {
  return ( 
    <Layout>
    <main className={styles.aboutContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.heading}>About Me</h1>
          <p className={styles.subHeading}>
            Hi, I am Zahida, a passionate web developer specialized in creating stunning and responsive websites. I am constantly learning and evolving to stay at the forefront of web development. My goal is to deliver creative and efficient solutions for every project I work on.
            
          </p>
        </div>
      </section>

      <section className={styles.bioSection}>
        <h2>Who I Am</h2>
        <p>
          I am a professional web developer with experience in technologies like 
          <strong> HTML, CSS, JavaScript, TypeScript, and Next.js.</strong> 
          My passion for web development stems from my curiosity to learn and grow in the tech industry.
        </p>
        <p>
          I also have a strong eye for design, working on projects related to UI/UX and graphic design. 
          My goal is to build functional and visually appealing websites that provide users with the best possible experience.
        </p>
      </section>

      <section className={styles.skillsSection}>
        <h2>Skills & Expertise</h2>
        <ul className={styles.skillsList}>
          <li>Web Development: HTML, CSS, JavaScript, TypeScript</li>
          <li>Frontend Frameworks: React.js, Next.js</li>
          <li>Design Tools: Photoshop, Figma</li>
          <li>Responsive Web Design, UI/UX</li>
        </ul>
      </section>

      <section className={styles.contactSection}>
        <h2>Get In Touch</h2>
        <p>
          Feel free to reach out if you want to collaborate on a project, or just say hello! 
        </p>
        <Link href="/contact" className={styles.contactLink}>Contact Me</Link>
      </section>
    </main>
    </Layout>

  );
};

export default About;
