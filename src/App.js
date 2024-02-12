import {Route,Routes} from 'react-router-dom';
import './App.css';
import Title from './pages/Title';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Navbar from './component/Navbar/Navbar';
import Button from './pages/Button';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Title/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<contact/>}/>
        <Route path="/button" element={<Button/>}/>
       
      </Routes>
    </div>
  );
}

export default App;
