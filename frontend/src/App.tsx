import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import {PublicRoute} from "./routes/PublicRoute";
import {PrivateRoute} from "./routes/PrivateRoute";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todo from "./pages/Todo";

const theme = createTheme({
    palette: {
        primary: {main: "#1976d2"},
        secondary: {main: "#757575"},
        mode: "light",
    },
});

const App = () => {
    return (
        <RecoilRoot>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Routes>
                        <Route element={<PublicRoute/>}>
                            <Route path="/signup" element={<Signup/>}/>
                            <Route path="/signin" element={<Signin/>}/>
                        </Route>
                        <Route element={<PrivateRoute/>}>
                            <Route path="/" element={<Todo/>}/>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </RecoilRoot>
    );
};

export default App;