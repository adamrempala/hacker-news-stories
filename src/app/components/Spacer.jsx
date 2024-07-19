import React from 'react';

export const Spacer = ({ mx, my }) => (
    <div className={`w-${mx ?? 0} h-${my ?? 0}`} />
);
