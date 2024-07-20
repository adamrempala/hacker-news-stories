import React from 'react';
import { DataParagraph } from './DataParagraph';
import { DATE_OPTIONS } from './consts';

export const StoryDate = ({ timestamp }) => {
    const date = new Date(timestamp * 1000);

    return (
        <DataParagraph>
            {date.toLocaleDateString('en-US', DATE_OPTIONS)}
        </DataParagraph>
    );
};
