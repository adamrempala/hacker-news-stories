import React from 'react';
import { SubmitButton } from './SubmitButton';

export const Form = ({ children, onSubmit = () => {} }) => (
    <form
        className="w-full max-w-sm"
        onSubmit={onSubmit}
    >
        {children}
        <SubmitButton>
            Submit
        </SubmitButton>
    </form>
);

