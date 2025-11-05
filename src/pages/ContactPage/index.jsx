import { lazy, Suspense } from "react";
import * as S from "../../components/ContactForm/index.styled";

const ContactForm = lazy(() => import("../../components/ContactForm"));

/**
 * ContactPage component displays the contact information and a contact form.
 *
 * @returns {JSX.Element} The ContactPage component.
 */
const ContactPage = () => {
  return (
    <div
      className="contact-container mx-auto flex flex-col items-center"
      style={{
        width: "100%",
        marginTop: "110px",
      }}
    >
      <S.InfoSection>
        <S.ContactInfo className="pb-6">
          <S.ContactInfoHeader>Contact Information</S.ContactInfoHeader>
          <S.ContactLink
            className="hover-links"
            style={{
              textDecoration: "none",
              color: "var(--stone-600)",
              height: "80px",
              width: "200px",
              boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.4)",
            }}
            target="_blank"
            href="https://maps.app.goo.gl/x68o9Zrr916HPPct9"
          >
            <S.ContactInfoText>Rune Unhjem</S.ContactInfoText>
            <S.ContactInfoText>Seljehaugen 23</S.ContactInfoText>
            <S.ContactInfoText>9414 Harstad</S.ContactInfoText>
          </S.ContactLink>
          <S.ContactLink
            className="hover-links"
            style={{
              textDecoration: "none",
              color: "var(--stone-600)",
              height: "30px",
              width: "200px",
              boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.4)",

              marginTop: "1rem",
            }}
            href="tel:+4793267611"
          >
            <S.ContactInfoText>+47 93 26 76 11</S.ContactInfoText>
          </S.ContactLink>
          <S.ContactLink
            className="hover-links"
            style={{
              textDecoration: "none",
              color: "var(--stone-600)",
              height: "30px",
              width: "200px",
              boxShadow: "1px 2px 3px rgba(0, 0, 0, 0.4)",
              marginTop: "1rem",
            }}
            href="mailto:runeunhjem@gmail.com"
          >
            <S.ContactInfoText>runeunhjem@gmail.com</S.ContactInfoText>
          </S.ContactLink>
        </S.ContactInfo>
      </S.InfoSection>
      <Suspense fallback={<div>Loading contact form...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
};

export default ContactPage;
