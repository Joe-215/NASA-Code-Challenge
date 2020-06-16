import React, { useState } from 'react';
import classNames from 'classnames';

import DateInput from './components/DateInput';

import classes from './App.module.scss';

const App = () => {
  const [date, setDate] = useState(null);

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h2 className={classNames('card-title', classes.header)}>
            NASA's Picture of the Day
          </h2>

          <DateInput date={date} onChange={setDate} />
        </div>
      </div>
    </div>
  );
};

export default App;
