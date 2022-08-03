import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<div></div>} />
      <Route path="/" element={<div></div>} />
    </Routes>
  );
};

export default Router;
