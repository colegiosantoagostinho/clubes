import './App.css';
import MainPage from './components/mainPage';
import { HashRouter, Routes, Route } from 'react-router-dom';
import LinksPage from './components/linkspage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/club/:link" element={<LinksPage />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
