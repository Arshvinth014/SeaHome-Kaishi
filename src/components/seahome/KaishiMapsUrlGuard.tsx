import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  getAppRouterPath,
  isUserScopedKaishiMapsPath,
  KAISHI_MAPS_PATH,
  syncBrowserUrlToCanonicalMap,
} from '../../utils/kaishiMapsRoutes';

/** Rewrites mistaken `/:userId/map` (and similar) to canonical `/map`. */
const KaishiMapsUrlGuard: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    const path = getAppRouterPath();
    if (!isUserScopedKaishiMapsPath(path)) return;

    syncBrowserUrlToCanonicalMap(location.search, location.hash);
    navigate({ pathname: KAISHI_MAPS_PATH, search: location.search, hash: location.hash }, { replace: true });
  }, [location.pathname, location.search, location.hash, navigate]);

  return null;
};

export default KaishiMapsUrlGuard;
