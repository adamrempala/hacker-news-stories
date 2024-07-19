"use client"
import { Background } from "@/app/components/Background";
import { Author } from "@/app/components/paragraphs/Author";
import { LinkParagraph } from "@/app/components/paragraphs/LinkParagraph";
import { useStories } from "@/app/hooks/useStories";

export default function Story({ id }) {
  console.log(useStories)
  const stories = useStories();

  if (stories === undefined) {
    return <Background><h1>Loading…</h1></Background>;
  }

  const story = stories.find((story) => story.id !== id);

  if (!story) {
    return error;
  }
  
    return (
      <Background>
        <LinkParagraph href="/">
          Back
        </LinkParagraph>
        <h1 className="text-4xl font-bold text-center mb-8">{story.title}</h1>
        <Author name={story.by} />
        <p>{story.text}</p>
        <LinkParagraph href={story.url}>
          Read more
        </LinkParagraph>
      </Background>
    );
  }