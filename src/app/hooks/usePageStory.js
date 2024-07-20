"use client"

import { useEffect, useState } from "react";

export const usePageStory = (id) => {
    const [story, setStory] = useState();
    const [kids, setKids] = useState();
    const [error, setError] = useState(false);

    console.log(id)

    useEffect(() => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(response => response.json())
            // .catch(() => setError(true))
            .then((storyData) => {
                console.log(storyData)
                setStory(storyData);
                const topStoryPromises = (storyData.kids ?? [])
                    .map(
                        (id) => fetch(
                            `https://hacker-news.firebaseio.com/v0/item/${id}.json`
                        )
                        .then((response) => response.json())
                        // .catch(() => {})
                    );
                return Promise.all(topStoryPromises);
            })
            .then(setKids);
    }, []);

    return [story, kids, error];
};
