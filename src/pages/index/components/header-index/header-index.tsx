import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.svg";

export default function HeaderIndex() {
  return (
    <header className="container header">
      <Link to={"/"}>
        <img src={logo} alt="Logo" />
      </Link>
      <nav className="menu">
        <ul>
          <li className="botao-decorado">
            <Link to={"/login"}>Cadastre-se</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
