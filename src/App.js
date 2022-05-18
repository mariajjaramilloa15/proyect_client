import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import "./App.scss";

export default function App(){
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index, error404) => (
          <Route
            key={index}
            path={route.path}
            component={error404}
            element={
              <route.layout>
                <route.component />
              </route.layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>  
  );
}