import React from "react";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./Pages/MainScreen";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MainScreen />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
