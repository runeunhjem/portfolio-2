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
        margin: "130px auto 2rem",
        lineHeight: "1.6",
        backgroundColor: "var(--orange-200)",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontWeight: "bold", marginTop: "1rem", fontSize: "20px" }}>
        Job Application: Fullstack Developer
      </h2>

      <p>
        <strong>Dear Hiring Manager,</strong>
      </p>

      <p>
        I&apos;m excited to submit my application for a position at your
        company. As a recent graduate of both Front-End and Back-End Development
        at Noroff School of Technology and Digital Media, I bring a robust,
        modern fullstack skill set, a passion for clean code, and a drive for
        continuous learning.
      </p>

      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
        Education and Skills:
      </h3>
      <p>
        I have successfully completed a two-year Front-End Development program{" "}
        <strong>and</strong> a one-year Back-End Development program at Noroff
        School of Technology and Digital Media, both with top marks. My
        expertise spans the entire web stack: from HTML, CSS, JavaScript, and
        React, to Node.js (Express), Sequelize, MySQL, EJS, and cloud
        deployment. My portfolio, available at{" "}
        <a
          href="https://rundev-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          rundev-portfolio.netlify.app
        </a>
        , showcases a wide range of applications and problem-solving approaches
        across both client and server.
      </p>

      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
        Fullstack Project Experience:
      </h3>
      <p>
        My final projects reflect my evolution into a fullstack developer. I
        have built RESTful APIs, robust authentication, secure role-based
        systems, advanced product filtering, dynamic cart/order logic, and full
        admin dashboards — always focusing on maintainability and user
        experience. This transition demonstrates my commitment to mastering both
        front- and back-end technologies.
      </p>

      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
        NAV Program and Employment Benefits:
      </h3>
      <p>
        As part of my career transition through NAV, I am currently eligible for
        wage subsidy support. If your company offers a contract, this
        arrangement could reduce hiring costs without compromising quality
        &mdash; tailored to your specific needs at no extra expense to you.
      </p>

      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>
        Work Ethic and Availability:
      </h3>
      <p>
        While I bring life experience to the table, I also bring strong energy
        and focus. I regularly dedicate long hours to learning and development
        and thrive in fast-paced environments. I&apos;m open to remote work or
        on-site roles in Kristiansand, flexible with hours, and committed to
        delivering consistent, high-quality results.
      </p>

      <h3 style={{ fontWeight: "bold", marginTop: "1rem" }}>Conclusion:</h3>
      <p>
        I&apos;m eager to bring my enthusiasm, reliability, and fullstack skill
        set into a collaborative team. With my academic background, practical
        experience, and strong work ethic, I&apos;m confident I can contribute
        meaningfully to your goals.
      </p>

      <p>
        Thank you for your time and consideration. I&apos;d be happy to discuss
        how I can contribute to your team. Please feel free to reach out at{" "}
        <a
          href="mailto:runeunhjem@gmail.com"
          style={{ color: "#007bff", textDecoration: "none" }}
        >
          runeunhjem@gmail.com
        </a>{" "}
        or call +47 93 26 76 11.
      </p>

      <p style={{ fontWeight: "bold", marginTop: "1rem" }}>
        <strong>Best regards,</strong>
      </p>
      <p>Rune Unhjem</p>
      <p className="mb-4">Kristiansand, Norway</p>

      <p style={{ height: "30px" }}>
        Shortcuts:{" "}
        <a
          href="https://rundev-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
          className="hover-links mx-2"
        >
          Portfolio
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/runeunhjem"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
          className="hover-links me-1 ms-2"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/runeunhjem/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#007bff", textDecoration: "none" }}
          className="hover-links ms-2"
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
};

export default ApplicationPage;
