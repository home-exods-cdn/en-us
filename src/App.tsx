import React from 'react';
import { Wallet, Shield, ArrowUpRight, Globe, Zap, Layers, ChevronRight, Twitter, Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0d0e12] text-white">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#5470ff] to-[#31c5f0] bg-clip-text text-transparent">
                Exodus Web3 Wallet: Your Gateway to the Decentralized Future
              </h1>
              <p className="text-lg mb-8 text-gray-300">
                Secure, manage, and exchange your cryptocurrency assets with the most beautiful and user-friendly Web3 wallet in the ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-3 bg-gradient-to-r from-[#5470ff] to-[#31c5f0] rounded-lg font-medium flex items-center gap-2 hover:opacity-90 transition-opacity">
                  Download Now <ArrowUpRight size={18} />
                </button>
                <button className="px-6 py-3 bg-[#1e2028] rounded-lg font-medium flex items-center gap-2 hover:bg-[#2a2c37] transition-colors">
                  Learn More <ChevronRight size={18} />
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Exodus Web3 Wallet Interface" 
                className="rounded-xl shadow-2xl shadow-[#5470ff]/20"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-8 bg-[#1e2028]">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose <span className="bg-gradient-to-r from-[#5470ff] to-[#31c5f0] bg-clip-text text-transparent">Exodus Web3 Wallet</span></h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#0d0e12] p-8 rounded-xl">
                <div className="w-12 h-12 bg-[#5470ff]/20 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="text-[#5470ff]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Uncompromising Security</h3>
                <p className="text-gray-400">Your private keys never leave your device. Exodus employs industry-leading encryption and security measures to keep your assets safe.</p>
              </div>
              
              <div className="bg-[#0d0e12] p-8 rounded-xl">
                <div className="w-12 h-12 bg-[#31c5f0]/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="text-[#31c5f0]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Web3 Integration</h3>
                <p className="text-gray-400">Seamlessly connect to decentralized applications, NFT marketplaces, and DeFi protocols with our intuitive Web3 browser.</p>
              </div>
              
              <div className="bg-[#0d0e12] p-8 rounded-xl">
                <div className="w-12 h-12 bg-[#5470ff]/20 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-[#5470ff]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Lightning Fast Swaps</h3>
                <p className="text-gray-400">Exchange cryptocurrencies directly within your wallet with competitive rates and minimal fees.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <article className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold mb-6">Exploring the Power of Exodus Web3 Wallet</h2>
            
            <p>
              The <strong>Exodus Web3 wallet</strong> stands at the forefront of cryptocurrency management solutions, offering users a seamless bridge between traditional finance and the decentralized web. As blockchain technology continues to evolve, Exodus has positioned itself as a leading wallet provider that combines security, functionality, and aesthetic appeal in one comprehensive package.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Key Features of Exodus Web3 Wallet</h3>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong>Multi-Asset Support:</strong> Exodus Web3 wallet supports over 150 cryptocurrencies, allowing users to manage diverse portfolios from a single interface.</li>
              <li><strong>Built-in Exchange:</strong> The integrated swap functionality enables users to exchange cryptocurrencies without leaving the wallet environment.</li>
              <li><strong>dApp Browser:</strong> Access decentralized applications directly through the Exodus Web3 wallet interface.</li>
              <li><strong>NFT Gallery:</strong> View, manage, and showcase your NFT collections with visual representations.</li>
              <li><strong>Staking Capabilities:</strong> Earn passive income by staking supported cryptocurrencies directly within the wallet.</li>
              <li><strong>Cross-Platform Synchronization:</strong> Seamlessly transition between desktop and mobile versions with synchronized wallets.</li>
            </ul>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Security Measures in Exodus Web3 Wallet</h3>
            
            <p>
              Security remains a paramount concern for cryptocurrency users, and the <strong>Exodus Web3 wallet</strong> addresses this through multiple layers of protection. The wallet employs a non-custodial model, meaning users maintain complete control over their private keys. This approach aligns with the core philosophy of Web3: decentralization and user autonomy.
            </p>
            
            <p>
              Additionally, Exodus implements advanced encryption protocols to safeguard user data and assets. The wallet's security architecture includes:
            </p>
            
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Password protection and biometric authentication</li>
              <li>Automatic locking mechanisms</li>
              <li>Secure backup and recovery options</li>
              <li>Regular security audits and updates</li>
            </ul>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">The User Experience Advantage</h3>
            
            <p>
              What truly sets the <strong>Exodus Web3 wallet</strong> apart is its commitment to user experience. Unlike many cryptocurrency wallets that prioritize functionality over design, Exodus delivers both. The intuitive interface makes complex blockchain interactions accessible to newcomers while providing the depth and customization that experienced users demand.
            </p>
            
            <p>
              The wallet's responsive design adapts seamlessly across devices, ensuring consistent functionality whether accessed via desktop, tablet, or smartphone. This cross-platform flexibility makes <strong>Exodus Web3 wallet</strong> an ideal choice for users who manage their digital assets across multiple devices.
            </p>
            
            <h3 className="text-2xl font-bold mt-8 mb-4">Conclusion: Why Exodus Web3 Wallet Matters</h3>
            
            <p>
              As Web3 technology continues to reshape our digital landscape, tools like the <strong>Exodus Web3 wallet</strong> play a crucial role in mainstream adoption. By combining robust security features with an accessible user interface, Exodus removes barriers to entry for cryptocurrency newcomers while satisfying the requirements of blockchain veterans.
            </p>
            
            <p>
              Whether you're looking to manage a diverse cryptocurrency portfolio, explore decentralized applications, or simply secure your digital assets, the <strong>Exodus Web3 wallet</strong> offers a comprehensive solution designed for the future of finance.
            </p>
          </article>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-[#5470ff] to-[#31c5f0]">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Web3 Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Download the Exodus Web3 wallet today and experience the perfect blend of security, functionality, and design.</p>
            <button className="px-8 py-4 bg-white text-[#5470ff] rounded-lg font-bold text-lg hover:bg-opacity-90 transition-opacity">
              Download Exodus Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;