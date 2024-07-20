"use client"

import React, { useEffect, useState } from 'react';
import { StoryHomeElement } from './containers/StoryHomeElement';
import { useStories } from './hooks/useStories';
import { Header } from './components/Header';
import { LinkParagraph } from './components/paragraphs/LinkParagraph';
import { Background } from './components/Background';

const HomePage = () => {
    const stories = useStories();

    return (
        <Background>
            <LinkParagraph href="/feedback">
                Please give us your feedback
            </LinkParagraph>
            <Header>
                Top 10 Stories
            </Header>
            {stories ? stories?.map((story) => <StoryHomeElement key={story.id} story={story} />) : 'Loading…'}
        </Background>
    );
};

export default HomePage