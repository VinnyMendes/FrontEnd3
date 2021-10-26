import './App.css';
import Idade from './components/Idade';
import Nome from './components/Nome';

import Greeting from './components/Greeting';

function App() {
  const user = {
    firstName: "Turma",
    lastName: "01"
  }
  const banana = {
    firstName: "ban",
    lastName: "ana"
  }

  return (
    <div className="App">
      <header className="App-header">
        <Greeting obj={user}/>
        <Greeting obj={banana}/>
        <Greeting/>
        <Nome/>
        <Idade/>
      </header>
    </div>
  );
}

export default App;