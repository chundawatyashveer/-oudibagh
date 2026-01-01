
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home/Main';
import Menuone from '../Pages/Menuone/Main';
import Contactus from '../Pages/Contact/Main';  
import Contact from '../Pages/Contact/Main';   
import Booktableoption from '../Pages/Booktableoption/main';  
import Booktable from '../Pages/Booktable/main';  
import Gallery from '../Pages/Gallery/Main';  
import Experience from '../Pages/Experience/main';
export default function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menuone" element={<Menuone />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/booktableoption" element={<Booktableoption />} />
      <Route   path="/booktable" element={<Booktable />} />
      <Route   path="/gallery" element={<Gallery />} />
      <Route   path="/experience" element={<Experience />} />
    </Routes>
  );
}