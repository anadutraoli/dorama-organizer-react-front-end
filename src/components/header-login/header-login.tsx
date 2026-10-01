import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import "./header-login.css";

export default function HeaderLogin() {
  return (
    <>
      <header>
        <Link className="logo" to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>
      </header>
    </>
  );
}
