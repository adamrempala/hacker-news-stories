import React from 'react';

export const LinkParagraph = ({ href, children}) => {
    return (
        <a href={href} className="text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>
    );
};
