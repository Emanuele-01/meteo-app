import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNav from './components/MyNav';

function App() {
  return (
    <BrowserRouter>
        <MyNav/>
    </BrowserRouter>
  );
}

export default App;
