import React, {useEffect, useState} from "react";
import {WEB_SOCKET} from "../ApiUrl";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import socketConnect, {isReady, send} from "./SocketConnect";
import SocketConnect from "./SocketConnect";

export default function SocketTest() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const socket = useSelector((state: any) => state.socket.socket);
    const ws = useSelector((state: any) => state.socket.ws);

    const [isReady, setIsReady] = useState<boolean>(false);
    const [data, setData] = useState<any[]>([]);
    const [request, setRequest] = React.useState<{nickname: string}>({nickname: ""});
    const [dataList, setDataList] = React.useState<any[]>([]);

    useEffect(() => {
        SocketConnect(WEB_SOCKET, localStorage.getItem("nickname")!!, messageCallback);
    }, []);

    const messageCallback = (msg: string) => {
        setDataList(prevState => (
            [...prevState, msg]
        ));
    }

    const onSend = () => {
        send("test")
    }

    const logout = () => {
        localStorage.removeItem("nickname");
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
                Ready: {isReady ? "true" : "false"}
            </div>
            <div>
                Data: {data}
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