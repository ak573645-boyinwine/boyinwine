import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  Zap, 
  ShieldCheck, 
  Search, 
  Menu, 
  X, 
  Play, 
  DollarSign, 
  ArrowRight, 
  CheckCircle,
  MessageSquare,
  Briefcase,
  Palette,
  ShoppingBag, 
  User,        
  Ticket       
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- MOCK DATA FOR PORTAL ---
const MASTERS_DATA = [
  {
    id: 1,
    name: "Anya Sharma",
    title: "Architect of Visual Narratives",
    category: "Cinematography",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=500&auto=format&fit=crop",
    workSample: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=500&auto=format&fit=crop",
    rate: "₹50,000 / day",
    description: "Specializing in high-concept visuals and compelling narratives for luxury brands and feature documentaries."
  },
  {
    id: 2,
    name: "Akash 'Rhythm' Singh",
    title: "Global Soundscapes",
    category: "Music & Audio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
    workSample: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=500&auto=format&fit=crop",
    rate: "₹1.5L / project",
    description: "Fusion drum band artist creating energetic performances and unique soundscapes for immersive events."
  },
  {
    id: 3,
    name: "Radha Sharma",
    title: "Immersive Visions",
    category: "Visual Art",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
    workSample: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=500&auto=format&fit=crop",
    rate: "₹300 / sq. ft.",
    description: "Contemporary artist blending traditional motifs with futuristic neon aesthetics for large-scale murals."
  },
  {
    id: 4,
    name: "Devraj Sikka",
    title: "Sustainable Futures",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop",
    workSample: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500&auto=format&fit=crop",
    rate: "₹2.0L / consult",
    description: "Civil engineer and explorer focused on sustainable urban development and eco-friendly architectural systems."
  },
  {
    id: 5,
    name: "Ji-Hoon Lee",
    title: "AI Systems Architect",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    workSample: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=500&auto=format&fit=crop",
    rate: "₹5,000 / hour",
    description: "Building the nervous systems of tomorrow. Expert in neural networks and autonomous robotics."
  }
];

// --- COMPONENTS ---

// 1. SOLID ATTITUDE LOGO (Redesigned for Anatomical/Solving Look)
const SynapseLogo = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className}>
    {/* Outer Ring - Solid & Thick */}
    <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="6" />
    
    {/* Inner Mechanics - Anatomical Lens Structure */}
    <g transform="translate(50, 50)">
      {/* Central Core */}
      <circle r="12" fill="currentColor" />
      <circle r="6" fill="#020617" /> {/* The pupil hole */}
      
      {/* Sharp Blades representing "Solving/Cutting Through" */}
      <path d="M 0 -14 L 12 -7 L 0 14 L -12 -7 Z" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M 0 14 L 12 7 L 0 -14 L -12 7 Z" fill="none" stroke="currentColor" strokeWidth="3" transform="rotate(90)" />
      
      {/* Precision Marks */}
      <rect x="-2" y="-48" width="4" height="8" fill="currentColor" />
      <rect x="-2" y="40" width="4" height="8" fill="currentColor" />
      <rect x="-48" y="-2" width="8" height="4" fill="currentColor" />
      <rect x="40" y="-2" width="8" height="4" fill="currentColor" />
    </g>
  </svg>
);

// 2. NAVIGATION BAR with MERGED FEATURES
const NavBar = ({ setView, openCart, openLogin, openTicket }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* LEFT: DISCO LOGO BUTTON */}
          <button 
            className="group relative flex items-center gap-3 cursor-pointer outline-none" 
            onClick={() => setView('home')}
          >
            {/* Disco Effect Container */}
            <div className="relative w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-slate-900 border-2 border-transparent group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(0,255,200,0.3)]">
              {/* Animated Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-cyan-500 to-emerald-400 animate-spin-slow opacity-90 group-hover:opacity-100"></div>
              {/* Inner Circle to hold Logo */}
              <div className="absolute inset-1 bg-slate-950 rounded-full flex items-center justify-center z-10">
                 <SynapseLogo className="w-8 h-8 text-white group-hover:text-[#00ffc8] transition-colors" />
              </div>
            </div>
            
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-1">
                <span className="text-white font-black text-xl tracking-widest group-hover:text-[#00ffc8] transition-colors uppercase" style={{ fontFamily: 'Impact, sans-serif' }}>BOYINWIN</span>
                <Eye className="w-5 h-5 text-[#00ffc8]" strokeWidth={3} />
              </div>
              <span className="text-[10px] text-slate-400 tracking-wider hidden sm:block uppercase font-bold">Synapse Exchange</span>
            </div>
          </button>

          {/* CENTER: Main Nav + GLITRIOUS TICKET BUTTON */}
          <div className="hidden lg:flex items-center gap-6">
            <button onClick={() => setView('portal')} className="text-slate-300 hover:text-[#00ffc8] text-sm font-bold tracking-wide transition-colors">MASTERS</button>
            <button onClick={() => setView('client-form')} className="text-slate-300 hover:text-[#00ffc8] text-sm font-bold tracking-wide transition-colors">CHALLENGES</button>
            <button onClick={() => setView('consultation')} className="text-slate-300 hover:text-[#00ffc8] text-sm font-bold tracking-wide transition-colors">CONSULTATION</button>
            
            {/* CATCHY GLITRIOUS TICKET BUTTON */}
            <button 
              onClick={openTicket}
              className="relative overflow-hidden flex items-center gap-2 bg-slate-950 border border-[#ffd700] text-[#ffd700] px-5 py-2 rounded-md font-black text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(255,215,0,0.4)] hover:shadow-[0_0_25px_rgba(255,215,0,0.8)] hover:bg-[#ffd700] hover:text-black transition-all transform hover:-translate-y-1 active:translate-y-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] animate-[shimmer_2s_infinite]"></span>
              <Ticket className="w-4 h-4" />
              DAILY TICKET
            </button>
          </div>

          {/* RIGHT: E-Commerce & Admin Actions */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="text-slate-300 hover:text-[#00ffc8]">
              <Search className="w-5 h-5" />
            </button>

            <button onClick={openCart} className="relative text-slate-300 hover:text-[#00ffc8] transition-colors">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>

            <button onClick={openLogin} className="flex items-center gap-2 text-slate-300 hover:text-white border border-slate-700 hover:border-[#00ffc8] px-3 py-1.5 rounded-lg transition-all">
              <User className="w-5 h-5" />
              <span className="hidden md:block text-sm font-medium">Login</span>
            </button>

            <div className="lg:hidden text-slate-300">
              <Menu className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// 3. HERO SECTION
const Hero = ({ setView, openTicket }) => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-20">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
    
    <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block border border-[#00ffc8] rounded-full px-4 py-1 mb-6 bg-[#00ffc8]/10 backdrop-blur-sm">
          <span className="text-[#00ffc8] text-sm font-bold tracking-wider uppercase">The Vetted Exchange of Mastery</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
          TOP TALENT. 100% EARNINGS.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffc8] to-blue-500">THIS IS THE SMART GAME.</span>
        </h1>
        <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          Stop bidding. Start winning. The premium portal for the top 1% Engineers, Artists, and Explorers.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-12 border-t border-b border-slate-800 py-6">
          <div className="flex items-center gap-2 text-slate-300">
            <DollarSign className="w-5 h-5 text-[#00ffc8]" />
            <span className="font-semibold">Zero Commission</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Zap className="w-5 h-5 text-[#00ffc8]" />
            <span className="font-semibold">Immediate Pay (24h)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Eye className="w-5 h-5 text-[#00ffc8]" />
            <span className="font-semibold">[👁️] Vetted Standard</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <button 
            onClick={() => setView('client-form')}
            className="group relative overflow-hidden bg-[#00ffc8] text-slate-950 px-8 py-4 rounded-lg font-black text-lg w-full md:w-64 hover:shadow-[0_0_30px_rgba(0,255,200,0.4)] transition-all"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <div className="relative flex items-center justify-center gap-2">
              <Briefcase className="w-5 h-5" />
              POST A CHALLENGE
            </div>
          </button>
          
          <button 
            onClick={() => setView('artist-form')}
            className="group relative overflow-hidden border-2 border-slate-700 text-white px-8 py-4 rounded-lg font-black text-lg w-full md:w-64 hover:border-[#00ffc8] hover:text-[#00ffc8] transition-all"
          >
            <div className="relative flex items-center justify-center gap-2">
              <Palette className="w-5 h-5" />
              LEASE YOUR SPACE
            </div>
          </button>
        </div>

        <div className="mt-8">
           <button onClick={openTicket} className="text-sm text-slate-400 hover:text-white underline underline-offset-4 decoration-[#00ffc8] transition-colors">
             Enter the Digital Museum (Daily Pass Available)
           </button>
        </div>

      </motion.div>
    </div>
  </div>
);

// 4. PORTAL VIEW
const PortalView = ({ setMaster }) => {
  const categories = ["Curated for Sight: New & Noteworthy", "The Masterwork Gallery: For Your Space", "Innovate & Build"];
  
  return (
    <div className="bg-slate-950 min-h-screen pt-24 pb-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Discover Masters</h2>
        <p className="text-slate-400">Select a Series to hire your next visionary.</p>
      </div>

      {categories.map((cat, index) => (
        <div key={index} className="mb-12">
          <h3 className="text-xl font-bold text-[#00ffc8] mb-4 tracking-wide uppercase">{cat}</h3>
          <div className="flex overflow-x-auto gap-6 pb-8 scrollbar-hide snap-x">
            {MASTERS_DATA.map((master) => (
              <motion.div 
                key={master.id}
                whileHover={{ scale: 1.05 }}
                className="flex-none w-72 bg-slate-900 rounded-lg overflow-hidden cursor-pointer border border-slate-800 hover:border-[#00ffc8] transition-colors snap-start"
                onClick={() => setMaster(master)}
              >
                <div className="relative h-96">
                  <img src={master.image} alt={master.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 p-4 w-full">
                    <p className="text-[#00ffc8] text-xs font-bold mb-1 uppercase tracking-wider">{master.category}</p>
                    <h4 className="text-white font-bold text-xl leading-none mb-1">{master.name}</h4>
                    <p className="text-slate-400 text-sm truncate">{master.title}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur text-white text-xs px-2 py-1 rounded border border-slate-700">
                    TOP 1%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// 5. MASTER DETAIL MODAL
const MasterDetail = ({ master, onClose, onHire }) => {
  if (!master) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm overflow-y-auto">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-slate-800 relative"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full text-white hover:text-[#00ffc8]">
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Visual Side */}
          <div className="h-64 lg:h-auto relative">
            <img src={master.image} alt={master.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent lg:bg-gradient-to-r"></div>
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-2">{master.name.toUpperCase()}</h2>
              <p className="text-[#00ffc8] text-xl font-medium">{master.title}</p>
            </div>
          </div>

          {/* Info Side */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-2">The Masterpiece Portfolio</h3>
              <div className="aspect-video rounded-lg overflow-hidden border border-slate-700 mb-4 relative group">
                <img src={master.workSample} alt="Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <Play className="w-12 h-12 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">{master.description}</p>
            </div>

            <div className="bg-slate-950 p-6 rounded-lg border border-slate-800 mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-400">Standard Rate</span>
                <span className="text-white font-bold text-xl">{master.rate}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Availability</span>
                <span className="text-[#00ffc8] font-medium flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#00ffc8] rounded-full animate-pulse"></span> Available Now
                </span>
              </div>
            </div>

            <button 
              onClick={() => onHire(master)}
              className="w-full bg-[#00ffc8] text-slate-950 py-4 rounded-lg font-black text-lg hover:bg-[#00cc9f] transition-colors flex items-center justify-center gap-2"
            >
              HIRE FOR A CHALLENGE <ArrowRight className="w-5 h-5" />
            </button>
            <p className="text-center text-slate-500 text-xs mt-4">
              Guaranteed by Boyinwin [👁️] Escrow System. 20% Curation Fee applies.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// 6. FORMS & OVERLAYS
const FormLayout = ({ title, subtitle, children, onClose }) => (
  <div className="min-h-screen bg-slate-950 pt-28 pb-20 px-4 flex justify-center items-start">
    <div className="w-full max-w-2xl bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
      <div className="flex justify-between items-start mb-8">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">{title}</h2>
          <p className="text-[#00ffc8]">{subtitle}</p>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>
      </div>
      {children}
    </div>
  </div>
);

const ClientForm = ({ onClose }) => (
  <FormLayout title="POST A CHALLENGE" subtitle="Speed: We match you with 3 Curated Masters in 24 hours." onClose={onClose}>
    <form className="space-y-6">
      <div>
        <label className="block text-slate-400 text-sm font-bold mb-2">Project Title</label>
        <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white focus:border-[#00ffc8] outline-none" placeholder="e.g., Luxury Villa Mural or SaaS AI Integration" />
      </div>
      <div>
        <label className="block text-slate-400 text-sm font-bold mb-2">Estimated Budget (INR)</label>
        <select className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white focus:border-[#00ffc8] outline-none">
          <option>₹25,000 - ₹50,000</option>
          <option>₹50,000 - ₹1 Lakh</option>
          <option>₹1 Lakh - ₹5 Lakh</option>
          <option>₹5 Lakh+</option>
        </select>
      </div>
      <div>
        <label className="block text-slate-400 text-sm font-bold mb-2">Challenge Description</label>
        <textarea className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white focus:border-[#00ffc8] outline-none h-32" placeholder="Describe your vision, deadline, and specific requirements..."></textarea>
      </div>
      <div className="bg-[#00ffc8]/10 border border-[#00ffc8] p-4 rounded-lg flex gap-4 items-start">
        <ShieldCheck className="w-6 h-6 text-[#00ffc8] flex-shrink-0" />
        <p className="text-slate-300 text-sm">
          <strong>Escrow Guarantee:</strong> Your funds are held securely. The Master is paid only after you accept the final delivery. A 20% Curation Fee is included in your final quote.
        </p>
      </div>
      <button type="button" className="w-full bg-[#00ffc8] text-slate-950 py-4 rounded-lg font-black text-lg hover:bg-[#00cc9f] transition-colors">
        INITIATE CHALLENGE
      </button>
    </form>
  </FormLayout>
);

const ArtistForm = ({ onClose }) => (
  <FormLayout title="LEASE YOUR SPACE" subtitle="Join the Top 1%. Lease your Digital Cinema space." onClose={onClose}>
    <form className="space-y-6">
      <div>
        <label className="block text-slate-400 text-sm font-bold mb-2">Full Name & Domain</label>
        <input type="text" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white focus:border-[#00ffc8] outline-none" placeholder="e.g., Abhishek Dhiman (Mural Art)" />
      </div>
      <div>
        <label className="block text-slate-400 text-sm font-bold mb-2">Portfolio Link (Instagram/Behance)</label>
        <input type="url" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-4 text-white focus:border-[#00ffc8] outline-none" placeholder="https://..." />
      </div>
      <div>
        <label className="block text-slate-400 text-sm font-bold mb-2">Select Lease Plan</label>
        <div className="grid grid-cols-2 gap-4">
          <div className="border border-[#00ffc8] bg-[#00ffc8]/10 p-4 rounded-lg cursor-pointer">
            <div className="font-bold text-white">3 Months</div>
            <div className="text-[#00ffc8]">₹12,000</div>
          </div>
          <div className="border border-slate-700 bg-slate-950 p-4 rounded-lg cursor-pointer hover:border-slate-500">
            <div className="font-bold text-white">6 Months</div>
            <div className="text-slate-400">₹22,000</div>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-3">
        <input type="checkbox" className="mt-1" />
        <p className="text-slate-400 text-sm">I confirm I seek professional work {'>'} ₹50k. I understand Boyinwin takes <strong>0% Commission</strong> on my earnings.</p>
      </div>
      <button type="button" className="w-full bg-white text-slate-950 py-4 rounded-lg font-black text-lg hover:bg-slate-200 transition-colors">
        SUBMIT FOR VETTING
      </button>
    </form>
  </FormLayout>
);

const ConsultationPage = ({ onClose }) => (
  <FormLayout title="PREMIUM CONSULTATION" subtitle="Boyinwin Entertainment Side Support" onClose={onClose}>
    <div className="space-y-6 text-center">
      <div className="flex justify-center">
        <div className="p-4 bg-[#00ffc8]/20 rounded-full">
          <MessageSquare className="w-12 h-12 text-[#00ffc8]" />
        </div>
      </div>
      <p className="text-slate-300">
        Need a tailored strategy for your Event, SaaS Product, or Art Exhibition?
        Our internal team provides dedicated consultation to architect your vision before hiring a Master.
      </p>
      <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
        <h3 className="text-white font-bold mb-2">Consultation Fee</h3>
        <p className="text-3xl font-black text-[#00ffc8]">₹5,000 <span className="text-sm text-slate-400 font-normal">/ session</span></p>
        <ul className="text-left text-slate-400 text-sm mt-4 space-y-2">
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#00ffc8]"/> Project Scope Analysis</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#00ffc8]"/> Budget Optimization</li>
          <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-[#00ffc8]"/> Master Recommendations</li>
        </ul>
      </div>
      <button className="w-full bg-[#00ffc8] text-slate-950 py-3 rounded-lg font-bold hover:bg-[#00cc9f]">
        BOOK CONSULTATION CALL
      </button>
    </div>
  </FormLayout>
);

const CartDrawer = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <>
        <div className="fixed inset-0 bg-black/60 z-[70] backdrop-blur-sm" onClick={onClose}></div>
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          className="fixed right-0 top-0 h-full w-full max-w-md bg-slate-900 border-l border-slate-800 z-[80] shadow-2xl p-6"
        >
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <ShoppingBag className="text-[#00ffc8]" /> YOUR BASKET
            </h2>
            <button onClick={onClose}><X className="text-slate-400 hover:text-white" /></button>
          </div>
          <div className="flex flex-col h-full justify-center items-center text-slate-500 pb-20">
            <p>Your basket is empty.</p>
            <p className="text-sm mt-2">Add a Master or Art Piece to begin.</p>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

const LoginModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-slate-900 w-full max-w-md p-8 rounded-2xl border border-slate-700 shadow-2xl relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X /></button>
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-[#00ffc8]/10 rounded-full mb-4">
              <User className="w-8 h-8 text-[#00ffc8]" />
            </div>
            <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
            <p className="text-slate-400 text-sm">Admin & User Portal</p>
          </div>
          <form className="space-y-4">
            <input type="email" placeholder="Email Address" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-[#00ffc8] outline-none" />
            <input type="password" placeholder="Password" className="w-full bg-slate-950 border border-slate-700 rounded-lg p-3 text-white focus:border-[#00ffc8] outline-none" />
            <button className="w-full bg-[#00ffc8] text-slate-900 font-bold py-3 rounded-lg hover:bg-[#00cc9f]">LOGIN</button>
          </form>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const TicketModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          className="bg-gradient-to-br from-slate-900 to-slate-800 w-full max-w-lg p-1 rounded-2xl shadow-[0_0_50px_rgba(255,215,0,0.2)]"
        >
          <div className="bg-slate-950 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-bl-full"></div>
            <div className="absolute -left-4 top-1/2 w-8 h-8 bg-black rounded-full transform -translate-y-1/2"></div>
            <div className="absolute -right-4 top-1/2 w-8 h-8 bg-black rounded-full transform -translate-y-1/2"></div>
            
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-white"><X /></button>
            
            <div className="text-center mb-6">
              <h2 className="text-xs font-bold text-yellow-500 tracking-[0.2em] uppercase mb-2">Boyinwin Digital Museum</h2>
              <h1 className="text-4xl font-black text-white mb-2">DAILY ENTRY PASS</h1>
              <p className="text-slate-400">Unlock full access to the Digital Cinema archives for 24 hours.</p>
            </div>

            <div className="border-y-2 border-dashed border-slate-800 py-6 my-6 flex justify-between items-center">
              <div className="text-left">
                <p className="text-slate-500 text-xs uppercase">Valid For</p>
                <p className="text-white font-bold">24 HOURS</p>
              </div>
              <div className="text-right">
                <p className="text-slate-500 text-xs uppercase">Price</p>
                <p className="text-3xl font-black text-[#00ffc8]">₹499</p>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-black py-4 rounded-lg hover:scale-[1.02] transition-transform shadow-lg flex items-center justify-center gap-2">
              <Ticket className="w-5 h-5" /> PURCHASE TICKET
            </button>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

// --- MAIN APP COMPONENT ---

const App = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedMaster, setSelectedMaster] = useState(null);
  
  const [isCartOpen, setCartOpen] = useState(false);
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isTicketOpen, setTicketOpen] = useState(false);

  const handleMasterClick = (master) => setSelectedMaster(master);
  const handleCloseModal = () => setSelectedMaster(null);
  const handleHire = (master) => {
    setSelectedMaster(null);
    setCurrentView('client-form');
  };

  return (
    <div className="bg-slate-950 min-h-screen font-sans text-slate-200 selection:bg-[#00ffc8] selection:text-slate-950">
      <NavBar 
        setView={setCurrentView} 
        openCart={() => setCartOpen(true)}
        openLogin={() => setLoginOpen(true)}
        openTicket={() => setTicketOpen(true)}
      />

      {/* Overlays */}
      <CartDrawer isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <TicketModal isOpen={isTicketOpen} onClose={() => setTicketOpen(false)} />

      <main>
        {currentView === 'home' && <Hero setView={setCurrentView} openTicket={() => setTicketOpen(true)} />}
        
        {currentView === 'portal' && (
          <PortalView setMaster={handleMasterClick} />
        )}

        {currentView === 'client-form' && (
          <ClientForm onClose={() => setCurrentView('home')} />
        )}

        {currentView === 'artist-form' && (
          <ArtistForm onClose={() => setCurrentView('home')} />
        )}

        {currentView === 'consultation' && (
          <ConsultationPage onClose={() => setCurrentView('home')} />
        )}
      </main>

      <AnimatePresence>
        {selectedMaster && (
          <MasterDetail 
            master={selectedMaster} 
            onClose={handleCloseModal} 
            onHire={handleHire} 
          />
        )}
      </AnimatePresence>

      <footer className="bg-slate-900 border-t border-slate-800 py-12 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <SynapseLogo className="w-8 h-8 opacity-50" />
            <span className="font-bold text-slate-500">BOYINWIN [👁️]</span>
          </div>
          <p className="text-slate-500 text-sm text-center md:text-right">
            GUARANTEED PROTECTION: Every transaction is protected by the BOYINWIN [👁️] Escrow System.<br/>
            We guarantee Master quality and financial security.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-[#00ffc8]">Terms of Service</a>
            <a href="#" className="hover:text-[#00ffc8]">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
