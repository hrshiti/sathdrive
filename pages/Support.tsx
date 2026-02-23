
import React from 'react';

const Support: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative w-full h-[450px] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary/40 z-10"></div>
        <img 
          alt="Bangalore Skyline" 
          className="absolute inset-0 w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQYnmyGLZK9ML7lDsj33D8m1hGqXA_xIZsldEC9RvmK9_srFc_qHAv8zia1WR34JvKjk8ffxN0JPWVsGpjStG_f2-9QI3UjkysVj2-qXPP0yxtPXHzZjHYcYxmXDW3KIPsjqLCDQw5PYmYhKdmTG3FHJfP_AdD8TS0ZMmLu_QiDpH85zyhUnepeFpQ3zbWKX4NcU7-ABNVa5H29cC06PTuI_XBESFVDhz7hREXsYenubSKw-l1gd5VjuPbXq1j7B45eyK3LF22vNU" 
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-20 w-full">
          <div className="max-w-2xl bg-white/10 backdrop-blur-xl p-8 lg:p-12 rounded-2xl border border-white/20 shadow-2xl">
            <span className="inline-block px-3 py-1 rounded bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-4">Dedicated Support</span>
            <h1 className="text-white text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
              We Are Here for You. <span className="text-accent">24/7.</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Experience enterprise-grade fleet solutions and premium driver support in the heart of Bangalore.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-20 -mt-16 relative z-30 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-accent">
            <span className="material-symbols-outlined !text-4xl text-accent mb-6 block">call</span>
            <h3 className="text-xl font-bold mb-2">Call Our Hotline</h3>
            <a className="text-2xl font-bold text-primary hover:text-accent transition-colors block" href="tel:+919900007816">+91 9900007816</a>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mt-2 block">Available 24/7</span>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-xl border-b-4 border-accent">
            <span className="material-symbols-outlined !text-4xl text-accent mb-6 block">mail</span>
            <h3 className="text-xl font-bold mb-2">Email Support</h3>
            <a className="text-lg font-bold text-primary hover:text-accent transition-colors block" href="mailto:saathidrive@gmail.com">saathidrive@gmail.com</a>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest mt-2 block">Response in 2h</span>
          </div>
          <div className="bg-primary p-8 rounded-xl shadow-xl border-b-4 border-accent text-white flex flex-col justify-between">
            <div>
              <span className="material-symbols-outlined !text-4xl text-accent mb-6 block">location_on</span>
              <h3 className="text-xl font-bold mb-2">Bangalore HQ</h3>
              <p className="text-white/70 text-sm">Visit our corporate office in Whitefield.</p>
            </div>
            <p className="text-accent font-semibold text-sm mt-4">KA 560066</p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-white py-24 border-y border-primary/5 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-6">Corporate Tie-ups</h2>
            <p className="text-primary/70 text-lg leading-relaxed mb-10">
              Looking for a reliable fleet partner for your enterprise? We offer customized solutions for Bangalore's best companies.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-accent">check_circle</span>
                <div>
                  <h4 className="font-bold text-primary">Priority Dispatch</h4>
                  <p className="text-sm text-primary/60">Zero-wait time for your executives.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="material-symbols-outlined text-accent">check_circle</span>
                <div>
                  <h4 className="font-bold text-primary">Monthly Billing</h4>
                  <p className="text-sm text-primary/60">Simplified invoicing for corporate auditing.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-bg-light p-8 lg:p-10 rounded-2xl shadow-inner border border-primary/5">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 text-sm focus:ring-accent focus:border-accent" placeholder="Full Name" type="text"/>
                <input className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 text-sm focus:ring-accent focus:border-accent" placeholder="Company Email" type="email"/>
              </div>
              <textarea className="w-full bg-white border border-primary/10 rounded-lg px-4 py-3 text-sm focus:ring-accent focus:border-accent resize-none" placeholder="Requirements..." rows={4}></textarea>
              <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/95 transition-all flex items-center justify-center gap-3">
                Submit Inquiry <span className="material-symbols-outlined !text-accent !text-sm">send</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[400px] relative">
        <iframe
          src="https://www.google.com/maps?q=102+Brigade+Road+MG+Road+Area+Bangalore+Karnataka+560001&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
          title="Saathi Drive HQ Location - 102, Brigade Road, MG Road Area, Bangalore"
        ></iframe>
        <div className="absolute top-4 left-4 bg-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 border border-accent z-10">
          <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
          <span className="font-bold text-primary">HQ: Bangalore Tech Park</span>
        </div>
      </section>
    </div>
  );
};

export default Support;
