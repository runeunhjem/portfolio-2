import styled, { css, keyframes } from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background-color: var(--orange-100);
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  width: 600px;
  max-width: 90%;
  margin: 2rem auto;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  font-size: 1rem;
  color: var(--stone-600);
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--stone-400);
  border-radius: 8px;
  font-family: var(--font-family-koho);
  &:focus {
    outline: none;
    border-color: var(--orange-200);
  }
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--stone-400);
  border-radius: 8px;
  font-family: var(--font-family-koho);
  resize: vertical;
  &:focus {
    outline: none;
    border-color: var(--orange-200);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

export const FormButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  height: 2.5rem;
  border-radius: 8px;
  background-color: var(--stone-500);
  color: var(--white);
  font-family: var(--font-family-koho);
  cursor: pointer;
  transition:
    background-color 0.2s ease-in-out,
    transform 0.2s ease-in-out,
    border-bottom 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.6);
`;

export const SubmitButton = styled(FormButton)`
  transition: all 0.2s ease-in-out;
  &:hover {
    color: var(--stone-950);
    background-color: var(--green-200);
    border-bottom: 1px solid var(--green-700);
  }
`;

export const ClearButton = styled(FormButton)`
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: var(--red-200);
    color: var(--stone-950);
    border-bottom: 1px solid var(--red-600);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const messageStyles = css`
  padding: 1rem;
  color: var(--stone-950);
  border-radius: 8px;
  text-align: center;
  margin-bottom: 1rem;
  animation: ${fadeOut} 5s forwards;
`;

export const SuccessMessage = styled.div`
  ${messageStyles}
  background-color: ${({ isError }) =>
    isError ? "var(--red-200)" : "var(--green-200)"};
`;

export const ErrorMessage = styled.span`
  color: var(--red-600);
  font-size: 0.875rem;
`;

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  max-width: 90%;
  margin: 4rem auto 3rem auto;
  padding: 1rem;
  background-color: var(--orange-100);
  text-align: center;
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.4);
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  .contact-info-links {
  }
`;

export const ContactInfoHeader = styled.h1`
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: var(--font-family-koho);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 6px;
`;

export const ContactInfoText = styled.p`
  font-size: 1rem;
  color: var(--stone-600);
  font-family: var(--font-family-koho);
`;

export const ContactLink = styled.a`
  color: var(--stone-600);
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
