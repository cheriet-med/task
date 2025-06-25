import { useState } from 'react';
import { FaArrowRight } from "react-icons/fa";


export default function Newsletter() {
  const [email, setEmail] = useState('');
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Newsletter */}
      <div>
        <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
        <div className="flex">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-black border border-yellow-800 rounded-l-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-yellow-500"
          />
       
       <button className="border border-yellow-800 text-yellow-800 px-6 py-3 rounded-r-lg hover:shadow-lg transition-shadow">
<FaArrowRight />
</button>

        </div>
      </div>

      {/* Services */}
      <div className="flex space-x-4 flex-wrap gap-3 lg:pt-16">
        <div className= "bg-black border border-yellow-800 rounded-xl p-4 w-60">
        <div className='flex gap-3'>
        <img src="smart.png" width="60"  style={{display:"inline-block"}} />
         <div>
          <div className="text-sm text-gray-400 mb-1">Smart Contract</div>
          <div className="text-2xl font-bold text-yellow-500">$149</div></div>
        </div>
        </div>
        <div className=" bg-black border border-yellow-800 rounded-xl p-4  w-60">
        <div className='flex gap-3'>
        <img src="analytics.png" width="60"  style={{display:"inline-block"}} />
<div>
          <div className="text-sm text-gray-400 mb-1">Analytics</div>
          <div className="text-2xl font-bold text-yellow-500">$199</div></div>
        </div> </div>
      </div>
    </div>
    );
  }