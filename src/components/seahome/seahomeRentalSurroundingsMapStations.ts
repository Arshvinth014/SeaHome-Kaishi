import type { PropertyTransportAccess } from './seahomeRentalPropertyDetailData';

export type NearStationMarker = {
  id: string;
  name: string;
  line: string;
  walkMinutes: number;
  latitude: number;
  longitude: number;
};

function offsetMeters(
  lat: number,
  lng: number,
  bearingDeg: number,
  distanceM: number
): { latitude: number; longitude: number } {
  const rad = (bearingDeg * Math.PI) / 180;
  const dLat = (distanceM * Math.cos(rad)) / 111_320;
  const dLng = (distanceM * Math.sin(rad)) / (111_320 * Math.cos((lat * Math.PI) / 180));
  return { latitude: lat + dLat, longitude: lng + dLng };
}

/** Place station markers around the property for the map (walk time drives distance). */
export function buildNearStationMarkers(
  latitude: number,
  longitude: number,
  stations: PropertyTransportAccess[]
): NearStationMarker[] {
  const bearings = [45, 120, 200, 280, 330];

  return stations.map((access, index) => {
    const distanceM = Math.max(80, access.walkMinutes * 65);
    const coords = offsetMeters(latitude, longitude, bearings[index % bearings.length], distanceM);
    return {
      id: `near-station-${index}`,
      name: access.station,
      line: access.line,
      walkMinutes: access.walkMinutes,
      latitude: coords.latitude,
      longitude: coords.longitude,
    };
  });
}
