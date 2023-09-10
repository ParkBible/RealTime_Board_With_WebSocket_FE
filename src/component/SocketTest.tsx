import React from "react"

export default function SocketTest() {
    const ws = new WebSocket("ws://localhost:8080/test");

    ws.onmessage = (message: any) => {
        console.log(message);
    }

    const sendMessage = () => {
        ws.send("asdf")
    }

    return (
        <div>
            <button onClick={sendMessage}>send</button>
        </div>
    )
}