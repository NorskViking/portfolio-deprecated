import React, { useState, useContext } from 'react'


export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }} 
            className='backToTop'
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
                <i class="bi bi-arrow-up-circle"></i>
            </button>
        </div>
    )
}