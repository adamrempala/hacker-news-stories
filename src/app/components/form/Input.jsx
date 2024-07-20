import React from 'react';
import { Spacer } from '../Spacer';

export const Input = ({ id = 'default', type = 'text', placeholder = '', value = '', onChange = () => {}, error = null, onBlur = () => {} }) => {
    return (
        <React.Fragment>
            <label
                className={`text-white`}
            >{placeholder}</label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-pink-500 text-white placeholder-white"
                id={id}
                type={type}
                value={value}
                onChange={(e) => {
                    onChange(e);
                }}
                onBlur={onBlur}
            />
            {/* <div className='h-4'/> */}
            {error && <p className="text-red-300 text-xs mt-1">{error}</p>}
            <Spacer my={4} />
        </React.Fragment>
    );
};
