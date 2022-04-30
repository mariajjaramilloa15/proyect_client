import "./App.scss";
import { BrowserRouter as Router, Route, Link, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import routes from "./config/routes";
import error404 from "./pages/error404";


export default function App(){
  return (
    <div>
    <Router>
      <Routes>
        {routes.map((route, index, error404) => (
          <Route
            key={index}
            path={route.path}
            component={error404}
            element={
              <route.layout>
                <route.component>
                <h1>Error 404</h1>
                <p>Not Found</p>
                </route.component>
                <h2>Child component</h2>
              </route.layout>
            }
          />
        ))}
      </Routes>
    </Router>
    </div>
  );
}