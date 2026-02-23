
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-primary/70 z-10"></div>
          <img 
            alt="Lalbagh Glass House Bangalore" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0eFktf2aJo7RxvIAbFU69aH3Tx7JlPNrY_LGhcKLj4AZ0ujGTiTvTn8ph1VqEOqJM9-DX2AKvUnXVQh-fXU-8bjXbWpyc78m8mzbpAi-4-YoU35z4g266a1fih2fwNy0iIkDhaXzS1UqckJFhlD8TK3V3ormaFGOo3QoYb9TS5P-gp-f1Sl6USogGCSkEkrubJI315-8qC_q73pj461tBcmT_2puTYEg0yHT3Q95zEfBmFgFTKfMR6zPZkcmK-nzg1_vHFKvV_g" 
          />
        </div>
        <div className="relative z-20 max-w-4xl space-y-6">
          <span className="inline-block px-4 py-1 border border-accent text-accent rounded-full text-xs font-bold tracking-widest uppercase">
            Our Story
          </span>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight">
            More Than a Cab. <br/>
            <span className="gold-gradient-text">A Companion for Every Mile.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto font-light">
            Redefining urban mobility in Bangalore since 2023 with the spirit of companionship.
          </p>
          <div className="pt-8">
            <span className="material-symbols-outlined text-accent animate-bounce text-4xl">keyboard_double_arrow_down</span>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 lg:px-40 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-primary border-l-4 border-accent pl-6">
              The Meaning of <span className="text-accent">Saathi</span>
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-slate-600 leading-relaxed">
                In the local tongue, <strong className="text-primary">'Saathi'</strong> translates to <span className="italic">Companion</span>. We chose this name because we believe that travel in a bustling metropolis like Bangalore shouldn't just be a transaction—it should be a shared experience of trust and comfort.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Since our launch, we've focused on moving beyond the standard taxi model. Our drivers are trained to be your local partners on the road, navigating the city's pulse with professional poise and regional pride.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img 
              alt="Bangalore street scene" 
              className="rounded-xl w-full h-64 object-cover shadow-xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5GCAI7x0w-PloiV7yG1rLI8nd8-WeyH3cgPQe8UTsF8Efs7uHQ4H-FPq457kWsIOkyVv3qq9cOMaiz0yzZRYSn5Vbwt4OkXHROamFuVYPCLTUTUgnbp-tkCbdhUMVHDE86p-LCpTxRtYUuVJTOkPe7yJ_STTyvz_UwdboDm4g1DqGGFCrpX5nLEOooo2AFXA7XjRAeWZofDVqgRsIHNaI9tU3HlEP-srnwSIm8PFd2XS8Q7XfTofnJQb2sIEsrhaPY8rO6Y7A7IY" 
            />
            <img 
              alt="Professional Driver" 
              className="rounded-xl w-full h-64 object-cover mt-12 shadow-xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsLQU6Ogsqk0rqNyqnYMszy1OWHdS_l7W7S2s1GXnF7MeP4cCNbqsTimysEwYODuJkFHZh2GYYvRpJ46sKvqo352SdFyOYANbys7hgeOITyS1QQpQDrkySotXOl-IP2VcLXI_xgeQmxZJarUSByhYaW1wOggKCMhX1frC2C0xEyHS8OjmvC8Env6k3UcAyBOzYOWw0K3z0QKLOpxc9A21P4fNxNt5sdm-hoC83yHGU1GS3j9JqpHoiCAZ96leX_z_5zC1X3MNufB8" 
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-primary text-white px-6 lg:px-40">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm">Enterprise Excellence</h2>
          <h3 className="text-3xl md:text-5xl font-bold">Why Bangalore Chooses Saathi</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-all group">
            <span className="material-symbols-outlined text-accent text-5xl mb-6">verified_user</span>
            <h4 className="text-xl font-bold mb-4">Enterprise Trust</h4>
            <p className="text-white/60 leading-relaxed">Vetted drivers and premium fleet standards that cater to corporate and individual excellence.</p>
          </div>
          <div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-all group">
            <span className="material-symbols-outlined text-accent text-5xl mb-6">location_on</span>
            <h4 className="text-xl font-bold mb-4">Local Expertise</h4>
            <p className="text-white/60 leading-relaxed">Deep knowledge of Bangalore's routes, shortcuts, and landmarks to save your precious time.</p>
          </div>
          <div className="p-8 border border-white/10 rounded-xl hover:bg-white/5 transition-all group">
            <span className="material-symbols-outlined text-accent text-5xl mb-6">handshake</span>
            <h4 className="text-xl font-bold mb-4">The Saathi Bond</h4>
            <p className="text-white/60 leading-relaxed">A commitment to safety, courtesy, and a personal touch that makes every ride feel like traveling with a friend.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 lg:px-40 bg-bg-light">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-primary">Rooted in the Garden City</h2>
          <p className="text-slate-500 mt-2">Captured moments of our journey through the heart of Karnataka.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[600px]">
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-xl">
            <img 
              alt="Vidhana Soudha" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2fq1o6EvjKPlWfPlWf5ZomvVO9f5tXWFiaUdlkO55dqbxn94V3bxePuoQgck1WPGk-XyjpIWctytaohbnKeoOrRSGoqxDbbJCnajyx3Ck2RBe-mi_muCqFpCXNqwDHi-XBm3J9blzdf-sFPMhNqPdoPtscDOXPXUKBBbsI-iHkuDRAqKPTIOeNmUifvYntaIJ3AwfFYQufIa11jEX6use82ZpWkDy5GjRq6F1ek1Kk3PkC35xfYbRIuKzmN5w666vCY3SaDhBrHs" 
            />
            <div className="absolute bottom-6 left-6 text-white z-20">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Our Office</p>
              <h5 className="text-xl font-bold">Central Bangalore</h5>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <img 
              alt="MG Road Bangalore" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA77gNcSlHmvs1IbhEzUkGpD1wCCFoL-DaxwaF0Ixamb0ZfweWjLTfe4bWmKKebzxuvSiSBYRbX1sph80q0VcJU8p5ASnd0L2PtYqS5kiwAfaejJskdqyzElN1XhTb6MqU4GcxLzkoXURA3wz0dsmOqPgp9gut3PQKqDGHwuiH9knFbbn5UAmur_lojhquRss3tiJTUotKJkdKqMbUJpY_TBRnbVwJuHp-lure4-DlQPN93JHkXZjvS0UWy0Cn3pb5V70zcscydyL0" 
            />
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <img 
              alt="Modern Bangalore Architecture" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              src="https://picsum.photos/seed/arch/400/600" 
            />
          </div>
          <div className="md:col-span-2 relative overflow-hidden rounded-xl">
            <img 
              alt="Saathi Team" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBo_69b8hdDDrMt2H8diXshdgZBjHosdGlLVJvsLoxOlLOWRubz7hz7nIbMI30sAz9tS4RBnCsBUgLjYWmwSglsJkcZC8JJ4uZE3-dyh9liR3nDI0BOyAefYZ-KQskalmNWPyHB4Ikbpu4OwiOws_bn1ItMpEQnRRelZUH2fqgKbEE15PbrThUxsWKQ3iCIlU6o_P_Qj8ai0NjGw8Zlna1BjUvMxvbYjpPdqnVvOfPP78zXLKOgVMSaBVqc_gdqaGEpjpr9G46qFuo" 
            />
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
