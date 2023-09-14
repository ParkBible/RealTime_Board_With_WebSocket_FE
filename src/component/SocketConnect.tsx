import React, {useEffect, useRef, useState} from "react";

export default function SocketConnect(url: string): [boolean, any[], (request: any) => void] {
    const [isReady, setIsReady] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([]);

    const ws: any = useRef(null);

    useEffect(() => {
        const socket = new WebSocket(url);

        socket.onopen = () => setIsReady(true);
        socket.onclose = () => setIsReady(false);
        socket.onmessage = (message: any) => setData([...data, message.data]);

        ws.current = socket;

        return () => {
            socket.close();
        }
    }, []);

    return [isReady, data, ws.current?.send.bind(ws.current)];
}