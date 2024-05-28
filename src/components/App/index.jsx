import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ContactPage from "../../pages/ContactPage";
import Layout from "../Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

