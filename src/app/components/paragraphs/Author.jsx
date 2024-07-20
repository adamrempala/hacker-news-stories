import React from "react";

export const Author = ({ type, name }) => (
    <p className="
        mb-4
        text-gray-900
        w-full
        text-xl"
    >
            {type} by <strong>{name}</strong>
    </p>
);
