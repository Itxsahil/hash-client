import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";
import Home from "@/Pages/Home";
import YourPage from "@/Pages/YourPage";
function App() {
  return (
    <Routes>
      {/* Layout wraps other routes */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path=":id" element={<YourPage />} />
      </Route>
    </Routes>
  );
}

export default App;
