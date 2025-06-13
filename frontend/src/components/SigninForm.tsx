import type {ChangeEvent, FormEvent} from "react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useSetRecoilState} from "recoil";
import {Alert, Box, Button, TextField, Typography} from "@mui/material";
import {authState} from "../recoil/authState";
import type {Signin} from "../api/auth";
import {signin} from "../api/auth";
import {fetchMe} from "../api/user";

const SigninForm = () => {
    const [form, setForm] = useState<Signin>({username: "", password: "", scope: ""});
    const [error, setError] = useState<string | null>(null);
    const setUser = useSetRecoilState(authState);
    const navigate = useNavigate();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await signin(form);
            const user = await fetchMe();
            setUser(user);
            navigate("/");
        } catch (err: any) {
            setError(err?.response?.data?.detail);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{maxWidth: 320, mx: "auto"}}>
            <Typography variant="h5" align="center" mb={3}>Signin</Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                    p: 3,
                    borderRadius: 1,
                    boxShadow: 3
                }}
            >
                <TextField
                    name="username"
                    label="Username"
                    value={form.username}
                    onChange={handleChange}
                    required
                />
                <TextField
                    name="password"
                    type="password"
                    label="Password"
                    value={form.password}
                    onChange={handleChange}
                    required
                />
                <Button variant="contained" type="submit">Submit</Button>
            </Box>
            {error && <Alert severity="error" sx={{mt: 3}}>{error}</Alert>}
        </Box>
    );
};

export default SigninForm;