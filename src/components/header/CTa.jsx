import React from 'react'
import CV from '../../images/Resume_W.pdf'


const CTa = ({scrollToArea}) => {
  return (
    <div className='cta'>
      <a className='btn' href={CV} download >Download CV</a>
      <a className='btn-primary' href='#contact' onClick={scrollToArea}>Let's Talk</a>
    </div>
  )
}

export default CTa
