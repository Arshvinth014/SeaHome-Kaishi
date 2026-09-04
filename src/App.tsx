import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import SeahomeNavbar from './components/SeahomeNavbar';
import SeahomeFloatingSidebar from './components/SeahomeFloatingSidebar';
import SeahomeRealEstates from './pages/SeahomeRealEstates';
import SeahomeRentalPage from './pages/SeahomeRentalPage';
import SeahomeRentalLineStationSearchPage from './pages/SeahomeRentalLineStationSearchPage';
import SeahomeRentalLineDetailPage from './pages/SeahomeRentalLineDetailPage';
import SeahomeRentalStationResultsPage from './pages/SeahomeRentalStationResultsPage';
import SeahomeRentalPropertyDetailPage from './pages/SeahomeRentalPropertyDetailPage';
import SeahomeRentalFullMapPage from './pages/SeahomeRentalFullMapPage';
import SeahomeRentalMapSearchPage from './pages/SeahomeRentalMapSearchPage';
import RentalShopPage from './pages/RentalShopPage';
import RentalShopCategoryPage from './pages/RentalShopCategoryPage';
import RentalOfficePage from './pages/RentalOfficePage';
import RentalOfficeCategoryPage from './pages/RentalOfficeCategoryPage';
import PrefectureCityPage from './pages/PrefectureCityPage';
import PrefectureRouteMapPage from './pages/PrefectureRouteMapPage';
import RentalLandPage from './pages/RentalLandPage';
import SeahomeRentalLandDetailPage from './pages/SeahomeRentalLandDetailPage';
import SeahomeUsefulToolsPage from './pages/SeahomeUsefulToolsPage';
import SeahomeRealEstateGlossaryPage from './pages/SeahomeRealEstateGlossaryPage';
import ParkingPage from './pages/ParkingPage';
import SeahomeRentalParkingDetailPage from './pages/SeahomeRentalParkingDetailPage';
import WarehousePage from './pages/WarehousePage';
import SeahomeRentalWarehouseDetailPage from './pages/SeahomeRentalWarehouseDetailPage';
import SeahomeRentalWarehouseCityListPage from './pages/SeahomeRentalWarehouseCityListPage';
import SeahomeRentalWarehouseStationListPage from './pages/SeahomeRentalWarehouseStationListPage';
import SeahomeAffiliatedStorePage from './pages/SeahomeAffiliatedStorePage';
import SeahomeRentalShopDistrictListPage from './pages/SeahomeRentalShopDistrictListPage';
import SeahomeRentalShopDetailPage from './pages/SeahomeRentalShopDetailPage';
import SeahomeRentalShopCriteriaPage from './pages/SeahomeRentalShopCriteriaPage';
import SeahomeRentalDetailPage from './pages/SeahomeRentalDetailPage';
import SeahomeRentalOfficeDetailPage from './pages/SeahomeRentalOfficeDetailPage';
import SeahomeRentalOfficeThemePage from './pages/SeahomeRentalOfficeThemePage';
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
    <div className="min-h-screen bg-slate-50 text-slate-900 relative">
      <SeahomeNavbar />
      <SeahomeFloatingSidebar />
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
          <Route path="JapanHotelsPage" element={<JapanHotelsPage />} />
          <Route path="JapanVillasPage" element={<JapanVillasPage />} />
          <Route path="JapanRyokanOnsenPage" element={<JapanRyokanOnsenPage />} />
          <Route path="rental" element={<SeahomeRentalPage />} />
          <Route path="rental-shop" element={<RentalShopPage />} />
          <Route path="rental-shop/category/:categorySlug" element={<RentalShopCategoryPage />} />
          <Route path="rental-shop/:prefectureSlug/city" element={<PrefectureCityPage />} />
          <Route path="rental-shop/:prefectureSlug/city/:citySlug" element={<PrefectureCityPage />} />
          <Route path="rental-shop/:prefectureSlug/route-map" element={<PrefectureRouteMapPage />} />
          <Route path="rental-shop/route-map" element={<PrefectureRouteMapPage />} />
          <Route path="rental-shop/:categorySlug" element={<RentalShopCategoryPage />} />
          <Route path="rental-office" element={<RentalOfficePage />} />
          <Route path="rental-office/detail/:officeId" element={<SeahomeRentalOfficeDetailPage />} />
          <Route path="rent_office/:officeId" element={<SeahomeRentalOfficeDetailPage />} />
          <Route path="rental-office/theme/:themeId" element={<SeahomeRentalOfficeThemePage />} />
          <Route path="rent_office/theme/:themeId" element={<SeahomeRentalOfficeThemePage />} />
          <Route path="rental-office/feature/:featureId" element={<SeahomeRentalOfficeThemePage />} />
          <Route path="rental-office/category/:categorySlug" element={<RentalOfficeCategoryPage />} />
          <Route path="rental-office/:prefectureSlug/city" element={<PrefectureCityPage />} />
          <Route path="rental-office/:prefectureSlug/city/:citySlug" element={<PrefectureCityPage />} />
          <Route path="rental-office/:prefectureSlug/route-map" element={<PrefectureRouteMapPage />} />
          <Route path="rental-office/route-map" element={<PrefectureRouteMapPage />} />
          <Route path="rental-office/:sizeId" element={<RentalOfficeCategoryPage />} />
          <Route path="rental-office/:prefectureSlug/:stationSlug/station-list" element={<SeahomeRentalWarehouseStationListPage />} />
          <Route path="rental/search-by-route-map" element={<PrefectureRouteMapPage />} />
          <Route path="rental/search-by-route-map/:prefectureSlug" element={<PrefectureRouteMapPage />} />
          <Route path="rental-land" element={<RentalLandPage />} />
          <Route path="rental-land/detail/:landId" element={<SeahomeRentalLandDetailPage />} />
          <Route path="rental-land/:landId" element={<SeahomeRentalLandDetailPage />} />
          <Route path="useful-tools" element={<SeahomeUsefulToolsPage />} />
          <Route path="glossary" element={<SeahomeRealEstateGlossaryPage />} />
          <Route path="parking" element={<ParkingPage />} />
          <Route path="parking/detail/:parkingId" element={<SeahomeRentalParkingDetailPage />} />
          <Route path="parking/:parkingId" element={<SeahomeRentalParkingDetailPage />} />
          <Route path="warehouse" element={<WarehousePage />} />
          <Route path="rental-warehouse/detail/:warehouseId" element={<SeahomeRentalWarehouseDetailPage />} />
          <Route path="rent_souko/:warehouseId" element={<SeahomeRentalWarehouseDetailPage />} />
          <Route path="warehouse/detail/:warehouseId" element={<SeahomeRentalWarehouseDetailPage />} />
          <Route path="rental-warehouse/:prefectureSlug/:citySlug/list" element={<SeahomeRentalWarehouseCityListPage />} />
          <Route path="rent_souko/:prefectureSlug/:citySlug/list" element={<SeahomeRentalWarehouseCityListPage />} />
          <Route path="rental-warehouse/:prefectureSlug/:stationSlug/station-list" element={<SeahomeRentalWarehouseStationListPage />} />
          <Route path="rent_souko/:prefectureSlug/:stationSlug/station-list" element={<SeahomeRentalWarehouseStationListPage />} />
          <Route path="estate" element={<SeahomeAffiliatedStorePage />} />
          <Route path="affiliated-stores" element={<SeahomeAffiliatedStorePage />} />
          <Route path="rental-shop/shopping-district/:districtSlug/list" element={<SeahomeRentalShopDistrictListPage />} />
          <Route path="rent_store/hankagai/:districtSlug/list" element={<SeahomeRentalShopDistrictListPage />} />
          <Route path="rental-shop/criteria/:criteriaSlug" element={<SeahomeRentalShopCriteriaPage />} />
          <Route path="rent_store/criteria/:criteriaSlug" element={<SeahomeRentalShopCriteriaPage />} />
          <Route path="rental-shop/detail/:storeId" element={<SeahomeRentalShopDetailPage />} />
          <Route path="rent_store/:storeId" element={<SeahomeRentalShopDetailPage />} />
          <Route path="rental/detail/:listingId" element={<SeahomeRentalDetailPage />} />
          <Route path="chintai/:listingId" element={<SeahomeRentalDetailPage />} />
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
          <Route path="rental/search-by-map" element={<SeahomeRentalMapSearchPage />} />
          <Route path="rental/search-by-map/:locationSlug" element={<SeahomeRentalMapSearchPage />} />
          <Route path="rental/map" element={<SeahomeRentalFullMapPage />} />
          <Route path="*" element={<Navigate to="/seahome-real-estates" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
