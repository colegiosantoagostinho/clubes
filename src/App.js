import './App.css';
import MainPage from './components/mainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LinksPage from './components/linkspage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/club/:link" element={<LinksPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
