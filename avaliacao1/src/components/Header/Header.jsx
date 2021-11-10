import style from './Header.module.scss'

export default function Header() {
    return (
        <header>
            <div className={style.header}>
                <h1>VinnyMendes</h1>
                <div className={style.botoes}>
                    <a href="#sobre">Sobre</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#contato">Contato</a>
                </div>
            </div>
        </header>
    )

}