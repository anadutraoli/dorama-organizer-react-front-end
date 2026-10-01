import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export default function Footer() {
  return (
    <>
      <div className="divisor"></div>
      <footer className="footer container">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>

        <p>DoramaOrganizer @ Alguns dreitos reservados.</p>
      </footer>
    </>
  );
}
