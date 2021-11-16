/* eslint-disable react/jsx-no-target-blank */
import style from './Projetos.module.scss'

export default function Projetos(){

    const projects = [
        {
            id: "vinnyflix",
            nome: 'VinnyFlix',
            desc: 'Formulário feito para a inscrição no site VinnyFlix',
            link: 'https://vinnymendes.github.io/FrontEnd/checkpoint/'
        },
        {
            id: "things2do",
            nome: 'Things 2 Do',
            desc: 'Site para servir como uma lista de afazeres',
            link: 'https://vinnymendes.github.io/Things2Do/'
        },
        {
            id: "movieCards",
            nome: 'MovieCards',
            desc: 'Site para fazer uma lista de filmes',
            link: 'https://vinnymendes.github.io/CheckpointFront/'
        },
    ]

    return(
        <section id="projetos" className={style.projetos}>
            <ul className={style.ul}>
                {projects.map(e => {
                return(
                    <li>
                        <div className={style.card}>
                            <img src={`./images/${e.id}.png`} alt="" className={style.image} />
                            <h3>{e.nome}</h3>
                            <p>{e.desc}</p>
                            <a target="_blank" className="btn btn-primary" href={e.link}>Link para o site</a>
                        </div>
                    </li>
                )}
                )}

            </ul>
        </section>
    )
}