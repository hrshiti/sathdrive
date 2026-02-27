import React, { useEffect, useRef } from 'react';

type PlacesAutocompleteProps = {
  value: string;
  onChangeText: (value: string) => void;
  onPlaceSelected?: (place: {
    description: string;
    lat: number;
    lng: number;
  }) => void;
  placeholder?: string;
  inputClassName?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  isReady?: boolean;
};

const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({
  value,
  onChangeText,
  onPlaceSelected,
  placeholder,
  inputClassName,
  icon,
  disabled,
  isReady,
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const google = (window as any).google;
    if (!isReady || !google?.maps?.places || !inputRef.current) {
      return;
    }

    const autocomplete = new google.maps.places.Autocomplete(inputRef.current, {
      types: ['geocode', 'establishment'],
      componentRestrictions: { country: 'in' },
      // Explicitly request geometry so lat/lng are available in getPlace()
      fields: ['geometry', 'formatted_address', 'name'],
    });

    const listener = autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (!place) return;

      const description =
        place.formatted_address || place.name || inputRef.current?.value || '';

      const location = place.geometry?.location;
      const lat = location ? location.lat() : null;
      const lng = location ? location.lng() : null;

      onChangeText(description);

      if (onPlaceSelected && lat != null && lng != null) {
        onPlaceSelected({
          description,
          lat,
          lng,
        });
      }
    });

    return () => {
      if (listener && google?.maps?.event) {
        google.maps.event.removeListener(listener);
      }
    };
  }, [isReady, onChangeText, onPlaceSelected]);

  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
          {icon}
        </span>
      )}
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => onChangeText(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        autoComplete="off"
        className={inputClassName}
        type="text"
      />
    </div>
  );
};

export default PlacesAutocomplete;

