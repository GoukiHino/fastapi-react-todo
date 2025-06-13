import {useSetRecoilState} from "recoil";
import {Box, Checkbox, IconButton, Typography} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {todoListState} from "../recoil/todoState";
import type {TodoResponse} from "../api/todo";
import {deleteTodo, doneTodo, fetchTodos} from "../api/todo";

type Props = {
    todo: TodoResponse;
};

const TodoItem = ({todo}: Props) => {
    const setTodos = useSetRecoilState(todoListState);

    const handleToggle = async () => {
        await doneTodo(todo.id);
        const todos = await fetchTodos();
        setTodos(todos);
    };

    const handleDelete = async () => {
        await deleteTodo(todo.id);
        const todos = await fetchTodos();
        setTodos(todos);
    };

    return (
        <Box
            sx={{
                display: "flex",
                gap: 1.5,
                p: 1.5,
                borderRadius: 1,
                boxShadow: 3
        }}
        >
            <Checkbox checked={todo.is_done} onChange={handleToggle}/>
            <Box>
                <Typography variant="h6" sx={{wordBreak: "break-all"}}>{todo.title}</Typography>
                <Typography sx={{wordBreak: "break-all"}}>{todo.description}</Typography>
                <Typography variant="caption" color="text.secondary">
                    Due: {todo.due ? new Date(todo.due).toLocaleString(): "-"}
                </Typography>
            </Box>
            <IconButton sx={{ml: "auto"}} onClick={handleDelete}>
                <DeleteIcon/>
            </IconButton>
        </Box>
    );
};

export default TodoItem;