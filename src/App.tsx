import { AppBody } from './app-styled-components';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/Routes/Routes';

function App() {
  return (
    <Router>
      <AppBody>
        <Routes />
      </AppBody>
    </Router>
  );
}

export default App;
