import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Landing from "./LandingNew/LandingNew";
import LandingMobile from "./LandingNew/LandingMobile";

export default function AppRoutes() {
  const isLaptopOrTablet = useMediaQuery({ query: "(min-width: 700px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 650px)" });
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          component={isLaptopOrTablet ? Landing : LandingMobile}
        />
      </Routes>
    </Router>
  );
}
