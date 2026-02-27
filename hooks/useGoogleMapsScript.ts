import { useEffect, useState } from 'react';

type UseGoogleMapsScriptResult = {
  isLoaded: boolean;
  error: string | null;
};

const SCRIPT_ID = 'google-maps-places-script';

export function useGoogleMapsScript(): UseGoogleMapsScriptResult {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
    const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

    if (!apiKey) {
      setError('Google Maps API key is not configured.');
      return;
    }

    function handleLoaded() {
      setIsLoaded(true);
    }

    function handleError() {
      setError('Failed to load Google Maps script.');
    }

    // If script already exists and google is available, mark as loaded
    if (existingScript) {
      if ((window as any).google?.maps?.places) {
        setIsLoaded(true);
        return;
      }

      existingScript.addEventListener('load', handleLoaded);
      existingScript.addEventListener('error', handleError);
      return () => {
        existingScript.removeEventListener('load', handleLoaded);
        existingScript.removeEventListener('error', handleError);
      };
    }

    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
      apiKey,
    )}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.addEventListener('load', handleLoaded);
    script.addEventListener('error', handleError);

    document.head.appendChild(script);

    return () => {
      script.removeEventListener('load', handleLoaded);
      script.removeEventListener('error', handleError);
    };
  }, []);

  return { isLoaded, error };
}

