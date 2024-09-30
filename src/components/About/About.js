import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BiotechIcon from '@mui/icons-material/Biotech';
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          <span className='about__name'>{name}</span>
        </h1>
      )}

      {role && <h3 className='about__role'>{role}</h3>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target="_blank" rel="noopener noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}

            {social.orcid && (
              <a
                href={social.orcid}
                aria-label='orcid'
                className='link link--icon'
                target="_blank" 
                rel="noopener noreferrer"
              >
                <BiotechIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
