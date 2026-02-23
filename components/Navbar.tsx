
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'City', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Partner', path: '/partner' },
    { name: 'Support', path: '/support' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-primary/10 px-6 lg:px-20 pt-2 pb-4 flex items-center justify-between">
      <Link to="/" className="flex items-center">
        <img 
          alt="Saathi Drive Logo" 
          className="h-20 w-auto" 
          src="/assets/sathidrivelogo.png" 
        />
        <span className="text-xl font-black text-primary uppercase tracking-tight ml-2">Saathi Drive</span>
      </Link>

      <div className="hidden md:flex items-center gap-10 text-sm font-semibold uppercase tracking-wider">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`transition-colors hover:text-accent ${
              isActive(link.path) ? 'text-accent border-b-2 border-accent' : 'text-primary'
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div>
        <a
          href="https://admin.saathidrive.com/login/user-login/"
          className="px-6 py-2 rounded-lg border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all inline-block"
        >
          BOOK NOW
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
