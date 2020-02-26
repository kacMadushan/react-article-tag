import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
    <Link className="logo-link" to="/">
        <strong className="logo-link__text">Dev</strong>
    </Link>
);

export default Logo;