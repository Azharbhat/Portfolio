import React from 'react';
import CTa from './CTa';
import ME from '../../images/me.png';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = React.forwardRef(({ scrollToArea }, ref) => {
  return (
    <header>
      <div ref={ref} className='container header_container'>
        <h5>Hello</h5>
        <h1>AZHAR MOHAMMAD BHAT</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTa scrollToArea={scrollToArea}/>
        <div className='mid'>
          <div className='me'>
            <HeaderSocials />
            <img src={ME} alt="me" />
            <div className='scroll_down' onClick={scrollToArea}>
              Scroll Down
            </div>
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;
