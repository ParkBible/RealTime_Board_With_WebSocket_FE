import {configureStore} from "@reduxjs/toolkit";
import socketReducer from "./socket.reducer";

const store = configureStore({
    reducer: {
        socket: socketReducer
    }
})

export default store;