// filepath: /Users/User/Desktop/altsch-africa/html-to-jsx/src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Form from "./components/Form";
import Table from "./components/Table";
import Media from "./components/Media";

const App = () => {
  return (
    <Router>
      <Routes>
       <Route path="/" element={<Index />} />
        <Route path="/form" element={<Form />} />
        <Route path="/table" element={<Table />} />
        <Route path="/media" element={<Media />} />
      </Routes>
    </Router>
  );
};

export default App;