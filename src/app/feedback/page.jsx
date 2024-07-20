"use client"
import { Background } from "@/app/components/Background";
import { Author } from "@/app/components/paragraphs/Author";
import { LinkParagraph } from "@/app/components/paragraphs/LinkParagraph";
import { useStories } from "@/app/hooks/useStories";
import { Header } from "../components/Header";
import { Input } from "../components/form/Input";
import { useState } from "react";
import { Form } from "../components/form/Form";

export default function Feedback() {
    const [formData, setFormData] = useState({ username: '', email: '', feedback: '' });
    const [errors, setErrors] = useState({});

    const validate = (omitRequired = false) => {
        let formErrors = {};
        if (!formData.username && !omitRequired) formErrors.username = 'Username is required';
        if (!formData.email && !omitRequired) {
          formErrors.email = 'Email is required';
        } else if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
          formErrors.email = 'Email address is invalid';
        }
        if (!formData.feedback && !omitRequired) formErrors.feedback = 'Feedback is required';
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        console.log(e)
        const { id, value } = e.target;
        console.log(id, value)
        setFormData({ ...formData, [id]: value });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch('/api/submitForm', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(() => {
                    console.log('success')
                })
                .catch(() => console.log('error'));
        }
    };

    console.log(errors)

    return (
      <Background>
        <LinkParagraph href="/">
          Back
        </LinkParagraph>
        <Header>Please give us your feedback</Header>
        <Form onSubmit={handleSubmit}>
            <Input id="username" placeholder="Username" value={formData.username} onChange={handleChange} error={errors.username} onBlur={() => validate(true)}/>
            <Input id="email" placeholder="E-mail" value={formData.email} onChange={handleChange} error={errors.email} onBlur={() => validate(true)}/>
            <Input id="feedback" placeholder="Feedback" value={formData.feedback} onChange={handleChange} error={errors.feedback} onBlur={() => validate(true)}/>
        </Form>
      </Background>
    );
  }