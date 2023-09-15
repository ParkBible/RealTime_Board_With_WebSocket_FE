import React, {useState} from "react";
import {useEffect} from "react";
import axios from "axios";
import {GET_POST, WRITE_REPLE} from "../ApiUrl";
import {defaultPostDetailResponse, defaultPostResponse, PostDetailResponse, PostResponse} from "../dto/PostResponse";
import {useLocation} from "react-router-dom";
import {defaultRepleRequest, RepleRequest} from "../dto/RepleRequest";
import {useDispatch} from "react-redux";
import {send} from "../redux/socket.reducer";

export default function PostDetail() {
    const location = useLocation();
    const dispatch = useDispatch();

    const [response, setResponse] = useState<PostDetailResponse>(defaultPostDetailResponse);
    const [request, setRequest] = useState<RepleRequest>(defaultRepleRequest);

    useEffect(() => {
        getDetail();
    }, []);

    const getDetail = () => {
        axios.get(GET_POST(location.state.seq)).then(
            response => {
                setResponse(response.data);
            }
        );
    }

    const onContentChange = (event: any) => {
        setRequest({
            ...request,
            nickname: localStorage.getItem("nickname")!!,
            content: event.target.value
        })
    }

    const onButtonClick = () => {
        dispatch(send("댓글 작성: " + location.state.seq));
    }

    return (
        <div>
            <h1>
                {response.title}
            </h1>
            <p>
                {response.content}
            </p>

            댓글
            <table>
                <thead>
                <tr>
                    <th>
                        닉네임
                    </th>
                    <th>
                        내용
                    </th>
                </tr>
                </thead>
            <tbody>
                {response.reples.map((reple, index) => {
                    return (
                        <tr key={index}>
                            <td>
                                {reple.nickname}
                            </td>
                            <td>
                                {reple.content}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            </table>

            <input type="text" onChange={onContentChange}/>
            <button onClick={onButtonClick}>
                입력
            </button>
        </div>
    )
}