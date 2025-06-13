import {useEffect} from "react";
import {useRecoilState} from "recoil";
import {Box} from "@mui/material";
import {todoListState} from "../recoil/todoState";
import {fetchTodos} from "../api/todo";
import TodoItem from "./TodoItem";

const TodoList = () => {
    const [todos, setTodos] = useRecoilState(todoListState);

    useEffect(() => {
        fetchTodos().then(setTodos);
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1.5
        }}
        >
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </Box>
    );
};

export default TodoList;