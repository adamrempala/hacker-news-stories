"use client"

import React, { useEffect, useState } from 'react';
import { StoryHomeElement } from './containers/StoryHomeElement';
import { useStories } from './hooks/useStories';

const HomePage = () => {
    const stories = useStories();


    // console.log(stories[0]);

    return (
        <div className="text-3xl bg-pink-500 text-white p-4">
            <h1 className="text-4xl">
                Stories
            </h1>
            <div className='h-8'/>
            {stories?.map((story) => <StoryHomeElement story={story} />)}
        </div>
    );
};

export default HomePage