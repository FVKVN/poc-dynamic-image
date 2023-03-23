import React from 'react';

import Layout, { USER_STATE_CONTEXT } from '../components/layout';
import Result from '../components/result';
import Wizard from '../components/wizard';

function Homepage() {
    return (
        <Layout>
            <USER_STATE_CONTEXT.Consumer>
                {(user) => {
                    if (user.complete) {
                        return (
                            <Result />
                        );
                    }
                    return (
                        <Wizard />
                    );
                }}
            </USER_STATE_CONTEXT.Consumer>
        </Layout>
    );
}

export default Homepage;
