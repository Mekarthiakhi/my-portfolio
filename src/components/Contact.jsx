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
  { icon: Link2, label: 'LinkedIn', value: 'www.linkedin.com/in/akhilesh-mekarthi-a62501227/', href: personalInfo.linkedin, color: '#f59e0b' },
];

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
  // Send to you
  await emailjs.send('akki143','template_p8jb95m',{
    from_name: form.name,
    from_email: form.email,
    subject: form.subject,
    message: form.message,
  }, 'p993NoXWpBAKeYPxd');

  // Auto reply (safe)
  try {
    await emailjs.send('akki143','template_47nef5o',{
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 18px',
    borderRadius: 12,
    background: 'var(--glass)',
    border: '1px solid var(--glass-border)',
    color: 'var(--text-primary)',
    fontSize: '0.9rem',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'clamp(80px, 10vw, 120px) 24px',
        background: 'var(--bg-secondary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', top: -100, right: -100,
        width: 600, height: 600, borderRadius: '50%',
        background: 'rgba(139, 92, 246, 0.06)', filter: 'blur(100px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Header */}
          <motion.div variants={itemVariants} style={{ marginBottom: 64, textAlign: 'center' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}><span>●</span> Get In Touch</div>
            <h2 className="section-title" style={{ textAlign: 'center' }}>
              Let's build something <span className="gradient-text">great</span>
            </h2>
            <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
              Open to new opportunities, collaborations, and interesting engineering challenges.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40 }}>
            {/* Left - Contact info */}
            <div>
              <motion.div variants={itemVariants} style={{ marginBottom: 24 }}>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, fontSize: '1.1rem' }}>
                  Contact Info
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Prefer a direct line? Reach out through any of these channels.
                </p>
              </motion.div>

              {contactItems.map((item, i) => (
                <motion.a
                  key={item.label}
                  variants={itemVariants}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    padding: '16px 20px', borderRadius: 14,
                    background: 'var(--glass)', border: '1px solid var(--glass-border)',
                    marginBottom: 12, textDecoration: 'none',
                    transition: 'all 0.2s',
                    cursor: 'pointer',
                  }}
                  whileHover={{
                    borderColor: item.color + '50',
                    x: 4,
                    transition: { duration: 0.15 }
                  }}
                >
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                    background: `${item.color}18`, border: `1px solid ${item.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <item.icon size={18} color={item.color} />
                  </div>
                  <div style={{ overflow: 'hidden' }}>
                    <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'Syne, sans-serif', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {item.value}
                    </p>
                  </div>
                  <ArrowRight size={14} color="var(--text-secondary)" style={{ marginLeft: 'auto', flexShrink: 0 }} />
                </motion.a>
              ))}
            </div>

            {/* Right - Contact form */}
            <motion.div variants={itemVariants} className="glass-card" style={{ padding: '36px' }}>
              {!submitted ? (
                <>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6, fontSize: '1.1rem' }}>
                    Send a Message
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: 28 }}>
                    I'll get back to you within 24 hours.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Name</label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#3b82f6'}
                          onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                        />
                      </div>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email</label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          style={inputStyle}
                          onFocus={e => e.target.style.borderColor = '#3b82f6'}
                          onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Subject</label>
                      <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        style={inputStyle}
                        onFocus={e => e.target.style.borderColor = '#3b82f6'}
                        onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                      />
                    </div>

                    <div style={{ marginBottom: 24 }}>
                      <label style={{ display: 'block', fontSize: '0.78rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Message</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or opportunity..."
                        required
                        rows={5}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                        onFocus={e => e.target.style.borderColor = '#3b82f6'}
                        onBlur={e => e.target.style.borderColor = 'var(--glass-border)'}
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="btn-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.8 : 1 }}
                    >
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            style={{ width: 16, height: 16, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%' }}
                          />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={16} /> Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '40px 20px' }}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    style={{
                      width: 72, height: 72, borderRadius: '50%',
                      background: 'rgba(34, 197, 94, 0.15)',
                      border: '2px solid rgba(34, 197, 94, 0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 24px',
                    }}
                  >
                    <CheckCircle size={32} color="#22c55e" />
                  </motion.div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: 12 }}>
                    Message Sent!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Thanks for reaching out, {form.name}. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                    className="btn-secondary"
                    style={{ marginTop: 24 }}
                  >
                    Send Another
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
