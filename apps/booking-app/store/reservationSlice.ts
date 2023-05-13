import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Room, RoomOption } from "./accomondationSlice";
import { RootState } from ".";

interface numberOptions{
    adults: number;
    kids: number;
    rooms: number;
}

export interface SelectedOptions{
    roomId: string;
    roomOption: RoomOption;
}

interface Reservation {
    id?: string;
    destination: string;
    checkInDate: string;
    checkOutDate: string;
    roomOptions: SelectedOptions[];
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
        addRoomToReservation: (state, action: PayloadAction<{ id: string, option: RoomOption }>) => {
            state.roomOptions.push({ roomId: action.payload.id, roomOption: action.payload.option})
            state.totalPrice += action.payload.option.price;
        },
        removeRoomFromReservation: (state, action: PayloadAction<RoomOption>) => {
            state.roomOptions = state.roomOptions.filter(room => room.roomOption.id !== action.payload.id);
            state.totalPrice -= action.payload.price;
        }
    }
});

export const { setReservationInfo, addRoomToReservation, removeRoomFromReservation } = reservationSlice.actions

export const selectRoomsOptions = (state: RootState) => state.reservation.roomOptions;

export default reservationSlice.reducer;