import React, { useState } from 'react';
import arrowCircleUp from '../../assets/svg/arrow-up.svg';
import './ScrollToTop.css';

const ScrollToTopButton = () => {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } 
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div style={{display: visible ? 'inline' : 'none' }} className="backToTop" aria-label='Back to top'>
            <button onClick={scrollToTop}>
                <img src={arrowCircleUp} alt="blue circle with up arrow button, to instantly scroll to the top of the page."/>
            </button>
        </div>
    )
}

export default ScrollToTopButton;