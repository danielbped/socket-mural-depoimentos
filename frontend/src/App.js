import Routes from './Routes';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <main>
      <Header />
      <Routes />
    </main>
    </BrowserRouter>
  );
}

export default App;
