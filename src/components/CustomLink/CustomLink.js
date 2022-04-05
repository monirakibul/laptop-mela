import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div className='inline'>
            <Link
                className='link-item font-medium inline underline-offset-8 px-3 py-2'
                style={{ textDecoration: "underline", textDecorationColor: match ? "#ec4899" : "#cbd5e1", color: match ? "#ec4899" : "black" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}


export default CustomLink;