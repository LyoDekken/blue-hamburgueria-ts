import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/" element={<div></div>} />
      <Route path="/" element={<div></div>} />
    </Routes>
  );
};

export default Router;
