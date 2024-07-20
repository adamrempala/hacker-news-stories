"use client"
import { Background } from "@/app/components/Background";
import { Header } from "@/app/components/Header";
import { Author } from "@/app/components/paragraphs/Author";
import { LinkParagraph } from "@/app/components/paragraphs/LinkParagraph";
import { useStories } from "@/app/hooks/useStories";

export default function Story({ params: { id } }) {
  console.log(useStories)
  const stories = useStories();

  if (stories === undefined) {
    return <Background><h1>Loading…</h1></Background>;
  }

  console.log(stories, id)
  const story = stories.find((story) => `${story.id}` === id);



  if (!story) {
    return error;
  }
  
    return (
      <Background>
        <LinkParagraph href="/">
          Back
        </LinkParagraph>
        <Header>{story.title}</Header>
        <Author name={story.by} />
        <p>{story.text}</p>
        <LinkParagraph href={story.url} external>
          Read more
        </LinkParagraph>
      </Background>
    );
  }