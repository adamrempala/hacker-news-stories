import React from 'react';

export const Background = ({ children }) => (
    <div className="
        min-h-screen
        bg-pink-500
        text-white
        p-4
        flex
        flex-col
        items-center
    ">
        {children}
    </div>
);
