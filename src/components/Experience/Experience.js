import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import experienceData from './Experience.json';

const Experience = () => {
  const LogoImage = ({ src, size = 28 }) => (
    <Avatar
      src={src}
      sx={{ 
        width: size, 
        height: size,
        // if no image, use a default background color
        bgcolor: '#eee'
      }}
      alt="Company logo"
    />
  );
  
  const WorkExperienceItem = ({ logo, company, role, year }) => (
    <Box sx={{ py: 1.5, borderBottom: '1px dotted #eee' }}>
      <Grid container alignItems="center" spacing={2}>
        <Grid item>{logo}</Grid>
        <Grid item xs>
          <Typography variant="subtitle1" fontWeight="medium">{company}</Typography>
          <Typography variant="body2" color="text.secondary">{role}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="text.secondary">{year}</Typography>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box mb={4}>
      <Typography variant="h5" fontWeight="medium" mb={0}>Experience</Typography>
      {experienceData.map((experience, index) => (
        <WorkExperienceItem
          key={index}
          logo={
            <LogoImage 
              src={experience.logo.image}
            />
          }
          company={experience.company}
          role={experience.role}
          year={experience.year}
        />
      ))}
    </Box>
  );
};

export default Experience;