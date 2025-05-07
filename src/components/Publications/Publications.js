import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import publications from './Publications.json'; // Import the JSON file

const Publications = () => {
  const PublicationItem = ({ title, authors, year, journal, link }) => (
    <Box sx={{ py: 1.5, borderBottom: '1px dotted #eee' }}>
      <Grid container spacing={2}>
        <Grid item xs>
          <Typography variant="subtitle1" fontWeight="medium">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {authors} ({year}). {journal}.
          </Typography>
          <Typography variant="body2" color="primary">
            <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
              {link}
            </a>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Box mb={4}>
      <Typography variant="h5" fontWeight="medium" mb={2}>Publications</Typography>
      {publications.map((pub, index) => (
        <PublicationItem
          key={index}
          title={pub.title}
          authors={pub.authors}
          year={pub.year}
          journal={pub.journal}
          link={pub.link}
        />
      ))}
    </Box>
  );
};

export default Publications;