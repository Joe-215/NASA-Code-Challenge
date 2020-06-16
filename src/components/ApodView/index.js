import React from 'react';
import classNames from 'classnames';

import classes from './styles.module.scss';

const ApodView = (props) => {
  return (
    <div className={classNames('card', 'mt-3', classes.card)}>
      <div className="card-body">
        <h3 className={classNames('card-title', classes.title)}>
          A Ring of Fire Sunrise Solar Eclipse
        </h3>

        <div className="card-text">
          Welcome to the quadranscentennial year of the Astronomy Picture of the
          Day. Perhaps a source of consistency for some, APOD is still here. To
          help celebrate APOD's Silver Anniversary, some of APOD's TVAoTaSMD
          have recorded a birthday greeting and thanks to APOD's readership in
          today's featured video. Many have also highlighted a few of their
          favorite APOD images. In collaboration with NASA through APOD, these
          and other volunteers help to inform the world, in most major world
          languages and over most major media platforms, of NASA and humanity's
          growing knowledge, active exploration, and inspiring visualizations of
          the amazing astronomical universe in which we live. APOD's founders
          (still alive!) would also like to offer a sincere thank you -- not
          only to our TVAoTaSMD -- but to APOD's readership for continued
          interest, support, and many gracious communications over the years.
        </div>
      </div>
    </div>
  );
};

export default ApodView;
