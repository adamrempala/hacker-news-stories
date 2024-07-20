import { Header } from '@/app/components/Header';
import { KidsSection } from '@/app/components/KidsSection';
import { Spacer } from '@/app/components/Spacer';
import { Author } from '@/app/components/paragraphs/Author';
import { DataParagraph } from '@/app/components/paragraphs/DataParagraph';
import { LinkParagraph } from '@/app/components/paragraphs/LinkParagraph';
import { StoryDate } from '@/app/components/paragraphs/StoryDate';
import { TextParagraph } from '@/app/components/paragraphs/TextParagraph';
import { usePageStory } from '@/app/hooks/usePageStory';
import React from 'react';

export const StoryData = ({ id }) => {
    const [story, kids, error] = usePageStory(id);

    if (error) {
        return (
            <Background>
                Error
            </Background>
        );
    }

    if (story === undefined) {
        return <h1>Loading…</h1>;
    }
    
    return (
        <React.Fragment>
            <LinkParagraph href={story.parent ? `/story/${story.parent}` : '/'}>
                {story.parent ? 'Back to thread' : 'Back to Home'}
            </LinkParagraph>
            <Header>{story.title}</Header>
            <Author type={story.type} name={story.by} />
            <StoryDate timestamp={story.time} />
            {/* <DataParagraph>{`${story.descendants} descendants`}</DataParagraph>
            <DataParagraph>{`Score: ${story.score}`}</DataParagraph> */}
            <Spacer my={4} />
            {story.text
                ? (<div className="self-start" dangerouslySetInnerHTML={{__html: `${story.text}`}}></div>)
                : (
                    <TextParagraph>
                        No text available for this story.
                    </TextParagraph>
                )}
            <Spacer my={4} />
            {story.url
                ? (
                    <LinkParagraph href={story.url} external>
                        Read more
                    </LinkParagraph>
                ) : (
                    <TextParagraph>
                        No URL available for this story.
                    </TextParagraph>
                )
            }
            {kids && kids.length > 0 && (
                <KidsSection kids={kids} />
            )}
        </React.Fragment>
    )
};
