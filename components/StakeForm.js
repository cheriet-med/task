import { useState } from 'react';
import { FaAngleRight } from "react-icons/fa6";



export default function StakeForm() {
 
  const [selectedTab, setSelectedTab] = useState('Devscreener');
 



    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Staking Panel */}
                <div className="bg-black border border-yellow-800 rounded-xl p-6 lg:col-span-1">
                  <h2 className="text-2xl font-bold mb-6">Stake BTC to ETH</h2>
                  
                  <div className="space-y-4">
                  <div className="bg-black border border-yellow-800 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                      
                      <div className="flex items-center gap-2">
                      <img src="bitlogo.svg" width="30"  style={{display:"inline-block"}} />
                            <span className="text-gray-400">BTC Amount</span>
                      </div>
                    
                        <div className="flex items-center space-x-2">
                       
                        <FaAngleRight className='text-gray-400 -rotate-90'/>
                        </div>
                      </div>
                    </div>
    
                    <div className="bg-black border border-yellow-800 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">BTC Amount</span>
                        <div className="flex items-center space-x-2">
                        
                        <FaAngleRight className='text-gray-400 rotate-90'/>
                        </div>
                      </div>
                    </div>
    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Estimated Fee</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-white">0.002 ETH</span>
                        <FaAngleRight className='text-gray-400'/>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-yellow-600 via-yellow-300 to-yellow-600 text-black py-3 rounded-xl font-semibold hover:shadow-lg transition-shadow">
                      Stake
                    </button>
                  </div>
                </div>
    
                {/* Market Overview */}
                <div className="bg-black border border-yellow-800  rounded-xl p-6 lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-6">Market Overview</h2>
                  
                  <div className="flex space-x-6 mb-6 flex-wrap gap-3">
                    {['Devscreener', 'CoinGecko', 'TradingView'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setSelectedTab(tab)}
                        className={`pb-2 border-b-2 transition-colors  ${
                          selectedTab === tab
                            ? 'border-yellow-500 text-yellow-500'
                            : 'border-transparent text-gray-400 hover:text-white'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
    
                  <div className="h-48 relative">
                    <svg className="w-full h-full" viewBox="0 0 400 200">
                      <polyline
                        fill="none"
                        stroke="rgb(234, 179, 8)"
                        strokeWidth="2"
                        points="20,150 40,140 60,130 80,125 100,120 120,110 140,115 160,105 180,100 200,95 220,90 240,85 260,80 280,75 300,70 320,65 340,60 360,55 380,50"
                      />
                      <defs>
                        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="rgb(234, 179, 8)" stopOpacity="0.3"/>
                         
                          <stop offset="100%" stopColor="rgb(234, 179, 8)" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      <polygon
                        fill="url(#chartGradient)"
                        points="20,150 40,140 60,130 80,125 100,120 120,110 140,115 160,105 180,100 200,95 220,90 240,85 260,80 280,75 300,70 320,65 340,60 360,55 380,50 380,200 20,200"
                      />
                    </svg>
                    <div className="absolute bottom-2 left-4 text-xs text-gray-500">Feb 22</div>
                  </div>
                </div>
              </div>
    );
  }