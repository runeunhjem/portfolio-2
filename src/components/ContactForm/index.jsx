import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import * as S from "./index.styled";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = (data) => {
    emailjs
      .send("service_dg16lkq", "template_23o8209", data, "t4EstH4lvuyAN_D0M")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage(
            "Thank you, your message was successfully sent. I will get back to you as soon as possible.",
          );
          setIsError(false);
          reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccessMessage("An error occurred. Please try again later.");
          setIsError(true);
        },
      );
  };

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [successMessage]);

  return (
    <S.FormContainer onSubmit={handleSubmit(onSubmit)}>
      {/* <S.ContactInfoHeader>Mail Me</S.ContactInfoHeader> */}
      <S.FormGroup>
        <S.InputLabel htmlFor="name">Name</S.InputLabel>
        <S.FormInput
          id="name"
          placeholder="Enter your name"
          {...register("name", { required: true, minLength: 3 })}
        />
        {errors.name && (
          <S.ErrorMessage>
            Name must be at least 3 characters long
          </S.ErrorMessage>
        )}
      </S.FormGroup>
      <S.FormGroup>
        <S.InputLabel htmlFor="email">Email</S.InputLabel>
        <S.FormInput
          id="email"
          type="email"
          placeholder="Valid email address"
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && (
          <S.ErrorMessage>Enter a valid email address</S.ErrorMessage>
        )}
      </S.FormGroup>
      <S.FormGroup>
        <S.InputLabel htmlFor="subject">Subject</S.InputLabel>
        <S.FormInput
          id="subject"
          placeholder="Enter a Subject"
          {...register("subject", { required: true, minLength: 3 })}
        />
        {errors.subject && (
          <S.ErrorMessage>
            Subject must be at least 3 characters long
          </S.ErrorMessage>
        )}
      </S.FormGroup>
      <S.FormGroup>
        <S.InputLabel htmlFor="message">Message</S.InputLabel>
        <S.FormTextArea
          id="message"
          placeholder="Enter your message"
          {...register("message", { required: true, minLength: 3 })}
        />
        {errors.message && (
          <S.ErrorMessage>
            Message must be at least 3 characters long
          </S.ErrorMessage>
        )}
      </S.FormGroup>
      {successMessage && (
        <S.SuccessMessage isError={isError}>
          {successMessage.split(". ").map((sentence, index) => (
            <p key={index}>{sentence}.</p>
          ))}
        </S.SuccessMessage>
      )}
      <S.ButtonGroup>
        <S.SubmitButton type="submit">Submit</S.SubmitButton>
        <S.ClearButton type="button" onClick={() => reset()}>
          Clear
        </S.ClearButton>
      </S.ButtonGroup>
    </S.FormContainer>
  );
};

export default ContactForm;
