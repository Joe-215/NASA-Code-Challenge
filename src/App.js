import React, { useState } from 'react';
import classNames from 'classnames';

import DateInput from './components/DateInput';
import ApodView from './components/ApodView';

import classes from './App.module.scss';

const App = () => {
  const [date, setDate] = useState(null);
  const [apod, setApod] = useState(null);

  return (
    <div className={classNames('container', classes.container)}>
      <div className="card">
        <div className="card-body">
          <h2 className={classNames('card-title', classes.title)}>
            NASA's Picture of the Day
          </h2>

          <DateInput date={date} onChange={setDate} />

          {apod && <ApodView />}
        </div>
      </div>
    </div>
  );
};

export default App;
