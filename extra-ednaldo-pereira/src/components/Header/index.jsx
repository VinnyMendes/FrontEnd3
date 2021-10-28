import './style.css'

export default function Header(props){
    return(
        <header>
            <h1>{props.empresa}</h1>
            <nav>
                <ul>
                    <li><a href="#ednaldo">Ednaldo</a></li>
                    <li><a href="#videos">Videos</a></li>
                    <li><a href="#footer">Footer</a></li>
                </ul>
            </nav>
        </header>
    )
}