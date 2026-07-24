import L from 'leaflet';

/**
 * Carto Voyager — reliable raster tiles with Latin-script labels (works well in Japan).
 * Esri World_Street_Map often returns grey "Map data not yet available" placeholders.
 */
export const CARTO_STREET_TILE =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';

export const CARTO_LABELS_TILE =
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png';

/** Esri imagery still works well for satellite mode. */
export const SATELLITE_IMAGERY_TILE =
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';

/** @deprecated Use CARTO_STREET_TILE — kept for imports that expect this name */
export const ENGLISH_STREET_TILE = CARTO_STREET_TILE;

export const ENGLISH_PLACES_OVERLAY_TILE = CARTO_LABELS_TILE;

export const CARTO_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener noreferrer">CARTO</a>';

export const ESRI_ATTRIBUTION =
  'Imagery &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener noreferrer">Esri</a>';

const CARTO_OPTIONS: L.TileLayerOptions = {
  subdomains: 'abcd',
  maxZoom: 20,
  minZoom: 2,
};

export function addStreetBasemapToGroup(group: L.LayerGroup): L.TileLayer {
  return L.tileLayer(CARTO_STREET_TILE, {
    ...CARTO_OPTIONS,
    attribution: CARTO_ATTRIBUTION,
  }).addTo(group);
}

export function addSatelliteBasemapToGroup(group: L.LayerGroup): void {
  L.tileLayer(SATELLITE_IMAGERY_TILE, {
    maxZoom: 19,
    minZoom: 2,
    attribution: ESRI_ATTRIBUTION,
  }).addTo(group);

  L.tileLayer(CARTO_LABELS_TILE, {
    ...CARTO_OPTIONS,
    maxZoom: 19,
    opacity: 0.92,
    attribution: CARTO_ATTRIBUTION,
  }).addTo(group);
}

export function createBaseLayerGroup(mode: 'map' | 'satellite'): L.LayerGroup {
  const group = L.layerGroup();
  if (mode === 'satellite') {
    addSatelliteBasemapToGroup(group);
  } else {
    addStreetBasemapToGroup(group);
  }
  return group;
}
