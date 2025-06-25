export default function Footer() {
    return (
      <footer className="bg-gray-900 py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold text-yellow-400 mb-4 md:mb-0">GoldPulseX</div>
          <div className="flex space-x-6">
            <span className="text-gray-400">Smart Contract</span>
            <span className="text-gray-400">Analytics</span>
          </div>
        </div>
      </footer>
    );
  }