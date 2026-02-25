export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Notynox Engineering Limited",
    url: "https://notynox.co.ke",
    logo: "https://notynox.co.ke/logo.png",
    description:
      "Leading civil engineering and construction company in Nairobi, Kenya. Specialists in road construction, structural engineering, building development, and water infrastructure.",
    foundingDate: "2013",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
      postalCode: "00100",
      postOfficeBoxNumber: "11658",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+254-720-843-234",
      contactType: "customer service",
      availableLanguage: ["English", "Swahili"],
    },
    sameAs: [],
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: -1.286389,
        longitude: 36.817223,
      },
      geoRadius: "2000000",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://notynox.co.ke",
    name: "Notynox Engineering Limited",
    image: "https://notynox.co.ke/og-image.jpg",
    priceRange: "KSh KSh KSh",
    telephone: "+254720843234",
    email: "notynox.engineering@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressRegion: "Nairobi County",
      addressCountry: "KE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -1.286389,
      longitude: 36.817223,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    hasMap: "https://www.google.com/maps?q=Nairobi+Kenya",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  );
}
