import { useCallback, useEffect, useRef, useState } from 'react';

export type UserMapLocation = {
  lat: number;
  lng: number;
  /** Horizontal accuracy radius in metres from the device */
  accuracyM: number;
};

export type UserGeolocationStatus =
  | 'idle'
  | 'locating'
  | 'ready'
  | 'denied'
  | 'unavailable'
  | 'error';

type Options = {
  /** When false, geolocation is not requested */
  enabled?: boolean;
  /** When true, position updates as the user moves */
  watch?: boolean;
};

export function useUserGeolocation(options: Options = {}) {
  const { enabled = true, watch = true } = options;
  const [location, setLocation] = useState<UserMapLocation | null>(null);
  const [status, setStatus] = useState<UserGeolocationStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const watchIdRef = useRef<number | null>(null);

  const clearWatch = useCallback(() => {
    if (watchIdRef.current != null && typeof navigator !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.clearWatch(watchIdRef.current);
      watchIdRef.current = null;
    }
  }, []);

  const applyPosition = useCallback((coords: GeolocationCoordinates) => {
    setLocation({
      lat: coords.latitude,
      lng: coords.longitude,
      accuracyM: Math.max(coords.accuracy, 8),
    });
    setStatus('ready');
    setErrorMessage(null);
  }, []);

  const applyError = useCallback((err: GeolocationPositionError) => {
    if (err.code === 1) {
      setStatus('denied');
      setErrorMessage('Location permission was not granted.');
    } else if (err.code === 2) {
      setStatus('unavailable');
      setErrorMessage('Location is unavailable.');
    } else {
      setStatus('error');
      setErrorMessage(err.message || 'Could not read your location.');
    }
  }, []);

  const requestLocation = useCallback(() => {
    if (typeof navigator === 'undefined' || !('geolocation' in navigator)) {
      setStatus('unavailable');
      setErrorMessage('Geolocation is not supported in this browser.');
      return;
    }

    setStatus('locating');
    setErrorMessage(null);

    navigator.geolocation.getCurrentPosition(
      (pos) => applyPosition(pos.coords),
      (err) => applyError(err),
      { enableHighAccuracy: true, maximumAge: 15_000, timeout: 20_000 }
    );
  }, [applyPosition, applyError]);

  useEffect(() => {
    if (!enabled) {
      clearWatch();
      return;
    }

    if (typeof navigator === 'undefined' || !('geolocation' in navigator)) {
      setStatus('unavailable');
      setErrorMessage('Geolocation is not supported in this browser.');
      return;
    }

    setStatus('locating');

    const geoOptions: PositionOptions = {
      enableHighAccuracy: true,
      maximumAge: 10_000,
      timeout: 20_000,
    };

    if (watch) {
      watchIdRef.current = navigator.geolocation.watchPosition(
        (pos) => applyPosition(pos.coords),
        (err) => applyError(err),
        geoOptions
      );
    } else {
      navigator.geolocation.getCurrentPosition(
        (pos) => applyPosition(pos.coords),
        (err) => applyError(err),
        geoOptions
      );
    }

    return clearWatch;
  }, [enabled, watch, applyPosition, applyError, clearWatch]);

  return {
    location,
    status,
    errorMessage,
    requestLocation,
    isLocating: status === 'locating',
    hasLocation: location != null,
  };
}
