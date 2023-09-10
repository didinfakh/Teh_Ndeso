import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './main.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import ListMenu from './page/ListMenu.jsx';
import AddList from './page/AddList.jsx';
import EditList from './page/EditList.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/List" element={<ListMenu />} />
        <Route path="/Add" element={<AddList />} />
        <Route path="/Edit/:id" element={<EditList />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
