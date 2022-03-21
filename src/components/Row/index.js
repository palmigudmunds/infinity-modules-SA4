import React from "react";
import PropTypes from 'prop-types';
import styles from './row.module.css';

const Row = ({ children }) => {
    // {children.map((child) => (
    //     <div className={``}></div>
    // ))}
            
    return (
        <div className={styles["row-container"]}>
            {children}
        </div>
    );
};

Row.propTypes = {

}

Row.defaultProps = {

}

export default Row;