import React from 'react';
import styles from '../styles/WorkCard.module.css'; // ★

const WorkCard = ({ title, description, image }) => {
  return (
    <div className={styles.workCard}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WorkCard;
