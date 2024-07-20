"use client"

import { useEffect, useState } from "react";
import { NUMBER_OF_TOP_STORIES } from "../consts";

export const useStories = () => {
    const [stories, setStories] = useState();
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
            .then(response => response.json())
            .then((storyIds) => {
                const topStoryPromises = storyIds
                    .slice(0, NUMBER_OF_TOP_STORIES)
                    .map(
                        (id) => fetch(
                            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
                        )
                        .then(response => response.json())
                    );
                return Promise.all(topStoryPromises);
            })
            .then(setStories)
            .catch(() => setError(true));
    }, []);

    return [stories, error];
};
