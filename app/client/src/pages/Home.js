import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
   
    return (
        <div>
            <Link to="/login"><button type="button">LOGIN</button></Link>
            <Link to="/login"><button type="button">CREATE ACCOUNT</button></Link>
        </div>
    );
};

export default Home;
