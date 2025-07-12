import React from 'react';
import works from '../data/works.json';
import WorkCard from '../components/WorkCard';

const Works = () => {
  return (
    <section>
      <h2>制作実績</h2>
      <div className="works-list">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </div>
    </section>
  );
};

export default Works;
