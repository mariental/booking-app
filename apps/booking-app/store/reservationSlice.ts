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

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setReservationInfo: (state, action) => {
            state.destination = action.payload.destination;
            state.checkInDate = action.payload.checkInDate;
            state.checkOutDate = action.payload.checkOutDate;
            state.accommondationName = action.payload.accommondationName;
            state.accommondationAddress = action.payload.accommondationAddress;
        },
        addRoomToReservation: (state, action: PayloadAction<{ room: any, option: any }>) => {
            state.selectedOptions.push({ room: action.payload.room, roomOption: action.payload.option})
            state.totalPrice += action.payload.option.price;
        },
        removeRoomFromReservation: (state, action: PayloadAction<any>) => {
            state.selectedOptions = state.selectedOptions.filter(option => option.roomOption.id !== action.payload.id);
            state.totalPrice -= action.payload.price;
        },
        removeReservation: () => {

        }
    }
});

export const { setReservationInfo, addRoomToReservation, removeRoomFromReservation, removeReservation } = reservationSlice.actions

export default reservationSlice.reducer;