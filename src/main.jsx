import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import TeacherLandingPage from "./TeacherLandingPage";
// import TailwindTest from "./App.jsx";
// import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <TailwindTest /> */}
    <TeacherLandingPage />
  </StrictMode>
);
