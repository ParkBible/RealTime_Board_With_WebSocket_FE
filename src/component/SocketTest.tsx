import React, {useEffect, useState} from "react";
import {WEB_SOCKET} from "../ApiUrl";
import {useNavigate} from "react-router-dom";
import SocketConnect from "./SocketConnect";
import {closeSocket, send, setSocket} from "../redux/socket.reducer";
import {useDispatch, useSelector} from "react-redux";

export default function SocketTest() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const socket = useSelector((state: any) => state.socket.socket);
    const ws = useSelector((state: any) => state.socket.ws);

    const [isReady, setIsReady] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([]);
    const [request, setRequest] = React.useState<{nickname: string}>({nickname: ""});
    const [dataList, setDataList] = React.useState<any[]>([]);

    // useEffect(() => {
    //     dispatch(setSocket({url: WEB_SOCKET}));
    // }, []);

    useEffect(() => {
        if (!socket) {
            const socket = new WebSocket(WEB_SOCKET);
            socket.onopen = () => setIsReady(true);
            socket.onclose = () => setIsReady(false);
            socket.onmessage = (message) => setData([...data, message.data]);

            dispatch(setSocket({socket: socket}));
        }

        return () => {
            dispatch(setSocket(null));
        }
    }, []);

    // useEffect(() => {
    //     setDataList([...dataList, data])
    // }, [data]);

    const onSend = () => {
        dispatch(send({message: "테스트"}));
    }

    const logout = () => {
        localStorage.removeItem("nickname");
        // dispatch(closeSocket())
        // dispatch(setSocket(null));
        navigate("/login");
    }

    return (
        <div>
            <div>
                "{localStorage.getItem("nickname")}" 으로 접속함
                <button onClick={logout}>
                    로그아웃
                </button>
            </div>
            <br/>

            <div>
                {/*Ready: {ready ? "true" : "false"}*/}
            </div>
            <div>
                {/*Data: {data}*/}
            </div>
            <button onClick={onSend}>
                send
            </button>

            <br/><br/>
            <div>
                {dataList.map((data, index) => {
                    return (
                        <div key={index}>
                            {data}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}