import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const toPublicPath = (imagePath) =>
  imagePath.startsWith('/') ? imagePath : `/images/${imagePath}`;

const SIZES = {
  tile: { width: 300, height: 300 },
  wide: { width: 300, height: 168 },
};

const navButtonSx = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 1,
  color: 'white',
  bgcolor: 'rgba(0, 0, 0, 0.55)',
  borderRadius: 1,
  '&:hover': {
    bgcolor: 'rgba(0, 0, 0, 0.7)',
  },
  '& *': {
    bgcolor: 'transparent',
  },
};

const countSx = {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  bgcolor: 'rgba(0, 0, 0, 0.55)',
  borderRadius: 1,
  '& *': {
    bgcolor: 'transparent',
  },
};

const ImageGallery = ({ images = [], title = '', variant = 'tile' }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const size = SIZES[variant] || SIZES.tile;

  const existingImages = images.map(toPublicPath);
  if (!existingImages.length) return null;

  const hasMultiple = existingImages.length > 1;

  const handlePreviousImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? existingImages.length - 1 : prev - 1));
  };

  const handleNextImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prev) => (prev === existingImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: '100%', sm: 'auto' },
          display: 'flex',
          justifyContent: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: size.width },
            maxWidth: size.width,
            height: { xs: size.height * 0.95, sm: size.height },
            borderRadius: 2,
            overflow: 'hidden',
            cursor: 'pointer',
            position: 'relative',
          }}
          onClick={() => setModalOpen(true)}
        >
          <img
            src={existingImages[currentImageIndex]}
            alt={`${title} ${currentImageIndex + 1} of ${existingImages.length}`}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
            }}
          />

          {hasMultiple && (
            <>
              <IconButton
                size="small"
                disableRipple
                aria-label="Previous image"
                onClick={handlePreviousImage}
                sx={{ ...navButtonSx, left: 6 }}
              >
                <NavigateBeforeIcon fontSize="small" sx={{ color: 'white' }} />
              </IconButton>
              <IconButton
                size="small"
                disableRipple
                aria-label="Next image"
                onClick={handleNextImage}
                sx={{ ...navButtonSx, right: 6 }}
              >
                <NavigateNextIcon fontSize="small" sx={{ color: 'white' }} />
              </IconButton>
              <Box
                sx={{
                  ...countSx,
                  bottom: 8,
                  px: 1,
                  py: 0.25,
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'white',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    bgcolor: 'transparent',
                  }}
                >
                  {currentImageIndex + 1} / {existingImages.length}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Box>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '90vw',
            maxHeight: '90vh',
            overflow: 'hidden',
          }}
        >
          <IconButton
            disableRipple
            onClick={() => setModalOpen(false)}
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              color: 'white',
              bgcolor: 'rgba(0, 0, 0, 0.7)',
              '&:hover': {
                bgcolor: 'rgba(0, 0, 0, 0.9)',
              },
              '& *': {
                bgcolor: 'transparent',
              },
            }}
          >
            <CloseIcon sx={{ color: 'white' }} />
          </IconButton>

          {hasMultiple && (
            <>
              <IconButton
                disableRipple
                onClick={handlePreviousImage}
                sx={{ ...navButtonSx, left: 8 }}
              >
                <NavigateBeforeIcon sx={{ color: 'white' }} />
              </IconButton>
              <IconButton
                disableRipple
                onClick={handleNextImage}
                sx={{ ...navButtonSx, right: 8 }}
              >
                <NavigateNextIcon sx={{ color: 'white' }} />
              </IconButton>
            </>
          )}

          <img
            src={existingImages[currentImageIndex]}
            alt={`${title} ${currentImageIndex + 1} of ${existingImages.length}`}
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '90vh',
              objectFit: 'contain',
            }}
          />

          {hasMultiple && (
            <Box
              sx={{
                ...countSx,
                bottom: 16,
                px: 2,
                py: 1,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color: 'white',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  letterSpacing: '0.5px',
                }}
              >
                {currentImageIndex + 1} / {existingImages.length}
              </Typography>
            </Box>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default ImageGallery;
