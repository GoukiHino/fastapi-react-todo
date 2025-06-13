import api from "./axios";
import type {components} from "../types/api-types";
import {fetchMe} from "./user";

export type TodoCreate = components["schemas"]["TodoCreate"];
export type TodoResponse = components["schemas"]["TodoResponse"];

export const fetchTodos = async ():Promise<TodoResponse[]> => {
    const user = await fetchMe();
    return user.todos;
};

export const createTodo = async (data: TodoCreate): Promise<TodoResponse> => {
    const response = await api.post("/todos", data);
    return response.data;
};

export const deleteTodo = async (id: string): Promise<TodoResponse> => {
    const response = await api.delete(`/todos/${id}`);
    return response.data;
};

export const doneTodo = async (id: string): Promise<TodoResponse> => {
    const response = await api.put(`/todos/${id}/done`);
    return response.data;
};