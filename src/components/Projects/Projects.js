import React, { useState } from 'react';
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
  IconButton,
  Modal,
  IconButton as MuiIconButton
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import projectsData from './Projects.json';

const Projects = () => {
  const theme = useTheme();

  const ProjectCard = ({ project }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [existingImages, setExistingImages] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    // Get images from the imageDirectory if it exists
    const getImages = () => {
      if (!project.imageDirectory) return [];
      
      // Dynamically generate image paths - assume images are numbered 1.png, 2.png, etc.
      // We'll try up to 20 images to cover most cases
      const images = [];
      for (let i = 1; i <= 20; i++) {
        const imagePath = `/images/${project.imageDirectory}/${i}.png`;
        images.push(imagePath);
      }
      
      return images;
    };

    const allImages = getImages();

    // Check which images actually exist
    React.useEffect(() => {
      const checkImages = async () => {
        const existing = [];
        for (let i = 0; i < allImages.length; i++) {
          try {
            const response = await fetch(allImages[i], { method: 'HEAD' });
            if (response.ok) {
              existing.push(allImages[i]);
            }
          } catch (error) {
            // Image doesn't exist, skip it
          }
        }
        setExistingImages(existing);
        setImagesLoaded(true);
      };
      
      if (project.imageDirectory) {
        checkImages();
      }
    }, [project.imageDirectory]);

    const handleImageClick = () => {
      setCurrentImageIndex(0);
      setModalOpen(true);
    };

    const handleCloseModal = () => {
      setModalOpen(false);
    };

    const handlePreviousImage = () => {
      setCurrentImageIndex((prev) => (prev === 0 ? existingImages.length - 1 : prev - 1));
    };

    const handleNextImage = () => {
      setCurrentImageIndex((prev) => (prev === existingImages.length - 1 ? 0 : prev + 1));
    };

    return (
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
          
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
            {/* Image Gallery on the left */}
            {imagesLoaded && existingImages.length > 0 && (
              <Box sx={{ flexShrink: 0 }}>
                <Box 
                  sx={{ 
                    width: 250,
                    height: 250,
                    borderRadius: 2, 
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)'
                    }
                  }}
                  onClick={handleImageClick}
                >
                                          <img
                          src={existingImages[0]}
                          alt={`${project.title} - Click to view gallery`}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '8px'
                          }}
                        />
                </Box>
                {imagesLoaded && existingImages.length > 1 && (
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: theme.palette.text.secondary,
                      mt: 1,
                      display: 'block',
                      textAlign: 'center'
                    }}
                  >
                    Click to view {existingImages.length} images
                  </Typography>
                )}
              </Box>
            )}

            {/* Bullet points on the right */}
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

          {/* Image Gallery Modal */}
          <Modal
            open={modalOpen}
            onClose={handleCloseModal}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              p: 2
            }}
          >
            <Box
              sx={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                overflow: 'hidden'
              }}
            >
              {/* Close button */}
              <MuiIconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  zIndex: 1,
                  color: 'white',
                  '&:hover': {
                    bgcolor: 'rgba(0, 0, 0, 0.1)'
                  }
                }}
              >
                <CloseIcon />
              </MuiIconButton>

                                {/* Navigation buttons */}
                  {existingImages.length > 1 && (
                <>
                  <MuiIconButton
                    onClick={handlePreviousImage}
                    sx={{
                      position: 'absolute',
                      left: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 1,
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.1)'
                      }
                    }}
                  >
                    <NavigateBeforeIcon />
                  </MuiIconButton>
                  <MuiIconButton
                    onClick={handleNextImage}
                    sx={{
                      position: 'absolute',
                      right: 8,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      zIndex: 1,
                      color: 'white',
                      '&:hover': {
                        bgcolor: 'rgba(0, 0, 0, 0.1)'
                      }
                    }}
                  >
                    <NavigateNextIcon />
                  </MuiIconButton>
                </>
              )}

                                {/* Image */}
                  <img
                    src={existingImages[currentImageIndex]}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: '90vh',
                      objectFit: 'contain'
                    }}
                  />

                                {/* Image counter */}
                  {existingImages.length > 1 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 16,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        px: 2,
                        py: 1
                      }}
                    >
                      <Typography 
                        variant="caption" 
                        sx={{ 
                          color: 'white',
                          fontSize: '0.875rem',
                          fontWeight: 500,
                          textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)'
                        }}
                      >
                        {currentImageIndex + 1} / {existingImages.length}
                      </Typography>
                    </Box>
                  )}
            </Box>
          </Modal>
        </CardContent>
      </Card>
    );
  };

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