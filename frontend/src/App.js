import Routes from './Routes';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <BrowserRouter>
    <main className="color: bg-green-200">
      <Header />
      <Routes />
    </main>
    </BrowserRouter>
  );
}

export default App;
