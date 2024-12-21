import React from 'react';
import { Code2 } from 'lucide-react';
import logo from './logo.png'

const NavbarBrand = () => {
  return (
    <div className="flex-shrink-0 flex items-center space-x-3">
      <img src={logo} className='h-20 w-20'></img>
     
      <span className="font-bold text-xl">CodeChef ZHCET</span>
    </div>
  );
};

export default NavbarBrand;