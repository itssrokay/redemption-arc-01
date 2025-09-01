import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from "./src/pages/Home";
import Auth from "./src/pages/Auth";




const App = () => {
  return (
    <>
      <Auth/>
    </>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<App />);
