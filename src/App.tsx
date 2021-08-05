import { AppBody } from './app-styled';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './components/routes/Routes';

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
