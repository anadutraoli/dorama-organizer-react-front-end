import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import HeaderLogin from "../../components/header-login/header-login";
import "../../styles/form.css"

export default function LoginSection() {
  const { register, handleSubmit } = useForm();

  return (
    <>
      <HeaderLogin />
      <main className="main-form">
        <section className="form-container">
          <div className="form-content">
            <h1 className="titulo-form">Fazer login</h1>
            <div className="form">
              <form className="form-dados" onSubmit={handleSubmit(() => {})}>
                <div className="form-email form-group">
                  <label>
                    E-mail <input {...register("email")} id="email" />
                  </label>
                </div>
                <div className="form-senha form-group">
                  <label>
                    Senha <input {...register("senha")} id="senha" />
                  </label>
                </div>
                <input
                  className="botao-decorado"
                  type="submit"
                  value="Fazer Login"
                />
              </form>
              <p>
                Não possui conta?{" "}
                <span>
                  <Link to={"/cadastro"}>Criar conta</Link>
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
