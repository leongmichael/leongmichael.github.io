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
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
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
      <Box mb={3}>
        <Typography paragraph>
          Electrical and Computer Engineering Student at USC
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
