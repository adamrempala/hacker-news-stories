"use client"

import { useEffect, useState } from "react";

export const useStories = () => {
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

    return stories;
};
