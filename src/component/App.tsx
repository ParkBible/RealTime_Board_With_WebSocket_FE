import React from "react";
import SocketTest from "./SocketTest";
import Post from "./Post";
import {useEffect} from "react";
import PostDetail from "./PostDetail";
import {useDispatch} from "react-redux";
import {setSocket} from "../redux/socket.reducer";
import {WEB_SOCKET} from "../ApiUrl";

export default function App() {
    const [isLogin, setIsLogin] = React.useState<boolean>(false);
    const [postSeq, setPostSeq] = React.useState<number>(0);

    useEffect(() => {
        if (localStorage.getItem("nickname")) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
        }
    }, []);

    return (
        <div className="app">
            {
                isLogin && (
                    <SocketTest/>
                )
            }
            <Post/>
        </div>
    )
}