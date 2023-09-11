import React, {useEffect, useRef} from "react";
import {SocketConnect} from "./SocketConnect";

export default function SocketTest() {
    const [ready, data, send] = SocketConnect("ws://localhost:8080/test");
    const [dataList, setDataList] = React.useState<any[]>([]);

    useEffect(() => {
        if (ready) {
            send(localStorage.getItem("nickname"));
        }
    }, [ready]);

    useEffect(() => {
        setDataList([...dataList, data])
    }, [data]);

    const onSend = () => {
        send("테스트");
    }

    return (
        <div>
            <div>
                Ready: {ready ? "true" : "false"}
            </div>
            <div>
                Data: {data}
            </div>
            <button onClick={onSend}>
                send
            </button>

            <div>
                {dataList.map((data, index) => {
                    return (
                        <div key={index}>{data}</div>
                    )
                })}
            </div>
        </div>
    )
}