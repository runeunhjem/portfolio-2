import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CssBaseline } from "@mui/material";
import Layout from "../Layout";
import projectsData from "../ProjectGallery/projectsData";

// Lazily load the HomePage component.
const HomePage = lazy(() => import("../../pages/HomePage"));

// Lazily load the AboutPage component.
const AboutPage = lazy(() => import("../../pages/AboutPage"));

// Lazily load the ContactPage component.
const ContactPage = lazy(() => import("../../pages/ContactPage"));

// Lazily load the ApplicationPage component.
const ApplicationPage = lazy(() => import("../../pages/ApplicationPage"));

// Lazily load the WhyChooseElderPage component.
const WhyChooseElderPage = lazy(() => import("../../pages/WhyChooseElderPage"));

// The total number of projects in the project data.
const totalProjects = projectsData.length;

// The main App component that sets up the router and routes for the application.
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
            <Route path="/application" element={<ApplicationPage />} />
            <Route path="/elder" element={<WhyChooseElderPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
};

export default App;
