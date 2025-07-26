interface StructuredDataProps {
  type: 'restaurant' | 'local-business' | 'about' | 'menu';
}

export function StructuredData({ type }: StructuredDataProps) {
  const getSchemaData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": "Restaurant",
      "name": "Station2290",
      "description": "Уютная кофейня в центре Махачкалы. Свежеобжаренный кофе, авторские коктейли и изысканные десерты.",
      "url": "https://station2290.ru",
      "telephone": "+7 (8722) 22-90-22",
      "email": "info@station2290.ru",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "ул. Примерная, 2290",
        "addressLocality": "Махачкала",
        "addressRegion": "Республика Дагестан",
        "postalCode": "367000",
        "addressCountry": "RU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "42.9849",
        "longitude": "47.5047"
      },
      "openingHours": [
        "Mo-Th 08:00-22:00",
        "Fr-Sa 08:00-23:00", 
        "Su 09:00-22:00"
      ],
      "servesCuisine": ["Coffee", "Cocktails", "Desserts", "European"],
      "priceRange": "₽₽",
      "currenciesAccepted": "RUB",
      "paymentAccepted": "Cash, Credit Card",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "127"
      },
      "image": [
        "https://station2290.ru/images/restaurant-1.jpg",
        "https://station2290.ru/images/restaurant-2.jpg",
        "https://station2290.ru/images/restaurant-3.jpg"
      ],
      "sameAs": [
        "https://t.me/station2290",
        "https://instagram.com/station2290_mhk",
        "https://vk.com/station2290"
      ]
    };

    switch (type) {
      case 'restaurant':
      case 'local-business':
        return baseData;
      
      case 'menu':
        return {
          ...baseData,
          "hasMenu": {
            "@type": "Menu",
            "name": "Меню Station2290",
            "description": "Полное меню кофейни Station2290 с кофе, коктейлями и десертами",
            "hasMenuSection": [
              {
                "@type": "MenuSection",
                "name": "Кофе",
                "description": "Свежеобжаренный кофе собственной обжарки",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": "Эспрессо",
                    "description": "Классический итальянский эспрессо",
                    "offers": {
                      "@type": "Offer",
                      "price": "150",
                      "priceCurrency": "RUB"
                    }
                  },
                  {
                    "@type": "MenuItem", 
                    "name": "Капучино",
                    "description": "Эспрессо с взбитым молоком",
                    "offers": {
                      "@type": "Offer",
                      "price": "220",
                      "priceCurrency": "RUB"
                    }
                  },
                  {
                    "@type": "MenuItem",
                    "name": "Латте", 
                    "description": "Нежное сочетание эспрессо и молока",
                    "offers": {
                      "@type": "Offer",
                      "price": "250",
                      "priceCurrency": "RUB"
                    }
                  }
                ]
              },
              {
                "@type": "MenuSection",
                "name": "Коктейли",
                "description": "Авторские и классические коктейли",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": "Мохито",
                    "description": "Классический мохито с мятой и лаймом",
                    "offers": {
                      "@type": "Offer",
                      "price": "350",
                      "priceCurrency": "RUB"
                    }
                  },
                  {
                    "@type": "MenuItem",
                    "name": "Station Spritz",
                    "description": "Авторский коктейль с просекко",
                    "offers": {
                      "@type": "Offer",
                      "price": "450",
                      "priceCurrency": "RUB"
                    }
                  }
                ]
              },
              {
                "@type": "MenuSection",
                "name": "Десерты",
                "description": "Изысканные десерты собственного производства",
                "hasMenuItem": [
                  {
                    "@type": "MenuItem",
                    "name": "Тирамису",
                    "description": "Классический итальянский десерт",
                    "offers": {
                      "@type": "Offer",
                      "price": "320",
                      "priceCurrency": "RUB"
                    }
                  },
                  {
                    "@type": "MenuItem",
                    "name": "Дагестанская пахлава",
                    "description": "Традиционная восточная сладость",
                    "offers": {
                      "@type": "Offer",
                      "price": "220",
                      "priceCurrency": "RUB"
                    }
                  }
                ]
              }
            ]
          }
        };

      case 'about':
        return {
          ...baseData,
          "foundingDate": "2020",
          "founder": {
            "@type": "Organization",
            "name": "Station2290 Team"
          },
          "employee": [
            {
              "@type": "Person",
              "name": "Амина Магомедова",
              "jobTitle": "Главный бариста",
              "description": "Мастер кофейного дела с 8-летним опытом"
            },
            {
              "@type": "Person", 
              "name": "Салим Алиев",
              "jobTitle": "Шеф-кондитер",
              "description": "Творец наших изысканных десертов"
            },
            {
              "@type": "Person",
              "name": "Марьям Исаева", 
              "jobTitle": "Бармен-миксолог",
              "description": "Автор наших фирменных коктейлей"
            }
          ]
        };

      default:
        return baseData;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchemaData(), null, 2)
      }}
    />
  );
}