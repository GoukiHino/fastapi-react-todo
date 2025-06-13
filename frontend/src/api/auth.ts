import api from "./axios";
import type {components} from "../types/api-types";

export type Signin = components["schemas"]["Body_login_api_v1_auth_login_post"];
export type Token = components["schemas"]["Token"];

export const signin = async (data: Signin): Promise<Token> => {
    const params = new URLSearchParams();
    params.append("username", data.username);
    params.append("password", data.password);

    const response = await api.post("/auth/login", params, {
        headers: {"Content-Type": "application/x-www-form-urlencoded"}
    });
    return response.data;
};

export const signout = async (): Promise<void> => {
    await api.post("/auth/logout");
};