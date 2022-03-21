import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import styles from './cartoonnetworkspinner.module.css';

const CartoonNetworkSpinner = ({ interval }) => {

    const [index, setActiveStep] = useState(0);
    const [spin, setSpin] = useState(false);

    const images = [
        'https://www.looper.com/img/gallery/things-you-never-noticed-in-the-first-adventure-time-episode/intro-1615252241.jpg',
        'https://m.media-amazon.com/images/M/MV5BZGVhNTBjOTItNDdlMC00ZjM3LWFjN2QtNWVhM2RjMjg1NTkwXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg',
        'https://c8.alamy.com/comp/BPGRW7/edd-eddy-ed-ed-edd-n-eddy-1999-BPGRW7.jpg'
    ];

    let intervalSec = interval*1000;
    let imageUrl = images[index];

    const CollectionSize = images.length;

    const goToNextPicture = () => {
        if (index < CollectionSize-1){
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            setActiveStep(0);
        }
    };
    
    const animate = () => {
        setSpin(true);
        setTimeout(() => setSpin(false), 500);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            animate();
            setTimeout(() => goToNextPicture(), 200);
        }, intervalSec);
        imageUrl = images[index];
        return () => clearInterval(interval);
    });

    return (
        <div>
            <div
            className = {spin ? styles[`spinner`] : styles[`carouselimg`]}
            style={{ backgroundImage: `url('${imageUrl}')`}}
            ></div>
        </div>
    );
};

CartoonNetworkSpinner.propTypes = {
    interval: PropTypes.number,
}

CartoonNetworkSpinner.defaultProps = {
    interval: 3,
}

export default CartoonNetworkSpinner;