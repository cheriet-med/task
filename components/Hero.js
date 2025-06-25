import { useWeb3Modal } from '@web3modal/ethers/react';
import { useWeb3ModalAccount } from '@web3modal/ethers/react';

export default function Hero() {
  const { open } = useWeb3Modal();
  const { address, isConnected } = useWeb3ModalAccount();

  const handleConnectWallet = () => {
    open();
  };

  const formatAddress = (addr) => {
    if (!addr) return '';
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="flex items-center justify-between mb-16 flex-wrap sm:flex-nowrap gap-10 sm:gap-0">
      <div>
        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
          A Next-Generation<br />
          Blockchain Platform
        </h1>
        <button 
          onClick={handleConnectWallet}
          className="bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-black px-10 py-3 lg:py-5 rounded-xl font-semibold text hover:shadow-lg transition-shadow"
        >
          {isConnected ? `Connected: ${formatAddress(address)}` : 'Connect Wallet'}
        </button>
      </div>
      <div className="relative">
        <img src="bitcoin.png" width="600" style={{display:"inline-block"}} />
      </div>
    </div>
  );
}