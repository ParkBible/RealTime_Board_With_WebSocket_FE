import {useState} from "react";
import {useNavigate} from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [nickname, setNickname] = useState<string>("");

    const onChange = (event: any) => {
        setNickname(event.target.value);
    }

    const onClick = () => {
        localStorage.setItem("nickname", nickname);
        navigate("/socket");
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