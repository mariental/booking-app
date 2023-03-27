import { createSlice } from "@reduxjs/toolkit";

interface numberOptions{
    adults: number;
    kids: number;
    rooms: number;
}

interface Reservation {
    id: string;
    destination: string;
    checkInDate: string;
    checkOutDate: string;
}

const reservationSlice = createSlice({
    name: 'reservation',
    initialState: 0,
    reducers: {

    }
});

export default reservationSlice.reducer;