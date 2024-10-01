import React from 'react'
import uniqid from 'uniqid'
import { publications } from '../../portfolio'
import './Publications.css'

const Publications = () => {
  return (
    <section className='section publications' id='publications'>
      <h2 className='section__title'>Publications</h2>
      <div className='publications__grid'>
        {publications.map((publication) => (
          <div key={uniqid()} className='publication'>
            <h3 className='publication__title'>{publication.title}</h3>
            <p className='publication__description'>{publication.description}</p>
            <p className='publication__citation'>{publication.citation}</p>
            {publication.link && (
              <a
                href={publication.link}
                aria-label='publication link'
                className='link publication__link'
                target="_blank" 
              >
                View Publication
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Publications