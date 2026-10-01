import HeaderIndex from "./components/header-index/header-index";
import IntroducaoSection from "./components/introducao-section/introducao-section";
import ServicosSection from "./components/servicos-section/servicos-section";

export default function Index() {
  return (
    <>
      <HeaderIndex />
      <IntroducaoSection />
      <ServicosSection />
    </>
  );
}
