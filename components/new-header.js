import { useState } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from 'next/link';
import { useWeb3Modal } from '@web3modal/ethers/react';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleConnectWallet = () => {
    open();
    setIsMenuOpen(false); // Close mobile menu when connecting
  };

  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-800 relative">
      {/* Logo */}
      <div className="flex-shrink-0">
      <Link href="/">
        <img
          src="logo.png"
          width="220"
          className="h-auto max-w-[180px] md:max-w-[220px]"
          alt="Logo"
        />
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-8">
        <Link href="/dashboard" className="text-yellow-500 font-semibold hover:text-white transition-colors">
          Dashboard
        </Link>
        <Link href="/dashboard" className="text-gray-300 font-semibold hover:text-white transition-colors">
          Analytics
        </Link>
        <Link href="/dashboard" className="text-gray-300 font-semibold hover:text-white transition-colors">
          Wallet
        </Link>
        <Link href="/dashboard" className="text-gray-300 font-semibold hover:text-white transition-colors">
          Settings
        </Link>
        <button 
          onClick={handleConnectWallet}
          className="border border-yellow-500 text-gray-300 font-semibold px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors"
        >
          {isConnected ? formatAddress(address) : 'Connect Wallet'}
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
          <Link href="/dashboard" className="text-yellow-500 font-semibold hover:text-white transition-colors">
          Dashboard
        </Link>
        <Link href="/dashboard" className="text-gray-300 font-semibold hover:text-white transition-colors">
          Analytics
        </Link>
        <Link href="/dashboard" className="text-gray-300 font-semibold hover:text-white transition-colors">
          Wallet
        </Link>
        <Link href="/dashboard" className="text-gray-300 font-semibold hover:text-white transition-colors">
          Settings
        </Link>
        <button 
          onClick={handleConnectWallet}
          className="border border-yellow-500 text-gray-300 font-semibold px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors"
        >
          {isConnected ? formatAddress(address) : 'Connect Wallet'}
        </button>
          </nav>
        </div>
      )}
    </header>
  );
}