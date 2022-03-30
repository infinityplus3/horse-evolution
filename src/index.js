import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Flow from './App';
import Equus from "./pages/equus.js"
import { HashRouter, Routes, Route } from "react-router-dom";
import Hyrachotherium from './pages/hyrachotherium';
import Merychippus from './pages/merychippus';
import Mesohippus from './pages/mesohippus';
import Miohippus from './pages/miohippus';
import Pliohippus from './pages/pliohippus';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Flow />} />
        <Route path="/equus" element={<Equus />} />
        <Route path="/hyrachotherium" element={<Hyrachotherium />} />
        <Route path="/merychippus" element={<Merychippus />} />
        <Route path="/mesohippus" element={<Mesohippus />} />
        <Route path="/miohippus" element={<Miohippus />} />
        <Route path="/pliohippus" element={<Pliohippus />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
