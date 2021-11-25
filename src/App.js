import './App.css';
import { useState } from 'react';
import { Main } from './components/main/Main';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';

function App() {
  const [counter, setCounter] = useState(0)
  const handleBuyItem = () => {
    setCounter((counter) => counter + 1)
  }

  return (
    <div className="App">
      <Header itemsCounter={counter}/>
      <Main handleBuyItem={handleBuyItem} />
      <Footer />
    </div>
  );
}

export default App;
