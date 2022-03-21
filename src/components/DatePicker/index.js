import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import styles from './datepicker.module.css';

const DatePicker = ({ onDatePick, locale }) => {
    const [date, setDate] = useState('2022-01-01'); // A valid date string
    const [day, setDay] = useState(''); // A value representing the day of the month from 1-31 depending on the month
    const [month, setMonth] = useState('') // Initially set to January, but should provide all the months
    const [year, setYear] = useState(''); // A value representing the year

    useEffect(() => {
        const dateSplit = (`${date}`).split("-");
        setDay(dateSplit[2]);
        setMonth(dateSplit[1]);
        setYear(dateSplit[0]);
        onDatePick(date)
    });


    return (
        <div className={styles["date-picker-container"]}>
            <div className={styles["date-picker-day"]}>{`${day}`}</div>
            <div className={styles["date-picker-month"]}>{`${month}`}</div>
            <div className={styles["date-picker-year"]}>{`${year}`}</div>
            <input type="date" lang={locale} className={styles["hidden"]} onChange={(event) => setDate(event.target.value)} value={date}></input>
        </div>
    );
};

DatePicker.propTypes = {
    onDatePick: PropTypes.func,
    locale: PropTypes.string,
}

DatePicker.defaultProps = {
    locale: "is-IS",
}

export default DatePicker;