import { Spacer } from '@/app/components/Spacer';
import { Author } from '@/app/components/paragraphs/Author';
import Link from 'next/link';
import React from 'react';
import { LinkParagraph } from './paragraphs/LinkParagraph';
import { TextParagraph } from './paragraphs/TextParagraph';

export const StoryKidElement = ({ story }) => {
    console.log(story)
    return (
        <React.Fragment>
            <Author type={story.type} name={story.by} />
            <div className="self-start" dangerouslySetInnerHTML={{__html: `${story.text}`}}></div>
            <LinkParagraph href={`/story/${story.id}`}>See comment details</LinkParagraph>
            <Spacer my={4} />
        </React.Fragment>
    );
};
