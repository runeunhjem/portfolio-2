import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CssBaseline } from "@mui/material";
import Layout from "../Layout";
import projectsData from "../ProjectGallery/projectsData";

/**
 * Lazily loads the HomePage component.
 * @returns {React.LazyExoticComponent<React.ComponentType<any>>} The HomePage component.
 */
const HomePage = lazy(() => import("../../pages/HomePage"));

/**
 * Lazily loads the AboutPage component.
 * @returns {React.LazyExoticComponent<React.ComponentType<any>>} The AboutPage component.
 */
const AboutPage = lazy(() => import("../../pages/AboutPage"));

/**
 * Lazily loads the ContactPage component.
 * @returns {React.LazyExoticComponent<React.ComponentType<any>>} The ContactPage component.
 */
const ContactPage = lazy(() => import("../../pages/ContactPage"));

/**
 * The total number of projects in the project data.
 * @type {number}
 */
const totalProjects = projectsData.length;

/**
 * The main App component that sets up the router and routes for the application.
 * @returns {JSX.Element} The App component.
 */
const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route
              path="/"
              element={<HomePage numberOfProjects={totalProjects} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
