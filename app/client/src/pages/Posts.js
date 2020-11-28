import React from 'react';
import { Link } from 'react-router-dom';

export const Posts = () => {
    return (
        <div>
            <h2>Posts</h2>
            <Link to="/postView"><button type="button">EXAMPLE POST</button></Link>
        </div>
    )
};

export default Posts;
