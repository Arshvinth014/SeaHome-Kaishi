import React, { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SeahomeRentalFullMapPage from '../../pages/SeahomeRentalFullMapPage';
import {
  getAppRouterPath,
  isKaishiMapsPlacePath,
  isUserScopedKaishiMapsPath,
  KAISHI_MAPS_PATH,
  syncBrowserUrlToCanonicalMap,
} from '../../utils/kaishiMapsRoutes';

/**
 * Ensures Kaishi Maps always renders at `/map` (never `/:userId/map`) for logged-in users.
 */
const KaishiMapsCanonicalPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const path = getAppRouterPath();
    if (path === KAISHI_MAPS_PATH || isKaishiMapsPlacePath(path)) {
      syncBrowserUrlToCanonicalMap(location.search, location.hash, path);
      return;
    }
    if (!isUserScopedKaishiMapsPath(path)) return;

    syncBrowserUrlToCanonicalMap(location.search, location.hash);
    navigate({ pathname: KAISHI_MAPS_PATH, search: location.search, hash: location.hash }, { replace: true });
  }, [location.pathname, location.search, location.hash, navigate]);

  const appPath = getAppRouterPath();
  if (appPath !== KAISHI_MAPS_PATH && !isKaishiMapsPlacePath(appPath)) {
    return null;
  }

  return <SeahomeRentalFullMapPage />;
};

export default KaishiMapsCanonicalPage;
