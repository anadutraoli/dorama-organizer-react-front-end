import "./servicos-section.css"
import { BsListCheck, BsChatLeftDots, BsSearchHeart } from "react-icons/bs";

export default function ServicosSection() {
    return (
        <section className="servicos-section container">
      <ul className="servicos-lista">
        <li>
          <div className="servico-icone">
            <BsListCheck size={100} />
          </div>
          <h2 className="servico-titulo">Crie listas personalizadas</h2>
          <p className="servico-descricao">
            Organize seus doramas em categorias, como por exemplo "Quero
            Assistir", "Assistidos" e "Não Gostei”.
          </p>
        </li>
        <li>
          <div className="servico-icone">
            <BsChatLeftDots size={100} />
          </div>
          <h2 className="servico-titulo">Adicione comentários</h2>
          <p className="servico-descricao">
            Adicione comentários pessoais, avaliações com estrelas e compartilhe
            suas impressões.
          </p>
        </li>
        <li>
          <div className="servico-icone">
            <BsSearchHeart size={100} />
          </div>
          <h2 className="servico-titulo">Descubra novos doramas</h2>
          <p className="servico-descricao">
            O sistema ajuda você a acompanhar seu progresso e a descobrir novos
            doramas com base nas suas preferências.
          </p>
        </li>
      </ul>
    </section>
    )
}