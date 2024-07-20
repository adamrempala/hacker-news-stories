import React from 'react';

export const LinkParagraph = ({ href, children, external }) => {
    return (
        <a href={href} target={external ? '_blank' : undefined} className="text-blue-300 hover:underline self-start mb-8" rel="noopener noreferrer">{children}</a>
    );
};
