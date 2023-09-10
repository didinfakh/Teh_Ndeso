import Footer from './page/Footer';
import Home from './page/Home';
import Kritik from './page/Kritik';
import Menu from './page/Menu';
import Outlet from './page/Outlet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <div id="Home">
        <Home />
      </div>
      <div id="Outlet">
        <Outlet />
      </div>
      <div id="Menu">
        <Menu />
      </div>
      <div id="Kritik">
        <Kritik />
      </div>
      <Footer />
    </>
  );
}

export default App;
