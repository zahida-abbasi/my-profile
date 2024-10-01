"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './components/Home.module.css';
import Layout from './components/layout/Layout';


// Home Component
const Home: React.FC = () => {
  return (
    <>
      <Layout>
        
      <main className={styles.profileContainer}>
        <div className={styles.introStyle}>
          <h1>Hi, I am Zahida <br /> Next Js Developer</h1>
          <button className={styles.customButton}>
            <Link href="/about">
                Read More
            </Link>
          </button>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/my-image.jpg"
            alt="my Image"
            width={300}
            height={300}
            className={styles.imageStyle}
          />
        </div>
      </main>
     </Layout>
    </>
  );
};

export default Home;
