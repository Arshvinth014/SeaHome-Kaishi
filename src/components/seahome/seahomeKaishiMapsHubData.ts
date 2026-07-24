import { stationsForLine } from './seahomeRentalLineStations';
import { rentalPropertyDetailPath } from './seahomeRentalLineSearchData';
import { demoListingsForStation } from './seahomeRentalStationResultsData';
import { buildKaishiMapsPlacePath } from './kaishiMapsPlaceId';
import { KAISHI_MAPS_DEFAULT_CENTER } from './seahomeRentalSurroundingsMapData';

const HUB_LOCATION = 'chiba';
const HUB_LINE_ID = 'jr-sobu';
const HUB_LINE_NAME = 'JR Sobu Line';

/** Approximate coordinates for JR Sobu Line stations (Tokyo → Chiba). */
const JR_SOBU_STATION_COORDS: Record<string, { lat: number; lng: number }> = {
  tokyo: { lat: 35.681236, lng: 139.767125 },
  'shin-nihombashi': { lat: 35.694, lng: 139.784 },
  bakurocho: { lat: 35.6974, lng: 139.792 },
  kinshicho: { lat: 35.697, lng: 139.814 },
  kameido: { lat: 35.705, lng: 139.833 },
  hirai: { lat: 35.709, lng: 139.844 },
  'shin-koiwa': { lat: 35.716, lng: 139.86 },
  koiwa: { lat: 35.7168, lng: 139.878 },
  ichikawa: { lat: 35.7204, lng: 139.915 },
  funabashi: { lat: 35.6938, lng: 139.983 },
  'nishi-funabashi': { lat: 35.687, lng: 140.0 },
  'moto-yawata': { lat: 35.678, lng: 140.024 },
  yawata: { lat: 35.668, lng: 140.038 },
  'keisei-yawata': { lat: 35.662, lng: 140.052 },
  'ichikawa-ohno': { lat: 35.655, lng: 140.068 },
  sugano: { lat: 35.642, lng: 140.082 },
  'shimosa-nakayama': { lat: 35.632, lng: 140.092 },
  'nishi-chiba': { lat: 35.5977, lng: 140.103 },
  chiba: { lat: 35.6126, lng: 140.114 },
  'hon-chiba': { lat: 35.607, lng: 140.13 },
  chibaminato: { lat: 35.601, lng: 140.148 },
  soga: { lat: 35.588, lng: 140.168 },
  honda: { lat: 35.578, lng: 140.185 },
  kamatori: { lat: 35.568, lng: 140.198 },
  zushiomi: { lat: 35.558, lng: 140.21 },
  kugahara: { lat: 35.548, lng: 140.222 },
  'chiba-koen': { lat: 35.602, lng: 140.118 },
};

export type KaishiMapsRailStation = {
  id: string;
  name: string;
  line: string;
  latitude: number;
  longitude: number;
  listingCount: number;
};

export type KaishiMapsListingMarker = {
  id: string;
  title: string;
  stationName: string;
  latitude: number;
  longitude: number;
  rentYen: number;
  layout: string;
  floor: string;
  detailPath: string;
  surroundingsMapPath: string;
};

export const KAISHI_MAPS_HUB_POI_CENTER = {
  lat: 35.655,
  lng: 139.92,
};

export const KAISHI_MAPS_HUB_POI_RADIUS_M = 4500;

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

function stationCoords(stationId: string, index: number): { latitude: number; longitude: number } {
  const known = JR_SOBU_STATION_COORDS[stationId];
  if (known) return { latitude: known.lat, longitude: known.lng };
  const base = KAISHI_MAPS_DEFAULT_CENTER;
  return offsetMeters(base.lat, base.lng, index * 37, 800 + index * 120);
}

export function buildKaishiMapsHubRailStations(): KaishiMapsRailStation[] {
  return stationsForLine(HUB_LINE_ID, HUB_LINE_NAME).map((station, index) => {
    const coords = stationCoords(station.id, index);
    return {
      id: station.id,
      name: station.name,
      line: HUB_LINE_NAME,
      latitude: coords.latitude,
      longitude: coords.longitude,
      listingCount: station.listingCount,
    };
  });
}

export function buildKaishiMapsHubListings(): KaishiMapsListingMarker[] {
  const stations = buildKaishiMapsHubRailStations();
  const listings: KaishiMapsListingMarker[] = [];

  stations.forEach((station, stationIndex) => {
    const demos = demoListingsForStation(station.name, 3);
    demos.forEach((listing, listingIndex) => {
      const bearing = stationIndex * 41 + listingIndex * 95;
      const distanceM = 180 + listingIndex * 140;
      const coords = offsetMeters(station.latitude, station.longitude, bearing, distanceM);
      listings.push({
        id: `${station.id}-${listing.id}`,
        title: `${listing.floor} · ${listing.layout} near ${station.name}`,
        stationName: station.name,
        latitude: coords.latitude,
        longitude: coords.longitude,
        rentYen: listing.rentYen,
        layout: listing.layout,
        floor: listing.floor,
        detailPath: rentalPropertyDetailPath(
          HUB_LOCATION,
          HUB_LINE_ID,
          station.id,
          `${station.id}-${listing.id}`
        ),
        surroundingsMapPath: buildKaishiMapsPlacePath(
          {
            locationSlug: HUB_LOCATION,
            lineSlug: HUB_LINE_ID,
            stationSlug: station.id,
            listingId: `${station.id}-${listing.id}`,
            stationName: station.name,
          },
          coords.latitude,
          coords.longitude
        ),
      });
    });
  });

  return listings;
}

export function kaishiMapsHubMapBounds(
  listings: KaishiMapsListingMarker[],
  stations: KaishiMapsRailStation[]
): [[number, number], [number, number]] {
  const points: [number, number][] = [
    ...listings.map((l) => [l.latitude, l.longitude] as [number, number]),
    ...stations.map((s) => [s.latitude, s.longitude] as [number, number]),
    [KAISHI_MAPS_HUB_POI_CENTER.lat, KAISHI_MAPS_HUB_POI_CENTER.lng],
  ];

  if (points.length === 0) {
    return [
      [KAISHI_MAPS_DEFAULT_CENTER.lat - 0.05, KAISHI_MAPS_DEFAULT_CENTER.lng - 0.08],
      [KAISHI_MAPS_DEFAULT_CENTER.lat + 0.05, KAISHI_MAPS_DEFAULT_CENTER.lng + 0.08],
    ];
  }

  let minLat = points[0][0];
  let maxLat = points[0][0];
  let minLng = points[0][1];
  let maxLng = points[0][1];

  points.forEach(([lat, lng]) => {
    minLat = Math.min(minLat, lat);
    maxLat = Math.max(maxLat, lat);
    minLng = Math.min(minLng, lng);
    maxLng = Math.max(maxLng, lng);
  });

  const padLat = 0.02;
  const padLng = 0.03;
  return [
    [minLat - padLat, minLng - padLng],
    [maxLat + padLat, maxLng + padLng],
  ];
}
