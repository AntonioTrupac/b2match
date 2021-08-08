import { AppBody } from './app-styled';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/routes/Routes';
import { Header } from './components/header/Header';

function App() {
  return (
    <Router>
      <Header title='Choose the country that u want to visit!' />
      <AppBody>
        <Routes />
      </AppBody>
    </Router>
  );
}

export default App;
