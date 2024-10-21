import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Navbar from "./pages/Navbar/Navbar";
import Footer from "./pages/Footer/Footer";
import Plan from "./pages/Plan/Plan";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
