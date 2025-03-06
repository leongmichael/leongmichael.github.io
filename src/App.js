import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
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

const App = () => {
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

      {/* Work Experience Component */}
      <Experience />

      {/* Projects Component */}
      <Projects />
    </Container>
  );
}

export default App
