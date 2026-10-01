import { useEffect, useState } from "react";
import "./introducao-section.css";
import { carregarTMDB } from "../../../../services/api";
import { Link } from "react-router-dom";

interface Item {
  poster_path: string;
}

export default function IntroducaoSection() {
  const [itens, setItens] = useState<Item[]>([]);

  useEffect(() => {
    carregarTMDB()
      .then((dados) => {
        setItens(dados?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="content-main">
        <div className="content container">
          <div className="content-side">
            <h1 className="intro-main">
              Organize os seus doramas em um só lugar<span>.</span>
            </h1>
            <p className="resume-text">
              Uma plataforma prática e intuitiva para fãs de doramas. Você pode
              organizar os doramas que deseja assistir, aqueles que já viu e
              adorou, ou os que não foram tão bons assim.
            </p>
            <div className="main-buttons">
              <Link to={"/login"}>Já tem conta? Faça login</Link>
              <p>ou</p>
              <Link to={"/cadastro"}>Crie sua conta</Link>
            </div>
          </div>
          <div className="carrousel">
            <ul className="carrousel-list">
              {itens?.map((item, index) => (
                <li className="card" key={index}>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${item?.poster_path}`}
                    alt=""
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
