import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Ednaldo from './components/Ednaldo';
import Videos from './components/Videos';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Banner/>
        <Ednaldo/>
        <Videos/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
