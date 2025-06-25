export default function Hero() {
    return (
      <div className="flex items-center justify-between mb-16 flex-wrap sm:flex-nowrap gap-10 sm:gap-0">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                A Next-Generation<br />
                Blockchain Platform
              </h1>
              <button className="bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600  text-black px-10 py-3 lg:py-5 rounded-xl font-semibold text hover:shadow-lg transition-shadow">
                Connect Wallet
              </button>
            </div>
            
            <div className="relative">
            <img src="bitcoin.png" width="600"  style={{display:"inline-block"}} />
            </div>
          </div>

    );
  }