import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { CssBaseline } from "@mui/material";
import Layout from "../Layout";
import projectsData from "../ProjectGallery/projectsData";


const HomePage = lazy(() => import("../../pages/HomePage"));
const AboutPage = lazy(() => import("../../pages/AboutPage"));
const ContactPage = lazy(() => import("../../pages/ContactPage"));

const totalProjects = projectsData.length;

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
