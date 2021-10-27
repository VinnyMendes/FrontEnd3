import './style.css'

export default function Header(){
    return(
        <nav id="nav">
            <img src="./logo.png" alt="logo" id="logo" />
            <div id="botoes">
                <button className="button">Início</button>
                <button className="button">Meio</button>
                <button className="button">Fim</button>
            </div>
        </nav>
        
    )
}