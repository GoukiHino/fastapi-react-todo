import {Outlet, Navigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {authState} from "../recoil/authState";

export const PublicRoute = () => {
    const user = useRecoilValue(authState);
    return user ? <Navigate to="/" replace/> : <Outlet/>;
};