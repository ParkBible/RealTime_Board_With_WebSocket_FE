export const HOST = "http://localhost:8080";
export const LOGIN = HOST + "/login";
export const GET_POSTS = HOST + "/post";
export const GET_POST = (seq: number) => HOST + `/post/${seq}`
export const WRITE_REPLE = HOST + "/reple";

export const WEB_SOCKET = "ws://localhost:8080/test";