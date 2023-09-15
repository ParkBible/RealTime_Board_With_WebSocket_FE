import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {LOGIN} from "../ApiUrl";

export default function Login() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState<string>("");

    useEffect(() => {
        if (localStorage.getItem("nickname")) {
            navigate("/post");
        }
    }, []);

    const onChange = (event: any) => {
        setNickname(event.target.value);
    }

    const onClick = () => {
        axios.post(LOGIN, {nickname: nickname}).then(
            response => {
                localStorage.setItem("nickname", nickname);
                navigate("/post");
            }
        ).catch(
            error => alert("없는 닉네임입니다.")
        )
    }

    return (
        <div>
            닉네임
            <input type="text" onChange={event => onChange(event)}/>
            <button onClick={onClick}>
                로그인
            </button>
        </div>
    )
}