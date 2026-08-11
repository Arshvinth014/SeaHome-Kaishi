import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import SeahomeNavbar from './components/SeahomeNavbar';
import SeahomeRealEstates from './pages/SeahomeRealEstates';
import SeahomeRentalPage from './pages/SeahomeRentalPage';
import SeahomeRentalLineStationSearchPage from './pages/SeahomeRentalLineStationSearchPage';
import SeahomeRentalLineDetailPage from './pages/SeahomeRentalLineDetailPage';
import SeahomeRentalStationResultsPage from './pages/SeahomeRentalStationResultsPage';
import SeahomeRentalPropertyDetailPage from './pages/SeahomeRentalPropertyDetailPage';
import SeahomeRentalFullMapPage from './pages/SeahomeRentalFullMapPage';
import RentalShopPage from './pages/RentalShopPage';
import RentalOfficePage from './pages/RentalOfficePage';
import RentalLandPage from './pages/RentalLandPage';
import ParkingPage from './pages/ParkingPage';
import WarehousePage from './pages/WarehousePage';
import RentalBuildingOtherPage from './pages/RentalBuildingOtherPage';
import JapanHotelsPage from './pages/JapanHotelsPage';
import JapanVillasPage from './pages/JapanVillasPage';
import JapanRyokanOnsenPage from './pages/JapanRyokanOnsenPage';

// SeaHome Net Public pages
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { HomePage } from './pages/HomePage';
import { InvestPage } from './pages/InvestPage';
import { CountryPage } from './pages/CountryPage';
import { BuyPage } from './pages/BuyPage';
import { SLHomepage } from './pages/SLHomepage';
import { JapanRentalPage } from './pages/JapanHomepage';
import { ChatBotButton } from './components/ChatBotButton';


function PublicLayout() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased font-sans selection:bg-blue-500 selection:text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ChatBotButton />
    </div>
  );
}

function SeahomeLayout() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SeahomeNavbar />
      <main>
        <Outlet />
      </main>
      <ChatBotButton />
    </div>
  );
}

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    // Ensure the page starts at the top on route change
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="buy" element={<BuyPage />} />
          <Route path="invest" element={<InvestPage />} />
          <Route path="country/:countryId" element={<CountryPage />} />
          <Route path="sl-homepage" element={<SLHomepage />} />
          <Route path="japan-rental" element={<JapanRentalPage />} />
          <Route path="accommodations" element={<Navigate to="/seahome-real-estates" replace />} />
          <Route path="*" element={<HomePage />} />
        </Route>

        <Route path="seahome-real-estates" element={<SeahomeLayout />}>
          <Route index element={<SeahomeRealEstates />} />
          <Route path="JapanHotelsPage" element={<JapanHotelsPage />}/>
          <Route path="JapanVillasPage" element={<JapanVillasPage />}/>
          <Route path="JapanRyokanOnsenPage" element={<JapanRyokanOnsenPage />}/>
          <Route path="rental" element={<SeahomeRentalPage />} />
          <Route path="rental-shop" element={<RentalShopPage />} />
          <Route path="rental-office" element={<RentalOfficePage />} />
          <Route path="rental-land" element={<RentalLandPage />} />
          <Route path="parking" element={<ParkingPage />} />
          <Route path="warehouse" element={<WarehousePage />} />
          <Route path="rental-building-other" element={<RentalBuildingOtherPage />} />
          <Route
            path="rental/search-by-line-station/:locationSlug"
            element={<SeahomeRentalLineStationSearchPage />}
          />
          <Route
            path="rental/search-by-line-station/:locationSlug/:lineSlug"
            element={<SeahomeRentalLineDetailPage />}
          />
          <Route
            path="rental/search-by-line-station/:locationSlug/:lineSlug/:stationSlug"
            element={<SeahomeRentalStationResultsPage />}
          />
          <Route
            path="rental/search-by-line-station/:locationSlug/:lineSlug/:stationSlug/:apartmentId"
            element={<SeahomeRentalPropertyDetailPage />}
          />
          <Route path="rental/map" element={<SeahomeRentalFullMapPage />} />
          <Route path="*" element={<Navigate to="/seahome-real-estates" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
