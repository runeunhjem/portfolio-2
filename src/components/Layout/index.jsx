import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

/**
 * Layout component that wraps its children with a header and footer.
 * Provides a consistent layout structure for the application.
 *
 * @param {Object} props - The properties object.
 * @param {React.ReactNode} props.children - The children components to be wrapped by the layout.
 * @returns {JSX.Element} The Layout component.
 */
const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className="flex-grow py-4 sm:p-4"
        style={{ minHeight: "100vh", minWidth: "100%" }}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
