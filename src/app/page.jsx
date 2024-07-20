"use client"
import React from 'react';
import { StoryHomeElement } from './components/StoryHomeElement';
import { useStories } from './hooks/useStories';
import { Header } from './components/Header';
import { LinkParagraph } from './components/paragraphs/LinkParagraph';
import { Background } from './components/Background';
import { NUMBER_OF_TOP_STORIES } from './consts';

const HomePage = () => {
    const [stories, error] = useStories();

    const noStoriesText = error ? 'Error' : 'Loading…'

    return (
        <Background>
            <LinkParagraph href="/feedback">
                Please give us your feedback
            </LinkParagraph>
            <Header>
                {`Top ${NUMBER_OF_TOP_STORIES} Stories`}
            </Header>
            {stories
                ? stories?.map((story) => <StoryHomeElement key={story.id} story={story} />)
                : noStoriesText
            }
        </Background>
    );
};

export default HomePage