import './App.css'
import { useContext, useMemo } from 'react'
import {
  Box,
  Container,
  Typography,
  Stack,
  IconButton,
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import MailIcon from '@mui/icons-material/Mail'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Publications from './components/Publications/Publications'
import { ThemeContext } from './contexts/theme'

const HeaderIconLink = ({ href, label, children }) => (
  <Box
    component="a"
    href={href}
    target={href.startsWith('mailto:') ? undefined : '_blank'}
    rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
    aria-label={label}
    sx={{
      color: 'inherit',
      display: 'inline-flex',
      lineHeight: 0,
      '&:hover': { opacity: 0.7 },
    }}
  >
    {children}
  </Box>
)

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
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeName,
          ...(themeName === 'dark' && {
            background: {
              default: '#22282F',
              paper: '#22282F',
            },
          }),
        },
      }),
    [themeName]
  )

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Stack spacing={1.25} sx={{ mb: 3, fontFamily: (muiTheme) => muiTheme.typography.fontFamily }}>
          <Box display="flex" justifyContent="space-between" alignItems="center" gap={2}>
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{
                fontFamily: 'inherit',
                color: themeName === 'dark' ? '#fff' : '#000',
              }}
            >
              Michael Leong
            </Typography>
            <IconButton
              onClick={toggleTheme}
              aria-label={themeName === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              sx={{ color: 'text.secondary' }}
            >
              {themeName === 'dark' ? (
                <LightModeOutlinedIcon />
              ) : (
                <DarkModeOutlinedIcon />
              )}
            </IconButton>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" gap={2} flexWrap="wrap">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: 1.75,
                color: themeName === 'dark' ? '#fff' : '#000',
              }}
            >
              <HeaderIconLink href="mailto:mtleong@usc.edu" label="Email">
                <MailIcon sx={{ fontSize: 28 }} />
              </HeaderIconLink>
              <HeaderIconLink href="https://github.com/leongmichael" label="GitHub">
                <GitHubIcon sx={{ fontSize: 28 }} />
              </HeaderIconLink>
              <HeaderIconLink href="https://www.linkedin.com/in/m-leong/" label="LinkedIn">
                <LinkedInIcon sx={{ fontSize: 28 }} />
              </HeaderIconLink>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                gap: 1,
              }}
            >
              <Badge>San Jose, CA | Los Angeles, CA</Badge>
              <Badge>ECE @ USC</Badge>
            </Box>
          </Box>
        </Stack>

        <Experience />
        <Publications />
        <Projects />
      </Container>
    </MuiThemeProvider>
  )
}

export default App
