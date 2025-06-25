import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
   
      <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-800 relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img 
          src="logo.png" 
          width="220" 
          className="h-auto max-w-[180px] md:max-w-[220px]" 
          alt="Logo"
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <a href="#" className="text-yellow-500 font-semibold hover:text-white transition-colors">
          Dashboard
        </a>
        <a href="#" className="text-gray-300 font-semibold hover:text-white transition-colors">
          Analytics
        </a>
        <a href="#" className="text-gray-300 font-semibold hover:text-white transition-colors">
          Wallet
        </a>
        <a href="#" className="text-gray-300 font-semibold hover:text-white transition-colors">
          Settings
        </a>
        <button className="border border-yellow-500 text-gray-300 font-semibold px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors">
          Connect Wallet
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <IoMdClose size={24} className='text-yellow-500'/> : <CiMenuBurger size={24} className='text-yellow-500'/>}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-900 border-b border-gray-800 lg:hidden z-50">
          <nav className="flex flex-col px-4 py-4 space-y-4">
            <a 
              href="#" 
              className="text-yellow-500 font-semibold hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </a>
            <a 
              href="#" 
              className="text-gray-300 font-semibold hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Analytics
            </a>
            <a 
              href="#" 
              className="text-gray-300 font-semibold hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Wallet
            </a>
            <a 
              href="#" 
              className="text-gray-300 font-semibold hover:text-white transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Settings
            </a>
            <button 
              className="border border-yellow-500 text-gray-300 font-semibold px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors mt-2 self-start"
              onClick={() => setIsMenuOpen(false)}
            >
              Connect Wallet
            </button>
          </nav>
        </div>
      )}
    </header>

  );
}
