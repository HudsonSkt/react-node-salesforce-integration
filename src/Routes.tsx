import { Routes, Route } from "react-router-dom";
import { SideBar } from "./Components/Sidebar";
import HomePage from "./Components/Homepage";
import { ContactForcePage } from "./Components/ContactJsforce/ContactForcePage/ContactForce";
import CardUserPage from "./Components/ComponentCards/CardUsers";
import ViaCep from "./Components/ViaCep";
import  JsForceUserPage  from "./Components/JsForceCard/JsForceCard/index";
// import { PageCardUsers } from "./Pages/PageContactJsForce";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<SideBar />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/ViaCep" element={<ViaCep />} />
        <Route path="/Card" element={<CardUserPage />} />
        <Route path="/JsForceUserPage" element={<JsForceUserPage />} />
        <Route path="/ContactForcePage" element={<ContactForcePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
