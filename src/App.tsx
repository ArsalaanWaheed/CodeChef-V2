import React from 'react';
import Navbar from './components/Navbar';
import BannerCarousel from './components/banner/BannerCarousel';
import ClubLeadsSection from './components/leads/ClubLeadsSection';
import Footer from './components/Footer/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {Home} from './home';

function App() {
  return (
    // <div className="min-h-screen bg-primary-50 dark:bg-gray-900 transition-colors duration-200">
    //   <Navbar />
    //   <BannerCarousel />
    //   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    //     <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Welcome to CodeChef ZHCET</h1>
    //     <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">Start your coding journey with us</p>
    //     <ClubLeadsSection />
    //   </div>
    //   <Footer/>
    // </div>
    <BrowserRouter>
    <Routes>
     <Route path='/home' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;