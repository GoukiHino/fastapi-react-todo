import {Outlet, Navigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {authState} from "../recoil/authState";

export const PrivateRoute = () => {
    const user = useRecoilValue(authState);
    return user ? <Outlet/> : <Navigate to="/signin" replace/>;
};