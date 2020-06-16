import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import classes from './styles.module.scss';

const propTypes = {
  apod: PropTypes.object.isRequired,
};

const ApodView = ({ apod }) => {
  return (
    <div className={classNames('card', 'mt-3', classes.card)}>
      <div className="card-body">
        <h3 className={classNames('card-title', classes.title)}>
          {apod.title}
        </h3>

        <div className={classes.content}>
          {apod.media_type === 'image' && (
            <img src={apod.url} alt={apod.title} />
          )}

          {apod.media_type === 'video' && (
            <iframe title={apod.title} src={apod.url}></iframe>
          )}
        </div>

        <div className="card-text">{apod.explanation}</div>
      </div>
    </div>
  );
};

ApodView.propTypes = propTypes;

export default ApodView;
