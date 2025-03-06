import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  Card,
  CardContent,
  Divider,
  Avatar,
  Stack,
  Button,
  IconButton
} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

// Company logos represented as colored circles/squares with first letter
const LogoAvatar = ({ company, color, bgcolor, size = 28 }) => (
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
    {company[0]}
  </Avatar>
);

const WorkExperience = ({ logo, company, role, year }) => (
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

const Project = ({ title, description }) => (
  <Card variant="outlined" sx={{ height: '100%' }}>
    <CardContent>
      <Box display="flex" justifyContent="space-between" alignItems="flex-start">
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <IconButton size="small">
          <OpenInNewIcon fontSize="small" />
        </IconButton>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
  </Card>
);

const PersonalWebsite = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">Michael Leong</Typography>
        <Box>
          <IconButton>
            <GitHubIcon />
          </IconButton>
          <IconButton>
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Bio */}
      <Box mb={4}>
        <Typography paragraph>
          I'm Michael, an undergraduate at USC studying Electrical and Computer Engineering. 
          My interests range from electronics, PCB design, controls, and robotics.
        </Typography>
        
        <Typography paragraph>
          See more on my <Link href="https://leongmichael.github.io/resume/resume.pdf" underline="always">resume</Link> or contact me at <Link href="mailto:mtleong@usc.edu" underline="always">mtleong@usc.edu</Link>.
        </Typography>
      </Box>

      {/* Work Experience */}
      <Typography variant="h5" fontWeight="medium" mb={2}>Work</Typography>
      <Box mb={4}>
        <WorkExperience 
          logo={<LogoAvatar company="Mercor" bgcolor="#6666cc" color="white" />}
          company="Robot Locomotion and Navigation Dynamics Lab" 
          role="Researcher"
          year="2025"
        />
        <WorkExperience 
          logo={<LogoAvatar company="Atlas" bgcolor="black" color="white" />}
          company="Atlas" 
          role="Engineering, AI"
          year="2024"
        />
        <WorkExperience 
          logo={<LogoAvatar company="Whatnot" bgcolor="#ffd700" color="black" />}
          company="Whatnot" 
          role="Design"
          year="2023"
        />
      </Box>

      {/* Projects */}
      <Typography variant="h5" fontWeight="medium" mb={2}>Projects</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Project 
            title="NOX" 
            description="Next-gen voice assistant. Built structured memory and devtooling."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project 
            title="Dream" 
            description="An AI no-code tool for building fully-functional web apps."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project 
            title="Bloom" 
            description="Re-imagining personalized learning at scale."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project 
            title="AirDiligence" 
            description="AI-powered due-diligence for commercial real estate."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project 
            title="Avery" 
            description="Your personalized AI assistant & companion."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project 
            title="Recollect" 
            description="The best way to save and share your memories."
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default PersonalWebsite;