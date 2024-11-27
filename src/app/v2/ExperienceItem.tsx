import React from 'react';

const ExperienceItem = ({ title, description, dates }) => {
  const test = '';

  return (
    <div>
      <div>
        <h3>{title}</h3>{' '}
        <p>
          {dates[0]} - {dates[1] || 'Present'}
        </p>
      </div>

      <p>{description}</p>
    </div>
  );
};

export default ExperienceItem;
