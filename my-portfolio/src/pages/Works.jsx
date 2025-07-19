import React from 'react';
import works from '../data/works.json';
import WorkCard from '../components/WorkCard';
import styles from '../styles/Works.module.css'; // ★
import common from '../styles/Common.module.css';

const Works = () => {
  return (
    <section className={common.container}>
      <h2>制作実績（＊すべて架空の実績です）</h2>
      <div className={styles.worksList}>
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default Works;