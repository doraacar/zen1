import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';

interface DemoWebDesignsProps {
  onBack: () => void;
}

const DemoWebDesigns: React.FC<DemoWebDesignsProps> = ({ onBack }) => {
  const demoSites = [
    {
      id: 1,
      title: 'BuildCraft Construction',
      url: 'https://preview--build-solid-site.lovable.app',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800',
      description: 'Premium construction company website featuring dynamic hero sections, project showcases, and integrated quote systems. Built with advanced automation for lead capture and client management.',
      category: 'Construction & Engineering',
      features: [
        'Dynamic construction equipment imagery',
        'Integrated quote request system',
        'Project portfolio with case studies',
        'Mobile-responsive design',
        'SEO-optimized content structure'
      ],
      stats: {
        loadTime: '1.2s',
        mobileScore: '98/100',
        conversionRate: '+45%'
      }
    },
    {
      id: 2,
      title: 'SmileCare Dental Clinic',
      url: 'https://preview--smile-serene-studio.lovable.app',
      image: 'https://images.pexels.com/photos/305568/pexels-photo-305568.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800',
      description: 'Modern dental practice website with appointment booking automation, patient portal integration, and service showcase. Features clean medical aesthetics with trust-building elements.',
      category: 'Healthcare & Medical',
      features: [
        'Automated appointment booking system',
        'Patient testimonials integration',
        'Service catalog with pricing',
        'HIPAA-compliant contact forms',
        'Professional medical design'
      ],
      stats: {
        loadTime: '0.9s',
        mobileScore: '96/100',
        conversionRate: '+62%'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <button
            onClick={onBack}
            className="flex items-center gap-3 text-cyan-400 hover:text-white mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wide">Back to Main</span>
          </button>
          
          <h1 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
            DEMO
            <span className="block text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
              WEB DESIGNS
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mb-8"></div>
          <p className="text-xl text-gray-400 max-w-3xl font-light">
            Explore our precision-engineered web solutions. Each design showcases advanced automation systems and optimal user experience.
          </p>
        </motion.div>

        {/* Demo Sites Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {demoSites.map((site, index) => (
            <motion.div
              key={site.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 digital-border overflow-hidden group hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {/* Category Badge */}
              <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-3 py-1 text-xs font-bold uppercase tracking-wide">
                {site.category}
              </div>

              {/* Site Preview */}
              <div className="relative h-96 bg-gray-800 overflow-hidden">
                <img
                  src={site.image}
                  alt={site.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <div className="text-white font-bold text-lg uppercase tracking-wide">LIVE PREVIEW</div>
                </div>
              </div>

              {/* Site Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide uppercase">
                  {site.title}
                </h3>
                <p className="text-gray-400 mb-6 font-light leading-relaxed">
                  {site.description}
                </p>
                
                {/* Features List */}
                <div className="mb-6">
                  <h4 className="text-cyan-400 font-bold mb-3 uppercase tracking-wide text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    {site.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 mr-3 neon-glow"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Performance Stats */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div className="bg-black/50 border border-gray-700 p-3 text-center digital-border">
                    <div className="text-lg font-black text-cyan-400 mb-1">{site.stats.loadTime}</div>
                    <div className="text-xs text-gray-400 uppercase">Load Time</div>
                  </div>
                  <div className="bg-black/50 border border-gray-700 p-3 text-center digital-border">
                    <div className="text-lg font-black text-cyan-400 mb-1">{site.stats.mobileScore}</div>
                    <div className="text-xs text-gray-400 uppercase">Mobile Score</div>
                  </div>
                  <div className="bg-black/50 border border-gray-700 p-3 text-center digital-border">
                    <div className="text-lg font-black text-cyan-400 mb-1">{site.stats.conversionRate}</div>
                    <div className="text-xs text-gray-400 uppercase">Conversion</div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-6 py-3 font-bold transition-all duration-300 neon-glow uppercase tracking-wide flex items-center gap-2"
                  >
                    VIEW LIVE SITE
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-6 py-3 font-bold transition-all duration-300 uppercase tracking-wide"
                  >
                    CASE STUDY
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gray-900/30 border border-gray-800 digital-border overflow-hidden relative"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 tech-grid opacity-10"></div>
          
          <div className="relative z-10 p-12 text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mx-auto mb-4 neon-glow">
                  <span className="text-2xl font-black text-black">⚡</span>
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">LIGHTNING FAST</h4>
                <p className="text-gray-400 text-sm">Sub-second loading times with optimized performance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mx-auto mb-4 neon-glow">
                  <span className="text-2xl font-black text-black">🎯</span>
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">CONVERSION FOCUSED</h4>
                <p className="text-gray-400 text-sm">Every element designed to maximize user engagement</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mx-auto mb-4 neon-glow">
                  <span className="text-2xl font-black text-black">🔧</span>
                </div>
                <h4 className="text-white font-bold mb-2 uppercase tracking-wide">FULLY AUTOMATED</h4>
                <p className="text-gray-400 text-sm">Intelligent systems that work 24/7 without intervention</p>
              </div>
            </div>

          <h3 className="text-4xl font-black text-white mb-6 tracking-tight">
            READY TO DEPLOY YOUR SYSTEM?
          </h3>
          <p className="text-xl text-gray-400 mb-10 font-light max-w-3xl mx-auto">
            These examples showcase our precision-engineered approach. Your custom solution will be built with the same attention to performance, automation, and conversion optimization.
          </p>
          
          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <div className="bg-black/50 border border-gray-700 p-4 text-center digital-border">
              <div className="text-2xl font-black text-cyan-400 mb-2">50+</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Projects Deployed</div>
            </div>
            <div className="bg-black/50 border border-gray-700 p-4 text-center digital-border">
              <div className="text-2xl font-black text-cyan-400 mb-2">99.9%</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Uptime Guarantee</div>
            </div>
            <div className="bg-black/50 border border-gray-700 p-4 text-center digital-border">
              <div className="text-2xl font-black text-cyan-400 mb-2">24/7</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">System Monitoring</div>
            </div>
            <div className="bg-black/50 border border-gray-700 p-4 text-center digital-border">
              <div className="text-2xl font-black text-cyan-400 mb-2">48H</div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">Deployment Time</div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onBack();
              setTimeout(() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className="bg-gradient-to-r from-cyan-400 to-purple-500 text-black px-12 py-4 font-bold text-lg transition-all duration-300 neon-glow uppercase tracking-wide"
          >
            START YOUR PROJECT
          </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DemoWebDesigns;