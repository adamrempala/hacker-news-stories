"use client"
import { Background } from "@/app/components/Background";
import { LinkParagraph } from "@/app/components/paragraphs/LinkParagraph";
import { Header } from "../components/Header";
import { Input } from "../components/form/Input";
import { useState } from "react";
import { Form } from "../components/form/Form";
import { INITIAL_FORM_DATA } from "./consts";

const Feedback = () => {
    const [formData, setFormData] = useState(INITIAL_FORM_DATA);
    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const validate = (omitRequired = false) => {
        let formErrors = {};
        if (!formData.username && !omitRequired) {
            formErrors.username = 'Username is required';
        }

        if (!formData.email && !omitRequired) {
            formErrors.email = 'Email is required';
        }
        else if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email address is invalid';
        }

        if (!formData.feedback && !omitRequired) {
            formErrors.feedback = 'Feedback is required';
        }
        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        setSuccess(false);
        setFormData({ ...formData, [id]: value });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch('/api/log', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
                .then(() => {
                    setSuccess(true);
                    setFormData(INITIAL_FORM_DATA);
                });
        }
    };

    return (
        <Background>
            <LinkParagraph href="/">
                Back
            </LinkParagraph>
            <Header>{success ? 'Success!' : 'Please give us your feedback'}</Header>
            <Form onSubmit={handleSubmit}>
                <Input
                    id="username"
                    label="Username"
                    value={formData.username}
                    onChange={handleChange}
                    error={errors.username}
                    onBlur={() => validate(true)}
                    required
                />
                <Input
                    id="email"
                    type="email"
                    label="E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    onBlur={() => validate(true)}
                    required
                />
                <Input
                    id="feedback"
                    label="Feedback"
                    value={formData.feedback}
                    onChange={handleChange}
                    error={errors.feedback}
                    onBlur={() => validate(true)}
                    required
                    rows={5}
                />
            </Form>
        </Background>
    );
};

export default Feedback;
