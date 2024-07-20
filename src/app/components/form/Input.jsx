import React from 'react';
import { Spacer } from '../Spacer';

export const Input = ({
    id = 'default',
    type = 'text',
    label = '',
    value = '',
    onChange = () => {},
    error = null,
    onBlur = () => {},
    required = false,
    rows = 1
}) => {
    const ComponentToRender = rows > 1 ? 'textarea' : 'input';

    return (
        <React.Fragment>
            <label
                for={id}
                className="text-white"
            >
                {label}
            </label>
            <ComponentToRender
                as={rows > 1 ? 'textarea' : undefined}
                rows={rows}
                className="
                    shadow
                    appearance-none
                    border
                    rounded
                    w-full
                    py-2
                    px-3
                    text-gray-700
                    leading-tight
                    focus:outline-none
                    focus:shadow-outline
                    bg-pink-500
                    text-white"
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={(e) => {
                    onChange(e);
                }}
                onBlur={onBlur}
                required={required}
            />
            {error && (
                <p className="text-red-300 text-xs mt-1">
                    {error}
                </p>
            )}
            <Spacer my={4} />
        </React.Fragment>
    );
};
