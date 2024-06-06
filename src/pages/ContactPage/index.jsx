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
            href="https://www.google.com/maps/place/Slettheiveien+81E,+4626+Kristiansand/@58.1365238,7.9343861,14z/data=!4m6!3m5!1s0x463802a4c32a6519:0x551444ef8f3fd02b!8m2!3d58.1349737!4d7.939219!16s%2Fg%2F11cs932l7p?authuser=0&entry=ttu"
          >
            <S.ContactInfoText>Rune Unhjem</S.ContactInfoText>
            <S.ContactInfoText>Slettheiveien 81E</S.ContactInfoText>
            <S.ContactInfoText>4624 Kristiansand</S.ContactInfoText>
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
