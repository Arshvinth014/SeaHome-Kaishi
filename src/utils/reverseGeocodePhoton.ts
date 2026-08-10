/** Parsed reverse-geocode result from Photon (used for device location autofill). */
export type PhotonReverseResult = {
  fullLine: string;
  country: string;
  city: string;
};

/** Reverse geocode lat/lon via Photon (CORS-friendly). */
export async function reverseGeocodePhoton(lat: number, lon: number): Promise<PhotonReverseResult | null> {
  const url = `https://photon.komoot.io/reverse?lat=${encodeURIComponent(String(lat))}&lon=${encodeURIComponent(String(lon))}`;
  const ctrl = new AbortController();
  const tid = window.setTimeout(() => ctrl.abort(), 12000);
  const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '');
  try {
    const res = await fetch(url, { signal: ctrl.signal });
    if (!res.ok) return null;
    const data = (await res.json()) as { features?: Array<{ properties?: Record<string, unknown> }> };
    const p = data?.features?.[0]?.properties;
    if (!p || typeof p !== 'object') return null;
    const parts: string[] = [];
    const push = (key: string) => {
      const v = p[key];
      if (typeof v === 'string' && v.trim()) parts.push(v.trim());
    };
    push('name');
    push('street');
    push('district');
    const locality = p.city || p.town || p.village || p.locality;
    if (typeof locality === 'string' && locality.trim()) parts.push(locality.trim());
    push('state');
    push('postcode');
    push('country');
    const seen = new Set<string>();
    const uniq: string[] = [];
    for (const s of parts) {
      if (!seen.has(s)) {
        seen.add(s);
        uniq.push(s);
      }
    }
    const country = str(p.country);
    const city =
      str(p.city) ||
      str(p.town) ||
      str(p.village) ||
      str(p.locality) ||
      str(p.county) ||
      str(p.name);
    const fullLine = uniq.join(', ');
    if (!fullLine && !country && !city) return null;
    return {
      fullLine: fullLine || [city, country].filter(Boolean).join(', ') || `${lat.toFixed(5)}, ${lon.toFixed(5)}`,
      country,
      city,
    };
  } catch {
    return null;
  } finally {
    window.clearTimeout(tid);
  }
}
