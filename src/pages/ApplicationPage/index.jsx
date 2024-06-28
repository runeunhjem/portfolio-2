/**
 * ApplicationPage component displays a general job application.
 *
 * @returns {JSX.Element} The ApplicationPage component.
 */
const ApplicationPage = () => {
  return (
    <div
      className="application-page-wrapper"
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "130px auto 2rem", // Adjusted margin to account for header
        lineHeight: "1.6",
        backgroundColor: "var(--orange-200)", // Optional: add background color for better readability
        borderRadius: "8px", // Optional: add border-radius for a smoother look
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Optional: add shadow for better separation
      }}
    >
      <h2 style={{ fontWeight: "bold", marginTop: "1rem", fontSize: "20px" }}>
        Job Application: Enthusiastic Front-End Developer Transitioning to
        Full-Stack Development
      </h2>
      <p>
        <strong>Dear Hiring Manager,</strong>
      </p>
      <p>
        I am excited to present my application for a position at your esteemed
        company. As a <strong>&apos;Straight A student&apos;</strong> with a
        strong foundation in front-end development and a passion for continuous
        learning, I am confident in my ability to contribute significantly to
        your team.
      </p>
      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
        Education and Skills:
      </h3>
      <p>
        I recently completed a two-year program in Front-End Development at
        Noroff School of Technology and Digital Media, where I excelled
        academically and honed my skills in HTML, CSS, JavaScript, React, and
        various other technologies. My portfolio, available at
        <a
          href="https://rundev-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          {" "}
          rundev-portfolio.netlify.app
        </a>
        , showcases a range of projects that demonstrate my technical
        proficiency and creative problem-solving abilities.
      </p>
      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
        Pursuing Full-Stack Expertise:
      </h3>
      <p>
        To further enhance my skill set and gain a comprehensive understanding
        of the entire development lifecycle, I have enrolled in a back-end
        development program starting in August. This move towards becoming a
        full-stack developer reflects my commitment to mastering the full
        spectrum of web development, enabling me to deliver more robust and
        efficient solutions.
      </p>
      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
        NAV Program and Employment Benefits:
      </h3>
      <p>
        Currently, I am undergoing a career transition facilitated by NAV.
        Should your company offer a binding contract, this arrangement can be
        adjusted to meet your specific needs at no additional cost to you.
        Furthermore, my participation in the NAV program has been approved for
        wage subsidies for a period, which could be crucial in securing my
        employment with your company.
      </p>
      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
        Work Ethic and Availability:
      </h3>
      <p>
        Although I might be senior in age, my work ethic is unwavering. I
        consistently dedicate up to 12 hours a day to my work, driven by a
        genuine passion for development. Your company would benefit from a
        dedicated team member committed to excellence and long-term
        collaboration. I am flexible with working hours, willing to take on
        overtime, and capable of working on-site in Kristiansand or remotely.
      </p>
      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>Conclusion:</h3>
      <p>
        I am eager to bring my expertise and enthusiasm to your team. My
        dedication to becoming a full-stack developer, combined with my proven
        track record in front-end development, makes me an ideal candidate for
        your company. I am confident that my skills and work ethic will make a
        significant positive impact.
      </p>
      <p>
        Thank you for considering my application. I look forward to the
        opportunity to discuss how I can contribute to your team. Please feel
        free to contact me at
        <a
          href="mailto:runeunhjem@gmail.com"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          {" "}
          runeunhjem@gmail.com
        </a>{" "}
        or +47 93 26 76 11.
      </p>
      <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
        <strong>Best regards,</strong>
      </p>
      <p>Rune Unhjem</p>
      <p className="mb-4">Kristiansand, Norway</p>
      <p
        style={{
          height: "30px",
        }}
      >
        Shortcuts:
        <a
          href="https://rundev-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
          className="hover-links mx-2"
        >
          Portfolio
        </a>{" "}
        |
        <a
          href="https://github.com/runeunhjem"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
          className="hover-links me-1 ms-2"
        >
          {" "}
          GitHub
        </a>{" "}
        |
        <a
          href="https://www.linkedin.com/in/runeunhjem/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
          className="hover-links ms-2"
        >
          {" "}
          LinkedIn
        </a>
      </p>
    </div>
  );
};

export default ApplicationPage;
