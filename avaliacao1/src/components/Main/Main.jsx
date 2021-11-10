import style from './Main.module.scss'
import Banner from '../Banner/Banner'
import Projetos from '../Projetos/Projetos'
export default function Main(){
    return(
        <main className={style.main}>
            <Banner />
            <Projetos />
        </main>
    )
}