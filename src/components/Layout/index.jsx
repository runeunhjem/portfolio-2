import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main
        className="flex-grow p-4"
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
