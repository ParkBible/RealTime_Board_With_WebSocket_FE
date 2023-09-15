export interface PostsResponse {
    posts: PostResponse[];
}

export const defaultPostsResponse: PostsResponse = {
    posts: []
}

export interface PostResponse {
    seq: number;
    nickname: string;
    title: string;
}

export const defaultPostResponse: PostResponse = {
    seq: 0,
    nickname: "",
    title: ""
}

export interface PostDetailResponse {
    title: string;
    content: string;
    reples: RepleResponse[];
}

export const defaultPostDetailResponse: PostDetailResponse = {
    title: "",
    content: "",
    reples: []
}

export interface RepleResponse {
    seq: number;
    nickname: string;
    content: string;
}