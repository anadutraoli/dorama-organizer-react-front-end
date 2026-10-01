import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import HeaderLogin from "../../components/header-login/header-login";
import "../../styles/form.css";

export default function CadastroSection() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <HeaderLogin />
      <main className="main-form">
        <section className="form-container">
          <div className="form-content">
            <h1 className="titulo-form">Criar conta</h1>
            <div className="form">
              <form className="form-dados" onSubmit={handleSubmit(() => {})}>
                <div className="form-nome form-group">
                  <label>
                    Seu nome <input {...register("nome")} id="nome" />
                  </label>
                </div>
                <div className="form-email form-group">
                  <label>
                    E-mail <input {...register("email")} id="email" />
                  </label>
                </div>
                <div className="form-senha form-group">
                  <label>
                    Senha{" "}
                    <input {...register("senha")} type="password" id="senha" />
                  </label>
                </div>
                <input
                  className="botao-decorado"
                  type="submit"
                  value="Cadastre-se"
                />
              </form>
              <p>
                Já possui conta?{" "}
                <span>
                  <Link to={"/login"}>Fazer Login</Link>
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
