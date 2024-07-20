import React from 'react';
import { Spacer } from '@/app/components/Spacer';
import { Author } from '@/app/components/paragraphs/Author';
import { LinkParagraph } from './paragraphs/LinkParagraph';
import { TextParagraph } from './paragraphs/TextParagraph';
import { StoryDate } from './paragraphs/StoryDate';

export const StoryKidElement = ({ story }) => {
    console.log(story)
    return (
        <React.Fragment>
            <Author type={story.type} name={story.by} />
            <StoryDate timestamp={story.time} />
            <div className="self-start mt-2" dangerouslySetInnerHTML={{__html: `${story.text}`}} />
            <LinkParagraph href={`/story/${story.id}`}>See comment details</LinkParagraph>
            <Spacer my={4} />
        </React.Fragment>
    );
};
