import React, { useState, useCallback, useEffect } from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';

import { fetchApod as fetchApodApi } from './utils/api';
import DateInput from './components/DateInput';
import ApodView from './components/ApodView';

import classes from './App.module.scss';

const App = () => {
  const [date, setDate] = useState(new Date());
  const [apod, setApod] = useState(null);
  const [error, setError] = useState(null);

  const fetchApod = useCallback(async () => {
    setError(null);

    try {
      const { data } = await fetchApodApi(
        date ? format(date, 'yyyy-MM-dd') : null
      );

      setApod(data);
    } catch (err) {
      setError(err.response.data.msg);
      setApod(null);
    }
  }, [date]);

  useEffect(() => {
    fetchApod();
  }, [date, fetchApod]);

  return (
    <div className={classNames('container', classes.container)}>
      <div className="card">
        <div className="card-body">
          <h2 className={classNames('card-title', classes.title)}>
            NASA's Picture of the Day
          </h2>

          <DateInput date={date} onChange={setDate} />

          {error && (
            <div className="mt-3 alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {apod && <ApodView apod={apod} />}
        </div>
      </div>
    </div>
  );
};

export default App;
