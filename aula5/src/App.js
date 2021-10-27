import './App.css';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
      <div className="App">
        <Header/>
        <Banner>
          <p>Ó só 6 tão tudo cercado</p>
          <button className="button">Botão que não faz nada</button>
        </Banner>
        <Footer nome="Fans"></Footer>
      </div>
    );
}

export default App;
