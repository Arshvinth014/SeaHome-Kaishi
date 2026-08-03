import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import SeahomeNavbar from './components/SeahomeNavbar';
import SeahomeRealEstates from './pages/SeahomeRealEstates';
import SeahomeRentalPage from './pages/SeahomeRentalPage';
import SeahomeRentalLineStationSearchPage from './pages/SeahomeRentalLineStationSearchPage';
import SeahomeRentalLineDetailPage from './pages/SeahomeRentalLineDetailPage';
import SeahomeRentalStationResultsPage from './pages/SeahomeRentalStationResultsPage';
import SeahomeRentalPropertyDetailPage from './pages/SeahomeRentalPropertyDetailPage';
import SeahomeRentalFullMapPage from './pages/SeahomeRentalFullMapPage';

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

function App() {
  return (
    <Router>
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
          <Route path="rental" element={<SeahomeRentalPage />} />
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
