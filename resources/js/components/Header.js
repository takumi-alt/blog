import React from 'react';
import { Helmet } from "react-helmet"

const Header = (props) => {
    const {title} = props

  return (
    <div>
        <Helmet>
            <title>{title}</title>
        </Helmet>
    </div>
  );
};

export default Header;
