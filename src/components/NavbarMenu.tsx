import React from 'react';
import { Image, Calendar, BookOpen, MessageSquare } from 'lucide-react';

export const menuItems = [
  { name: 'Gallery', icon: <Image className="w-5 h-5" /> },
  { name: 'Events', icon: <Calendar className="w-5 h-5" /> },
  { name: 'Resources', icon: <BookOpen className="w-5 h-5" /> },
  { name: 'Forum', icon: <MessageSquare className="w-5 h-5" /> },
];

export const NavbarMenu = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {menuItems.map((item) => (
        <a
          key={item.name}
          href="#"
          className="flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 transition-colors duration-200"
        >
          {item.icon}
          <span>{item.name}</span>
        </a>
      ))}
      <button className="bg-white text-primary-600 dark:bg-primary-600 dark:text-white px-4 py-2 rounded-md font-medium hover:bg-primary-50 dark:hover:bg-primary-700 transition-colors duration-200">
        Join Us
      </button>
    </div>
  );
};