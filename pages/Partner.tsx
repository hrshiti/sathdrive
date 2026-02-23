
import React, { useState } from 'react';

const Partner: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What documents do I need to join?",
      a: "To maintain our premium standards, we require a valid Commercial Driving License, Aadhaar Card, PAN Card, Current Address Proof, and Vehicle Registration/Insurance documents. A background check is mandatory."
    },
    {
      q: "How do payouts work?",
      a: "We offer daily and weekly payout options. All digital payments from customers are settled to your bank account within 24 hours of the request. Cash bookings are kept by you entirely."
    },
    {
      q: "What vehicles are eligible?",
      a: "We accept premium sedans (Maruti Ciaz, Honda City, Hyundai Verna), SUVs (Innova Crysta, XUV700), and luxury segment vehicles not older than 4 years."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 z-0 bg-primary">
          <img 
            alt="Bangalore Skyline" 
            className="w-full h-full object-cover opacity-30" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-8Aww9eeEpXE4ci937L4nZQKuwruyHtIVKLkK2kmaNsaj5icl3AYO9rCVP7gGOMZmirDPXy7uVSjB01LVGTg1YaXzSeftuIZc35nMTvCqfUJDOJjPfz3hxwl78kSkvuq2tW6rSa95Ygvr_GUahD5Ig0G39UcGP5U6DmDNl7poZZfZbLf7qvRAw5PbxA2eyQo-QJb8XzMQDsuXenl7LCkQza-_xYqAxOGU4I2FWa8TmBWIakaa0v1CUnRTNAjl7iZSYQCCriz1usk" 
          />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 px-3 py-1 rounded-full w-fit">
              <span className="material-symbols-outlined text-accent text-sm">verified_user</span>
              <span className="text-accent text-xs font-bold uppercase tracking-widest">Premium Chauffeur Network</span>
            </div>
            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tight">
              Become a Saathi Partner. <span className="text-accent">Drive with Pride.</span>
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed max-w-xl">
              Join Bangalore's premier enterprise chauffeur network. Serving the city's top tech parks with zero commission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex items-center gap-3 text-white/80">
                <span className="material-symbols-outlined text-accent">check_circle</span>
                <span className="text-sm font-medium">Daily Payouts</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <span className="material-symbols-outlined text-accent">check_circle</span>
                <span className="text-sm font-medium">Flexible Hours</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-xl shadow-2xl border border-primary/5 max-w-md ml-auto w-full">
            <h3 className="text-primary text-2xl font-bold mb-2">Start Earning Today</h3>
            <p className="text-primary/60 text-sm mb-6">Enter your details and our team will call you back in 24 hours.</p>
            <form className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-primary/40 uppercase tracking-wider mb-1">Full Name</label>
                <input className="w-full h-12 px-4 rounded-lg border-primary/10 focus:border-accent focus:ring-accent text-primary font-medium" placeholder="John Doe" type="text"/>
              </div>
              <div>
                <label className="block text-xs font-bold text-primary/40 uppercase tracking-wider mb-1">Mobile Number</label>
                <div className="flex gap-2">
                  <span className="flex items-center justify-center w-12 h-12 bg-bg-light rounded-lg border border-primary/10 text-primary font-bold">+91</span>
                  <input className="flex-1 h-12 px-4 rounded-lg border-primary/10 focus:border-accent focus:ring-accent text-primary font-medium" placeholder="98765 43210" type="tel"/>
                </div>
              </div>
              <button className="w-full py-4 bg-accent text-primary font-black rounded-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98] mt-4 uppercase tracking-wider" type="button">
                Get Started
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <h2 className="text-4xl md:text-5xl font-black text-primary">Partner Onboarding Checklist</h2>
              <p className="text-primary/70 text-lg">
                Follow our streamlined 4-step professional onboarding process to join Bangalore's premier network.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-bg-light rounded-xl border border-primary/5">
                  <span className="material-symbols-outlined text-accent text-3xl">app_registration</span>
                  <div>
                    <span className="font-bold block">Step 1: Document Submission</span>
                    <span className="text-primary/50 text-sm">Upload identity and vehicle papers.</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-bg-light rounded-xl border border-primary/5">
                  <span className="material-symbols-outlined text-accent text-3xl">verified</span>
                  <div>
                    <span className="font-bold block">Step 2: Background Verification</span>
                    <span className="text-primary/50 text-sm">Automated safety check.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-primary rounded-2xl p-10 text-white shadow-2xl relative">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Required Documents</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-accent">check_box</span>
                  <div>
                    <p className="font-bold">Commercial Driving License</p>
                    <p className="text-xs text-white/60">Valid Karnataka state license.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-accent">check_box</span>
                  <div>
                    <p className="font-bold">Vehicle Paperwork</p>
                    <p className="text-xs text-white/60">RC Book, Insurance, Fitness Certificate.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-20 bg-bg-light">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-2">Got Questions?</h2>
            <h3 className="text-primary text-4xl font-black">Frequently Asked Questions</h3>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-primary/5 shadow-sm overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 cursor-pointer text-left"
                >
                  <span className="text-primary font-bold text-lg">{faq.q}</span>
                  <span className={`material-symbols-outlined transition-transform ${openFaq === idx ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-primary/60 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partner;
