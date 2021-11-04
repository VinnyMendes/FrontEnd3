import { Component } from 'react';
import './App.css';
import Increment from './components/Increment';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      valor: 0,
      mostraNome: false,
      listagemAlunos: [{
        id: 0,
        firstName: "Vinny"
      },
      {
        id: 1,
        firstName: "Raffa"
      },
      {
        id: 2,
        firstName: "Tuts"
      }],

      listagemProdutos: [{
        id: 100,
        produto: "Batata Frita",
        foto: "https://pbs.twimg.com/profile_images/656799363247816704/XKeDcpIA_400x400.jpg"
      },
      {
        id: 200,
        produto: "Nuggets",
        foto: "https://pbs.twimg.com/profile_images/653425622077734912/7ZAyERWW.jpg"
      },
      {
        id: 300,
        produto: "Pão de Alho",
        foto: "https://olhonopreco.com.br/media/1696-pao-de-alho-santa-massa-tradicional-400g-md.jpg"
      }],
      
      listaImutavel: [{
        id: 100,
        produto: "Batata Frita",
        foto: "https://pbs.twimg.com/profile_images/656799363247816704/XKeDcpIA_400x400.jpg"
      },
      {
        id: 200,
        produto: "Nuggets",
        foto: "https://pbs.twimg.com/profile_images/653425622077734912/7ZAyERWW.jpg"
      },
      {
        id: 300,
        produto: "Pão de Alho",
        foto: "https://olhonopreco.com.br/media/1696-pao-de-alho-santa-massa-tradicional-400g-md.jpg"
      }]

    }
  }

  mostraNomeToggler = () => {
    this.setState({
      mostraNome: !this.state.mostraNome
    })

  }
  removeAluno = (idAluno) => {
    const listanova = this.state.listagemAlunos.filter(({ id }) => {
      return id !== idAluno
    })
    this.setState({
      listagemAlunos: listanova
    })
  }
  removeProduto = (idProduto) =>{
    const novalista= this.state.listagemProdutos.filter(({ id }) => {
      return id !== idProduto
    })
    this.setState({
      listagemProdutos: novalista
    })
  }

  desapagar = () =>{
    this.setState({
      listagemProdutos: this.state.listaImutavel
    })
  }

  render(){

    
    return(
      <>
        <Increment></Increment>

        {/* Alternador */}
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4"> 

          {/* { this.state.mostraNome ? <h3>Vinny Mendes</h3> : <h3></h3>} */}
          {this.state.mostraNome && ( <h3>Vinny Mendes</h3> )}

          <button className="btn btn-primary mt-4" onClick={this.mostraNomeToggler}>{this.state.mostraNome ? 'Esconde' : 'Mostra'} Nome</button>
        </div>

        {/* Remove Aluno */}
        <div className="d-flex flex-wrap flex-column justify-content-center align-items-center py-3 my-4"> 
            {this.state.listagemAlunos.map(({ id, firstName }) => {
              return(
                <div key={id} onClick={ ()=> this.removeAluno(id) }>
                  <h3>{firstName}</h3>
                </div>
              )
            })}
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <button className="btn btn-primary px-5 py-3" onClick={()=>{this.desapagar()}}>"Desapagar"</button>
          <div className="d-flex align-items-center justify-content-center mt-5">
              {this.state.listagemProdutos.map(({ id, produto, foto })=>{
                return(
                  <div key={id} className="d-flex flex-column align-items-center m-3" onClick={()=> this.removeProduto(id) }>
                    <h3>{produto}</h3>
                    <img src={foto} alt={produto} />
                  </div>
                )
              })}
          </div>
        </div>
      </>
    )
  }
}

