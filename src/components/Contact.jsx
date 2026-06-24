import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { personalInfo } from '../data/portfolio';
import { Mail, Phone, MapPin, GitFork, Link2, Send, CheckCircle, ArrowRight } from 'lucide-react';
import emailjs from 'emailjs-com';

const contactItems = [
  { icon: Mail, label: 'Email', value: 'akhileshmekarthi74@gmail.com', href: `mailto:${personalInfo.email}`, color: '#3b82f6' },
  { icon: Phone, label: 'Phone', value: '+91 7347234445', href: `tel:${personalInfo.phone}`, color: '#8b5cf6' },
  { icon: MapPin, label: 'Location', value: 'Hyderabad, India', href: '#', color: '#06b6d4' },
  { icon: GitFork, label: 'GitHub', value: 'github.com/Mekarthiakhi', href: personalInfo.github, color: '#10b981' },
  { icon: Link2, label: 'LinkedIn', value: 'linkedin.com/in/akhilesh-mekarthi', href: personalInfo.linkedin, color: '#f59e0b' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
};

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    setLoading(true);

    try {
      // Send to you using your exact EmailJS credentials
      await emailjs.send('akki143', 'template_p8jb95m', {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }, 'p993NoXWpBAKeYPxd');

      // Auto reply
      try {
        await emailjs.send('akki143', 'template_47nef5o', {
          from_name: form.name,
          from_email: form.email,
        }, 'p993NoXWpBAKeYPxd');
      } catch (err) {
        console.warn("Auto-reply failed", err);
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Main email failed", error);
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 w-full overflow-hidden bg-[#020617]"
    >
      {/* Background glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              04 / Comms Relay
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight mb-5">
              Establish <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400">Connection.</span>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 max-w-md leading-relaxed animate-pulse">
              Open to interesting engineering opportunities, consultations, and full-stack system architecture designs.
            </p>
          </motion.div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            
            {/* Left Column: Communications Info Links */}
            <div className="flex flex-col gap-4">
              <motion.div variants={itemVariants} className="mb-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2">
                  Quantum Comm Channels
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bypass the transmission queue by establishing contact through these direct visual frequencies.
                </p>
              </motion.div>

              {contactItems.map((item) => (
                <motion.a
                  key={item.label}
                  variants={itemVariants}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-white/5 bg-slate-950/20 backdrop-blur-md hover:scale-[1.01] transition-transform duration-200 shadow-md"
                  whileHover={{
                    borderColor: item.color + '50',
                    boxShadow: `0 0 20px ${item.color}0a`
                  }}
                >
                  <div 
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${item.color}12`,
                      border: `1px solid ${item.color}30`
                    }}
                  >
                    <item.icon size={18} color={item.color} />
                  </div>
                  
                  <div className="overflow-hidden">
                    <p className="text-[9px] uppercase font-mono tracking-widest text-slate-400 font-bold mb-1">
                      {item.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-white truncate max-w-[220px] sm:max-w-[320px]">
                      {item.value}
                    </p>
                  </div>
                  
                  <ArrowRight size={14} className="text-slate-500 ml-auto flex-shrink-0" />
                </motion.a>
              ))}
            </div>

            {/* Right Column: Communications Terminal Form */}
            <motion.div 
              variants={itemVariants} 
              className="zero-g-glass rounded-3xl p-6 sm:p-8 relative overflow-hidden neon-glow-violet w-full"
            >
              <span className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400" />
              
              {!submitted ? (
                <>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-2">
                    Transmission Terminal
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    Input your credentials to enqueue a message directly on my dashboard telemetry feed.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[9px] uppercase font-mono tracking-widest text-slate-400 font-bold mb-2">Name</label>
                        <input
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your identity"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-[9px] uppercase font-mono tracking-widest text-slate-400 font-bold mb-2">Email</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@frequency.com"
                          required
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase font-mono tracking-widest text-slate-400 font-bold mb-2">Subject</label>
                      <input
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Subject hash directive"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-mono"
                      />
                    </div>

                    <div>
                      <label className="block text-[9px] uppercase font-mono tracking-widest text-slate-400 font-bold mb-2">Message Payload</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Construct message payload here..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition-all font-mono resize-none min-h-[120px]"
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-full text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 text-white shadow-lg shadow-violet-950/30 cursor-pointer disabled:opacity-80"
                      style={{
                        background: "linear-gradient(135deg, #8b5cf6, #06b6d4)",
                      }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          <span>Transmitting...</span>
                        </>
                      ) : (
                        <>
                          <Send size={13} /> 
                          <span>Transmit Message</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-950/20"
                  >
                    <CheckCircle size={28} className="text-emerald-400" />
                  </motion.div>
                  
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3">
                    Transmission Success!
                  </h3>
                  
                  <p className="text-xs text-slate-400 leading-relaxed max-w-xs mx-auto mb-8">
                    Credentials authenticated. The message has been successfully broadcast to Akhilesh's feed. Target response latency is under 24 hours.
                  </p>
                  
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white transition-all cursor-pointer"
                  >
                    Transmit Another
                  </button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
