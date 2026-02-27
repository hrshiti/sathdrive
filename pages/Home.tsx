
import React, { useState } from 'react';
import PlacesAutocomplete from '../components/PlacesAutocomplete';
import { useGoogleMapsScript } from '../hooks/useGoogleMapsScript';
import { computeDistanceKm } from '../utils/geo';
import { submitWebBookingEnquiry } from '../services/webbookingApi';
import type { ServiceCard } from '../types.ts';

const SERVICES: ServiceCard[] = [
  {
    title: "Airport Drop & Pickup",
    description: "Punctual transfers to Kempegowda International Airport with flight tracking.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAxlH5QcfHucCfZAEoKu6ZfRBNIjMOaJjQNcQ_3_qeyRs3A3qyrwnvmk4ypSvFw__u6Gmej1jlqIQDVHr0nk9gW6ghsuWj4z6Gs9xH_IOp29-p7DU9acZc4kxaGmB-98axBzUpteBZdtqSoEN4qJImBoADV2HG9nLQumovCISiGo1IYFDd1BGBbRN5j0Cf-6fZ-isxoQpNbuXjr2M8NksDonrtBD2HDzcgQYI5UmFZB18CZ-YRMI2dkRWSXBpaoqUsLroE3Lx3_Zks",
    badge: "Airport Special",
    ctaText: "Book Now"
  },
  {
    title: "Bike Taxi",
    description: "Zip through Bangalore traffic with our professional rider partners and safety gear.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCyqO72QQG97jZdy6aLO8HNXZZ4Qd_X65eIuUxJOkaFtLJeScMY1HmLCjZyw_aDbt8V2qmU8y3-QtwTeMdCcWA51KFW9PlR7H-oeCa8AGg8WsW_HyLzCUXvznZVzib5rKnNHkOGzE7AbAuK5Wp3ZqrRtG8GORniRXgG8iV23VREC_Jbzj4XQ9pnYTsFDeoXoUNA6AfGbpqNzuvNpYtHF-jdosQeN8T3VVPJ--oTqWEIq-J0MyB980Ihlmb1ctCRScQT7agObw4wew",
    badge: "Express",
    ctaText: "Book Now"
  },
  {
    title: "Rental Packages",
    description: "Keep a car and driver for multiple stops across the city with hourly packages.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX_KZpOPxORwBziGPcJDZKbg5nGHQ9QfA6KLNXD4DCt9j0RCTP-SLtHhYz-maCHwm7-9LFCd3z5LYxOY0jOOluEiRMOi9a8Le0FFVrGuhao8i3EGJI7XfSEndaaYr5fpVjS9ibZZn3FNHNSjweRLE8VVXBmrnT6HsojDhiBRAxjiEGjmRp5zU_XYBv6hvqVi1ifv6bgDySj2aXdtXe3PeC1fpyYFe4G9b-yy3cj1ytwaRyAx2mde7Z1h0UoQnPGwRe5n0v-s5upt4",
    badge: "Flexi",
    ctaText: "Book Now"
  },
  {
    title: "Outstation Rides",
    description: "Travel to Nandi Hills, Mysore, or Coorg in our premium top-rated SUVs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDlzJZVwtBhh1cxH22_3pB2mDBrMs_eIs0MPrMMclVoGVMU_8m1tmoLBOXp_nzDs-WYdUZNAsIvEJG6XgEdtrDCmn6loVO66QJ8ms7isqqVZPtDV1K4kQvpKOMmnLLR1NRkNAIwTMwoGfOqLiknExSOyU228gKRd8GCUP4LenBoc07lBUuG3-PtAF1T2jAqShja4ds_n5NCJtHgs-WFgiPjno7l8euymq-8Sow8ppsN3ACB08KKUV7YL-XOZSH19N6QkTNJMoy7biM",
    badge: "Inter-City",
    ctaText: "Book Now"
  },
  {
    title: "Parcel Service",
    description: "Intra-city express delivery for documents and small packages under 5kg.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDSYd5vB2iTjDAX-aTxqc60apC-MvXnJZqy_PCPOI3lEZ4wW3CQgDPn4LFx2TXfi9dGkWv-huTespv8HZxPsA8jUGuypbcF0RqYMvQ0BXSHLu3W60lDRfFQEJUuJVHqmUIPTFXZUne82i48onBMhVONx6VV9-rDONaeBWWeAJF2hn3vdNygCTDILzDx0VEokeTlxxGwPsDJjAUSqO1zDy1iBz6ERq3fM1du7GwA9IRr9kkTC7IOe14yhkpByOeoJNc6GKzEsYb1Muc",
    badge: "Logistics",
    ctaText: "Book Now"
  },
  {
    title: "Business Solutions",
    description: "Enterprise mobility solutions for your business. Monthly billing and tracking.",
    image: "https://picsum.photos/seed/corp/600/400",
    badge: "Corporate",
    ctaText: "Inquire Now"
  }
];

const Home: React.FC = () => {
  const getDefaultDate = () => new Date().toISOString().slice(0, 10);
  const getDefaultTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [formData, setFormData] = useState({
    pickup_location: '',
    drop_location: '',
    pickup_date: getDefaultDate(),
    pickup_time: getDefaultTime(),
    name: '',
    mobile_number: '',
  });

  const [rideFor, setRideFor] = useState<'city' | 'rental' | 'outstation' | 'airport'>('city');

  const [coords, setCoords] = useState<{
    pickup_lat: number | null;
    pickup_lng: number | null;
    drop_lat: number | null;
    drop_lng: number | null;
  }>({
    pickup_lat: null,
    pickup_lng: null,
    drop_lat: null,
    drop_lng: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const { isLoaded: isMapsLoaded, error: mapsError } = useGoogleMapsScript();

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (
      !formData.pickup_location.trim() ||
      !formData.drop_location.trim() ||
      !formData.pickup_date.trim() ||
      !formData.pickup_time.trim() ||
      !formData.name.trim() ||
      !formData.mobile_number.trim()
    ) {
      setErrorMessage('Please fill all the required fields.');
      return;
    }

    if (
      formData.pickup_location.trim() &&
      (coords.pickup_lat == null || coords.pickup_lng == null)
    ) {
      setErrorMessage(
        'Please select a pick-up location from the suggestions so we can capture coordinates.',
      );
      return;
    }

    if (
      formData.drop_location.trim() &&
      (coords.drop_lat == null || coords.drop_lng == null)
    ) {
      setErrorMessage(
        'Please select a drop-off location from the suggestions so we can capture coordinates.',
      );
      return;
    }

    setIsSubmitting(true);
    try {
      let distance: number | null = null;
      if (
        coords.pickup_lat != null &&
        coords.pickup_lng != null &&
        coords.drop_lat != null &&
        coords.drop_lng != null
      ) {
        distance = computeDistanceKm(
          coords.pickup_lat,
          coords.pickup_lng,
          coords.drop_lat,
          coords.drop_lng,
        );
      }

      const result = await submitWebBookingEnquiry({
        pickup_location: formData.pickup_location,
        pickup_lat: coords.pickup_lat,
        pickup_lng: coords.pickup_lng,
        drop_location: formData.drop_location,
        drop_lat: coords.drop_lat,
        drop_lng: coords.drop_lng,
        distance,
        pickup_date: formData.pickup_date,
        pickup_time: formData.pickup_time,
        name: formData.name,
        mobile_number: formData.mobile_number,
        ride_for: rideFor,
      });

      if (result.ok) {
        setSuccessMessage('Your booking enquiry has been submitted successfully.');
        setErrorMessage(null);
        // Reset form and coordinates after successful submit
        setFormData({
          pickup_location: '',
          drop_location: '',
          pickup_date: getDefaultDate(),
          pickup_time: getDefaultTime(),
          name: '',
          mobile_number: '',
        });
        setCoords({
          pickup_lat: null,
          pickup_lng: null,
          drop_lat: null,
          drop_lng: null,
        });
      } else {
        const errorMessageFromApi =
          'error' in result && result.error
            ? result.error
            : 'Unable to submit your booking enquiry.';
        setErrorMessage(errorMessageFromApi);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Vidhana Soudha Bangalore" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBfy6Xa0YPvGkGZs1alUmuRe2k3nM4qKi3o2INV123hSBVCdrSCb9V15NYmpW5yh8eO0FFRRnZkHzSFPweXiqgjhVDv-Lx9AWpNStRtvWaRBTtV5mec4NIpuv7TYOMvUbHa9XBl10Dzoc_EFhDFdNX9oneEcW4Gh321xoSc2n1sr6tUJe8d0_eVXMicYTdZKvd6p4I9Lt4ZGRDNtNFuQ7ots10zmnbHaRtV1Otqm8iYEUTLvBbMNWcFHGyPqjQFPt-JgyaP5a7wao" 
          />
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        
        <div className="container mx-auto px-6 lg:px-20 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Bangalore's <br/>
              <span className="text-accent">Premier</span> Commute <br/>
              Partner.
            </h1>
            <p className="text-xl opacity-90 mb-8 max-w-lg font-light leading-relaxed">
              Experience enterprise-standard travel with Saathi Drive. Authentically Indian, globally professional, and crafted for the elite.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-accent">verified_user</span>
                <span className="text-sm font-medium">Safe & Verified</span>
              </div>
              <div className="flex items-center gap-2 border-l border-white/20 pl-4">
                <span className="material-symbols-outlined text-accent">schedule</span>
                <span className="text-sm font-medium">24/7 Premium Support</span>
              </div>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="glass-effect rounded-xl shadow-2xl p-6 border border-white/20">
            <div className="flex flex-wrap border-b border-gray-200 mb-6 overflow-x-auto whitespace-nowrap">
              <button
                type="button"
                onClick={() => setRideFor('city')}
                className={`flex-1 pb-4 text-xs font-bold flex items-center justify-center gap-2 min-w-[80px] border-b-2 transition-all ${
                  rideFor === 'city'
                    ? 'border-accent text-primary'
                    : 'border-transparent text-gray-400 hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">location_city</span> CITY
              </button>
              <button
                type="button"
                onClick={() => setRideFor('rental')}
                className={`flex-1 pb-4 text-xs font-bold flex items-center justify-center gap-2 min-w-[80px] border-b-2 transition-all ${
                  rideFor === 'rental'
                    ? 'border-accent text-primary'
                    : 'border-transparent text-gray-400 hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">history</span> RENTALS
              </button>
              <button
                type="button"
                onClick={() => setRideFor('outstation')}
                className={`flex-1 pb-4 text-xs font-bold flex items-center justify-center gap-2 min-w-[80px] border-b-2 transition-all ${
                  rideFor === 'outstation'
                    ? 'border-accent text-primary'
                    : 'border-transparent text-gray-400 hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">distance</span> OUTSTATION
              </button>
              <button
                type="button"
                onClick={() => setRideFor('airport')}
                className={`flex-1 pb-4 text-xs font-bold flex items-center justify-center gap-2 min-w-[80px] border-b-2 transition-all ${
                  rideFor === 'airport'
                    ? 'border-accent text-primary'
                    : 'border-transparent text-gray-400 hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-sm">flight</span> AIRPORT
              </button>
            </div>
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <PlacesAutocomplete
                value={formData.pickup_location}
                onChangeText={(value) =>
                  setFormData((prev) => ({ ...prev, pickup_location: value }))
                }
                onPlaceSelected={(place) =>
                  setCoords((prev) => ({
                    ...prev,
                    pickup_lat: place.lat,
                    pickup_lng: place.lng,
                  }))
                }
                placeholder="Pick-up location"
                disabled={!isMapsLoaded}
                isReady={isMapsLoaded}
                inputClassName="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-accent focus:border-accent text-primary font-medium"
                icon={
                  <span className="material-symbols-outlined text-accent">
                    my_location
                  </span>
                }
              />
              <PlacesAutocomplete
                value={formData.drop_location}
                onChangeText={(value) =>
                  setFormData((prev) => ({ ...prev, drop_location: value }))
                }
                onPlaceSelected={(place) =>
                  setCoords((prev) => ({
                    ...prev,
                    drop_lat: place.lat,
                    drop_lng: place.lng,
                  }))
                }
                placeholder="Drop-off destination"
                disabled={!isMapsLoaded}
                isReady={isMapsLoaded}
                inputClassName="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-50 border border-gray-200 focus:ring-accent focus:border-accent text-primary font-medium"
                icon={
                  <span className="material-symbols-outlined text-primary">
                    location_on
                  </span>
                }
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  className="w-full rounded-lg bg-gray-50 border border-gray-200 focus:ring-accent focus:border-accent text-primary font-medium px-4 py-4"
                  placeholder="Your Name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange('name')}
                />
                <input
                  className="w-full rounded-lg bg-gray-50 border border-gray-200 focus:ring-accent focus:border-accent text-primary font-medium px-4 py-4"
                  placeholder="Mobile Number"
                  type="tel"
                  value={formData.mobile_number}
                  onChange={handleChange('mobile_number')}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">calendar_month</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-50 border border-gray-200 text-sm"
                    placeholder="Pickup date"
                    type="date"
                    value={formData.pickup_date}
                    onChange={handleChange('pickup_date')}
                  />
                </div>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-gray-400">schedule</span>
                  <input
                    className="w-full pl-12 pr-4 py-4 rounded-lg bg-gray-50 border border-gray-200 text-sm"
                    placeholder="Pickup time"
                    type="time"
                    value={formData.pickup_time}
                    onChange={handleChange('pickup_time')}
                  />
                </div>
              </div>
              {mapsError && (
                <p className="text-sm text-amber-600 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                  Location suggestions are currently unavailable. You can still type
                  addresses manually.
                </p>
              )}
              {errorMessage && (
                <p className="text-sm text-red-500 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {errorMessage}
                </p>
              )}
              {successMessage && (
                <p className="text-sm text-emerald-600 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2">
                  {successMessage}
                </p>
              )}
              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-lg font-bold text-lg hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'BOOKING...' : 'BOOK YOUR RIDE'}
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Why Saathi Section */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">payments</span>
              </div>
              <h4 className="font-bold text-primary">Transparent Pricing</h4>
              <p className="text-xs text-gray-500 mt-1">No hidden charges</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">person_check</span>
              </div>
              <h4 className="font-bold text-primary">Verified Pro Drivers</h4>
              <p className="text-xs text-gray-500 mt-1">Background checked</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">support_agent</span>
              </div>
              <h4 className="font-bold text-primary">24/7 Support</h4>
              <p className="text-xs text-gray-500 mt-1">Always there for you</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white transition-colors">track_changes</span>
              </div>
              <h4 className="font-bold text-primary">Real-Time Tracking</h4>
              <p className="text-xs text-gray-500 mt-1">Live trip updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-24 px-6 lg:px-20 bg-bg-light">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-sm font-bold tracking-[0.3em] text-accent uppercase mb-2">Our Premium Fleet</h2>
              <h3 className="text-4xl font-black text-primary">Versatile Solutions for Every Journey</h3>
            </div>
            <p className="text-gray-500 max-w-sm mt-4 md:mt-0">Tailored commute options designed for Bangalore's dynamic landscape.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, idx) => (
              <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    src={service.image} 
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded tracking-widest uppercase">
                    {service.badge}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h4 className="text-xl font-bold text-primary mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600 mb-6 flex-1">{service.description}</p>
                  <a href="#" className="text-accent font-bold text-xs flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-wider">
                    {service.ctaText} <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Strip */}
      <section className="bg-primary py-12 px-6 lg:px-20 border-t border-accent/20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-3xl font-black text-white mb-2 italic">Ride Smart. Ride Saathi.</h2>
            <p className="text-white/70 font-medium">Get the Saathi Drive app for exclusive rewards and faster bookings.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://apps.apple.com/in/app/saathi-drive/id6756699698"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 border border-white/10 hover:border-accent transition-all"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-none uppercase opacity-60">Download on the</span>
                <span className="text-lg leading-none font-bold">App Store</span>
              </div>
            </a>
            <a 
              href="https://play.google.com/store/apps/details?id=com.saathidrive.user" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 border border-white/10 hover:border-accent transition-all"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] leading-none uppercase opacity-60">Get it on</span>
                <span className="text-lg leading-none font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
