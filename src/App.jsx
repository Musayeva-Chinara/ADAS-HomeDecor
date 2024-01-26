import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/mainLayout/MainLayout";
import About from "./pages/About/AboutPage";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ContactPage from "./pages/contactPage/contactPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<ProductPage />} />
          <Route path="collections" element={<CollectionsPage />} />
          <Route path="contactpage" element={<ContactPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
