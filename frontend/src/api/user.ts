import api from "./axios";
import type {components} from "../types/api-types";

export type UserCreate = components["schemas"]["UserCreate"];
export type UserResponse = components["schemas"]["UserResponse"];

export const fetchMe = async (): Promise<UserResponse> => {
    const response = await api.get("/users/me");
    return response.data;
};

export const signup = async (user: UserCreate): Promise<UserResponse> => {
    const response = await api.post("/users", user);
    return response.data;
};