import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  IconButton 
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projectsData from './Projects.json';

const Projects = () => {
  const ProjectItem = ({ title, description, link }) => (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <Typography variant="h6" gutterBottom>{title}</Typography>
          {link && (
            <IconButton size="small" href={link} target="_blank" rel="noopener noreferrer">
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          )}
          {!link && (
            <IconButton size="small" disabled>
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );

  return (
    <Box mb={4}>
      <Typography variant="h5" fontWeight="medium" mb={2}>Projects</Typography>
      <Grid container spacing={2}>
        {projectsData.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <ProjectItem
              title={project.title}
              description={project.description}
              link={project.link}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;