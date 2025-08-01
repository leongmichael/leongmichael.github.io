import './App.css'
import {
  Box,
  Container,
  Typography,
  Link,
  IconButton
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Publications from './components/Publications/Publications'

const App = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4" fontWeight="bold">Michael Leong</Typography>
        <Box>
          <IconButton 
            href="https://github.com/leongmichael" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton 
            href="https://www.linkedin.com/in/m-leong/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Bio */}
      <Box mb={4}>
        <Typography paragraph>
          I'm an undergraduate at USC studying Electrical and Computer Engineering. 
          My interests range from PCB design, semiconductors, controls, and robotics.
        </Typography>
        
        <Typography paragraph>
          See more on my <Link href="https://leongmichael.github.io/resume/resume.pdf" target="_blank" rel="noopener noreferrer" underline="always">resume</Link> or contact me at <Link href="mailto:mtleong@usc.edu" underline="always">mtleong@usc.edu</Link>.
        </Typography>
      </Box>

      {/* Work Experience Component */}
      <Experience />

      {/* Projects Component */}
      <Projects />

      {/* Publications */}
      <Publications />
    </Container>
  );
}

export default App
