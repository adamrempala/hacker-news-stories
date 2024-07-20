import React from 'react';
import { usePageStory } from '../hooks/usePageStory';
import { StoryData } from '../story/[id]/StoryData';
import { StoryHomeElement } from './StoryHomeElement';
import { StoryKidElement } from './StoryKidElement';
import { Header } from './Header';
import { Spacer } from './Spacer';

export const KidsSection = ({ kids }) => (
    <React.Fragment>
        <Spacer my={4} />
        <Header>Responses</Header>
        {kids.sort((a, b) => a.time > b.time).map((kid) => <StoryKidElement key={kid.id} story={kid} />)}
    </React.Fragment>
);
