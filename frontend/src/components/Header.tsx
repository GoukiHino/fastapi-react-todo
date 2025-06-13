import {Link, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {AppBar, Button, Toolbar, Typography} from "@mui/material";
import {authState} from "../recoil/authState";
import {signout} from "../api/auth";

const Header = () => {
    const [user, setUser] = useRecoilState(authState);
    const navigate = useNavigate();

    const handleSignout = async () => {
        try {
            await signout();
        } catch (err: any) {
            console.log(err?.response?.data.detail);
        } finally {
            setUser(null);
            navigate("/signin");
        }
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h5" sx={{flexGrow: 1}}>Todo App</Typography>
                {user ? (
                    <>
                        <Typography sx={{mr: 3}}>{user.username}</Typography>
                        <Button variant="outlined" color="inherit" onClick={handleSignout}>Signout</Button>
                    </>
                ) : (
                    <>
                        <Button component={Link} to="/signup" color="inherit" sx={{mr: 3}}>Signup</Button>
                        <Button component={Link} to="/signin" color="inherit">Signin</Button>
                    </>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;