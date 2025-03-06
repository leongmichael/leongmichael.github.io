import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';
import experienceData from './Experience.json';

const Experience = () => {
  const LogoAvatar = ({ letter, color, bgcolor, size = 28 }) => (
    <Avatar 
      sx={{ 
        width: size, 
        height: size, 
        bgcolor, 
        color, 
        fontSize: size/2,
        fontWeight: 'bold'
      }}
    >
      {letter}
    </Avatar>
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
      <Typography variant="h5" fontWeight="medium" mb={2}>Experience</Typography>
      {experienceData.map((experience, index) => (
        <WorkExperienceItem
          key={index}
          logo={
            <LogoAvatar 
              letter={experience.logo.letter}
              bgcolor={experience.logo.bgcolor}
              color={experience.logo.color}
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