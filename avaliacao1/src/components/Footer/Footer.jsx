/* eslint-disable react/jsx-no-target-blank */
import style from './Footer.module.scss'

export default function Footer(){
    return(
        <footer className={style.footer} id="contato">

            <a href="https://www.linkedin.com/in/viniciusmendesdasilva/" target="_blank"><img src="./images/linkedin.png" alt="" className={style.icon} /></a>
            <a href="https://github.com/VinnyMendes" target="_blank"><img src="./images/github.png" alt="" className={style.icon} /></a>
            <a href="https://www.instagram.com/mendesvinny/" target="_blank"><img src="./images/instagram.png" alt="" className={style.icon} /></a>
            <a href="mailto:viniciusmendesdasilva0@gmail.com" target="_blank"><img src="./images/email.png" alt="" className={style.icon} /></a>

        </footer>
    )
}