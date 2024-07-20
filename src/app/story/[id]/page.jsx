"use client"
import { Background } from "@/app/components/Background";
import { StoryData } from "./StoryData";

export const Story = ({ params: { id } }) => {  
    return (
        <Background>
            <StoryData id={id} />
        </Background>
    );
}

export default Story;
