import React from 'react';

export const SubmitButton = ({ children }) => (
    <button
        type="submit"
        className="
            bg-white
            text-pink-500
            font-bold
            py-2
            px-4
            rounded-full
            border
            border-pink-500
            hover:bg-pink-400
            hover:text-white
            transition
            duration-300
            ease-in-out
            w-full
            mt-2"
    >
        {children}
    </button>
);
