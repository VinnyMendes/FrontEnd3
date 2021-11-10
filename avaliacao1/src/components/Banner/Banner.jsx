import style from './Banner.module.scss'

export default function Banner(){
    return(
        <section id="sobre" className={style.sobre}>
            <div className={style.colunaCon}>
                <img src="./images/ViniciusMendes.jpeg" alt="foto do vinícius" className={style.foto} />
                <div className={style.texto}>
                    <h2> Vinícius Mendes da Silva</h2>
                    <p>Sou um programador apaixonado e em busca da entrada no mercado de trabalho. Aqui estão alguns dos projetos que já fiz até hoje</p>
                </div>
            </div>
            <div className={style.coluna}></div>
        </section>
    )
}