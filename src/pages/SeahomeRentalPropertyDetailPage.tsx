import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  Bell,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
  User,
  ZoomIn,
} from 'lucide-react';
import { HUB_CONTAINER } from '../components/seahome/seahomeHubLayout';
import {
  formatRentManYen,
  getPropertyDetail,
  resolvePropertyOtherInfo,
  type PropertyGalleryImage,
} from '../components/seahome/seahomeRentalPropertyDetailData';
import {
  findRailLine,
  findStationOnLine,
} from '../components/seahome/seahomeRentalLineStations';
import {
  rentalPropertyDetailPath,
  rentalStationResultsPath,
} from '../components/seahome/seahomeRentalLineSearchData';
import SeahomeRentalPropertyBottomListingsSection from '../components/seahome/SeahomeRentalPropertyBottomListingsSection';
import {
  agencyOtherListingCards,
  recommendedListingCards,
} from '../components/seahome/seahomeRentalPropertyRelatedListingsData';
import { RENTAL_REGIONS } from '../components/seahome/seahomeRentalData';
import { formatYen } from '../components/seahome/seahomeRentalStationResultsData';
import SeahomeRentalPropertySpecSection from '../components/seahome/SeahomeRentalPropertySpecSection';
import SeahomeRentalPropertyInquirySection from '../components/seahome/SeahomeRentalPropertyInquirySection';
import SeahomeRentalPropertyFeaturesSection from '../components/seahome/SeahomeRentalPropertyFeaturesSection';
import SeahomeRentalPropertyCostsSection from '../components/seahome/SeahomeRentalPropertyCostsSection';
import SeahomeRentalPropertyQuickInquirySection from '../components/seahome/SeahomeRentalPropertyQuickInquirySection';
import SeahomeRentalPropertyAppealSection from '../components/seahome/SeahomeRentalPropertyAppealSection';
import SeahomeRentalPropertyOtherInfoSection from '../components/seahome/SeahomeRentalPropertyOtherInfoSection';
import SeahomeRentalPropertySurroundingsMapSection from '../components/seahome/SeahomeRentalPropertySurroundingsMapSection';
import SeahomeRentalListingCompanySection from '../components/seahome/SeahomeRentalListingCompanySection';
import SeahomeRentalListingCompanyFooterSection from '../components/seahome/SeahomeRentalListingCompanyFooterSection';

const CRIMSON = '#b3002d';

const THUMB_PAGE_SIZE = 9;

const SIDEBAR_LINKS = [
  { id: 'top', label: 'TOP' },
  { id: 'info', label: 'Property info' },
  { id: 'features', label: 'Features' },
  { id: 'costs', label: 'Costs' },
  { id: 'other-info', label: 'Details' },
  { id: 'appeal', label: 'Appeal' },
  { id: 'quick-inquiry', label: 'Inquiry' },
  { id: 'area', label: 'Map' },
  { id: 'gallery', label: 'Floor plan & photos' },
  { id: 'favorites', label: 'Favorites' },
  { id: 'company', label: 'Agency' },
] as const;

function prefectureNameFromSlug(slug: string): string {
  for (const region of RENTAL_REGIONS) {
    const p = region.prefectures.find((x) => x.slug === slug);
    if (p) return p.name;
  }
  return slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');
}

function PropertyGallery({
  images,
}: {
  images: PropertyGalleryImage[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbPage, setThumbPage] = useState(0);

  const total = images.length;
  const active = images[activeIndex] ?? images[0];
  const thumbStart = thumbPage * THUMB_PAGE_SIZE;
  const thumbSlice = images.slice(thumbStart, thumbStart + THUMB_PAGE_SIZE);
  const thumbPages = Math.ceil(total / THUMB_PAGE_SIZE);

  const goPrev = () => setActiveIndex((i) => (i <= 0 ? total - 1 : i - 1));
  const goNext = () => setActiveIndex((i) => (i >= total - 1 ? 0 : i + 1));

  if (!active) return null;

  return (
    <section id="gallery" className="border border-gray-300 bg-white">
      <div className="grid gap-0 lg:grid-cols-[1fr_220px] xl:grid-cols-[1fr_260px]">
        <div className="relative border-b border-gray-300 lg:border-b-0 lg:border-r">
          <span className="absolute left-2 top-2 z-10 bg-black/55 px-2 py-0.5 text-xs font-bold text-white">
            {activeIndex + 1}/{total}
          </span>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-1 top-1/2 z-10 flex h-10 w-8 -translate-y-1/2 items-center justify-center bg-black/40 text-white hover:bg-black/55"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <img
            src={active.url}
            alt={active.alt}
            className="aspect-[4/3] w-full bg-gray-100 object-contain lg:aspect-[16/10]"
          />
          <button
            type="button"
            onClick={goNext}
            className="absolute right-1 top-1/2 z-10 flex h-10 w-8 -translate-y-1/2 items-center justify-center bg-black/40 text-white hover:bg-black/55"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <button
            type="button"
            className="absolute bottom-10 right-2 z-10 inline-flex items-center gap-1 border border-gray-400 bg-white/95 px-2 py-1 text-[10px] font-semibold text-gray-800 shadow sm:text-xs"
          >
            <ZoomIn className="h-3.5 w-3.5" />
            Enlarge
          </button>
          <p className="border-t border-gray-200 bg-[#f5f5f5] py-1.5 text-center text-xs text-gray-700">
            {active.caption}
          </p>
        </div>

        <div className="flex flex-col p-2">
          <ul className="grid flex-1 grid-cols-3 gap-1">
            {thumbSlice.map((img) => {
              const globalIndex = images.indexOf(img);
              const isActive = globalIndex === activeIndex;
              return (
                <li key={img.id}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(globalIndex)}
                    className={`block w-full border-2 p-0 ${isActive ? 'border-[#c80032]' : 'border-transparent'}`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="aspect-[4/3] w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="mt-2 flex items-center justify-between gap-2 border-t border-gray-200 pt-2">
            <button
              type="button"
              disabled={thumbPage <= 0}
              onClick={() => setThumbPage((p) => p - 1)}
              className="text-[10px] font-bold text-gray-600 disabled:opacity-40 sm:text-xs"
            >
              Prev
            </button>
            <div className="flex gap-1">
              {Array.from({ length: thumbPages }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setThumbPage(i)}
                  className={`h-2 w-2 rounded-full ${i === thumbPage ? 'bg-[#c80032]' : 'bg-gray-300'}`}
                  aria-label={`Thumbnail page ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              disabled={thumbPage >= thumbPages - 1}
              onClick={() => setThumbPage((p) => p + 1)}
              className="text-[10px] font-bold text-gray-600 disabled:opacity-40 sm:text-xs"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const SeahomeRentalPropertyDetailPage: React.FC = () => {
  const { locationSlug = '', lineSlug = '', stationSlug = '', apartmentId = '' } = useParams<{
    locationSlug: string;
    lineSlug: string;
    stationSlug: string;
    apartmentId: string;
  }>();

  const prefectureName = prefectureNameFromSlug(locationSlug);
  const line = useMemo(
    () => findRailLine(locationSlug, prefectureName, lineSlug),
    [locationSlug, prefectureName, lineSlug]
  );
  const station = useMemo(
    () => (line ? findStationOnLine(line.id, line.name, stationSlug) : undefined),
    [line, stationSlug]
  );
  const stationName = station?.name ?? stationSlug.replace(/-/g, ' ');

  const property = useMemo(
    () => getPropertyDetail(apartmentId, stationName),
    [apartmentId, stationName]
  );
  const otherInfo = useMemo(() => resolvePropertyOtherInfo(property), [property]);

  const resultsPath = rentalStationResultsPath(locationSlug, lineSlug, stationSlug);
  const propertyDetailPathFor = useMemo(
    () => (listingId: string) =>
      rentalPropertyDetailPath(locationSlug, lineSlug, stationSlug, listingId),
    [locationSlug, lineSlug, stationSlug]
  );
  const agencyListingCards = useMemo(
    () => agencyOtherListingCards(stationName, apartmentId),
    [stationName, apartmentId]
  );
  const recommendedCards = useMemo(
    () => recommendedListingCards(stationName, apartmentId),
    [stationName, apartmentId]
  );
  const rentMan = formatRentManYen(property.rentYen);
  const headerTitle = `${property.propertyType} ${property.title} ${property.roomNumber} ${property.layout}`;

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!line || !station) {
    return (
      <div className={`min-h-screen bg-white py-12 ${HUB_CONTAINER}`}>
        <p className="text-sm text-gray-700">Property not found.</p>
        <Link to={resultsPath} className="mt-4 inline-block text-sm font-semibold text-sky-700 underline">
          Back to listings
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-16 text-gray-900">
      <nav className={`border-b border-gray-200 py-2 text-[11px] text-gray-600 sm:text-xs ${HUB_CONTAINER}`}>
        <Link to="/seahome-real-estates/rental" className="hover:text-sky-700">
          Rental
        </Link>
        <span className="mx-1">›</span>
        <span>{prefectureName}</span>
        <span className="mx-1">›</span>
        <span>{line.name}</span>
        <span className="mx-1">›</span>
        <Link to={resultsPath} className="hover:text-sky-700">
          {stationName} Station
        </Link>
        <span className="mx-1">›</span>
        <span className="text-gray-900">{property.roomNumber}</span>
      </nav>

      <header className="text-white" style={{ backgroundColor: CRIMSON }}>
        <div className={`flex flex-wrap items-center justify-between gap-3 py-3 sm:py-4 ${HUB_CONTAINER}`}>
          <div className="flex min-w-0 items-center gap-3">
            <span className="text-3xl" role="img" aria-hidden>
              👋
            </span>
            <h1 className="text-sm font-bold leading-snug sm:text-base lg:text-lg">{headerTitle}</h1>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              className="inline-flex items-center gap-1 border border-white/80 bg-white/10 px-2 py-1 text-[10px] font-semibold sm:text-xs"
            >
              <Share2 className="h-3.5 w-3.5" />
              Share
            </button>
            <button
              type="button"
              className="inline-flex items-center gap-1 border border-white/80 bg-white/10 px-2 py-1 text-[10px] font-semibold sm:text-xs"
            >
              <User className="h-3.5 w-3.5" />
              Send to friend
            </button>
          </div>
        </div>
      </header>

      <div className={`relative ${HUB_CONTAINER}`}>
        <aside className="pointer-events-none fixed left-2 top-1/2 z-30 hidden -translate-y-1/2 lg:left-4 xl:block">
          <nav className="pointer-events-auto w-14 border border-gray-300 bg-white/95 text-center shadow-md">
            {SIDEBAR_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollTo(item.id === 'top' ? 'top' : item.id)}
                className="block w-full border-b border-gray-200 px-1 py-2 text-[9px] font-bold leading-tight text-gray-700 transition hover:bg-[#fff5f6] hover:text-[#c80032] last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        <div id="top" className="pt-4 lg:pl-0">
          <section className="flex flex-wrap items-start justify-between gap-3 border border-gray-300 bg-white p-4">
            <div>
              <p className="text-lg font-bold sm:text-xl" style={{ color: CRIMSON }}>
                Rent:{' '}
                <span className="text-2xl sm:text-3xl">{rentMan}</span>
                <span className="text-base sm:text-lg"> 万円</span>
              </p>
              <ul className="mt-2 space-y-0.5 text-sm text-gray-800">
                <li>Management fee: {formatYen(property.managementFeeYen)}</li>
                <li>Security deposit: {property.depositMonths} month(s)</li>
                <li>Key money: {property.keyMoneyMonths} month(s)</li>
                <li className="pt-1 text-xs text-gray-600">{property.stationAccess}</li>
              </ul>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1 border border-gray-300 bg-white px-3 py-2 text-[11px] font-bold text-gray-700 sm:text-xs"
              >
                <Heart className="h-4 w-4" />
                Favorites
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-1 border border-gray-300 bg-white px-3 py-2 text-[11px] font-bold text-gray-700 sm:text-xs"
              >
                <Bell className="h-4 w-4" />
                Email alerts
              </button>
            </div>
          </section>

          <section className="mt-4" aria-label="Property photos">
            <PropertyGallery images={property.gallery} />
          </section>

          <SeahomeRentalPropertySpecSection
            property={property}
            onShowMap={() => scrollTo('area')}
          />

          <SeahomeRentalPropertyInquirySection agency={property.listingAgency} />

          <SeahomeRentalPropertyFeaturesSection features={property.features} />
          <SeahomeRentalPropertyCostsSection property={property} />

          <SeahomeRentalPropertyOtherInfoSection info={otherInfo} />

          <SeahomeRentalPropertyAppealSection appealText={property.appealText} />

          <SeahomeRentalPropertySurroundingsMapSection
            sectionTitle={`Surroundings · ${property.title} ${property.roomNumber} ${property.layout}`}
            mapConfig={property.surroundingsMap}
            nearStations={property.transport}
            listingMapContext={{
              locationSlug,
              lineSlug,
              stationSlug,
              listingId: apartmentId,
              stationName,
            }}
          />

          <SeahomeRentalPropertyQuickInquirySection
            propertyTitle={`[${property.propertyType}] ${property.title} ${property.roomNumber} ${property.layout}`}
            storeCode={property.listingAgency.managementNumber}
          />

          <SeahomeRentalListingCompanySection
            company={property.listingCompany}
            onShowMap={() => scrollTo('area')}
          />

          <SeahomeRentalListingCompanyFooterSection
            company={property.listingCompany}
            listingsPath={resultsPath}
            faqAnswersPath="#company-faq"
            companyMoreInfoPath="#company"
          />

          <SeahomeRentalPropertyBottomListingsSection
            branchName={property.listingCompany.branchName}
            agencyCards={agencyListingCards}
            recommendedCards={recommendedCards}
            propertyDetailPath={propertyDetailPathFor}
          />

          <p className="mt-6 text-center">
            <Link
              to={resultsPath}
              className="inline-flex items-center gap-1 text-sm font-semibold text-sky-800 underline"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to {stationName} Station listings
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SeahomeRentalPropertyDetailPage;
