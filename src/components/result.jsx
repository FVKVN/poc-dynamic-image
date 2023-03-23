import { GatsbyImage } from 'gatsby-plugin-image';
import React, { useContext } from 'react';

import { USER_STATE_CONTEXT } from './layout';

const baseClass = 'result';

function Result() {
    const { user } = useContext(USER_STATE_CONTEXT);

    console.log('result', user);

    return (
        <div className={baseClass}>
            <div className={`${baseClass}__image-holder`}>
                <h1 className={`${baseClass}__title`}>
                    Als een
                    {' '}
                    { user.function }
                </h1>
                <figure className={`${baseClass}__image`}>
                    <GatsbyImage image={user.image} />
                </figure>
            </div>
            <div className={`${baseClass}__body`}>
                <p className={`${baseClass}__content`}>
                    { user.job }
                </p>
            </div>
        </div>
    );
}

export default Result;
