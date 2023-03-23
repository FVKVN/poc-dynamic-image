import React, { createContext, useMemo, useState } from 'react';

import { SEO } from './seo';

export const USER_STATE_CONTEXT = createContext({
    user: null,
    setUser: () => {},
});

function Layout({ children }) {
    const [user, setUser] = useState({
        image: null,
        job: null,
        function: null,
        complete: false,
        wizardStep: 1,
    });
    const value = useMemo(
        () => ({ user, setUser }),
        [user],
    );
    console.log(user, USER_STATE_CONTEXT);

    return (
        <>
            <SEO />
            <USER_STATE_CONTEXT.Provider value={value}>
                <main>
                    { children }
                </main>
            </USER_STATE_CONTEXT.Provider>
        </>
    );
}

export default Layout;
