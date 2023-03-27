import { createSlice } from "@reduxjs/toolkit";

interface Image {
    id: string;
    src: string;
    title: string;
}

interface Reservation {
    name: string;
    duration: string;
    date: string;
    option: string;
}

interface Review {
    id: string;
    title: string;
    content: string;
    author: string;
    publicationDate: string;
    rate: number;
    reservationInfo: Reservation;
}

interface Rate {
    name: string;
    value: number;
    quantity: number;
}

interface Bed {
    type: string;
    quantity: number;
}

interface Facility {
    name: string;
    icon: React.ReactElement;
}

interface RoomOption {
    id: string;
    numberOfPeople: number;
    options: string[];
    price: number;
}

interface Room {
    id: string;
    name: string;
    mainImage: Image;
    beds: Bed[];
    facilities: Facility[];
    oprions: RoomOption[]; 
}

interface Accommodation {
    id: string,
    mainImage: Image;
    images: Image[];
    name: string;
    type: string;
    city: string;
    country: string;
    pricePerNight: number;
    ratings: Rate[];
    reviews: Review[];
    description: string;
    facilities: string[];
    rooms: Room[];
}


const accomondationSlice = createSlice({
    name: 'accomondation',
    initialState: 0,
    reducers: {

    }
});

export default accomondationSlice.reducer;