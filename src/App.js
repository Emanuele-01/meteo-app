import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNav from './components/MyNav';
import MyHome from './components/MyHome';

function App() {
  return (
    <BrowserRouter>
        <MyNav/>
        <MyHome/>
    </BrowserRouter>
  );
}

export default App;
