import React from 'react';

const WorkCard = ({ title, description, image }) => {
  return (
    <div className="work-card">
      <img src={image} alt={title} className="work-image" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default WorkCard;
