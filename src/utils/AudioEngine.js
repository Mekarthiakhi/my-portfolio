// Custom Web Audio API Synthesizer for Sci-Fi effects
import { Howl } from 'howler';

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isInitialized = false;
    this.bgOscillator = null;
    this.bgGain = null;
  }

  init() {
    if (this.isInitialized) return;
    this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    this.isInitialized = true;
    this.ctx.resume();

    // Start deep space background hum
    this.bgOscillator = this.ctx.createOscillator();
    this.bgGain = this.ctx.createGain();
    
    this.bgOscillator.type = 'sine';
    this.bgOscillator.frequency.value = 45; // Low frequency hum
    
    this.bgGain.gain.value = 0.0; // Start muted
    
    // Add some modulation for the "space" feel
    const lfo = this.ctx.createOscillator();
    lfo.type = 'sine';
    lfo.frequency.value = 0.1; // Slow modulation
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 5;
    lfo.connect(lfoGain);
    lfoGain.connect(this.bgOscillator.frequency);
    lfo.start();

    this.bgOscillator.connect(this.bgGain);
    this.bgGain.connect(this.ctx.destination);
    this.bgOscillator.start();

    // Fade in
    this.bgGain.gain.setTargetAtTime(0.08, this.ctx.currentTime, 2);
  }

  playHover() {
    if (!this.isInitialized) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(400, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.02, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  playClick() {
    if (!this.isInitialized) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.1);
    
    gain.gain.setValueAtTime(0.05, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.1);
  }

  playGravityShift() {
    if (!this.isInitialized) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(500, this.ctx.currentTime + 0.5);
    
    gain.gain.setValueAtTime(0.0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.05, this.ctx.currentTime + 0.25);
    gain.gain.linearRampToValueAtTime(0.0, this.ctx.currentTime + 0.5);
    
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.start();
    osc.stop(this.ctx.currentTime + 0.5);
  }

  speakIntro() {
    if (!('speechSynthesis' in window)) return;
    
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    const msg = new SpeechSynthesisUtterance("Welcome to the digital universe of Akhilesh. Systems online. Artificial gravity initialized.");
    
    // Voice loading can be async in some browsers, so we handle it dynamically
    const setVoiceAndSpeak = () => {
      const voices = window.speechSynthesis.getVoices();
      const targetVoice = voices.find(v => v.name.includes('Google UK English Male') || v.name.includes('David') || v.name.includes('Daniel') || v.name.includes('Male')) || voices[0];
      
      if (targetVoice) {
        msg.voice = targetVoice;
      }
      
      // Robotic settings
      msg.pitch = 0.4; // Low pitch for deep robotic feel
      msg.rate = 0.9;  // Slightly slower
      msg.volume = 0.8;
      
      window.speechSynthesis.speak(msg);
    };

    if (window.speechSynthesis.getVoices().length > 0) {
      setVoiceAndSpeak();
    } else {
      window.speechSynthesis.onvoiceschanged = setVoiceAndSpeak;
    }
  }
}

export const audio = new AudioEngine();

export const uiSound = new Howl({
  src: ['data:audio/mp3;base64,//NExAAAAANIAAAAAExBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq'], // Silent base64 placeholder
  volume: 0.1
});
