"use client"
import { Background } from "@/app/components/Background";
import { Header } from "@/app/components/Header";
import { KidsSection } from "@/app/components/KidsSection";
import { Spacer } from "@/app/components/Spacer";
import { Author } from "@/app/components/paragraphs/Author";
import { DataParagraph } from "@/app/components/paragraphs/DataParagraph";
import { LinkParagraph } from "@/app/components/paragraphs/LinkParagraph";
import { StoryDate } from "@/app/components/paragraphs/StoryDate";
import { TextParagraph } from "@/app/components/paragraphs/TextParagraph";
import { usePageStory } from "@/app/hooks/usePageStory";
import { StoryData } from "./StoryData";

export const Story = ({ params: { id } }) => {  
    return (
        <Background>
            <StoryData id={id} />
        </Background>
    );
}

export default Story;
