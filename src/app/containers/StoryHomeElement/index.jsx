import { Spacer } from '@/app/components/Spacer';
import Link from 'next/link';
import React from 'react';

export const StoryHomeElement = ({ story }) => {
    return (
        <React.Fragment>
            {/* <div className='flex justify-space-between'>{story.title}</div> */}
            <Link href={`/story/${story.id}`}>
                {story.title}
            </Link>
            <p className="text-gray-700">by {story.by}</p>
            <Spacer my={4} />
        </React.Fragment>
    );
};
