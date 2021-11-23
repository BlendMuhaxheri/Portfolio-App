import React from 'react'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className='header-wrapper'>
            <div className='main-info'>
                <h1>web development and website promo</h1>
                <Typed
                    className='typed-text'
                    strings={["Web Designs", "Web Development", "Facebook Adds SMM", "Google Adds"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a className='btn-main-offer'>Contact Me</a>
            </div>
        </div>
    )
}

export default Header
