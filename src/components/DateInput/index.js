import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import classNames from 'classnames';

import 'react-datepicker/dist/react-datepicker.css';
import classes from './styles.module.scss';

const MIN_DATE = new Date(1995, 5, 16);
const TODAY = new Date();

const propTypes = {
  date: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
};

const defaultProps = {
  date: null,
};

function randomDate(start, end) {
  const startTime = start.getTime();
  const endTime = end.getTime();

  return new Date(startTime + Math.random() * (endTime - startTime));
}

const DateInput = ({ date, onChange }) => {
  const handleRandomDateClick = () => {
    onChange(randomDate(MIN_DATE, TODAY));
  };

  return (
    <div className="text-center">
      <p>
        <em>Pick a Date</em>
      </p>

      <DatePicker
        className="form-control mb-3"
        minDate={MIN_DATE}
        maxDate={TODAY}
        selected={date}
        showYearDropdown
        showMonthDropdown
        onChange={onChange}
      />

      <div>
        <button
          onClick={handleRandomDateClick}
          className={classNames('btn', 'btn-default', classes.button)}
        >
          Random Date
        </button>
      </div>
    </div>
  );
};

DateInput.propTypes = propTypes;
DateInput.defaultProps = defaultProps;

export default DateInput;
