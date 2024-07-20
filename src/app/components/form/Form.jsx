import React from 'react';

export const Form = ({ children, onSubmit = () => {} }) => (
    <form className="w-full max-w-sm" onSubmit={onSubmit}>
        {children}
        <button type="Submit">Submit</button>
    </form>
);

