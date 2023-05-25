import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Option {
    room: any;
    roomOption: any;
}

export interface Reservation {
    destination: string;
    checkInDate: string;
    checkOutDate: string;
    accommondationName: string,
    accommondationAddress: string,
    adults: number;
    kids: number;
    selectedOptions: Option[];
    totalPrice: number;
}

const initialState: Reservation = {
    destination: '',
    checkInDate: '',
    checkOutDate: '',
    accommondationName: '',
    accommondationAddress: '',
    adults: 0,
    kids: 0,
    selectedOptions: [],
    totalPrice: 0
}

export const calculateDuration = (checkIn, checkOut): number => {
    const date1 = new Date(checkIn);
    const date2 = new Date(checkOut);
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setReservationInfo: (state, action) => {
            state.destination = action.payload.destination;
            state.checkInDate = action.payload.checkInDate;
            state.checkOutDate = action.payload.checkOutDate;
            state.adults = action.payload.adults;
            state.kids = action.payload.kids;
        },
        setAccommondationInfo: (state, action) => {
            state.accommondationName = action.payload.accommondationName;
            state.accommondationAddress = action.payload.accommondationAddress;
        },
        addRoomToReservation: (state, action: PayloadAction<{ room: any, option: any }>) => {
            state.selectedOptions.push({ room: action.payload.room, roomOption: action.payload.option })
            const days = calculateDuration(state.checkInDate, state.checkOutDate);
            const price = action.payload.option.price*days
            state.totalPrice += price;
        },
        removeRoomFromReservation: (state, action: PayloadAction<any>) => {
            state.selectedOptions = state.selectedOptions.filter((option) => option.room.id !== action.payload.id);
            const days = calculateDuration(state.checkInDate, state.checkOutDate);
            const price = action.payload.price*days
            state.totalPrice -= price;
        },
        removeReservation: () => {

        }
    }
});

export const { setReservationInfo, setAccommondationInfo ,addRoomToReservation, removeRoomFromReservation, removeReservation } = reservationSlice.actions

export default reservationSlice.reducer;