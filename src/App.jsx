import "./App.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MainLayout from "./layouts/mainLayout/MainLayout";
import About from "./pages/About/AboutPage";
import HomePage from "./pages/homePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ContactPage from "./pages/contactPage/contactPage";
import CollectionsPage from "./pages/CollectionsPage/CollectionsPage";
import ProductDetail from "./assets/companents/ProductDetail/ProductDetail";
import Shopping from "./pages/ShoppingCart/ShoppingCart";
import Checkout from "./pages/Checkout/Checkout";
import MyAccountLayout from "./layouts/mainLayout/myAccountLayout/MyAccountLayout";
import PersonaLInformationPage from "./pages/MyAccountPage/PersonalIformationPage/PersonaLInformationPage";
import WishlistPage from "./pages/MyAccountPage/WishlistPage/WishlistPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="products">
            <Route index element={<ProductPage />} />
            <Route path="ProductDetail" element={<ProductDetail />} />
          </Route>
          <Route path="collections" element={<CollectionsPage />} />
          <Route path="contactpage" element={<ContactPage />} />
          <Route path="shoppingCart" element={<Shopping />} />
          <Route path="Checkout" element={<Checkout />} />
          <Route path="myaccountlayout" element={<MyAccountLayout />}>
            <Route index element={<PersonaLInformationPage />} />
            <Route path="wishlist" element={<WishlistPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
