import React, { useState } from 'react';
import AboutMe from './Aboutme';
import ExperinceItem from './ExperienceItem';
import { experience } from './experience';

const Content = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleHover = (index: number) => setActiveIndex(index);
  const handleHoverOut = () => setActiveIndex(null);

  return (
    <main className="main-content-container">
      <AboutMe />
      <section id="experience" className="main-content-sections">
        <div>
          {experience.map(
            ({ title, description, dates, role, tags, image, link }, i) => (
              <ExperinceItem
                key={i}
                title={title}
                description={description}
                dates={dates}
                role={role}
                tags={tags}
                image={image}
                link={link}
                isActive={activeIndex === i || activeIndex === null} // Highlight active or show all
                onHover={() => handleHover(i)}
                onHoverOut={handleHoverOut}
              />
            ),
          )}
        </div>
      </section>
    </main>
  );
};

export default Content;
