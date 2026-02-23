
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark py-20 px-6 lg:px-20 text-white border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex flex-col gap-2 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-white uppercase tracking-tight">Saathi Drive</span>
              </div>
              <span className="text-[10px] font-semibold tracking-[0.2em] text-accent uppercase ml-1">Save time, Safe Ride</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Redefining urban mobility in Bangalore through excellence, safety, and a touch of Indian tradition.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-accent transition-colors">
                <span className="material-symbols-outlined">share</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:text-accent transition-colors">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Safety</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">City Drive</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Rentals</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Outstation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Saathi Prime</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Head Office</h4>
            <div className="space-y-4 text-white/60 text-sm italic">
              <p className="flex gap-2">
                <span className="material-symbols-outlined text-accent text-sm">location_on</span>
                102, Brigade Road, MG Road Area,<br/>Bangalore, Karnataka 560001
              </p>
              <p className="flex gap-2">
                <span className="material-symbols-outlined text-accent text-sm">call</span>
                +91 1800-SAATHI-DRIVE
              </p>
              <p className="flex gap-2">
                <span className="material-symbols-outlined text-accent text-sm">mail</span>
                support@saathidrive.com
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
          <p>© 2024 Saathi Drive Technologies Pvt Ltd. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
