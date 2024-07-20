import Link from 'next/link';
import React from 'react';
import { Spacer } from '@/app/components/Spacer';
import { Author } from '@/app/components/paragraphs/Author';

export const StoryHomeElement = ({ story }) => {
    return (
        <React.Fragment>
            <Link
                href={`/story/${story.id}`}
                className='w-full text-3xl hover:bg-pink-400'
            >
                {story.title}
            </Link>
            <Author type={story.type} name={story.by} />
            <Spacer my={4} />
        </React.Fragment>
    );
};
