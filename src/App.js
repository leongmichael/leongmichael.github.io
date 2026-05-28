import './App.css'
import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Publications from './components/Publications/Publications'

const Badge = ({ children }) => (
  <Box
    sx={{
      display: 'inline-flex',
      alignItems: 'center',
      width: 'fit-content',
      px: 1.25,
      py: 0.3,
      borderRadius: 999,
      border: '1px solid',
      borderColor: 'divider',
    }}
  >
    <Typography
      variant="caption"
      color="text.secondary"
      fontWeight={500}
      sx={{ fontSize: '0.72rem' }}
    >
      {children}
    </Typography>
  </Box>
)

const App = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={3}>
        <Stack spacing={1}>
          <Typography variant="h4" fontWeight="bold">Michael Leong</Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 1,
              width: 'fit-content',
            }}
          >
            <Badge>San Jose, CA | Los Angeles, CA</Badge>
            <Badge>ECE @ USC</Badge>
          </Box>
        </Stack>
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
      {/* <Box mb={3}>
        <Typography paragraph>
          I'm a student at USC pursuing a B.S and M.S. in Electrical and Computer Engineering. I'm interested in computer architecture, RTL/hardware design, and verification. I'm currently an SoC Design Engineering intern at Arm, contributing towards their next-generation AGI CPU.
        </Typography>
      </Box> */}

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
