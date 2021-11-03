/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';


function App() {

  const listagemAlunos = [
    {
      id: 1,
      firstName: "Vinny",
      lastName: "Mendes",
      taNaLista: true,
      tarefa: "Pipoca"
    },
    {
      id: 2,
      firstName: "Raffa",
      lastName: "Mendes",
      taNaLista: true,
      tarefa: "Batata"
    },
    {
      id: 3,
      firstName: "Ana",
      lastName: "Guimarães",
      taNaLista: true,
      tarefa: "Pipoca"
    },
    {
      id: 4,
      firstName: "Poo",
      lastName: "Dragão Guerreiro",
      taNaLista: true,
      tarefa: "Coca-Cola"
    }
  ]


  return (
    <div className="App">
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark" aria-label="Third navbar example">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Expand at sm</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample03">
          <ul className="navbar-nav me-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled">Disabled</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</a>
              <ul className="dropdown-menu" aria-labelledby="dropdown03">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <form>
            <input className="form-control" type="text" placeholder="Search" aria-label="Search"/>
          </form>
        </div>
      </div>
        </nav>
      </header>

       {/* {listagemAlunos.map((e)=> <li key={e.id}>{e.firstName} {e.lastName}</li>)}  */}

      <h3>Convidados:</h3>

      {listagemAlunos.map(e => <ClassComponent key={e.id} nome={e.firstName} estaNaLista={e.taNaLista} />)}

      <h3>Tarefa: </h3>

      {listagemAlunos.map(e => <FunctionComponent key={e.id} nome={e.firstName} tarefa={e.tarefa} />)}

    </div>
  );
}

export default App;
