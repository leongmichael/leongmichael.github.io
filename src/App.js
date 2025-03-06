import { useContext } from 'react'
import { ThemeContext } from './contexts/theme'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import PersonalWebsite from './components/PersonalWebsite'
import './App.css'

const App = () => {
  // const [{ themeName }] = useContext(ThemeContext)

  return (
    <div id='top'>
      {/* <Header /> */}

      <main>
        {/* <About />
        <Projects />
        <Publications />
        <Skills />
        <Contact /> */}
        <PersonalWebsite />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  )
}

export default App
