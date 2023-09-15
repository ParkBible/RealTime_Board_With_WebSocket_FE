export interface RepleRequest {
    seq: number;
    nickname: string;
    content: string;
}

export const defaultRepleRequest = {
    seq: 0,
    nickname: "",
    content: ""
}

