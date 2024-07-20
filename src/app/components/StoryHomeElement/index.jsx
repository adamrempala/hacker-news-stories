import { Spacer } from '@/app/components/Spacer';
import { Author } from '@/app/components/paragraphs/Author';
import Link from 'next/link';
import React from 'react';

export const StoryHomeElement = ({ story }) => {
    return (
        <React.Fragment>
            <Link
                href={`/story/${story.id}`}
                className='w-full text-3xl'
            >
                {story.title}
            </Link>
            <Author type={story.type} name={story.by} />
            <Spacer my={4} />
        </React.Fragment>
    );
};