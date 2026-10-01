import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "../pages/index";
import Footer from "../components/footer/footer";
import LoginSection from "../pages/login-section/login-section";
import CadastroSection from "../pages/cadastro-section/cadastro";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/login" element={<LoginSection />} />
        <Route path="/cadastro" element={<CadastroSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
