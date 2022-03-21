import React, { Children } from "react";
import PropTypes from 'prop-types';
import styles from './col.module.css';

const Col = ({ size, children }) => {
    return (
        <div className={styles[`col-${size}`]}>
            {children}
        </div>
    )
};

Col.propTypes = {
    size: PropTypes.number,
}

Col.defaultProps = {
    size: 1,
}

export default Col;