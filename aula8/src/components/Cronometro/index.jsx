import { Component } from "react";

export default class Cronometro extends Component{
    constructor(){
        super();
        this.state = {
            tempo: 60
        }
    }

    componentDidMount(){
        this.iniciaContagem()
        this.timerID = setInterval(this.iniciaContagem, 1000) 
    }

    componentDidUpdate(){
        if(this.state.tempo === 0){
            clearInterval(this.timerID)
        }
    }

    iniciaContagem = () => {
        this.setState({
            tempo: this.state.tempo - 1
        })
    }

    render(){
        return(
            <>
            <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4" id="con">
                {this.state.tempo}
            </div>
            </>
        )
    }

}
