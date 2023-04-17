// import logo from './logo.svg';
import './App.css';

// import Header from './components/header';
// import Footer from './components/footer';
// import Main from './components/main';

import TemplatePage from './pages/templatePage';
import HomePage from './pages/homePage';
import DetailsPage from './pages/detailsPage';

import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<TemplatePage />}>
            <Route index element={<HomePage />} ></Route>
            <Route exact path="/details/*" element={<DetailsPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
