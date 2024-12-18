import React, { useState } from 'react';
import { Stack, Chip, Button, Typography } from '@mui/material';

// Flattened tags for initial display
export type TagsType = {
  tags: {
    FrontEnd: string[];
    Backend: string[];
    DevOps: string[];
    Basic: string[];
  };
};

function ChipList({ tags }: TagsType) {
  const [showMore, setShowMore] = useState(false); // State to toggle view

  const toggleShowMore = () => setShowMore((prev) => !prev);

  return (
    <div>
      {!showMore ? (
        <Stack useFlexGap sx={{ flexWrap: 'wrap' }} direction="row" spacing={1}>
          {tags.Basic.map((tag, i) => (
            <Chip
              className="experience-item__chips"
              key={i}
              label={tag}
              color="primary"
            />
          ))}
        </Stack>
      ) : (
        <div onClick={toggleShowMore}>
          {Object.entries(tags)
            .filter((t) => t[0] !== 'Basic')
            .map(([category, tags]) => (
              <div key={category}>
                <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                  {category}
                </Typography>
                <Stack
                  useFlexGap
                  sx={{ flexWrap: 'wrap' }}
                  direction="row"
                  spacing={1}
                >
                  {tags.map((tag, i) => (
                    <Chip
                      className="experience-item__chips"
                      key={i}
                      label={tag}
                      color="secondary"
                    />
                  ))}
                </Stack>
              </div>
            ))}
        </div>
      )}

      {/* Show More / Show Less Button */}
      <div className="flex flex-aic flex-jcc">
        <Button variant="text" onClick={toggleShowMore} sx={{ marginTop: 2 }}>
          {showMore ? 'Show Less' : 'Show More'}
        </Button>
      </div>
    </div>
  );
}

export default ChipList;
