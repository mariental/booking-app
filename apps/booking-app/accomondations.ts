export interface Image {
  id: string;
  src: string;
  title: string;
}


export interface Accommodation {
  id: string,
  mainImage: Image;
  images: Image[];
  name: string;
  location: string;
  price: number;
  rate: number;
  description: string;
  facilities: string[];
}

export const accommodation: Accommodation[] = [
  {
    id: '1',
    mainImage: {
      id: '0',
      src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      title: 'Skandynawski dom'
    },
    images: [
      {
        id: '1',
        src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
        title: 'Skandynawski dom'
      },
      {
        id: '2',
        src: 'https://images.unsplash.com/photo-1561554854-ae60cb36ebe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        title: 'Skandynawski dom - wnętrze'
      },
      {
        id: '3',
        src: 'https://images.unsplash.com/photo-1597218859878-0e6cad008639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        title: 'Skandynawski dom - wnętrze'
      },
      {
        id: '4',
        src: 'https://images.unsplash.com/photo-1615911577983-e2bb805354b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80',
        title: 'Skandynawski dom - wnętrze'
      }
    ],
    name: 'Skandynawski dom',
    location: 'Sundsvall, Szwecja',
    price: 850,
    rate: 4,
    description: 'Ta urocza skandynawska chatka położona jest w spokojnej okolicy i oferuje gościom wiele udogodnień. Chatka składa się z dwóch przytulnych sypialni, salonu z kominkiem oraz w pełni wyposażonej kuchni i łazienki. Dom posiada również przestronny taras, który zapewnia wspaniałe widoki na okolicę oraz miejsce do relaksu na świeżym powietrzu. Chatka jest idealnym miejscem na romantyczny wypad dla pary lub spokojny wypoczynek dla niewielkiej grupy przyjaciół lub rodziny. Wykończenie wnętrza w stylu skandynawskim nadaje chatce przytulnego charakteru, a drewniane elementy dodają uroku i ciepła.',
    facilities: ['WiFi', 'Kominek', 'Kuchnia', 'Widok']
  },
  {
    id: '2',
    mainImage: {
      id: '0',
      src: 'https://images.unsplash.com/photo-1589129140837-67287c22521b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
      title: 'Skandynawski dom'
    },
    images: [],
    name: 'Dom w górach',
    location: 'Sion, Szwajcaria',
    price: 850,
    rate: 5,
    description: 'Ten uroczy domek w górach znajduje się w malowniczej okolicy, w otoczeniu lasów i górskich szczytów. Składa się z przytulnego salonu z kominkiem, kuchni i jadalni oraz trzech wygodnych sypialni. Dom posiada również taras z pięknym widokiem na góry oraz ogród z miejscem do grillowania. Jest to idealne miejsce na wakacyjny wypoczynek dla miłośników natury, turystyki górskiej i aktywnego wypoczynku.',
    facilities: []
  },
  {
    id: '3',
    mainImage: {
      id: '0',
      src: 'https://images.unsplash.com/photo-1574573146255-2670cff03427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
      title: 'Skandynawski dom'
    },
    images: [],
    name: 'Leśna chata',
    location: 'Cisna, Polska',
    price: 850,
    rate: 4.5,
    description: 'Ta urocza drewniana chatka położona jest wśród pięknych lasów i zapewnia idealny wypoczynek z dala od zgiełku miasta. Składa się z jednego przytulnego pokoju z kominkiem, aneksu kuchennego i łazienki. Dom posiada również obszerny taras, który zapewnia wspaniałe widoki na okolicę oraz miejsce do relaksu na świeżym powietrzu. To idealne miejsce na romantyczny wypad dla pary lub na spokojny odpoczynek wśród natury.',
    facilities: []
  },
  {
    id: '4',
    mainImage: {
      id: '0',
      src: 'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
      title: 'Skandynawski dom'
    },
    images: [],
    name: 'Dom nad morzem',
    location: 'Argos, Grecja',
    price: 850,
    rate: 4,
    description: 'Piękny dom wakacyjny zlokalizowany blisko plaży, z przestronnym salonem, jadalnią i w pełni wyposażoną kuchnią. Posiada także obszerny taras z meblami ogrodowymi oraz cztery wygodne sypialnie. Idealny na rodzinne wakacje lub pobyt z przyjaciółmi.',
    facilities: []
  },
]

