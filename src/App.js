import './App.css';
import About from './components/about';
import Body from './components/body'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Team from './components/team';
import Login from './components/login';
import ProtectedRoute from './components/protectedroute';
import Accordian from './components/accordian';

function App() {
  return <div>
    <header className="text-2xl font-bold py-5 bg-black text-white text-center flex">
      Hello World
      <nav className="px-20 m-2 w-[600px] flex justify-between text-lg">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/accordian">Accordian</a>
        <a href="/team">Team</a>
        <a href="/login">Login</a>
      </nav>
    </header>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body/>}></Route>
      <Route element={<ProtectedRoute/>}>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/accordian" element={<Accordian/>}></Route>
      <Route path="/team" element={<Team/>}></Route>
      </Route>
      <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>    
    </div>
}

export default App;
