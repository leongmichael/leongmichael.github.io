import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  IconButton
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import projectsData from './Projects.json';

const Projects = () => {
  const theme = useTheme();

  const ProjectCard = ({ project }) => (
    <Card
      variant="outlined"
      sx={{
        borderRadius: 3,
        mb: 3,
        overflow: 'visible'
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={1}>
        <Typography variant="h5" fontWeight="medium" mb={0.5}>
            {project.title}
          </Typography>
          {project.link && (
            <IconButton 
              size="small" 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              sx={{ color: theme.palette.text.secondary }}
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
        
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
          <Box sx={{ flex: 1 }}>
          
            <List sx={{ p: 0 }}>
              {project.bullets.map((bullet, index) => (
                <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                  <ListItemIcon sx={{ minWidth: 20, mt: 0.5 }}>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: theme.palette.text.secondary
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: theme.palette.text.secondary,
                          fontSize: '0.9rem',
                          lineHeight: 1.5
                        }}
                      >
                        {bullet}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
            
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" fontWeight="medium" mb={1}>Projects</Typography>
      
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </Box>
  );
};

export default Projects;