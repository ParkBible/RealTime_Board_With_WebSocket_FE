import React, {useEffect, useRef, useState} from "react";
import {defaultMessage} from "../dto/Message";
import {MessageType} from "../constants/MessageType";

export const ws: {current: any} = {
    current: null
}
export let socket: any = null;
export let isReady: boolean = false;
export const send = (request: any) => {
    ws.current?.send.bind(ws.current)(JSON.stringify(request));
    // ws.current?.send(JSON.stringify(request));
}

export default function SocketConnect(url: string, nickname: string, messageCallback: (msg: string) => void) {
    const socket = new WebSocket(url);

    socket.onopen = () => {
        isReady = true;
        send({...defaultMessage, type: MessageType.NICKNAME, nickname: nickname});
    };
    socket.onclose = () => isReady = false;
    socket.onmessage = (message: any) => messageCallback(message.data);

    ws.current = socket;

    return () => {
        socket.close();
    }
}