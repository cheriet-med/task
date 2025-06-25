import { FaAngleRight } from "react-icons/fa6";

export default function FAQ() {
 
    return (
      <div className="mb-16 ">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                '? What is GoldPulseX?',
                'How can I stake BTC to ETH?',
                'Is there a fee for staking?'
              ].map((question, index) => (
                <button
                  key={index}
                  className="bg-black border border-yellow-800 rounded-lg p-4 text-left hover:border-yellow-500 transition-colors group"
                >
                  <div className="flex items-center justify-between ">
                    <span className="text-gray-300 group-hover:text-white">{question}</span>
                    <FaAngleRight/>
                  </div>
                </button>
              ))}
            </div>
          </div>
    );
  }