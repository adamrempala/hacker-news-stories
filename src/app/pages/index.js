// pages/index.js
import Link from 'next/link';
"use client";

export async function getStaticProps() {
  const topStories = await fetchTopStories();
  return {
    props: {
      topStories,
    },
  };
}

import React, { useEffect, useState } from 'react';
import { StoryHomeElement } from '../StoryHomeElement';

export const Home = () => {

    const [stories, setStories] = useState();

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => response.json())
            .then(storyIds => {
                const topStoryPromises = storyIds.slice(0, 10).map(id => 
                fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => response.json())
                );
                return Promise.all(topStoryPromises);
            })
            .then(setStories);
    }, []);

    // console.log(stories[0]);

    return (
        <div className="text-3xl">
            Stories
            <div className='h-8'/>
            {stories?.map((story) => <StoryHomeElement story={story} />)}
        </div>
    );
};
