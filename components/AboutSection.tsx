import ContactForm from '@components/ContactForm';

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h2 className="font-heading text-4xl mb-6">About Me</h2>
          <div className="space-y-4 font-body text-lg leading-relaxed">
            <p>
              I'm a founding engineer at Grand Charter, where I build legal-tech platforms that help thousands of plaintiffs and dozens of law firms. Previously, I optimized infrastructure at Capital One, saving thousands in monthly costs.
            </p>
            <p>
              When I'm not coding, you'll find me practicing jazz guitar, tracking fitness metrics, or exploring the latest in AI and distributed systems. I believe in building products that genuinely help people while maintaining clean, scalable architectures.
            </p>
            <p>
              I love connecting with fellow engineers, entrepreneurs, and anyone passionate about technology. Feel free to reach out!
            </p>
          </div>
        </div>
        
        <div className="border-t pt-8">
          <h3 className="font-heading text-2xl mb-6 text-center">Get In Touch</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
} 