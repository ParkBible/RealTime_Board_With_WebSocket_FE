import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    // ws: {current: null},
    // socket: null,
    ready: false,
    data: [],
    send: (request) => {}
}

// export const ws = {
//     current: null
// }
//
// export let socket = null;

const socketSlice = createSlice({
    name: "socket",
    initialState: initialState,
    reducers: {
        // setSocket: (state, action) => {
        //     socket = action.payload.socket;
        //     ws.current = socket;
        // },
        // send: (state, action) => {
        //     ws.current?.send.bind(ws.current)(action.payload.message);
        //     // state.socket.send(action.payload.message);
        // },
        closeSocket: (state) => {
            state.isReady = false;
        },
        setData: (state, action) => {
            state.data = action.payload.data;
        }
    }
});

export const {setSocket, send, closeSocket} = socketSlice.actions;
export default socketSlice.reducer;