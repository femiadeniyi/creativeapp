import React, {useEffect, useState} from 'react';
import logo from '../assets/Logo.svg';
import {Link} from "react-scroll"
import {FaXmark, FaBars} from "react-icons/fa6";

export default function Navbar() {
	 const [isMenuOpen, setIsMenuOpen] =useState(false);
	const [isSticky, setIsSticky] =useState(false);
	// set toggle Menu
	const toggleMenu =() =>{
		setIsMenuOpen(!isMenuOpen)
	}

	useEffect(() =>{
		const handleScroll =() =>{
			if(window.scrollY > 100){
				setIsSticky(true);
			}
			else{
				setIsSticky(false);
			}
		};
		window.addEventListener('scroll', handleScroll);
		return () =>{
			window.addEventListener('scroll', handleScroll);	
		}
	})
	//Navitem array
	  const navItems =[
        {Link: "Home", path: "home"},
        {Link: "Service", path: "service"},
        {Link: "About", path: "about"},
        {Link: "Product", path: "product"},
        {Link: "Testimonial", path: "testimonial"},
        {Link: "FAQ", path: "faq"},
	  ]
	return(
           <header className="w-full bg-white bg-transparent fixed top-0 left-0 right-0">
               <nav className={'py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300 : ""}'}>
                <div className="flex justify-between items-center text-base gap-8">
                   <a className="text-2xl font-semibold flex item-center space-x-3" href=""><img className="inline-block item-center" src={logo} alt=""/></a>
                    {/* nav Item for large device*/}
                     <ul className="md:flex space-x-12 hidden">
                       {
                      	navItems.map(({Link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} 
                      	key={path} 
                      	className="block text-base cursor-pointer text-gray-900 hover:text-brandPrimary first:font-medium">{Link}</Link> )
                      }
                      </ul>

                  {/* btn for for large devices */}
                  <div className="space-x-12 hidden lg:flex items-center">
                     <a href="/" className="hidden lg:flex items-center text-brandPrimary 
                     hover:text-gray900">login</a>
                      <button className="bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded hover:bg-neutralDGrey">Sign up</button>
                   </div>

               {/* menu btn for only mobile device */}
                 <div className="md:hidden">
                   <button 
                    onClick={toggleMenu}
                   className="text-neutralDGrey focus:outline-none focus:text-gray-500">
                     {
                     	isMenuOpen ? (<FaXmark className="h-6 w-6"/>) : (<FaBars className="h-6 w-6"/>)
                     }
                     </button>
                 </div>
                </div>
                  {/* Nav item for mobile device*/}
                  <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                    {
                      	navItems.map(({Link, path}) => <Link to={path} spy={true} smooth={true} offset={-100} 
                      	key={path} 
                      	className="block text-base text-gray-900 hover:text-brandPrimary first:font-medium">{Link}</Link> )
                      }
                  </div>
              </nav>
           </header>
		)
}