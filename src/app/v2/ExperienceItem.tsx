import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import TimeIcon from '@mui/icons-material/AccessTimeFilledOutlined';
import Typography from '@mui/material/Typography';
import Image, { StaticImageData } from 'next/image';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import Box from '@mui/material/Box';
import ExperienceChips from './ExperienceChips';
import { TagsType } from './ExperienceChips';

interface ExperienceItemProps {
  title: string;
  description: string[];
  dates: string[];
  role: string;
  tags: TagsType['tags'];
  image: StaticImageData;
  link: string;
  isActive: boolean;
  onHover: () => void;
  onHoverOut: () => void;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  description,
  dates,
  role,
  tags,
  image,
  link,
  isActive,
  onHover,
  onHoverOut,
}) => {
  return (
    <div
      className="experience-item__container"
      onMouseEnter={onHover}
      onMouseLeave={onHoverOut}
      style={{
        opacity: isActive ? 1 : 0.3,
        transition: 'opacity 0.3s ease-in-out',
      }}
    >
      <div>
        <Box
          className="experience-item__box"
          component="a"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex  flex-aic flex-jcsb">
            <div className="flex flex-aic gap-16">
              <Image src={image} alt="WS" width={50} height={50} />
              <Typography variant="h5">{title}</Typography>
            </div>
            <ShortcutIcon className="short-cut__on_hover" />
          </div>
        </Box>
        <p className="flex flex-aic">
          <WorkIcon fontSize="small" />
          {role}
        </p>

        <p className="flex flex-aic">
          <TimeIcon fontSize="small" /> {dates[0]} - {dates[1] || 'Present'}
        </p>
      </div>

      <ul>
        {description.map((d, i) => (
          <li style={{ listStyle: 'initial' }} key={i}>
            {d}
          </li>
        ))}
      </ul>

      <ExperienceChips tags={tags} />
    </div>
  );
};

export default ExperienceItem;
