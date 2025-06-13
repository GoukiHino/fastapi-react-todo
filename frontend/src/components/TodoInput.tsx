import type {ChangeEvent, FormEvent} from "react";
import {useState} from "react";
import {useSetRecoilState} from "recoil";
import {Box, Button, TextField} from "@mui/material";
import {todoListState} from "../recoil/todoState";
import type {TodoCreate} from "../api/todo";
import {createTodo} from "../api/todo";

const TodoInput = () => {
    const [form, setForm] = useState<TodoCreate>({title: "", description: "", due: null});
    const setTodos = useSetRecoilState(todoListState);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleAdd = async (e: FormEvent) => {
        e.preventDefault();
        const todo = await createTodo(form);
        setTodos(prev => [...prev, todo]);
        setForm({title: "", description: "", due: null});
    };

    return (
        <Box
            component="form"
            onSubmit={handleAdd}
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                mb: 3,
                p: 3,
                borderRadius: 1,
                boxShadow: 3
            }}
        >
            <TextField
                name="title"
                label="Title"
                value={form.title}
                onChange={handleChange}
                required
            />
            <TextField
                name="description"
                label="Description"
                value={form.description}
                onChange={handleChange}
                multiline
                rows={3}
            />
            <TextField
                name="due"
                label="Due"
                type="datetime-local"
                value={form.due}
                InputLabelProps={{shrink: true}}
                onChange={handleChange}
            />
            <Button type="submit" variant="contained">Add</Button>
        </Box>
    );
};

export default TodoInput;