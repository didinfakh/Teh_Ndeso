import { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');
  return (
    <nav className="bg-dark fixed-top">
      <div className="container d-flex justify-content-center align-items-center">
        <ul className=" col-md-6 col-9 d-flex justify-content-around align-items-center p-0 m-0" style={{ height: '50px' }}>
          <li className="">
            <a
              onClick={() => {
                setActive('home');
              }}
              className={`nav-link ${active == 'home' ? 'text-white border-bottom' : 'text-secondary'}`}
              aria-current="page"
              href="#Home"
            >
              Home
            </a>
          </li>
          <li className="">
            <a
              onClick={() => {
                setActive('outlet');
              }}
              className={`nav-link ${active == 'outlet' ? 'text-white border-bottom' : 'text-secondary'}`}
              href="#Outlet"
            >
              Outlet
            </a>
          </li>
          <li className="">
            <a
              onClick={() => {
                setActive('menu');
              }}
              className={`nav-link ${active == 'menu' ? 'text-white border-bottom' : 'text-secondary'}`}
              href="#Menu"
            >
              Menu
            </a>
          </li>
          <li className="">
            <a
              onClick={() => {
                setActive('kritik');
              }}
              className={`nav-link ${active == 'kritik' ? 'text-white border-bottom' : 'text-secondary'}`}
              href="#Kritik"
            >
              Kritik
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
