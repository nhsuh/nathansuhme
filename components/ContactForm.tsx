'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    
    // You can integrate with Formspree, Netlify Forms, or your own API here
    // For now, just simulate a successful submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSent(true);
    setIsSubmitting(false);
  }
  
  if (sent) return (
    <div className="text-center py-8">
      <p className="text-primary text-xl font-heading mb-2">Thanks for reaching out! 🎉</p>
      <p className="font-body opacity-75">I'll get back to you soon.</p>
    </div>
  );
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="email" className="block font-heading text-sm mb-1">Email</label>
        <input 
          id="email"
          name="email" 
          type="email" 
          required 
          placeholder="your@email.com" 
          className="w-full border border-neutral-300 dark:border-neutral-600 rounded-lg p-3 bg-neutral-50 dark:bg-neutral-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors" 
        />
      </div>
      <div>
        <label htmlFor="message" className="block font-heading text-sm mb-1">Message</label>
        <textarea 
          id="message"
          name="message" 
          required 
          placeholder="Your message..." 
          rows={4} 
          className="w-full border border-neutral-300 dark:border-neutral-600 rounded-lg p-3 bg-neutral-50 dark:bg-neutral-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none" 
        />
      </div>
      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full bg-primary text-neutral-900 font-heading px-6 py-3 rounded-lg shadow hover:-translate-y-1 hover:bg-secondary transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
} 