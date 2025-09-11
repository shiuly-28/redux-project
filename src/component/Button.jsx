import React, { Children } from 'react';

const Button = ({ children, type, handler }) => {
    const style =
        type === 'danger' ? 'bg-red-500 text-white px-3 py- rounded shadow' : 'bg-blue-500 text-white px-3 py- rounded shadow'
    return (
        <button onClick={handler} className={style}>{children}</button>
    );
};

export default Button;