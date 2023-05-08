import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Room, RoomOption } from "./accomondationSlice";
import { RootState } from ".";

interface numberOptions{
    adults: number;
    kids: number;
    rooms: number;
}

interface Reservation {
    id?: string;
    destination: string;
    checkInDate: string;
    checkOutDate: string;
    roomOptions: RoomOption[];
    totalPrice: number;
}

const initialState: Reservation = {
    destination: '',
    checkInDate: '',
    checkOutDate: '',
    roomOptions: [],
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
        },
        addRoomToReservation: (state, action: PayloadAction<RoomOption>) => {
            state.roomOptions.push(action.payload);
            state.totalPrice += action.payload.price;
        },
        removeRoomFromReservation: (state, action: PayloadAction<string>) => {
            state.roomOptions = state.roomOptions.filter(room => room.id === action.payload);
        }
    }
});

export const { setReservationInfo, addRoomToReservation, removeRoomFromReservation } = reservationSlice.actions

export const selectRoomsOptions = (state: RootState) => state.reservation.roomOptions;

export default reservationSlice.reducer;