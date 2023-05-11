import { createSlice } from "@reduxjs/toolkit";

export interface Image {
    id: string;
    src: string;
    alt: string;
}

export interface Reservation {
    name: string;
    duration: string;
    date: string;
    option: string;
}

export interface Review {
    id: string;
    title: string;
    content: string;
    author: string;
    publicationDate: string;
    rate: number;
    reservationInfo: Reservation;
}

export interface Rate {
    name: string;
    value: number;
    quantity: number;
}

export interface Bed {
    type: string;
    quantity: number;
}

export interface Facility {
    id: string;
    name: string;
    icon: string;
}

export interface RoomOption {
    id: string;
    numberOfPeople: number;
    options: string[];
    price: number;
    maxPeople: number;
    cancellationType: string;
    mealIncluded: string | null;
}

export interface Room {
    id: string;
    name: string;
    mainImage: Image;
    isAvailable: boolean;
    maxPeople: number;
    beds: Bed[];
    facilities: Facility[];
    options: RoomOption[];
    unavailabilityDates: Date[];
}

export interface Accommodation {
    id: string;
    name: string;
    type: string;
    city: string;
    country: string;
    pricePerNight: number;
    description: string;
    rooms: Room[];
    ratings: Rate[];
    reviews: Review[];
    mainImage: Image;
    images: Image[];
    facilities: Facility[];
}

const initialState = [
    {
        id: '1',
        mainImage: {
            id: '0',
            src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
            alt: 'Skandynawski dom'
        },
        images: [
            {
                id: '1',
                src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
                alt: 'Skandynawski dom'
            },
            {
                id: '2',
                src: 'https://images.unsplash.com/photo-1561554854-ae60cb36ebe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                alt: 'Skandynawski dom - wnętrze'
            },
            {
                id: '3',
                src: 'https://images.unsplash.com/photo-1597218859878-0e6cad008639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                alt: 'Skandynawski dom - wnętrze'
            },
            {
                id: '4',
                src: 'https://images.unsplash.com/photo-1615911577983-e2bb805354b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80',
                alt: 'Skandynawski dom - wnętrze'
            }
        ],
        name: 'Skandynawski domek',
        type: 'Domy i apartamenty na wyłączność',
        city: 'Sundsvall',
        country: 'Szwecja',
        pricePerNight: 675,
        ratings: [
            {
                name: 'Overall',
                value: 4.8,
                quantity: 103
            },
            {
                name: 'Personel',
                value: 4.1,
                quantity: 2
            },
            {
                name: 'Udogodnienia',
                value: 4.9,
                quantity: 2
            },
            {
                name: 'Czystość',
                value: 4.8,
                quantity: 2
            },
            {
                name: 'Komfort',
                value: 4.6,
                quantity: 2
            },
            {
                name: 'Stosunek jakości do ceny ',
                value: 4.6,
                quantity: 2
            },
            {
                name: 'Lokalizacja',
                value: 4.4,
                quantity: 2
            },
        ],
        reviews: [
            {
                id: '1',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '2',
                title: 'Polecam do pracy i odpoczynku',
                content: 'Rewelacyjne miejsce pod każdym względem.',
                author: 'Tomasz Kowalski',
                publicationDate: '12-01-2023',
                rate: 4.5,
                reservationInfo: {
                    name: 'Pokój trzyosobowy',
                    duration: '3 noce',
                    date: 'styczeń 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '3',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '4',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            }
        ],
        description: 'Ta urocza skandynawska chatka położona jest w spokojnej okolicy i oferuje gościom wiele udogodnień. Chatka składa się z dwóch przytulnych sypialni, salonu z kominkiem oraz w pełni wyposażonej kuchni i łazienki. Dom posiada również przestronny taras, który zapewnia wspaniałe widoki na okolicę oraz miejsce do relaksu na świeżym powietrzu. Chatka jest idealnym miejscem na romantyczny wypad dla pary lub spokojny wypoczynek dla niewielkiej grupy przyjaciół lub rodziny. Wykończenie wnętrza w stylu skandynawskim nadaje chatce przytulnego charakteru, a drewniane elementy dodają uroku i ciepła.',
        facilities: [
            { id: '1', name: 'WiFi', icon: 'wifi' },
            { id: '2',  name: 'Zwierzęta są akceptowane', icon: 'pets'},
            { id: '3',  name: 'Pokoje z balkonami', icon: 'balcony' },
            { id: '4',  name: 'Całodobowa recepcja', icon: 'hotel'},
            { id: '5',  name: 'Dostęp za pomocą karty', icon: 'lock'},
            { id: '6',  name: 'Pokoje dla niepalących', icon: 'smoke_free'},
        ],
        rooms: [
            {
                id: '1',
                name: 'Pokój dwuosobowy z balkonem',
                mainImage: {
                    id: '0',
                    src: 'https://images.unsplash.com/photo-1535312800630-1c173409799a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    alt: 'Room image'
                },
                beds: [{ type: 'podwójne', quantity: 1 }],
                facilities: [
                    { id: '1',  name: '35 m²', icon: 'height'},
                    { id: '2',  name: 'WiFi', icon: 'wifi'},
                    { id: '3',  name: 'Widok na miasto', icon: 'panorama'},
                    { id: '4',  name: 'Prywatna łazienka', icon: 'bathtub'},
                    { id: '5',  name: 'Telewizor', icon: 'tv'},
                ],
                options: [
                    { id: '1', numberOfPeople: 1, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 200, maxPeople: 2, cancellationType: 'Oferta bezzwrotna', mealIncluded: null},
                    { id: '2', numberOfPeople: 1, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 230, maxPeople: 2, cancellationType: 'Bezpłatne odwołanie do trzech dni przed terminem', mealIncluded: null},
                    { id: '3', numberOfPeople: 2, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 280, maxPeople: 2, cancellationType: 'Bezpłatne odwołanie do trzech dni przed terminem', mealIncluded: null},
                    { id: '4', numberOfPeople: 2, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 300, maxPeople: 2, cancellationType: 'Bezpłatne odwołanie do trzech dni przed terminem', mealIncluded: 'Wliczona cena śniadania'},
                ],
                unavailabilityDates: [],
                maxPeople: 2,
                isAvailable: true,
            },
            {
                id: '2',
                name: 'Pokój trzyosobowy',
                mainImage: {
                    id: '0',
                    src: 'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    alt: 'Room image'
                },
                beds: [{ type: 'podwójne', quantity: 1 }, { type: 'pojedyncze', quantity: 2 }],
                facilities: [
                    { id: '6',  name: '46 m²', icon: 'height'},
                    { id: '7',  name: 'WiFi', icon: 'wifi'},
                    { id: '8',  name: 'Prywatna łazienka', icon: 'bathtub'},
                    { id: '9',  name: 'Klimatyzacja', icon: 'ac_unit'},
                ],
                options: [
                    { id: '1', numberOfPeople: 1, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 200, maxPeople: 3, cancellationType: 'Oferta bezzwrotna', mealIncluded: null},
                    { id: '2', numberOfPeople: 1, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 230, maxPeople: 3, cancellationType: 'Bezpłatne odwołanie do trzech dni przed terminem', mealIncluded: null},
                    { id: '2', numberOfPeople: 2, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 280, maxPeople: 3, cancellationType: 'Bezpłatne odwołanie do trzech dni przed terminem', mealIncluded: null},
                    { id: '3', numberOfPeople: 2, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 300, maxPeople: 3, cancellationType: 'Bezpłatne odwołanie do trzech dni przed terminem', mealIncluded: 'Wliczona cena śniadania'},
                    { id: '4', numberOfPeople: 3, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 330, maxPeople: 3, cancellationType: 'Oferta bezzwrotna', mealIncluded: null},
                    { id: '5', numberOfPeople: 3, options: ['Zapłać z wyprzedzeniem', 'Natychmiastowe potwierdzenie'], price: 350, maxPeople: 3, cancellationType: 'Bezpłatne odwołanie do trzech dni przed terminem', mealIncluded: null},
                ],
                unavailabilityDates: [],
                maxPeople: 3,
                isAvailable: true,
            }
        ]
    },
    {
        id: '2',
        mainImage: {
            id: '0',
            src: 'https://images.unsplash.com/photo-1659893167221-61537095b4f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=604&q=80',
            alt: 'Hotel'
        },
        images: [
            {
                id: '1',
                src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
                alt: 'Skandynawski dom'
            },
            {
                id: '2',
                src: 'https://images.unsplash.com/photo-1561554854-ae60cb36ebe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                alt: 'Skandynawski dom - wnętrze'
            },
            {
                id: '3',
                src: 'https://images.unsplash.com/photo-1597218859878-0e6cad008639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                alt: 'Skandynawski dom - wnętrze'
            },
            {
                id: '4',
                src: 'https://images.unsplash.com/photo-1615911577983-e2bb805354b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80',
                alt: 'Skandynawski dom - wnętrze'
            }
        ],
        name: 'Klimatyczny hotel',
        type: 'Hotel',
        city: 'Sztokholm',
        country: 'Szwecja',
        pricePerNight: 712,
        ratings: [
            {
                name: 'Overall',
                value: 4.7,
                quantity: 96
            },
            {
                name: 'Personel',
                value: 4.1,
                quantity: 2
            },
            {
                name: 'Udogodnienia',
                value: 4.9,
                quantity: 2
            },
            {
                name: 'Czystość',
                value: 4.8,
                quantity: 2
            },
            {
                name: 'Komfort',
                value: 4.6,
                quantity: 2
            },
            {
                name: 'Stosunek jakości do ceny ',
                value: 4.6,
                quantity: 2
            },
            {
                name: 'Lokalizacja',
                value: 4.4,
                quantity: 2
            },
        ],
        reviews: [
            {
                id: '1',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '2',
                title: 'Polecam do pracy i odpoczynku',
                content: 'Rewelacyjne miejsce pod każdym względem.',
                author: 'Tomasz Kowalski',
                publicationDate: '12-01-2023',
                rate: 4.5,
                reservationInfo: {
                    name: 'Pokój trzyosobowy',
                    duration: '3 noce',
                    date: 'styczeń 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '3',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '4',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            }
        ],
        description: 'Ten uroczy domek w górach znajduje się w malowniczej okolicy, w otoczeniu lasów i górskich szczytów. Składa się z przytulnego salonu z kominkiem, kuchni i jadalni oraz trzech wygodnych sypialni. Dom posiada również taras z pięknym widokiem na góry oraz ogród z miejscem do grillowania. Jest to idealne miejsce na wakacyjny wypoczynek dla miłośników natury, turystyki górskiej i aktywnego wypoczynku.',
        facilities: [],
        rooms: []
    },
    {
        id: '3',
        mainImage: {
            id: '0',
            src: 'https://images.unsplash.com/photo-1574573146255-2670cff03427?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
            alt: 'Skandynawski dom'
        },
        images: [
            {
                id: '1',
                src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
                alt: 'Skandynawski dom'
            },
            {
                id: '2',
                src: 'https://images.unsplash.com/photo-1561554854-ae60cb36ebe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                alt: 'Skandynawski dom - wnętrze'
            },
            {
                id: '3',
                src: 'https://images.unsplash.com/photo-1597218859878-0e6cad008639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                alt: 'Skandynawski dom - wnętrze'
            },
            {
                id: '4',
                src: 'https://images.unsplash.com/photo-1615911577983-e2bb805354b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80',
                alt: 'Skandynawski dom - wnętrze'
            }
        ],
        name: 'Leśna chata',
        type: 'Dom wakacyjny',
        city: 'Franshammar, Hrabstwo Gavleborg',
        country: 'Szwecja',
        pricePerNight: 630,
        ratings: [
            {
                name: 'Overall',
                value: 3.7,
                quantity: 6
            },
            {
                name: 'Personel',
                value: 4.1,
                quantity: 2
            },
            {
                name: 'Udogodnienia',
                value: 4.9,
                quantity: 2
            },
            {
                name: 'Czystość',
                value: 4.8,
                quantity: 2
            },
            {
                name: 'Komfort',
                value: 4.6,
                quantity: 2
            },
            {
                name: 'Stosunek jakości do ceny ',
                value: 4.6,
                quantity: 2
            },
            {
                name: 'Lokalizacja',
                value: 4.4,
                quantity: 2
            },
        ],
        reviews: [
            {
                id: '1',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '2',
                title: 'Polecam do pracy i odpoczynku',
                content: 'Rewelacyjne miejsce pod każdym względem.',
                author: 'Tomasz Kowalski',
                publicationDate: '12-01-2023',
                rate: 4.5,
                reservationInfo: {
                    name: 'Pokój trzyosobowy',
                    duration: '3 noce',
                    date: 'styczeń 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '3',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '4',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            }
        ],
        description: 'Ta urocza drewniana chatka położona jest wśród pięknych lasów i zapewnia idealny wypoczynek z dala od zgiełku miasta. Składa się z jednego przytulnego pokoju z kominkiem, aneksu kuchennego i łazienki. Dom posiada również obszerny taras, który zapewnia wspaniałe widoki na okolicę oraz miejsce do relaksu na świeżym powietrzu. To idealne miejsce na romantyczny wypad dla pary lub na spokojny odpoczynek wśród natury.',
        facilities: [],
        rooms: [
            {
                id: '1',
                name: 'Pokój dwuosobowy z balkonem',
                mainImage: {
                    id: '0',
                    src: 'https://images.unsplash.com/photo-1535312800630-1c173409799a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    alt: 'Room image'
                },
                beds: [{ type: 'podwójne', quantity: 1 }],
                facilities: [
                    { id: '1',  name: '35 m²', icon: 'HeightOutlinedIcon'},
                    { id: '2',  name: 'WiFi', icon: 'WifiIcon'},
                    { id: '3',  name: 'Widok na miasto', icon: 'PanoramaOutlinedIcon'},
                    { id: '4',  name: 'Prywatna łazienka', icon: 'BathtubOutlinedIcon'},
                    { id: '5',  name: 'Telewizor', icon: 'TvOutlinedIcon'},
                ],
                options: [],
                unavailabilityDates: [],
                maxPeople: 1,
                isAvailable: true,
            },
            {
                id: '1',
                name: 'Pokój trzyosobowy',
                mainImage: {
                    id: '0',
                    src: 'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                    alt: 'Room image'
                },
                beds: [{ type: 'podwójne', quantity: 1 }, { type: 'pojedyncze', quantity: 2 }],
                facilities: [
                    { id: '6',  name: '46 m²', icon: 'HeightOutlinedIcon'},
                    { id: '7',  name: 'WiFi', icon: 'WifiIcon'},
                    { id: '8',  name: 'Prywatna łazienka', icon: 'BathtubOutlinedIcon'},
                    { id: '9',  name: 'Klimatyzacja', icon: 'AcUnitOutlinedIcon'},
                ],
                options: [],
                unavailabilityDates: [],
                maxPeople: 1,
                isAvailable: true,
            }
        ]
    },
    {
        id: '4',
        mainImage: {
            id: '0',
            src: 'https://images.unsplash.com/photo-1563628721908-e8b1ec51027b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTQ5fHxzd2VkZW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            alt: 'Skandynawski dom'
        },
        images: [
            {
                id: '1',
                src: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
                alt: 'Skandynawski dom'
            },
            {
                id: '2',
                src: 'https://images.unsplash.com/photo-1561554854-ae60cb36ebe9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                alt: 'Skandynawski dom - wnętrze'
            },
            {
                id: '3',
                src: 'https://images.unsplash.com/photo-1597218859878-0e6cad008639?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                alt: 'Skandynawski dom - wnętrze'
            },
            {
                id: '4',
                src: 'https://images.unsplash.com/photo-1615911577983-e2bb805354b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=743&q=80',
                alt: 'Skandynawski dom - wnętrze'
            }
        ],
        name: 'Dom nad jeziorem',
        type: 'Dom wakacyjny',
        city: 'Rimbo',
        country: 'Szwecja',
        pricePerNight: 550,
        ratings: [
            {
                name: 'Overall',
                value: 4.8,
                quantity: 6
            },
            {
                name: 'Personel',
                value: 4.1,
                quantity: 2
            },
            {
                name: 'Udogodnienia',
                value: 4.9,
                quantity: 2
            },
            {
                name: 'Czystość',
                value: 4.8,
                quantity: 2
            },
            {
                name: 'Komfort',
                value: 4.6,
                quantity: 2
            },
            {
                name: 'Stosunek jakości do ceny ',
                value: 4.6,
                quantity: 2
            },
            {
                name: 'Lokalizacja',
                value: 4.4,
                quantity: 2
            },
        ],
        reviews: [
            {
                id: '1',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '2',
                title: 'Polecam do pracy i odpoczynku',
                content: 'Rewelacyjne miejsce pod każdym względem.',
                author: 'Tomasz Kowalski',
                publicationDate: '12-01-2023',
                rate: 4.5,
                reservationInfo: {
                    name: 'Pokój trzyosobowy',
                    duration: '3 noce',
                    date: 'styczeń 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '3',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            },
            {
                id: '4',
                title: 'Wyjątkowy',
                content: 'Po raz kolejny w tym samym miejscu i ciągle pozytywnie.',
                author: 'Anna Nowak',
                publicationDate: '01-03-2023',
                rate: 5.0,
                reservationInfo: {
                    name: 'Apartament z 1 sypialnią',
                    duration: '1 noc',
                    date: 'luty 2023',
                    option: 'rodzina'
                }
            }
        ],
        description: 'Piękny dom wakacyjny zlokalizowany blisko plaży, z przestronnym salonem, jadalnią i w pełni wyposażoną kuchnią. Posiada także obszerny taras z meblami ogrodowymi oraz cztery wygodne sypialnie. Idealny na rodzinne wakacje lub pobyt z przyjaciółmi.',
        facilities: [],
        rooms: []
    },
]

const accomondationSlice = createSlice({
    name: 'accomondation',
    initialState,
    reducers: {

    }
});

export default accomondationSlice.reducer;