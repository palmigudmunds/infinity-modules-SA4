import React, { useState, useEffect, useLayoutEffect } from "react";
import PropTypes from 'prop-types';
import styles from './carousel.module.css';

const Carousel = ({ images, size }) => {
    const CollectionSize = images.length;
    const [index, setActiveStep] = useState(0);
    let imageUrl = images[index];

    const goToNextPicture = () => {
        if (index < CollectionSize-1){
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };
    const goToPrevPicture = () => {
        if (index > 0){
            setActiveStep((prevActiveStep) => prevActiveStep - 1);
        }
    };

    useEffect(() => {
        imageUrl = images[index];
    });

    return (
        <div className={styles[`parent`]}>
            <div>
                <button className={styles[`button-1`]} onClick={goToPrevPicture}>&larr;</button>
            </div>
            <div
            className={styles[`carouselimg-${size}`]} 
            style={{ backgroundImage: `url('${imageUrl}')` }} ></div>
            <div>
                <button className={styles[`button-1`]}  onClick={goToNextPicture}>&rarr;</button>
            </div>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.array.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

Carousel.defaultProps = {
    size: 'medium',
}

export default Carousel;