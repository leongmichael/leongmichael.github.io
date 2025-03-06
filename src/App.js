import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import Footer from './components/Footer/Footer'
import './App.css'
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
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';



const App = () => {
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
          I'm an undergraduate at USC studying Electrical and Computer Engineering. 
          My interests range from electronics, PCB design, controls, and robotics.
        </Typography>
        
        <Typography paragraph>
          See more on my <Link href="https://leongmichael.github.io/resume/resume.pdf" underline="always">resume</Link> or contact me at <Link href="mailto:mtleong@usc.edu" underline="always">mtleong@usc.edu</Link>.
        </Typography>
      </Box>

      {/* Work Experience */}
      <Typography variant="h5" fontWeight="medium" mb={2}>Experience</Typography>
      <Box mb={4}>
        <WorkExperience 
          logo={<LogoAvatar company="R" bgcolor="#6666cc" color="white" />}
          company="Robot Locomotion and Navigation Dynamics Lab" 
          role="Research Fellow"
          year="2025 - Present"
        />
        <WorkExperience 
          logo={<LogoAvatar company="R" bgcolor="black" color="white" />}
          company="Rocket Propulsion Lab" 
          role="Avionics Engineer"
          year="2024 - Present"
        />
        <WorkExperience 
          logo={<LogoAvatar company="B" bgcolor="#ffd700" color="black" />}
          company="Lawrence Berkeley National Lab" 
          role="Research Intern, Student Assistant"
          year="2023 - 2024"
        />
      </Box>

      {/* Projects */}
      <Typography variant="h5" fontWeight="medium" mb={2}>Projects</Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Project 
            title="Boeing Design Challenge " 
            description="4th place design pitch at Boeing Design Challenge hosted at USC."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project 
            title="VelocityDraft" 
            description="Flexible application essay scheduler webapp. Third place in Onehacks III Hackathon."
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Project 
            title="Canvas Final Grade Calculator" 
            description="Web extension that fetches your Canvas grade and calculates the final exam score needed for your desired grade.
            900+ downloads on Chrome Web Store."
          />

        </Grid>
      </Grid>
    </Container>

  );
}

export default App
