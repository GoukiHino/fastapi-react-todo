import {atom} from "recoil";
import type {TodoResponse} from "../api/todo";

export const todoListState = atom<TodoResponse[]>({
    key: "todoListState",
    default: [],
});