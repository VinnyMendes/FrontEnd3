import './style.css'

export default function Banner({children}){
    return(
        <section id="banner">
            <div className="banner-text">
                {children}
            </div>
        </section>
    )
}