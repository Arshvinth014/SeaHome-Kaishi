import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SeahomeNavbar from './components/SeahomeNavbar';
import SeahomeRealEstates from './pages/SeahomeRealEstates';
import SeahomeRentalPage from './pages/SeahomeRentalPage';
import SeahomeRentalLineStationSearchPage from './pages/SeahomeRentalLineStationSearchPage';
import SeahomeRentalLineDetailPage from './pages/SeahomeRentalLineDetailPage';
import SeahomeRentalStationResultsPage from './pages/SeahomeRentalStationResultsPage';
import SeahomeRentalPropertyDetailPage from './pages/SeahomeRentalPropertyDetailPage';
import SeahomeRentalFullMapPage from './pages/SeahomeRentalFullMapPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <SeahomeNavbar />
        <main>
          <Routes>
            <Route path="/" element={<SeahomeRealEstates />} />
            <Route path="/accommodations" element={<Navigate to="/seahome-real-estates" replace />} />
            <Route path="/seahome-real-estates" element={<SeahomeRealEstates />} />
            <Route path="/seahome-real-estates/rental" element={<SeahomeRentalPage />} />
            <Route
              path="/seahome-real-estates/rental/search-by-line-station/:locationSlug"
              element={<SeahomeRentalLineStationSearchPage />}
            />
            <Route
              path="/seahome-real-estates/rental/search-by-line-station/:locationSlug/:lineSlug"
              element={<SeahomeRentalLineDetailPage />}
            />
            <Route
              path="/seahome-real-estates/rental/search-by-line-station/:locationSlug/:lineSlug/:stationSlug"
              element={<SeahomeRentalStationResultsPage />}
            />
            <Route
              path="/seahome-real-estates/rental/search-by-line-station/:locationSlug/:lineSlug/:stationSlug/:apartmentId"
              element={<SeahomeRentalPropertyDetailPage />}
            />
            <Route path="/seahome-real-estates/rental/map" element={<SeahomeRentalFullMapPage />} />
            <Route path="*" element={<Navigate to="/seahome-real-estates" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
