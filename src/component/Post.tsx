import React, {useEffect} from "react";
import axios from "axios";
import {GET_POSTS} from "../ApiUrl";
import {defaultPostsResponse, PostsResponse} from "../dto/PostResponse";
import PostDetail from "./PostDetail";
import UseBackNextCustom from "./UseBackCustom";
import {useNavigate} from "react-router-dom";

export default function Post() {
    const [response, setResponse] = React.useState<PostsResponse>(defaultPostsResponse);
    const navigate = useNavigate();

    // const backCustomEvent = () => {
    //     if (seq !== 0) {
    //         setPreviousSeq(seq);
    //         setSeq(0);
    //     }
    // }
    //
    // UseBackNextCustom(backCustomEvent, nextCustomEvent);

    useEffect(() => {
        axios.get(GET_POSTS).then(
            response => {
                setResponse(response.data);
            }
        )
    }, []);

    return (
        <table>
            <thead>
            <tr>
                <th>
                    번호
                </th>
                <th>
                    글쓴이
                </th>
                <th>
                    제목
                </th>
            </tr>
            </thead>
            {
                response.posts.map((post, index) => {
                    return (
                        <tbody className="hover-event" key={index}>
                        <tr onClick={() => navigate("/detail", {state: {seq: post.seq}})}>
                            <td>
                                {post.seq}
                            </td>
                            <td>
                                {post.nickname}
                            </td>
                            <td>
                                {post.title}
                            </td>
                        </tr>
                        </tbody>
                    )
                })
            }
        </table>
    )
}