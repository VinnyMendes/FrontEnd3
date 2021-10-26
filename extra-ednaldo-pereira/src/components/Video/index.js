import './style.css'

export default function Video(props){
    return(
        <div className="grid-item">
                    <div className="video-container">
                    <iframe src={props.url} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <h3>{props.title}</h3>
                </div>
    )
}