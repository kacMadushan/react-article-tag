import React, { Fragment } from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <Fragment>
        <Header />
        <main className="container">
            {children}
        </main>
        <Footer />
    </Fragment>
);

export default Layout;