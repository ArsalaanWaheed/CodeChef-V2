// Footer.tsx
import React from 'react';
import styled, { useTheme } from 'styled-components';
import logo from '../logo.png';


const SocialLinks = styled.div`
  margin: 10px 0;

  a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
    font-size: 24px;

    &:hover {
      color: #a5d6a7; /* Light green */
    }
  }
`;

const Footer: React.FC = () => {
    
  return (
    // <div className='bg-gradient-to-r from-primary-600 to-primary-500 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg transition-colors duration-200 flex justify-center"'>
    //   <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
    //   <SocialLinks>
    //     <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    //       Instagram
    //     </a>
    //     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    //       Twitter
    //     </a>
    //     <a href="https://github.com" target="_blank" rel="noopener noreferrer">
    //       GitHub
    //     </a>
    //   </SocialLinks>
    // </div>


   
    <footer className="bg-gradient-to-r from-primary-600 to-primary-500 dark:from-gray-800 dark:to-gray-900 text-white shadow-lg transition-colors duration-200 flex justify-center">
        <hr></hr>
      <div className="container mx-auto">
        <img src={logo} className="h-40 mx-auto mt-5"></img>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className=" ">
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              <li><a href="#" className="hover:underline">Accessibility Policy</a></li>
              <li><a href="#" className="hover:underline">Reporting</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Sitemap</a></li>
              <li><a href="#" className="hover:underline">Accessibility Policy</a></li>
              <li><a href="#" className="hover:underline">Reporting</a></li>
              <li><a href="#" className="hover:underline">Terms of Use</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <ul className="flex gap-4">
              <li><a href="#" className="hover:underline"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" className="hover:underline"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" className="hover:underline"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
              </div>
              </div>
              </div>
              </footer>
  );
};

export default Footer;