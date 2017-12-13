import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(props){
    return (
        <div className="not-found">
            <h1>404. Not found</h1>
                <Link  to="/">
                    Go back to a known place!
                </Link>
        </div>
    );
}

export default NotFound;