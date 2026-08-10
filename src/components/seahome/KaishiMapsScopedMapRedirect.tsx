import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { KAISHI_MAPS_PATH } from '../../utils/kaishiMapsRoutes';

/** Route target for legacy /:userId/map bookmarks — always send users to public /map. */
const KaishiMapsScopedMapRedirect: React.FC = () => {
  const location = useLocation();
  return <Navigate to={{ pathname: KAISHI_MAPS_PATH, search: location.search, hash: location.hash }} replace />;
};

export default KaishiMapsScopedMapRedirect;
