import {atom} from "recoil";
import type {UserResponse} from "../api/user";

export const authState = atom<UserResponse | null>({
    key: "authState",
    default: null,
});